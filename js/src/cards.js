'use strict';

/* -------------------------------------------------------------------
Copyright (c) 2017-2017 Hexaware Technologies
This file is part of the Innovation LAB - Offline Bot.
------------------------------------------------------------------- */


define(['messageTemplates', 'uuid'], function (messageTpl, uuidv1) {

    var CardDesign= {};

        // constructor(card, responseType) {
        //     this.data = card;
        //     this.responseType = responseType;
        // }

        CardDesign.getHTML=function(data, responseType) {
            //Return Plain Text Response Type Payload
            if (responseType == "plaintext") {
                console.log(data);
                return messageTpl.plaintext(data);
            }
            //Return Card Response Type Payload
            if (responseType == "card") {
                console.log(JSON.stringify(data));
                return messageTpl.card(data);
            }
            //Return Carousel Response Type Payload
            if (responseType == "carousel") {
                return messageTpl.carousel(data, uuidv1());
            }
            //Return Quick replies Response Type Payload
            if (responseType == "quickreplies") {
                return messageTpl.quickreplies(data);
            }

          
        }
    //}
return CardDesign;
    // return function (card, responseType) {
    //     return new CardDesign(card, responseType).getHTML();
    // }
});
