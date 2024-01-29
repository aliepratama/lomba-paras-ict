import '../components/navbar.js';
import '../components/footer.js';
import '../components/contactbutton.js';
import '../views/router.js';

class App extends HTMLElement {
    constructor(){
        super();
        this.activeTab = 'beranda';
    }
    setStateNavbar(key){
        this.activeTab = key;
        this._render();
    }
    connectedCallback() {
        this._render();
    }
    _render(){
        this.innerHTML = `
        <nav-bar active="${this.activeTab}"></nav-bar>
        <contact-button></contact-button>
        <div class="mt-20 lg:mt-14">
        <page-router route="${this.activeTab}"></page-router>
        <footer-section></footer-section>
        </div>
        `;
        this.querySelectorAll('.route').forEach(val => val.addEventListener('click', () => {
            this.setStateNavbar(val.getAttribute('key'));
        }));
    }
}
document.addEventListener('DOMContentLoaded', () => {
    customElements.define('app-root', App);
});
