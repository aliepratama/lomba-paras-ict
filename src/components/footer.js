class Footer extends HTMLElement {
    constructor(){
        super();
        this.__contact = [
            {
                desc: 'email',
                icon: 'fa fa-envelope',
                value: 'support@elibrary.com',
            },
            {
                desc: 'hotline',
                icon: 'fa fa-phone-alt',
                value: '(021) 123 4567',
            },
            {
                desc: 'location',
                icon: 'fa fa-map-marker-alt',
                value: 'Jl. Perpustakaan digital, kota pendidikan, Indonesia',
            },
        ];
    }
    connectedCallback() {
        this._render();
    }
    _render(){
        this.innerHTML = `
        <div class="w-full bg-secondary flex flex-col lg:flex-row lg:justify-between gap-y-12 lg:gap-y-16 px-3 lg:px-24 py-8 lg:py-16 text-white text-lg lg:text-xl">
            <div class="w-full lg:w-1/2 flex flex-col gap-y-8">
                <div>
                    <img
                    class="max-h-14 lg:max-h-20 w-auto"
                    src="logo_white.png" 
                    alt="Logo eLibrary white"/>
                </div>
                <div class="flex flex-col">
                    <span>Temukan dan jelajahi ribuan buku digital dengan mudah di aplikasi perpustakaan kami.</span>
                    <span class="font-extrabold">Baca, simpan, dan nikmati pengetahuan di ujung jari Anda!</span>
                </div>
                <span class="hidden-m">2024 All Rights Reserved.</span>
            </div>
            <div class="w-full lg:w-1/3 flex flex-col gap-y-4 lg:gap-y-6">
                ${
                String(this.__contact.map((val) => {
                    return `
                    <div class="flex gap-x-4 lg:gap-x-8 items-center">
                        <i class="${val.icon} text-lg lg:text-3xl"></i>
                        <span>${val.value}</span>
                    </div>
                `;})).replace(/,/g, '')
                }
            </div>
            <span class="hidden-lg self-center">2024 All Rights Reserved.</span>
        </div>
        `;
    }
}
customElements.define('footer-section', Footer);
