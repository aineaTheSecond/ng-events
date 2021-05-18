import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'selector-name',
  template: `
    <h1>Edit Your Profile</h1>
    <hr />
    <div class="col-md-6">
      <h3>[Edit profile form]</h3>
      <br /><br />
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="submit" class="btn btn-default">Cancel</button>
    </div>
  `,
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
