import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-side',
  templateUrl: './profile-side.component.html',
  styleUrls: ['./profile-side.component.scss']
})
export class ProfileSideComponent implements OnInit {

profile: any = "../../assets/profile.jpg";
cover : any = "../../assets/fab.jpg";
  constructor() { }

  ngOnInit() {
  }

}
