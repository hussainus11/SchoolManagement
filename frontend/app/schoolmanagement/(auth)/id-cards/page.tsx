"use client";

import { useRef, useState } from "react";
import { HardHatIcon, UserRoundIcon, UsersIcon } from "lucide-react";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IdCardActions } from "@/components/id-card/id-card-actions";
import { type IdCardField, IdCardBack, IdCardFront } from "@/components/id-card/id-card-preview";
import { useAcademicYears, useSchool } from "@/hooks/use-school-settings";
import { useStaffList, type Staff } from "@/hooks/use-staff";
import { useStudents, type Student } from "@/hooks/use-students";
import { useTeachers, type Teacher } from "@/hooks/use-teachers";

function useCurrentAcademicYearLabel() {
  const { data: years } = useAcademicYears();
  const current = years?.find((y) => y.isCurrent) ?? years?.[0];
  return current?.name;
}

function IdCardStage({
  role,
  photoUrl,
  name,
  idLabel,
  idNumber,
  frontFields,
  backFields,
  fileName
}: {
  role: string;
  photoUrl?: string | null;
  name: string;
  idLabel: string;
  idNumber: string;
  frontFields: IdCardField[];
  backFields: IdCardField[];
  fileName: string;
}) {
  const { data: school } = useSchool();
  const validity = useCurrentAcademicYearLabel();
  const stageRef = useRef<HTMLDivElement>(null);

  if (!school) return null;

  return (
    <div className="space-y-4">
      <div className="flex justify-end print:hidden">
        <IdCardActions targetRef={stageRef} fileName={fileName} />
      </div>
      <div ref={stageRef} className="flex flex-wrap gap-6 bg-transparent p-1">
        <IdCardFront
          schoolName={school.name}
          schoolLogoUrl={school.logoUrl}
          backgroundColor={school.idCardBackgroundColor}
          foregroundColor={school.idCardForegroundColor}
          backgroundImageUrl={school.idCardBackgroundImageUrl}
          photoUrl={photoUrl}
          role={role}
          name={name}
          idLabel={idLabel}
          idNumber={idNumber}
          fields={frontFields}
          validity={validity}
          qrValue={`${school.name} | ${role} | ${idLabel}: ${idNumber} | ${name}`}
        />
        <IdCardBack
          schoolName={school.name}
          schoolAddress={school.address}
          schoolPhone={school.phone}
          backgroundColor={school.idCardBackgroundColor}
          foregroundColor={school.idCardForegroundColor}
          fields={backFields}
        />
      </div>
    </div>
  );
}

function studentFields(student: Student): { front: IdCardField[]; back: IdCardField[] } {
  const front: IdCardField[] = [
    {
      label: "Class",
      value: student.section ? `${student.section.class.name} - ${student.section.name}` : "Unassigned"
    }
  ];
  if (student.bloodGroup) front.push({ label: "Blood Group", value: student.bloodGroup });

  const back: IdCardField[] = [];
  if (student.dateOfBirth) back.push({ label: "Date of Birth", value: new Date(student.dateOfBirth).toLocaleDateString() });
  if (student.gender) back.push({ label: "Gender", value: student.gender });
  if (student.bloodGroup) back.push({ label: "Blood Group", value: student.bloodGroup });
  if (student.address) back.push({ label: "Address", value: student.address });
  const primaryGuardian = student.guardians?.find((g) => g.isPrimary) ?? student.guardians?.[0];
  if (primaryGuardian) {
    back.push({
      label: "Guardian",
      value: `${primaryGuardian.guardian.firstName} ${primaryGuardian.guardian.lastName}`
    });
    const guardianContact = primaryGuardian.guardian.phone ?? primaryGuardian.guardian.email;
    if (guardianContact) back.push({ label: "Guardian Contact", value: guardianContact });
  }

  return { front, back };
}

function StudentIdTab() {
  const [studentId, setStudentId] = useState("");
  const { data: students } = useStudents();
  const student = students?.find((s) => s.id === studentId);
  const { front, back } = student ? studentFields(student) : { front: [], back: [] };

  return (
    <div className="space-y-4">
      <div className="print:hidden">
        <p className="mb-2 text-sm font-medium">Student</p>
        <Select value={studentId} onValueChange={setStudentId}>
          <SelectTrigger className="w-72">
            <SelectValue placeholder="Select a student" />
          </SelectTrigger>
          <SelectContent>
            {(students ?? []).map((s) => (
              <SelectItem key={s.id} value={s.id}>
                {s.firstName} {s.lastName} ({s.admissionNumber})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {student && (
        <IdCardStage
          role="Student"
          photoUrl={student.photoUrl}
          name={`${student.firstName} ${student.lastName}`}
          idLabel="Admission No."
          idNumber={student.admissionNumber}
          frontFields={front}
          backFields={back}
          fileName={`${student.firstName}-${student.lastName}-id-card`}
        />
      )}
    </div>
  );
}

function teacherStaffFields(person: Teacher | Staff, extra?: IdCardField): { front: IdCardField[]; back: IdCardField[] } {
  const front: IdCardField[] = [];
  if (extra) front.push(extra);
  if (person.user.phone) front.push({ label: "Phone", value: person.user.phone });

  const back: IdCardField[] = [];
  if (person.dateOfBirth) back.push({ label: "Date of Birth", value: new Date(person.dateOfBirth).toLocaleDateString() });
  if (person.gender) back.push({ label: "Gender", value: person.gender });
  back.push({ label: "Joining Date", value: new Date(person.joiningDate).toLocaleDateString() });
  if (person.user.phone) back.push({ label: "Phone", value: person.user.phone });
  if (person.emergencyPhone) back.push({ label: "Emergency Contact", value: person.emergencyPhone });
  if (person.address) back.push({ label: "Address", value: person.address });

  return { front, back };
}

function TeacherIdTab() {
  const [teacherId, setTeacherId] = useState("");
  const { data: teachers } = useTeachers();
  const teacher = teachers?.find((t) => t.id === teacherId);
  const { front, back } = teacher
    ? teacherStaffFields(teacher, { label: "Email", value: teacher.user.email })
    : { front: [], back: [] };

  return (
    <div className="space-y-4">
      <div className="print:hidden">
        <p className="mb-2 text-sm font-medium">Teacher</p>
        <Select value={teacherId} onValueChange={setTeacherId}>
          <SelectTrigger className="w-72">
            <SelectValue placeholder="Select a teacher" />
          </SelectTrigger>
          <SelectContent>
            {(teachers ?? []).map((t) => (
              <SelectItem key={t.id} value={t.id}>
                {t.user.firstName} {t.user.lastName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {teacher && (
        <IdCardStage
          role="Teacher"
          photoUrl={teacher.photoUrl}
          name={`${teacher.user.firstName} ${teacher.user.lastName}`}
          idLabel="Employee Code"
          idNumber={teacher.employeeCode}
          frontFields={front}
          backFields={back}
          fileName={`${teacher.user.firstName}-${teacher.user.lastName}-id-card`}
        />
      )}
    </div>
  );
}

function StaffIdTab() {
  const [staffId, setStaffId] = useState("");
  const { data: staffList } = useStaffList();
  const staff = staffList?.find((s) => s.id === staffId);
  const { front, back } = staff
    ? teacherStaffFields(staff, { label: "Role", value: staff.designation })
    : { front: [], back: [] };

  return (
    <div className="space-y-4">
      <div className="print:hidden">
        <p className="mb-2 text-sm font-medium">Staff</p>
        <Select value={staffId} onValueChange={setStaffId}>
          <SelectTrigger className="w-72">
            <SelectValue placeholder="Select a staff member" />
          </SelectTrigger>
          <SelectContent>
            {(staffList ?? []).map((s) => (
              <SelectItem key={s.id} value={s.id}>
                {s.user.firstName} {s.user.lastName} ({s.designation})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {staff && (
        <IdCardStage
          role="Staff"
          photoUrl={staff.photoUrl}
          name={`${staff.user.firstName} ${staff.user.lastName}`}
          idLabel="Employee Code"
          idNumber={staff.employeeCode}
          frontFields={front}
          backFields={back}
          fileName={`${staff.user.firstName}-${staff.user.lastName}-id-card`}
        />
      )}
    </div>
  );
}

export default function IdCardsPage() {
  return (
    <div className="space-y-4">
      <div className="print:hidden">
        <h1 className="text-2xl font-bold tracking-tight">ID Cards</h1>
        <p className="text-muted-foreground">
          Generate standard CR80-size ID cards for students, teachers, and staff, with a QR code and a
          printable back side.
        </p>
      </div>
      <Tabs defaultValue="students">
        <TabsList className="print:hidden">
          <TabsTrigger value="students">
            <UsersIcon />
            Students
          </TabsTrigger>
          <TabsTrigger value="teachers">
            <UserRoundIcon />
            Teachers
          </TabsTrigger>
          <TabsTrigger value="staff">
            <HardHatIcon />
            Staff
          </TabsTrigger>
        </TabsList>
        <TabsContent value="students">
          <StudentIdTab />
        </TabsContent>
        <TabsContent value="teachers">
          <TeacherIdTab />
        </TabsContent>
        <TabsContent value="staff">
          <StaffIdTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
