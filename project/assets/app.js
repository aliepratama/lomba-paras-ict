import './components/navbar.js';
import './components/herosection.js';

class App extends HTMLElement {
    connectedCallback() {
        this._render();
    }
    _render(){
        this.innerHTML = `
        <nav-bar></nav-bar>
        <hero-section></hero-section>
        `;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    customElements.define('app-root', App);
});
