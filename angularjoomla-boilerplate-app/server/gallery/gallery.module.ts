import { Module, HttpModule } from "@nestjs/common";
import { GalleryController } from "./gallery.controller";
import { GalleryService } from "./gallery.service";

@Module({
    imports: [HttpModule],
    controllers: [GalleryController],
    providers: [GalleryService]
})
export class GalleryModule {}