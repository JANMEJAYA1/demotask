
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild, OnInit, OnDestroy, ViewChildren, QueryList } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HostListener } from '@angular/core';

import { KeyBoardService } from 'src/app/keyboard.service';
import { ArrowElDirective } from 'src/app/arrow-handler.directive';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']

})
export class DashboardComponent implements OnInit {


  columns: number = 2;
  @ViewChildren(ArrowElDirective) inputs!: QueryList<ArrowElDirective>;

  constructor(private keyboardService: KeyBoardService) {
    this.keyboardService.init();
    this.keyboardService.keyBoard.subscribe((res) => {
      this.move(res);
    });
  }

  length!: 0;
  domEles!: any;
  activeEle: any;

  ngOnInit() {

  }

  move(object: any) {
    const inputToArray = this.inputs.toArray();
    let index = inputToArray.findIndex((x) => x.element == object.element);
    if (index < 0) index = 0;
    else {
      switch (object.action) {
        case 'UP':
          index -= this.columns;
          break;
        case 'DOWN':
          index += this.columns;
          break;
        case 'LEFT':
          index--;
          break;
        case 'RIGTH':
          index++;
          break;
        case 'RIGTH':
          index++;
          break;
      }
    }

    if (index >= 0 && index < this.inputs.length) {
      inputToArray[index].element.focus();
    }
    if (object.action === 'ENTER') {
     
    }
  }

  ngOnDestroy() {
    this.keyboardService.destroy();
  }


}
