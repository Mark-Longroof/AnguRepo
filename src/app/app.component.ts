import { Component } from '@angular/core';
@Component({
 selector: 'app-root',
 templateUrl: `./app.component.html`,
 styleUrls: [`./app.component.css`]
})
export class AppComponent {
 title = 'Angular UI Generator';
 texxt: string;
 showme:boolean;
 showTable:boolean;
 data:string;
 tableData:Array<any>= []
 transferData: Object = {id: 1, msg: 'Hello'};
 receivedData: Array<any> = [];
 items:Array<any>=[];
 templText= {"label":"","datatype":"string","type": "text","name": "","ref": ""};
 templPass= {"label":"","datatype":"string","type": "password","name": "","ref": ""};
 templNumber= {"label":"","datatype":"string","type": "number","name": "","ref": ""};
 templEmail= {"label":"","datatype":"string","type": "email","name": "","ref": ""};
 templTarea= {"label":"","datatype":"string","type": "textarea","name": "","ref": ""};
 templRadio= {"label":"","datatype":"string","type": "radio","name": "","ref": ""};
 templSelect= {"label":"","datatype":"string","type": "select","name": "","ref": ""};
 templCheck= {"label":"","datatype":"string","type": "checkbox","name": "","ref": ""};
  constructor() {
    this.showme=false;
    this.showTable=false;
  }
  onSubmit(formValue) {
    console.log(formValue);
    this.showTable=true;
    this.tableData.push(formValue);
    console.log(this.tableData);
    }
    generateUI(){
      this.showme=true;
      console.log(this.receivedData)
      // console.log(this.items)

    }
  transferDataSuccess($event: any) {
    var label = prompt("Please enter Label for selected Item:", "");
    var temp=$event.dragData;
    var pushData=new Object();
    var opt=" ";
    var opts=[]
    if(temp.type=='radio' || temp.type=='select'){
      while(opt!=""){
      opt=prompt("Please enter Option for "+label, "");
      opts.push(opt);}opts.pop();
        pushData['options']=opts;
    }
    if(label != "" && label !=null){
      pushData['label']=label
      pushData['datatype']=temp['datatype'];
      pushData['type']=temp['type'];
      label=label.replace(/\s/g,'');
      pushData['name']="nme"+label;
      pushData['ref']="ref"+label;
      console.log(pushData)
      this.items.push(temp['type']);
   this.receivedData.push(pushData);
    }

}
}
