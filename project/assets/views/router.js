import './home.js';
import './searchpage.js';
import './viewbooks.js';

class Router extends HTMLElement {
    constructor(){
        super();
        this.__config = [
            {
                route: 'beranda',
                component: 'home-page',
            },
            {
                route: 'direktori',
                component: 'search-page',
            },
            {
                route: 'trending',
                component: 'viewbooks-page',
            },
        ];
    }
    connectedCallback() {
        this._render();
    }
    _render(){
        let page = this.__config.filter(val => this.attributes.route.value === val.route);
        if(page.length){
            this.innerHTML = `<${page.at(0).component}></${page.at(0).component}>`;
        } else {
            this.innerHTML = '';
        }
    }
}
customElements.define('page-router', Router);
