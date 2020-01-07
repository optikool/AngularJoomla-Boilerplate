import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../../../services/http.service';
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'jma-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.scss']
})
export class FooterBarComponent implements OnInit {
  @Input() public data: any;
  galleryRandom: any;
  galleriesRandom: Array<any>;
  galleryRandomReady: boolean;
  footer_title: string = '';
  constructor(private http: HttpService) {
    this.galleryRandom = null;
    this.galleryRandomReady = false;
    this.galleriesRandom = [];
  }

  ngOnInit() {
    this.setRandomGallery();
  }

  setRandomGallery() {
    this.galleriesRandom = this.data;
    this.galleryRandomReady = true;
    // let that = this;
    // let collection = this.http.getGalleryRandomData(3) 
    // .subscribe((data) => {
    //   data.forEach(element => {
    //     let gallery = this.http.getGalleryCollection(element.id, element.catid, element.itemId)
    //     .subscribe((data) => {
    //       //this.galleryRandom = data;
    //       data.type = 'collection';
    //       data.grid = 'grid_4';
    //       that.galleriesRandom.push(data);
    //     });
    //   });
    //   this.galleryRandomReady = true;
    // });
  }
}
