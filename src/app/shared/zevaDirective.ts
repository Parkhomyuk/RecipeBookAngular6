
import {Directive, ViewChild, OnInit, AfterViewInit} from "@angular/core";
import {ElementRef} from "@angular/core";

@Directive({
  selector:'[zeva]'
})
export class ZevaDirective implements OnInit{

  constructor(private elRef: ElementRef){}
  ngOnInit() {
    //noinspection TypeScriptUnresolvedVariable
    this.elRef.nativeElement.style.color='red';

  }
  ngAfterViewInit():void {
    //noinspection TypeScriptUnresolvedVariable

  }

}
