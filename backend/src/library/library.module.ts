import { Module } from "@nestjs/common";
import { BookIssueController } from "./book-issue.controller";
import { BookIssueService } from "./book-issue.service";
import { BookController } from "./book.controller";
import { BookService } from "./book.service";

@Module({
  controllers: [BookController, BookIssueController],
  providers: [BookService, BookIssueService]
})
export class LibraryModule {}
