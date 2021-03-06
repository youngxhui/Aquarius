import { NgModule } from '@angular/core';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { SharedModule } from '../shared/shared.module';
import { MultipleChoiceComponent } from './page/multiple-choice/multiple-choice.component';
import { GapFillingComponent } from './page/gap-filling/gap-filling.component';
import { CodeEditorComponent } from './page/code-editor/code-editor.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { PageService } from './page.service';
import { SelectSheetComponent } from './page/multiple-choice/select-sheet/select-sheet.component';
import { MatBottomSheetModule, MatDialogModule } from '@angular/material';
import { MultipleChoiceService } from './page/multiple-choice/multiple-choice.service';
import { BlankSheetComponent } from './page/gap-filling/blank-sheet/blank-sheet.component';
import { QuestionAnswerComponent } from './page/question-answer/question-answer.component';
import { GapFillingService } from './page/gap-filling/gap-filling.service';
import { QuestionSheetComponent } from './page/question-answer/question-sheet/question-sheet.component';
import { QuestionAnswerService } from './page/question-answer/question-answer.service';
import { SubmitDialogComponent } from './submit-dialog/submit-dialog.component';

@NgModule({
  declarations: [
    PageComponent,
    MultipleChoiceComponent,
    GapFillingComponent,
    CodeEditorComponent,
    SelectSheetComponent,
    BlankSheetComponent,
    QuestionAnswerComponent,
    QuestionSheetComponent,
    SubmitDialogComponent,
  ],
  imports: [
    SharedModule,
    MatBottomSheetModule,
    PageRoutingModule,
    MatDialogModule,
    MonacoEditorModule.forRoot(),
  ],
  providers: [
    PageService,
    MultipleChoiceService,
    GapFillingService,
    QuestionAnswerService,
  ],
  entryComponents: [
    SelectSheetComponent,
    BlankSheetComponent,
    QuestionSheetComponent,
    SubmitDialogComponent,
  ],
})
export class PageModule {}
