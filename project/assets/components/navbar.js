import './sidebar.js';

class NavBar extends HTMLElement {
    constructor(){
        super();
        this.__isSidebar = false;
        this.__tabs = [
            {
                key: 'beranda',
                title: 'Beranda',
            },
            {
                key: 'direktori',
                title: 'Direktori',
            },
            {
                key: 'trending',
                title: 'Trending',
            },
        ];
    }
    toogleSidebar(){
        this.__isSidebar = !this.__isSidebar;
        this._render();
    }
    connectedCallback() {
        this._render();
    }
    _render(){
        this.innerHTML = `
            ${this.__isSidebar ? '<side-bar></side-bar>' : ''}
            <div class="fixed top-0 z-10 w-full flex items-center justify-between px-3 lg:px-12 py-4 container-rg">
                <ul class="flex items-center gap-x-5 lg:gap-x-12">
                    <i id="sidebar" class="hidden-lg fa fa-bars button-span-rg"></i>
                    <img
                        class="max-h-6 hidden-lg" 
                        src="assets/public/minilogo.png" 
                        alt="Logo eLibrary"/>
                    <img
                        class="max-h-12 hidden-m" 
                        src="assets/public/logo.png" 
                        alt="Logo eLibrary"/>
                    ${
                        String(this.__tabs.map((val) => {
                            return `
                                <li key="${val.key}" 
                                class="route hidden-m ${this.attributes.active.value == val.key ? 'button-span-rg-active' : 'button-span-rg'}"
                                >${val.title}</li>
                            `;
                        })).replace(/,/g, '')
                    }
                </ul>
                <div class="flex items-center gap-x-8">
                    <button 
                        class="button-fill-rg">
                        Masuk
                    </button>
                    <button
                        class="hidden-m button-span-rg">
                        Daftar
                    </button>
                </div>
            </div>
        `;
        this.querySelector('#sidebar').addEventListener('click', () => this.toogleSidebar());
        try{
            this.querySelector('#closeSidebar').addEventListener('click', () => this.toogleSidebar());
        } catch{}
    }
}
customElements.define('nav-bar', NavBar);
