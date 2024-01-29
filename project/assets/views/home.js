import '../components/herosection.js';
import '../components/categoriessection.js';
import '../components/servicessection.js';
import '../components/trendingsection.js';
import '../components/faqsection.js';
import '../components/footer.js';

class HomePage extends HTMLElement {
    connectedCallback() {
        this._render();
    }
    _render(){
        this.innerHTML = `
        <hero-section></hero-section>
        <categories-section></categories-section>
        <services-section></services-section>
        <trending-section></trending-section>
        <faq-section></faq-section>
        `;
    }
}
customElements.define('home-page', HomePage);
