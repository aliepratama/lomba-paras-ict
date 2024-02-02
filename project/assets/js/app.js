import '../components/navbar.js';
import '../components/footer.js';
import '../components/contactbutton.js';
import '../views/router.js';

class App extends HTMLElement {
    constructor(){
        super();
        this.__activeTab = 'trending';
    }
    setStateNavbar(key){
        this.__activeTab = key;
        this._render();
    }
    connectedCallback() {
        this._render();
    }
    _render(){
        this.innerHTML = `
        <nav-bar active="${this.__activeTab}"></nav-bar>
        <contact-button></contact-button>
        <div class="mt-20">
        <page-router route="${this.__activeTab}"></page-router>
        <footer-section></footer-section>
        </div>
        `;
        // console.log(this.querySelectorAll('.route'));
        this.querySelectorAll('.route').forEach(val => val.addEventListener('click', () => {
            // console.log(val)
            this.setStateNavbar(val.getAttribute('key'));
        }));
        // TODO: Tolong ini sidebar error!
        // document.querySelectorAll('.route-sidebar').forEach(val => {
        //     val.addEventListener('click', () => console.log('booom'))
        //     val.routerCallback = this.setStateNavbar;
        //     console.log(val.routerCallback)
        // });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    customElements.define('app-root', App);
});
