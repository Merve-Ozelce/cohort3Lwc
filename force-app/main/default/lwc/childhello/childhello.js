import { LightningElement,api } from 'lwc';
export default class Childhello extends LightningElement {
  @api titletext;
  @api footertext;

  @api changetitle(){
    ContactMobile.log('changetitle runs...');
    this.titletext='method run!!!';
  }
}