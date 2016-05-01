/** File generated by Grunt -- do not modify
 *  JQUERY-FORM-VALIDATOR
 *
 *  @version 2.2.206
 *  @website http://formvalidator.net/
 *  @author Victor Jonsson, http://victorjonsson.se
 *  @license MIT
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){!function(a){"use strict";a.formUtils.addValidator({name:"ukvatnumber",validatorFunction:function(a){if(a=a.replace(/[^0-9]/g,""),a.length<9)return!1;var b=!1,c=[];c=a.split("");var d=Number(c[7]+c[8]),e=c[0],f=c[1];if(0===e&&f>0)return!1;for(var g=0,h=0;7>h;h++)g+=c[h]*(8-h);for(var i=0,j=0,k=8;k>=2;k--)i+=c[j]*k,j++;for(;g>0;)g-=97;return g=Math.abs(g),d===g&&(b=!0),b||(g%=97,g>=55?g-=55:g+=42,g===d&&(b=!0)),b},errorMessage:"",errorMessageKey:"badUKVatAnswer"}),a.formUtils.addValidator({name:"ukutr",validatorFunction:function(a){var b=[0,6,7,8,9,10,5,4,3,2],c=[2,1,9,8,7,6,5,4,3,2,1],d=0;if(/\d{10}/.test(a)&&10===a.length){for(var e=0;10>e;e++)d+=a[e]*b[e];if(parseInt(a.charAt(0))===c[d%11])return!0}return!1},errorMessage:"",errorMessageKey:"badUkUtr"}),a.formUtils.addValidator({name:"uknin",validatorFunction:function(a){return!!/^(?!BG)(?!GB)(?!NK)(?!KN)(?!TN)(?!NT)(?!ZZ)(?:[A-CEGHJ-PR-TW-Z][A-CEGHJ-NPR-TW-Z])(?:\s*\d\s*){6}([A-D]|\s)$/i.test(a)},errorMessage:"",errorMessageKey:"badUkNin"})}(a)});