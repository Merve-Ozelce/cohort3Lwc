import { LightningElement } from 'lwc';
import sum from '@salesforce/apex/calculatorwiredecController.sum';
import sub from '@salesforce/apex/calculatorwiredecController.sub';
import multi from '@salesforce/apex/calculatorwiredecController.multi';
import div from '@salesforce/apex/calculatorwiredecController.div';
export default class LwcCalculatorimp extends LightningElement {
    numx;
    numy;
    result;
    errors;
    showError=false;
    xChange(event){
        this.numx=event.target.value;
        console.log(this.numx);
    }
    yChange(event){
        this.numy=event.target.value;
        console.log(this.numy);
    }
 sum(){
        sum({num1:this.numx,num2:this.numy})
        .then(response=>{
          this.result=response;
        })
        .catch(error=>{
          this.errors=error;
          this.showError=true;
        });
      }
  sub(){
        sub({num1:this.numx,num2:this.numy})
        .then(response=>{
          this.result=response;
        })
        .catch(error=>{
          this.errors=error;
          this.showError=true;
        });
}
multi(){
    multi({num1:this.numx,num2:this.numy})
    .then(response=>{
      this.result=response;
    })
    .catch(error=>{
      this.errors=error;
      this.showError=true;
    });
}
div(){
    div({num1:this.numx,num2:this.numy})
    .then(response=>{
      this.result=response;
    })
    .catch(error=>{
      this.errors=error;
      this.showError=true;
    });
}
}