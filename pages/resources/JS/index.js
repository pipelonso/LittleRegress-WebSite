

document.addEventListener("focus" , function(){

    var estext = document.getElementById("esPresentacion");
    estext.style.display = "none";
    var lgSelector = document.getElementById('lgSelector');
    lgSelector.value = "en";

})

function hidestartermsg() {

    var startermsg = document.getElementById("startermsg");
    startermsg.style.display = "none";


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


