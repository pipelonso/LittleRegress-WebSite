Vue.component('navcomponent' , {
    props : ['page'],
    data() {
        return {
            languaje : navigator.language.substring(0,2),
            lang : '',
            pageIndex: '#',
            pageAbout: '#',
            pageDiscord: '#',
            pageDownloads: '#',
            pageInvestigations: '#',
            styles: 'position:sticky; top:0px; z-index: 999999;  border-bottom: solid; border-color: black; border-width: 1px; background-image: url("resources/Images/Schema/pink-purple_rect.svg"); background-size: cover;',
            names : {
                index : 'HOME',
                discord : 'DISCORD',
                downloads : 'DOWNLOADS',
                investigations : 'INVESTIGATIONS',
                about : 'ABOUT'
            }
        };
    },
    mounted() {
        if (this.page === 'index') {
            this.pageIndex = '#';
            this.pageAbout = 'pages/about.html';
            this.pageDiscord = 'pages/discord.html';
            this.pageInvestigations = 'pages/investigation.html';
            this.pageDownloads = 'pages/downloads.html';
            this.styles = 'position:sticky; top:0px; z-index: 999999;  border-bottom: solid; border-color: black; border-width: 1px; background-image: url("pages/resources/Images/Schema/pink-purple_rect.svg"); background-size: cover;';
        }else{
            this.pageIndex = '../index.html';
            this.pageAbout = 'about.html';
            this.pageDiscord = 'discord.html';
            this.pageInvestigations = 'investigation.html';
            this.pageDownloads = 'downloads.html';
            this.styles = 'position:sticky; top:0px; z-index: 999999;  border-bottom: solid; border-color: black; border-width: 1px; background-image: url("resources/Images/Schema/pink-purple_rect.svg"); background-size: cover;';
        }   

        var languaje = navigator.language.substring(0,2);
        if (languaje == 'es') {
            this.lang = 'es';
        }else{
            this.lang = 'en';
        }

        if (this.lang == 'es') {
            this.names = {
                index : 'INICIO',
                discord : 'DISCORD',
                downloads : 'DESCARGAS',
                investigations : 'INVESTIGACIONES',
                about : 'ACERCA DE'
            }
        }else{
            this.names = {
                index : 'HOME',
                discord : 'DISCORD',
                downloads : 'DOWNLOADS',
                investigations : 'INVESTIGATIONS',
                about : 'ABOUT'
            }
        }

    },
    methods: {
        
    },
    template: `
        <div id="navcomponent" class="navbar justify-content-center"  v-bind:style="styles">
            <a v-bind:href="pageIndex" class="nav-item link-dark mx-3">{{ names.index }}</a>
            <a v-bind:href="pageDiscord" class="nav-item link-dark mx-3">{{ names.discord }}</a>
            <a v-bind:href="pageDownloads" class="mx-3 link-dark">{{ names.downloads }}</a>
            <a v-bind:href="pageInvestigations" class="mx-3 link-dark">{{ names.investigations }}</a>
            <a v-bind:href="pageAbout" class="mx-3 link-dark">{{ names.about }}</a>
        </div>
    `
});