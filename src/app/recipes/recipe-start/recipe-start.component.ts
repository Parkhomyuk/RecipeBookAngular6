import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css']
})
export class RecipeStartComponent implements OnInit {

  constructor(private router: Router, private rout: ActivatedRoute) { }

  ngOnInit() {
  }

}
