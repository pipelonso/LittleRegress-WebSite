
var vm = new Vue({
    el:'#app',
    data: {
        
            languaje: navigator.language.substring(0,2),
            lang : '',
            startmsglang : '',
            startmsgshow : true
        
    },
    methods: {
        hidestartermsg : function() {
            this.startmsgshow = false;
        },
        startermsgLang : function() {
            var lg = document.getElementById('lgSelector').value;
            console.log(lg);
        }
    },
    mounted() {
        var languaje = navigator.language.substring(0,2);
        if (languaje == 'es') {
            this.lang = 'es';
        }else{
            this.lang = 'en';
        }
    }
});



