import { LightningElement } from 'lwc';

export default class Parenthello extends LightningElement {

    clickHandler(){
        console.log('clickHandler running.....')
        this.template.querySelector('c-childhello').changetitle();
    }
}