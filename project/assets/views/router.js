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
                prop: 'category',
            },
        ];
    }
    connectedCallback() {
        this._render();
    }
    _render(){
        let page = this.__config.filter(val => this.attributes.route.value === val.route);
        let prop = page.at(0).prop && this.attributes[page.at(0).prop] ? `${page.at(0).prop}="${this.attributes[page.at(0).prop].value}"` : '';
        if(page.length){
            this.innerHTML = `<${page.at(0).component} ${prop}></${page.at(0).component}>`;
        } else {
            this.innerHTML = '';
        }
        window.scrollTo(0,0);
    }
}
customElements.define('page-router', Router);
