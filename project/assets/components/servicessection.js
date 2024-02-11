import { FadeInDown, FadeInRight } from "../js/animation.js";

class ServicesSection extends HTMLElement {
    constructor(){
        super();
        this.__services = [
            {
                icon: 'assets/public/l01.png',
                title: 'Pencarian buku',
                description: 'Cari buku dengan cepat dan akurat untuk pengalaman membaca yang efisien.',
                button: 'Cari buku',
            },
            {
                icon: 'assets/public/l02.png',
                title: 'On Trending',
                description: 'Temukan buku-buku populer terbaru dan terkini di perpustakaan digital kami.',
                button: 'Lihat Trending',
            },
            {
                icon: 'assets/public/l03.png',
                title: 'Baca Online',
                description: 'Nikmati akses instan ke buku favorit tanpa perlu mengunduh, kapan pun, di mana pun.',
                button: 'Baca online',
            },
        ];
    }
    connectedCallback() {
        this._render();
    }
    _render(){
        this.innerHTML = `
        <div class="w-full flex flex-col items-center gap-y-12 px-3 lg:px-24 py-8 lg:py-16">
            <h4 class="animate-6 heading1">Layanan kami</h4>
            <div class="w-full flex flex-col gap-y-16 lg:gap-y-0 lg:flex-row lg:justify-between py-12">
                ${
                String(this.__services.map((val) => {
                    return `
                    <div class="service-card w-fit flex flex-col gap-y-7 container-rg container-shadow rounded-[40px] px-9 py-12">
                        <div class="-mt-24">
                            <img 
                            class="max-w-28"
                            src="${val.icon}" 
                            alt="Layanan"/>
                        </div>
                        <div class="w-full flex flex-col gap-y-4">
                            <h4 class="max-w-[308px] text-2xl lg:text-3xl font-serif text-fblack">${val.title}</h4>
                            <p class="max-w-[308px] text-lg lg:text-xl text-fblack">${val.description}</p>
                            <button class="button-fill-rg">${val.button}</button>
                        </div>
                    </div>
                    `;
                })).replace(/,/g, '')
                }
            </div>
        </div>
        `;
        new FadeInDown(this, '.animate-6').observe();
        document.querySelectorAll('.service-card').forEach((val, index) => {
            new FadeInRight(this, val, 250 * index).observe();
        });
    }
}
customElements.define('services-section', ServicesSection);
