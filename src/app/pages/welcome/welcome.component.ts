import { Component, OnInit } from '@angular/core';
import { kingComponent } from '../../components/king/king.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [kingComponent]
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
