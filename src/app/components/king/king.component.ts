import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-king',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './king.component.html',
  styleUrl: './king.component.css',
})
export class kingComponent implements OnInit {
  public data: any[] = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.httpClient
      .get('https://stephen-king-api.onrender.com/api/books')
      .subscribe((data: any) => {
        console.log(data);
        this.data = data;
      });
  }
}
