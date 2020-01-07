import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { externalLinks } from '../../../../constants/rest.constants';
import { GalleryService } from '../../../../services/gallery.service';
// import { GALLERY_IMAGE, NgxImageGalleryComponent, GALLERY_CONF } from 'ngx-image-gallery';
import { HttpService } from '../../../../services/http.service';

@Component({
  selector: 'jma-gallery-collection',
  templateUrl: './gallery-collection.component.html',
  styleUrls: ['./gallery-collection.component.scss']
})
export class GalleryCollectionComponent implements OnInit {
  @Input() public data: any;
  @Input() public cClass: string;
  galleries: any;
  info: any;
  limit: number;
  mainLink: string;
  mainLinkThumb: string;
  // images: GALLERY_IMAGE[];
  images: [];
  // <ngx-image-gallery [images]="images"></ngx-image-gallery>
  // get reference to gallery component
  // @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;

  // gallery configuration
  // conf: GALLERY_CONF = {
  //   imageOffset: '0px',
  //   showDeleteControl: false,
  //   showImageTitle: false,
  // };

  constructor(private galleryService: GalleryService, private http: HttpService) {
    this.mainLink = '';
    this.mainLinkThumb = '';
    this.galleries = [];
    this.info = '';
    this.limit = 11;
   }

  ngOnInit() {
    this.mainLink = externalLinks.xGalleryLinks.image;
    this.mainLinkThumb = externalLinks.xGalleryLinks.thumb;
    this.galleries = this.galleryService.formatLightBox(this.data.images.slice(0, this.limit), this.mainLink, this.mainLinkThumb, this.data.info.folder);
    this.images = []; //this.galleryService.formatNgxLightBox(this.data.images.slice(0, this.limit), this.mainLink, this.mainLinkThumb, this.data.info.folder);
    this.info = this.data.info;
  }

  setRandomGallery() {
    let that = this;
    let collection = this.galleryService.getGalleryRandomData(3) 
    .subscribe((data) => {
      // data.forEach(element => {
      //   let gallery = this.http.getGalleryCollection(element.id, element.catid, element.itemId)
      //   .subscribe((data) => {
      //     data.type = 'collection';
      //     data.grid = 'grid_4';
      //   });
      // });
    });
  }

  // LightBox Methods

  // open gallery
  openGallery(index: number = 0) {
    //this.ngxImageGallery.open(index);
  }
}
