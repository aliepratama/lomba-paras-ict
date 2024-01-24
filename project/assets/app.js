import './components/navbar.js';
import './components/herosection.js';
import './components/categoriessection.js';
import './components/servicessection.js';
import './components/trendingsection.js';

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
        </div>
        `;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    customElements.define('app-root', App);
    const swiper = new Swiper('.swiper', {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    });  
    // const swiper_e = document.querySelector('.swiper').swiper;
    // swiper_e.slideNext();
});
