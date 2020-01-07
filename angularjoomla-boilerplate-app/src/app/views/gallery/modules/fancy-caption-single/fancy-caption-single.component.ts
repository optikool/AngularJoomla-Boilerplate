import { Component, OnInit, Input } from '@angular/core';
import { externalLinks } from '../../../../constants/rest.constants';
import { GalleryService } from '../../../../services/gallery.service';

@Component({
  selector: 'jma-fancy-caption-single',
  templateUrl: './fancy-caption-single.component.html',
  styleUrls: ['./fancy-caption-single.component.scss']
})
export class FancyCaptionSingleComponent implements OnInit {
  @Input() public data: any;
  @Input() public gridcolumns: number;
  galleries: any;
  grid: number;
  mainLink: string;
  mainLinkThumb: string;
  
  constructor(private galleryService: GalleryService) {
    this.mainLink = '';
    this.mainLinkThumb = '';
    this.galleries = [];
    this.grid = 4;
   }

  ngOnInit() {
    this.mainLink = externalLinks.xGalleryLinks.image;
    this.mainLinkThumb = externalLinks.xGalleryLinks.thumb;
    this.galleries = this.data; // this.galleryService.formatUrls(this.data, this.mainLink, this.mainLinkThumb);
    this.grid = this.gridcolumns;
  }
}
