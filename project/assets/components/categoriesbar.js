import categories from "../data/categories.js";

class CategoriesBar extends HTMLElement {
    constructor(){
        super();
        this.__categories = [
            'Semua buku',
            ...categories.map((val) => val.name).slice(0, 5)
        ];
        this.stateActive = 'Semua buku';
    }
    setStateActive(key){
        this.stateActive = key;
        this._render();
    }
    connectedCallback() {
        this._render();
    }
    _render(){
        this.innerHTML = `
        <div class="flex w-full items-center">
            ${
                String(this.__categories.map((val) => {
                    return `
                        <div class="bar-button ${this.stateActive === val ? 'bg-[#F2F2F2]' : ''}">
                            <span>${val}</span>
                        </div>
                    `;
                })).replace(/,/g, '')
            }
            <div>
                <span class="bar-button text-primary">Lainnya</span>
            </div>
        </div>
        `;
        this.querySelectorAll('.bar-button').forEach((val, index) => 
            val.addEventListener('click', () => {
                this.setStateActive(this.__categories[index]);
        }));
    }
}
customElements.define('categories-bar', CategoriesBar);
