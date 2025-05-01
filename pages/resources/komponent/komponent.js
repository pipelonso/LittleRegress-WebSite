class Komponent {

    constructor () {

        this.components = []

    }

    async registerComponent(kfile, id) {
        
        let content = ""

        await fetch(kfile)
            .then(response => response.text())
            .then(data => {
                content = data
                this.components.push({
                    "text": content,
                    "id" : id
                })        
            })
            .catch(error => {
                console.error('failed to load content:', error);
            });

    }
    
    getContent(id) {
        for (let i = 0; i < this.components.length; i++) {    
            if (this.components[i].id == id) {
                return this.components[i]
            }
        }
    }

    render() {    
        for (let i = 0; i < this.components.length; i++) {    
            document.getElementById(this.components[i].id).innerHTML = this.components[i].text
        }
    }


}