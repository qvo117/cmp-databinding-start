import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit
{
  @Input('srvElement') element: {
    type: string;
    name: string;
    content: string;
  };

  @Input() name: string;

  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true })
  paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOninit called');
    console.log('child', this.header.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('Do Check called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterCheck called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentCheck called');
  }

  ngAfterViewInit(): void {
    console.log('child', this.header.nativeElement.textContent);
  }
}
