var vm = new Vue({
    el:'#app',
    data() {
        return {
            lang: navigator.language.substring(0,2),
        };
    },
    methods: {
        
    },
    mounted() {
        window.location.href = './../index.html';
    }
});
