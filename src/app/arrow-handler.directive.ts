import { Directive, Input, Output, EventEmitter, HostListener, ElementRef, Optional, Host, SkipSelf, Renderer2 } from '@angular/core';
import { KeyBoardService } from './keyboard.service';


@Directive({
  selector: '[arrow-el]',
})
export class ArrowElDirective {
  element:HTMLElement;
  constructor(private keyboardService: KeyBoardService, private el: ElementRef, private render: Renderer2) {
    this.render.setAttribute(this.el.nativeElement, "tabindex", "0")
    this.element=this.el.nativeElement;
  }
}