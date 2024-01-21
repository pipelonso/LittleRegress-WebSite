
var vm = new Vue({
    el:'#app',
    data() {
        return {
            lang: navigator.language.substring(0,2),
            startmsglang : '',
            startmsgshow : true
        };
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

        console.log('kboom');

    }
});



