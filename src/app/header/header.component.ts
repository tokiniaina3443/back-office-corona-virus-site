import { Router } from '@angular/router';
import { LocalStorageService } from './../services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private storage :LocalStorageService, private route : Router) { }

  ngOnInit(): void {
  }

  LogOut()
  {
    this.storage.removeToken();
    this.route.navigateByUrl("");
  }

}
