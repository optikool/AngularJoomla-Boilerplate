import { Component, OnInit, Input } from '@angular/core';
// import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'jma-pretty-photo',
  templateUrl: './pretty-photo.component.html',
  styleUrls: ['./pretty-photo.component.scss']
})
export class PrettyPhotoComponent implements OnInit {
  @Input() public data;
  // @Input() public modal: NgxSmartModalService;
  @Input() public identifier: string;
  galleries: any;

  constructor() {
    this.galleries = [];
   }

  ngOnInit() {
    // this.galleries = this.modal;
  }

}
