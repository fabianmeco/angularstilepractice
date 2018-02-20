import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-side',
  templateUrl: './profile-side.component.html',
  styleUrls: ['./profile-side.component.css']
})
export class ProfileSideComponent implements OnInit {

profile: any = "../../assets/profile.jpg";
cover : any = "../../assets/puntoskas.jpeg";
  constructor() { }

  ngOnInit() {
  }

}
