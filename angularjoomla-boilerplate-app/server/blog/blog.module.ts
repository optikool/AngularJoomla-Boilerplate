import { Module, HttpModule } from "@nestjs/common";
import { BlogController } from "./blog.controller";
import { BlogService } from "./blog.service";

@Module({
    imports: [HttpModule],
    controllers: [BlogController],
    providers: [BlogService]
})
export class BlogModule {}