'use strict';

/* -------------------------------------------------------------------
Copyright (c) 2017-2017 Hexaware Technologies
This file is part of the Innovation LAB - Offline Bot.
------------------------------------------------------------------- */
function showmesgtext(msg) {
     document.getElementById("btn-input").focus();
    document.getElementById("btn-input").value += msg.childNodes[0].data;
}

define([], function () {

    var methods = {};
    methods.currentTime = function(){
        var currentDate = new Date();
        var hours = (currentDate.getHours() < 10) ? '0' + currentDate.getHours() : currentDate.getHours();
        var minutes = (currentDate.getMinutes() < 10) ? '0' + currentDate.getMinutes() : currentDate.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        return hours +':'+ minutes +' '+ ampm ;
    };
methods.airlineTime = function(x) {
        var timechange = new Date(x);
        var hours = (timechange.getHours() < 10) ? '0' + timechange.getHours() : timechange.getHours();
        var minutes = (timechange.getMinutes() < 10) ? '0' + timechange.getMinutes() : timechange.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        var hoursnew = +hours % 12 || 12;
        return hoursnew +':'+ minutes +' '+ ampm ;
    };
    methods.airlineTimeboarding = function(x){
        var timechange = new Date(x);
        var hours = (timechange.getHours() < 10) ? '0' + timechange.getHours() : timechange.getHours();
        var min = x.split(':');
        var ampm = min[0] >= 12 ? 'pm' : 'am';
        var hoursnew = +hours % 12 || 12;
        
        return hoursnew + ':'+ min[1] + ' ' +ampm;
    };

    methods.scrollSmoothToBottom = function(element){
        setTimeout(function(){
            var height = element[0].scrollHeight;
            element.scrollTop(height);
        }, 500);
    };

    // methods.textFormatter = function(str){
    //     if ((str===null) || (str===''))
    //     return false;
    //     else{
    //     str = str.toString();
    //     str=str.toLowerCase();
    //     str=str[0].toUpperCase()+str.slice(1);
    //     console.log(str);
    //     return str;
    //     }
    // };

    return methods;
});
