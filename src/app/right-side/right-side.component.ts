import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.scss']
})
export class RightSideComponent implements OnInit {

  image1: any = "../../assets/fab.jpg";
  image2: any = "../../assets/ed.jpg";
  image3: any = "../../assets/lava.jpg";
  constructor() { }

  ngOnInit() {
  }

}
