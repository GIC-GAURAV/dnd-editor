import {Component, DoCheck, ElementRef, Renderer2, ViewChild} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PanelBarItemModel } from '@progress/kendo-angular-layout';
import { CommonService } from './Services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Drag & Drop in Angular 7';
  website = 'https://samorgill.com';
  controlsData : any = []
  selectedComponentIndex:any
  objIndex : any
  isStyleWindowShow = false
  @ViewChild('exportHTML') exportHTML! : ElementRef
  @ViewChild('previewContent') previewHTMLContent! : ElementRef
  elementType : string = ''
  public opened = false;
  fileSrc : any
  previewHTML : any
  todos = [
    {
      name: 'Section',
      controlType:'section',
      sectionType:1,
      display : false,
      styles:{
        // color:'red',
        // 'background-color':'tranparent'
      }
    },
    {
      name: 'Heading',
      controlType:'heading',
      display : true,
      styles:{
        'font-size':'32px',
        'font-weight' : 'bold',
        'color':'black',
        'background-color':'transparent',
        'padding': '0px',
        'font-family' : '',
        'text-align': 'left',
        'background-image': '',
        'margin' : '0px'

      }
    },
    {
      name: 'Paragraph',
      controlType:'paragraph',
      display : true,
      styles:{
        'font-size':'',
        'font-weight' : 'normal',
        'color':'black',
        'background-color':'transparent',
        'padding': '0px',
        'font-family' : '',
        'text-align': 'left',
        'background-image': '',
        'margin' : '0px',
      }
    },
    {
      name: 'Image',
      controlType:'image',
      display : true,
      src : '',
      styles:{
        'width':'100%',

      }
    }
  ];

  sectionList = [{
    controlType:'section',
    sectionType:1,
    sectionName:'First',
    innerItemCount:1,
    display : false,
    component : []
  },
  {
    controlType:'section',
    sectionType:2,
    sectionName:'Second',
    innerItemCount:2,
    display : false,
    component : []
  },
  {
    controlType:'section',
    sectionType:3,
    sectionName:'three',
    innerItemCount:3,
    display : false,
    component : []
  },
  {
    controlType:'section',
    sectionType:4,
    sectionName:'Four',
    innerItemCount:4,
    display : false,
    component : []
  },
  {
    controlType:'section',
    sectionType:5,
    sectionName:'Five',
    innerItemCount:5,
    display : false,
    component : []
  },
  {
    controlType:'section',
    sectionType:6,
    sectionName:'Six',
    innerItemCount:2,
    display : false,
    component : []
  },
  {
    controlType:'section',
    sectionType:7,
    sectionName:'Seven',
    innerItemCount:2,
    display : false,
    component : []
  }

]

  completed :any = [];

  selectedElement:any
  color:any
  bgcolor:any
  padding:any
  margin:any
  border:any
  textAlign:any
  width:any
  border_radius:any
  inputTypes = [
    'text',
    'date',
    'file',
    'number'
  ]
  inputtype:any
  public fontFamily: Array<string> = [
    
  ];

  constructor(private _commSrv : CommonService, private renderrer : Renderer2, private _sanitizer: DomSanitizer){

  }


  public close(status: string): void {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  public preview(): void {
    
    // this.renderrer.setProperty(this.previewHTMLContent?.nativeElement, 'innerHTML', this.exportHTML.nativeElement)
    // this.previewHTML = document.getElementById('exportHTML')?.outerHTML;
    if(this.exportHTML.nativeElement){
      // console.log(this.exportHTML.nativeElement.innerHTML)
      console.log(this._sanitizer.bypassSecurityTrustHtml(this.exportHTML.nativeElement.innerHTML))
      // this.previewHTML = this.exportHTML.nativeElement.innerHTML
      // this.previewHTMLContent.nativeElement.innerHTML = this.exportHTML.nativeElement.innerHTML
    }
    // (document.querySelector('#preview') as HTMLElement)!.innerHTML = this.previewHTML
    this.opened = true;
    
  }
  public items: Array<PanelBarItemModel> = [
    <PanelBarItemModel>{
      title: "First item",
      content: "First item content",
      expanded: true,
    },
    <PanelBarItemModel>{
      title: "Second item",
      children: [<PanelBarItemModel>{ title: "Child item" }],
    },
  ];

  Apply(){
    // console.log(this.selectedElement)
    let temp:any =  JSON.parse(JSON.stringify(this.completed[this.objIndex].component[this.selectedComponentIndex].values[this.selectedValueIndex]))
    console.log(temp)
    console.log("color value : ", this.color)
    temp!.styles['color'] = this.color ? this.color : temp!.styles.color
    temp!.styles['background-color'] = this.bgcolor ? this.bgcolor : temp!.styles['background-color']
    temp!.styles['padding'] = this.padding ? this.padding+'px' : temp!.styles['padding']
    temp!.styles['width'] = this.width ? this.width+'px' : temp!.styles['width']
    temp!.styles['border-radius'] = this.border_radius ? this.border_radius+'%' : temp!.styles['border-radius']
    this.completed[this.objIndex].component[this.selectedComponentIndex].values[this.selectedValueIndex]!.styles = temp.styles
    console.log(temp)
    console.log(this.completed)

    // this.completed.splice(this.selectedComponentIndex, 1, temp)
  }

  resetStyling(){
    this.color = null
    this.bgcolor = null
    this.padding = 0
  }

  getSectionLength(count : any){
    let arr = []
    for(let i = 1; i <= count; i++){
      arr.push('innerItem_'+i)
    }
    return arr;
  }

  drop(event:any){
    event.stopPropagation();
    event.preventDefault();
    console.log(event)
    let data:any = JSON.parse(event.dataTransfer.getData('assciatedData'))
    
    for(let i = 0; i < data.innerItemCount ; i++){
      data.component.push({index:i,values:[]})
    }
    console.log(this.completed)
    this.completed.push(data)
  }

  allowDrop(ev:any){
    ev.stopPropagation();
    ev.preventDefault();
  }

  dragStart(event:any, data:any){
    // console.log(event, data)
    event.dataTransfer.setData('assciatedData', JSON.stringify(data));
    // console.log(JSON.parse(event.dataTransfer.setData('assciatedData')));
    event.stopPropagation();
  }

  Submit(){
    console.log(this.completed)
    // let htmlcontent = (document.getElementById('htmlWrapper') as HTMLElement).outerHTML.replace(/<!--[\s\S]*?-->/g, '');
    // console.log(htmlcontent)
  }

  onSelection(event:any, compIndex1:any, objIndex:any){
    console.log(event, compIndex1)
    // this.resetStyling()
    // this.selectedElement = JSON.parse(JSON.stringify(event))
    this.selectedComponentIndex = compIndex1
    this.objIndex = objIndex
    this._commSrv.elementType.subscribe((res:any) => {
      this.elementType = res
      console.log(res)
    })

    console.log("obj component value", objIndex, compIndex1, this.selectedValueIndex)
    console.log("Current object : ", this.completed[this.objIndex].component[this.selectedComponentIndex].values[this.selectedValueIndex])
    if(this.completed[this.objIndex].component[this.selectedComponentIndex].values[this.selectedValueIndex]){
      this.isStyleWindowShow = true
    }
    this._commSrv.selectedIndexs.next({'objIndex': this.objIndex, 'selectedComponentIndex': this.selectedComponentIndex, 'selectedValueIndex': this.selectedValueIndex})
  }

  selectedValueIndex : any
  getValueIndex(index:any){
    this.selectedValueIndex = index
    // console.log(this.selectedValueIndex)
  }

  closeStyleWindow(){
    this.isStyleWindowShow = false
  }

  deleteElement(event : any, i:any){
    event.stopPropagation();
    event.preventDefault();
    this.completed.splice(i, 1)
  }
  textAlignment(align:any){
    let temp:any =  JSON.parse(JSON.stringify(this.completed[this.objIndex].component[this.selectedComponentIndex].values[this.selectedValueIndex]))
    temp.styles['text-align'] = align;
    this.completed[this.objIndex].component[this.selectedComponentIndex].values[this.selectedValueIndex]!.styles = temp.styles
  }

  onFileChange(event:any) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.fileSrc = reader.result as string;
        console.log(this.fileSrc)
        this.completed[this.objIndex].component[this.selectedComponentIndex].values[this.selectedValueIndex].src = this.fileSrc
        console.log(this.completed[this.objIndex].component[this.selectedComponentIndex].values[this.selectedValueIndex])
      };
   
    }


  }

 
}
