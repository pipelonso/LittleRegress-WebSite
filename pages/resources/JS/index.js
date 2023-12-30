
var contentpage = document.getElementById('contentPage'); 

document.addEventListener("DOMContentLoaded" , function(){
    
    console.log("loaded");
    var estext = document.getElementById("esPresentacion");
    estext.style.display = "none";
    var lgSelector = document.getElementById('lgSelector');
    lgSelector.value = "en";
   
    contentpage.style.display = "none";
})



function hidestartermsg() {

    var startermsg = document.getElementById("startermsg");
    startermsg.style.display = "none";
    contentpage.style.display = "block";

}

function startermsgLang(lang) {

    var estext = document.getElementById("esPresentacion");
    var entext = document.getElementById("enPresentation");

    if (lang == "en") {

        entext.style.display = "block";
        estext.style.display = "none";


    }else{

        entext.style.display = "none";
        estext.style.display = "block";

    }


}

