import { DisciplineSeverity } from "../../../generated/prisma/client";
export declare class CreateDisciplineIncidentDto {
    studentId: string;
    incidentDate?: string;
    category: string;
    severity?: DisciplineSeverity;
    description: string;
    actionTaken?: string;
}
