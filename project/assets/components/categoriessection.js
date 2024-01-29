class CategoriesSection extends HTMLElement {
    constructor(){
        super();
        this.__categories = ['Umum', 'Filsafat', 'Psikologi',
                            'Agama', 'Sosial', 'Bahasa',
                            'Sains', 'Teknologi'];
        this.__icons = ['assets/public/k09.png','assets/public/k05.png',
                        'assets/public/k06.png','assets/public/k04.png',
                        'assets/public/k07.png','assets/public/k03.png',
                        'assets/public/k08.png','assets/public/k02.png',
                        ];
    }
    connectedCallback() {
        this._render();
    }
    _render(){
        this.innerHTML = `
        <div class="w-full flex flex-col gap-y-8 px-3 lg:px-24 py-8 lg:py-16">
            <div class="w-full flex justify-between">
                <h4 class="text-2xl lg:text-3xl font-serif text-fblack">Kategori Buku</h4>
                <button class="text-xl lg:text-2xl text-primary">Lihat Semua</button>
            </div>
            <div class="w-full grid grid-cols-2 place-content-between place-items-center lg:flex lg:justify-between">
                ${
                String(this.__categories.map((val, index) => {
                    return `
                    <div class="w-[140px] py-4 flex flex-col items-center gap-y-6 cursor-pointer hover:scale-105">
                        <img 
                        class="max-w-20"
                        src="${this.__icons[index]}"
                        alt="Kategori buku"/>
                        <span class="text-fblack">${val}</span>
                    </div>
                    `
                })).replace(/,/g, '')
                }
            </div>
        </div>
        `;
    }
}
customElements.define('categories-section', CategoriesSection);
