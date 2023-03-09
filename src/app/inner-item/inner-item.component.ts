import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-item',
  templateUrl: './inner-item.component.html',
  styleUrls: ['./inner-item.component.css']
})
export class InnerItemComponent implements OnInit {

  constructor() { }
  @Input('completed') complete : any
  @Input('todos') todos : any
  @Output() valueIndex = new EventEmitter<any>();
  controlsData : any = []
  selectedElement:any
  color:any
  bgcolor:any
  padding:any
  width:any
  border_radius:any
  inputTypes = [
    'text',
    'date',
    'file',
    'number'
  ]
  inputtype:any
  ngOnInit() {
    console.log(this.complete)
  }

  resetStyling(){
    this.color = null
    this.bgcolor = null
    this.padding = 0
  }

  lastDropdrop(event:any){
event.stopPropagation()
  event.stopImmediatePropagation()
  console.log(this.complete)
    // console.log(JSON.parse(event.dataTransfer.getData('assciatedData')))
    this.complete.values.push(JSON.parse(event.dataTransfer.getData('assciatedData')))
    // console.log(this.complete)
  }

  allowDrop(ev:any){
    ev.stopPropagation();
    ev.preventDefault();
  }

  selectedValueIndex : any
  getValueIndex(event:any){
    console.log("Event index : ", event)
    this.selectedValueIndex = event
  }

  onSelection(){
    this.color = ''
    this.bgcolor = ''
    console.log("Onselection in inner-item : ", this.selectedValueIndex)
    this.valueIndex.emit(this.selectedValueIndex)
    // this.resetStyling()
    // this.selectedElement = JSON.parse(JSON.stringify(event))
    // this.selectedIndex = index
  }

  deleteElement(index:any){
      console.log(index)
      console.log(this.complete)
      this.complete.values = []
  }
}
