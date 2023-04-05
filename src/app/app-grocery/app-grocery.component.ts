import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './app-grocery.components.html',
  styleUrls: [
    '../../assets/css/bootstrap/bootstrap.min.css'
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
