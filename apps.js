import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <h1>{{ greeting }}</h1>
    
    <form (submit)="submitForm()">
      <label for="name">Enter your name:</label>
      <input type="text" id="name" [(ngModel)]="name" required>
      <button type="submit">Submit</button>
    </form>
    
    <p *ngIf="submitted">Hello, {{ name }}! Thank you for submitting the form.</p>
  `
})
export class ExampleComponent {
  greeting: string = 'Welcome to the Angular Example!';
  name: string = '';
  submitted: boolean = false;

  submitForm() {
    if (this.name) {
      this.submitted = true;
    }
  }
}
