/**
 * @description       : 
 * @author            : Merve Özelce
 * @group             : 
 * @last modified on  : 02-15-2023
 * @last modified by  : Merve Özelce
**/
public with sharing class calculatorwiredecController {
    public calculatorwiredecController() {

    }
    @AuraEnabled(cacheable=true)
    public static Decimal sum(decimal num1, decimal num2){
        return num1+num2;
    }
    @AuraEnabled(cacheable=true)
    public static Decimal sub(decimal num1, decimal num2){
        return num1-num2;
    }
    @AuraEnabled(cacheable=true)
    public static Decimal multi(decimal num1, decimal num2){
        return num1*num2;
    }
    @AuraEnabled(cacheable=true)
    public static Decimal div(decimal num1, decimal num2){
        return num1/num2;
    }
}