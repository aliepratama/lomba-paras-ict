import clsx from "../js/clsx.js";
import categories from "../data/categories.js";

class CategoriesBar extends HTMLElement {
    constructor(){
        super();
        this.__categories = [
            'Semua buku',
            ...categories.map((val) => val.name).slice(0, 5)
        ];
    }
    connectedCallback() {
        this._render();
    }
    _render(){
        this.innerHTML = `
        <div class="flex w-full gap-x-2 justify-between items-center">
            ${
                String(this.__categories.map((val) => {
                    return `
                        <div class="bar-button ${clsx(this.attributes.stateActive.value === val ? 'bg-[#F2F2F2]' : '',
                                                val !== 'Semua buku' ? 'hidden-m' : '')}">
                            <span>${val}</span>
                        </div>
                    `;
                })).replace(/,/g, '')
            }
            <div class="bar-button text-primary">
                <span>Lainnya</span>
            </div>
        </div>
        `;
    }
}
customElements.define('categories-bar', CategoriesBar);
