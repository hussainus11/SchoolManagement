import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateExpenseCategoryDto } from "./dto/create-expense-category.dto";

@Injectable()
export class ExpenseCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string) {
    return this.prisma.expenseCategory.findMany({ where: { schoolId }, orderBy: { name: "asc" } });
  }

  create(schoolId: string, dto: CreateExpenseCategoryDto) {
    return this.prisma.expenseCategory.create({ data: { ...dto, schoolId } });
  }

  async remove(schoolId: string, id: string) {
    const category = await this.prisma.expenseCategory.findFirst({ where: { id, schoolId } });
    if (!category) throw new NotFoundException("Expense category not found");

    const usage = await this.prisma.expense.count({ where: { categoryId: id } });
    if (usage > 0) throw new ConflictException("Cannot delete a category that has expenses recorded");

    await this.prisma.expenseCategory.delete({ where: { id } });
  }
}
