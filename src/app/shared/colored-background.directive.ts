import {Directive, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appColoredBackground]'
})
export class ColoredBackgroundDirective implements OnInit{


  @Input('appColoredBackground') selectedColor;
  @Input() defaultColor: string;
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor() {
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
