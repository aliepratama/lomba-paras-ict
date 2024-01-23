import './components/navbar.js';
import './components/herosection.js';
import './components/categoriessection.js';

class App extends HTMLElement {
    connectedCallback() {
        this._render();
    }
    _render(){
        this.innerHTML = `
        <nav-bar></nav-bar>
        <hero-section></hero-section>
        <categories-section></categories-section>
        `;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    customElements.define('app-root', App);
});
