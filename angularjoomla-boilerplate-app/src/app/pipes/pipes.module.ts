import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DateFormatterPipe } from "./date-formatter.pipe";
import { EllipsisFormatterPipe } from "./ellipsis-formatter.pipe";
import { OuterElementPipe } from "./outer-element.pipe";
import { SafeHtmlPipe } from "./safe-html.pipe";
import { TagFormatterPipe } from "./tag-formatter.pipe";
import { WrapThemeColorPipe } from "./wrap-theme-color.pipe";
import { SharedModule } from "../widgets/shared/shared.module";

@NgModule({
    declarations: [
        DateFormatterPipe,
        EllipsisFormatterPipe,
        OuterElementPipe,
        SafeHtmlPipe,
        TagFormatterPipe,
        WrapThemeColorPipe
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        DateFormatterPipe,
        EllipsisFormatterPipe,
        OuterElementPipe,
        SafeHtmlPipe,
        TagFormatterPipe,
        WrapThemeColorPipe
    ]
})
export class PipesModule {}