import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
/*@Output() toggle: string='recipes';*/
  @Output() featureSelected= new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
onToggle(data: string){
  this.featureSelected.emit(data);

  console.log(data);
}
}
