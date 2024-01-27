import '../components/navbar.js';
import '../components/herosection.js';
import '../components/categoriessection.js';
import '../components/servicessection.js';
import '../components/trendingsection.js';
import '../components/faqsection.js';

class App extends HTMLElement {
    connectedCallback() {
        this._render();
    }
    _render(){
        this.innerHTML = `
        <nav-bar></nav-bar>
        <div class="mt-20 lg:mt-14">
            <hero-section></hero-section>
            <categories-section></categories-section>
            <services-section></services-section>
            <trending-section></trending-section>
            <faq-section></faq-section>
        </div>
        `;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    customElements.define('app-root', App);
    new Swiper('.swiper', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 80
            }
        }
    });  
});
