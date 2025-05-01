document.addEventListener('DOMContentLoaded', function() {    
    window.location.href = './newIndex.html'
})


var vm = new Vue({
    el:'#app',
    data: {
        
            languaje: navigator.language.substring(0,2),
            lang : '',
            startmsglang : '',
            startmsgshow : false
        
    },
    methods: {
        hidestartermsg : function() {
            this.startmsgshow = false;
        },
        startermsgLang : function() {
            var lg = document.getElementById('lgSelector').value;
            this.lang = lg
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



