!function(a){"function"==typeof define&&define.amd?define(["jquery","../jquery.validate"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){return a.extend(a.validator.messages,{required:"T&auml;m&auml; kentt&auml; on pakollinen.",email:"Sy&ouml;t&auml; oikea s&auml;hk&ouml;postiosoite.",url:"Sy&ouml;t&auml; oikea URL-osoite.",date:"Sy&ouml;t&auml; oikea p&auml;iv&auml;m&auml;&auml;r&auml;.",dateISO:"Sy&ouml;t&auml; oikea p&auml;iv&auml;m&auml;&auml;r&auml; muodossa VVVV-KK-PP.",number:"Sy&ouml;t&auml; luku.",creditcard:"Sy&ouml;t&auml; voimassa oleva luottokorttinumero.",digits:"Sy&ouml;t&auml; pelk&auml;st&auml;&auml;n numeroita.",equalTo:"Sy&ouml;t&auml; sama arvo uudestaan.",maxlength:a.validator.format("Voit sy&ouml;tt&auml;&auml; enint&auml;&auml;n {0} merkki&auml;."),minlength:a.validator.format("V&auml;hint&auml;&auml;n {0} merkki&auml;."),rangelength:a.validator.format("Sy&ouml;t&auml; v&auml;hint&auml;&auml;n {0} ja enint&auml;&auml;n {1} merkki&auml;."),range:a.validator.format("Sy&ouml;t&auml; arvo v&auml;lilt&auml; {0}&ndash;{1}."),max:a.validator.format("Sy&ouml;t&auml; arvo, joka on enint&auml;&auml;n {0}."),min:a.validator.format("Sy&ouml;t&auml; arvo, joka on v&auml;hint&auml;&auml;n {0}.")}),a});