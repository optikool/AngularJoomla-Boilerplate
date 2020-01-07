import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { externalLinks } from '../../../../constants/rest.constants';
import { GalleryService } from '../../../../services/gallery.service';

@Component({
  selector: 'jma-gallery-collections',
  templateUrl: './gallery-collections.component.html',
  styleUrls: ['./gallery-collections.component.scss']
})
export class GalleryCollectionsComponent implements OnInit {
  @Input() public data: any;

  galleries: any;
  mainLink: string;
  mainLinkThumb: string;
  limit: number;
  isLoading: boolean;
  hasCollections: boolean;
  
  constructor(private galleryService: GalleryService) {
    this.mainLink = '';
    this.mainLinkThumb = '';
    this.galleries = [];
    this.limit = 18;
    this.isLoading = false;
    this.hasCollections = true;
  }

  ngOnInit() {
    this.mainLink = externalLinks.xGalleryLinks.image;
    this.mainLinkThumb = externalLinks.xGalleryLinks.thumb;
    this.galleries = this.data.splice(0, this.limit); // this.galleryService.formatUrls(this.data, this.mainLink, this.mainLinkThumb);
  }

  loadMoreCollections() {
    this.scrollHandler(null);
  }

  hasMoreCollections() {
    return this.hasCollections;
  }

  scrollHandler(e) {
    let spliced = this.data.splice(0, this.limit);
    this.galleries = this.galleries.concat(spliced);

    if (this.data.length === 0) {
      this.hasCollections = false;
    }
  }
}
