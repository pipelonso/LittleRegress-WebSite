new Vue({
    el:'#app',
    data() {
        return {
            languaje: navigator.language.substring(0,2),
            lang: ''
        };
    },
    methods: {
        
    },
    mounted() {
        if (this.language == 'en') {
            this.lang = language;
        }else{
            this.lang = 'es';
        }
    }
});
