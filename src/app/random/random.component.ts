import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrl: './random.component.css'
})
export class RandomComponent implements OnInit, OnChanges, DoCheck, AfterViewChecked,
 AfterViewInit, AfterContentInit, AfterContentChecked, OnDestroy{

  @Input() user:string;
  @Output() generateUserId: EventEmitter<string> = new EventEmitter<string>();
  constructor(){
   this.user = '';
   console.log('Child constructor() called');
  }
  
  random(){
    var t = new Date().getTime();
    this.generateUserId.emit(this.user + t.toString());
    console.log('random() called');
  }
  
  ngOnInit(){
    console.log('Child ngOnInit() called');
  }
  
  ngOnChanges(){
    console.log('Child ngOnChanges() called');
  }
  
  ngDoCheck(){
    console.log('Child ngDoCheck() called');
  }
  
  ngAfterViewChecked(){
    console.log('Child ngAfterViewChecked() called');
  } 
  
  ngAfterViewInit(){
    console.log('Child ngAfterViewInit() called');
  }
  
  ngAfterContentInit(){
    console.log('Child ngAfterContentInit() called');
  }
  
  ngAfterContentChecked(){
    console.log('Child ngAfterContentChecked() called');
  }
  
  ngOnDestroy(){
    console.log('Child ngOnDestroy() called');
  }
}
