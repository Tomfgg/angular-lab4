import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {
  takeit(i:any){
    console.log(i);
  }
}
