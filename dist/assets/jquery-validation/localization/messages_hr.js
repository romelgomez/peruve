!function(e){"function"==typeof define&&define.amd?define(["jquery","../jquery.validate"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){return e.extend(e.validator.messages,{required:"Ovo polje je obavezno.",remote:"Ovo polje treba popraviti.",email:"Unesite ispravnu e-mail adresu.",url:"Unesite ispravan URL.",date:"Unesite ispravan datum.",dateISO:"Unesite ispravan datum (ISO).",number:"Unesite ispravan broj.",digits:"Unesite samo brojeve.",creditcard:"Unesite ispravan broj kreditne kartice.",equalTo:"Unesite ponovo istu vrijednost.",extension:"Unesite vrijednost sa ispravnom ekstenzijom.",maxlength:e.validator.format("Maksimalni broj znakova je {0} ."),minlength:e.validator.format("Minimalni broj znakova je {0} ."),rangelength:e.validator.format("Unesite vrijednost između {0} i {1} znakova."),range:e.validator.format("Unesite vrijednost između {0} i {1}."),max:e.validator.format("Unesite vrijednost manju ili jednaku {0}."),min:e.validator.format("Unesite vrijednost veću ili jednaku {0}.")}),e});