import '../components/navbar.js';
import '../components/footer.js';
import '../components/contactbutton.js';
import '../views/router.js';
import { FadeIn, FadeOut } from './animation.js';

class App extends HTMLElement {
    constructor(){
        super();
        this.__activeTab = 'beranda';
        this.pageProp = '';
    }
    setStateNavbar(key, prop = null, value = null){
        new FadeOut(this.querySelector('page-router')).setDuration(250).animate()
        setTimeout(() => {
            this.__activeTab = key;
            if (prop && value) {
                this.pageProp = `${prop}="${value}"`;
            } else {
                this.pageProp = '';
            }
            this._render();
            new FadeIn(this.querySelector('page-router')).setDuration(250).animate();
        }, 250);
    }
    connectedCallback() {
        this._render();
    }
    _render(){
        this.innerHTML = `
        <nav-bar active="${this.__activeTab}"></nav-bar>
        <contact-button></contact-button>
        <div class="mt-20">
        <page-router route="${this.__activeTab}" ${this.pageProp}></page-router>
        <footer-section></footer-section>
        </div>
        `;
        document.querySelectorAll('.route').forEach(val => val.addEventListener('click', () => {
            this.setStateNavbar(val.getAttribute('key'));
        }));
        document.querySelectorAll('.route-category').forEach(val => val.addEventListener('click', () => {
            this.setStateNavbar('trending', 'category', val.getAttribute('key'));
        }));
        this.querySelector('#submitSearch').addEventListener('click', () => {
            this.setStateNavbar('direktori', 'stateKeyword', this.querySelector('#search-input').value);
        });
        // console.log(document.querySelectorAll('.route-sidebar'));
        //document.querySelectorAll('.route-sidebar').forEach(val => val.addEventListener('click', () => {
            // console.log(val);
            // this.setStateNavbar(val.getAttribute('key'));
        //}));
    }
}
document.addEventListener('DOMContentLoaded', () => {
    customElements.define('app-root', App);
});
