import { Component, OnInit, Input } from '@angular/core';
import { externalLinks } from '../../../../constants/rest.constants';
import { GalleryService } from '../../../../services/gallery.service';

@Component({
  selector: 'jma-gallery-fce',
  templateUrl: './gallery-fce.component.html',
  styleUrls: ['./gallery-fce.component.scss']
})
export class GalleryFceComponent implements OnInit {
  @Input() public data: any;
  galleries: any;
  mainLink: string;
  mainLinkThumb: string;
  
  constructor(private galleryService: GalleryService) {
    this.mainLink = '';
    this.mainLinkThumb = '';
    this.galleries = [];
   }

  ngOnInit() {
    this.mainLink = externalLinks.xGalleryLinks.image;
    this.mainLinkThumb = externalLinks.xGalleryLinks.thumb;
    this.galleries = this.data; // this.galleryService.formatUrls(this.data, this.mainLink, this.mainLinkThumb);
  }
}
