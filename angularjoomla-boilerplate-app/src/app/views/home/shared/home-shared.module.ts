import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
// import { NgxImageGalleryModule } from "ngx-image-gallery";
import { SharedModule } from "../../../widgets/shared/shared.module";
import { FooterBarComponent } from "./footer-bar/footer-bar.component";
import { HeaderBarComponent } from "./header-bar/header-bar.component";
import { SubfooterBarComponent } from "./subfooter-bar/subfooter-bar.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { GalleryModulesModule } from "../../gallery/modules/gallery-modules.module";
import { VideosModulesModule } from "../../videos/modules/videos-modules.module";
import { MatMenuModule, MatButtonModule, MatToolbarModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
    declarations: [
        FooterBarComponent,
        HeaderBarComponent,
        SubfooterBarComponent,
        TopBarComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        GalleryModulesModule,
        VideosModulesModule,
        RouterModule,
        MatMenuModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule
        // NgxImageGalleryModule
    ],
    exports: [
        FooterBarComponent,
        HeaderBarComponent,
        SubfooterBarComponent,
        TopBarComponent
    ]
})
export class HomeSharedModule {}