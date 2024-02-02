import categories from "../data/categories.js";

class CategoriesSection extends HTMLElement {
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
                String(categories.map((val) => {
                    return `
                    <div class="w-[140px] py-4 flex flex-col items-center gap-y-6 cursor-pointer hover:scale-105">
                        <img 
                        class="max-w-20"
                        src="${val.icon}"
                        alt="Kategori buku"/>
                        <span class="text-fblack">${val.name}</span>
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
