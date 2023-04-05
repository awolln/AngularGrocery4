import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls: [
    '../../assets/css/bootstrap.mini.css'
  ]
})
export class AppGroceryComponent {
  task!: string;
  tasks = [];

  onClick(){
  	this.tasks.push({ name: this.task });
  	this.task = '';
  }

}
