import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  data = [1,2,3,4,5]
  data2 : any = []
  constructor() { }

  ngOnInit() {
  }

  dragStart(event:any, data:any){
    this.innerDrag = true
    event.dataTransfer.setData('assciatedData', JSON.stringify({name:'gaurav', data : data}));
    console.log(JSON.parse(event.dataTransfer.getData('assciatedData')));
    event.stopPropagation();
    
  }

  allowDrop(ev:any){
    ev.stopPropagation();
    ev.preventDefault();
  }

  innerDrag = true
  drag(event:any, index:any){
    event.stopPropagation();
    // event.preventDefault();
    event.dataTransfer.setData('assciatedData', JSON.stringify({name:'gaurav', index : index}));
    this.innerDrag = false
    console.log(event)
  }

  drop(event:any){

    // console.log(event.dataTransfer.getData('assciatedData'));
    if(this.innerDrag)
    this.data2.push(JSON.parse(event.dataTransfer.getData('assciatedData')).data)
    // console.log(this.data2)
    
  }

  changeStyle(){
    // let newStyle:any
    // let copyObj =JSON.parse(JSON.stringify(style))
    // copyObj['border-radius'] = copyObj['border-radius'] + 'px'
    // copyObj['padding-left'] = copyObj['padding-left'] + 'px'
    // copyObj['padding-right'] = copyObj['padding-right'] + 'px'
    // copyObj['padding-top'] = copyObj['padding-top'] + 'px'
    // copyObj['padding-bottom'] = copyObj['padding-bottom'] + 'px'
    // newStyle = copyObj
    // return newStyle
  }
}
