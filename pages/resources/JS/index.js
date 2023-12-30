
var contentpage = document.getElementById('contentPage'); 
var estext = document.getElementById("esPresentacion");
var entext = document.getElementById("enPresentation");


document.addEventListener("DOMContentLoaded" , function(){
    
    console.log("loaded");
    var estext = document.getElementById("esPresentacion");
    //estext.style.display = "none";
    var lgSelector = document.getElementById('lgSelector');
    
   
    contentpage.style.display = "none";

    if (navigator.language.substring(0,2) == "en") {

        entext.style.display = "block";
        estext.style.display = "none";
        lgSelector.value = "en";
        
        var infoStart = this.getElementById("infoStart");
        infoStart.innerText = "Before you proceed please read this";


    }else if (navigator.language.substring(0,2) == "es"){

        entext.style.display = "none";
        estext.style.display = "block";
        lgSelector.value = "es";
        var infoStart = this.getElementById("infoStart");
        infoStart.innerText = "Porfavor lee esto antes de continuar";

    }else{

        entext.style.display = "block";
        estext.style.display = "none";
        lgSelector.value = "en";

    }

})



function hidestartermsg() {

    var startermsg = document.getElementById("startermsg");
    startermsg.style.display = "none";
    contentpage.style.display = "block";

    var esparagrahp = document.getElementById("esparagrahp");
    var enparagrahp = document.getElementById("enparagrahp");

    if (navigator.language.substring(0,2) == "en") {

        esparagrahp.style.display = "none";

    }else{

        enparagrahp.style.display = "none";

    }




}

function startermsgLang(lang) {

    

    if (lang == "en") {

        entext.style.display = "block";
        estext.style.display = "none";


    }else{

        entext.style.display = "none";
        estext.style.display = "block";

    }


}

