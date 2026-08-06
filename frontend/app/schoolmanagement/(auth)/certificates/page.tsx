"use client";

import { useMemo, useRef, useState } from "react";
import { format } from "date-fns";

import { CertificatePreview } from "@/components/certificate/certificate-preview";
import { CERTIFICATE_TEMPLATES, type CertificateTemplate } from "@/components/certificate/certificate-templates";
import { DatePicker } from "@/components/date-picker";
import { IdCardActions } from "@/components/id-card/id-card-actions";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSchool } from "@/hooks/use-school-settings";
import { useStudents } from "@/hooks/use-students";
import { cn } from "@/lib/utils";

export default function CertificatesPage() {
  const { data: school } = useSchool();
  const { data: students } = useStudents();
  const [studentId, setStudentId] = useState("");
  const [templateId, setTemplateId] = useState(CERTIFICATE_TEMPLATES[0].id);
  const template = useMemo(
    () => CERTIFICATE_TEMPLATES.find((t) => t.id === templateId) ?? CERTIFICATE_TEMPLATES[0],
    [templateId]
  );

  const [title, setTitle] = useState(template.defaultTitle);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [leftName, setLeftName] = useState("");
  const [leftTitle, setLeftTitle] = useState("Class Teacher");
  const [rightName, setRightName] = useState("");
  const [rightTitle, setRightTitle] = useState("Principal");

  const stageRef = useRef<HTMLDivElement>(null);
  const student = students?.find((s) => s.id === studentId);

  function handleSelectTemplate(next: CertificateTemplate) {
    setTemplateId(next.id);
    // Only swap the title if it hasn't been customized away from the previous template's default.
    setTitle((current) => (current === template.defaultTitle ? next.defaultTitle : current));
  }

  const previewData = {
    schoolName: school?.name ?? "Your School",
    schoolLogoUrl: school?.logoUrl,
    studentName: student ? `${student.firstName} ${student.lastName}` : "",
    title,
    description,
    date: date ? format(date, "PP") : "",
    signatoryLeftName: leftName,
    signatoryLeftTitle: leftTitle,
    signatoryRightName: rightName,
    signatoryRightTitle: rightTitle
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Certificates</h1>
        <p className="text-muted-foreground">
          Recognize a student&apos;s achievement — pick a template, fill in the details, and download.
        </p>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium">Student</p>
        <Select value={studentId} onValueChange={setStudentId}>
          <SelectTrigger className="w-full sm:w-80">
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

      <div>
        <p className="mb-2 text-sm font-medium">Template</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {CERTIFICATE_TEMPLATES.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => handleSelectTemplate(t)}
              className={cn(
                "group flex flex-col gap-1.5 rounded-lg border-2 p-1.5 text-left transition-colors",
                t.id === templateId ? "border-primary" : "border-transparent hover:border-muted-foreground/30"
              )}>
              <CertificatePreview
                template={t}
                data={{
                  schoolName: school?.name ?? "Your School",
                  schoolLogoUrl: undefined,
                  studentName: "Student Name",
                  title: t.defaultTitle,
                  description: "",
                  date: "",
                  signatoryLeftName: "",
                  signatoryLeftTitle: "",
                  signatoryRightName: "",
                  signatoryRightTitle: ""
                }}
                className="pointer-events-none"
              />
              <span className="px-1 text-xs font-medium">{t.name}</span>
            </button>
          ))}
        </div>
      </div>

      {student && (
        <>
          <Card>
            <CardContent className="grid gap-4 pt-6 sm:grid-cols-2">
              <div className="space-y-1.5 sm:col-span-2">
                <Label>Certificate title</Label>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder={template.defaultTitle} />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <Label>Reason / description (optional)</Label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="For outstanding performance in Mathematics and securing 1st position in Class 10."
                  rows={2}
                />
              </div>
              <div className="space-y-1.5">
                <Label>Date</Label>
                <DatePicker value={date} onChange={setDate} />
              </div>
              <div />
              <div className="space-y-1.5">
                <Label>Left signatory name</Label>
                <Input value={leftName} onChange={(e) => setLeftName(e.target.value)} placeholder="e.g. Jane Doe" />
              </div>
              <div className="space-y-1.5">
                <Label>Left signatory title</Label>
                <Input value={leftTitle} onChange={(e) => setLeftTitle(e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label>Right signatory name</Label>
                <Input value={rightName} onChange={(e) => setRightName(e.target.value)} placeholder="e.g. John Smith" />
              </div>
              <div className="space-y-1.5">
                <Label>Right signatory title</Label>
                <Input value={rightTitle} onChange={(e) => setRightTitle(e.target.value)} />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <IdCardActions targetRef={stageRef} fileName={`${student.firstName}-${student.lastName}-certificate`} />
          </div>
          <div ref={stageRef} className="mx-auto max-w-3xl bg-transparent p-1">
            <CertificatePreview template={template} data={previewData} />
          </div>
        </>
      )}
    </div>
  );
}
