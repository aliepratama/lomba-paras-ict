class AuthorSection extends HTMLElement {
    connectedCallback() {
        this._render();
    }
    _render(){
        let temp = `
        <div class="swiper-2 w-full flex flex-col items-center gap-y-12 lg:gap-y-12 px-3 lg:px-24 py-8 lg:py-16">
            <h4 class="heading1">Berita Penulis</h4>
            <div class="swiper-2-wrapper w-full flex">
        `;
        for(let i = 0; i < 3; i++){
            temp += `<div class="swiper-2-slide">
                        <div class="author w-[285px] h-[160px] lg:w-[712px] lg:h-[400px] bg-center bg-no-repeat bg-cover rounded-2xl"></div>
                    </div>`;
        }
        temp += `</div></div>`;
        this.innerHTML = temp;
        this.querySelectorAll('.author').forEach((val, key) => val.style.backgroundImage = `url('./assets/public/author${key + 1}.png')`);
        new Swiper('.swiper-2', {
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            wrapperClass: 'swiper-2-wrapper',
            slideClass: 'swiper-2-slide',
            centeredSlides: true,
            breakpoints: {
                320: {
                    width: 285,
                    spaceBetween: 64,
                },
                640: {
                    width: 712,
                    spaceBetween: 320,
                },
            }
        });
    }
}
customElements.define('author-section', AuthorSection);
