import { Component } from '@angular/core';
import { DataService } from './_services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dnd-notes';
  notes$ = this.dataService.notes$;

  constructor(private dataService: DataService) {}
}
