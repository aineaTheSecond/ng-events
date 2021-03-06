import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: ` <h1>New Event</h1>
    <hr />
    <div class="col-md-6">
      <h3>Create Event Form</h3>
      <br />
      <br />
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="submit" class="btn btn-default" (click)="cancel()">
        Cancel
      </button>
    </div>`,
})
export class CreateEventComponent implements OnInit {
  isDirty = true;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  cancel(): void {
    this.router.navigate(['/events']);
  }
}
