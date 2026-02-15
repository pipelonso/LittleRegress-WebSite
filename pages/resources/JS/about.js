var vm = new Vue({
    el:'#app',
    data() {
        return {
            lang: navigator.language.substring(0,2),
        };
    },
    methods: {
        startermsgLang : function() {
            var lg = document.getElementById('lgSelector').value;
            this.lang = lg
        }
    },
    mounted() {
        window.location.href = './../index.html';
    }
});
