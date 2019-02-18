import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  routerToExam() {
    this.router.navigateByUrl('/');
  }

  routerToScore() {
    this.router.navigateByUrl('/score');
  }

  routerToUser() {
    this.router.navigateByUrl('/profile');
  }
}
