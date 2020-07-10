import {Component, OnInit} from '@angular/core';
import {ManagerForm} from "../dto/ManagerForm";

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent implements OnInit {

  addManagerForm = new ManagerForm("", "", "", "", "", "", "", "", "");

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.addManagerForm);
  }
}
