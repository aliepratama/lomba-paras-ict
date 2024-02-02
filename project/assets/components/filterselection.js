class FilterSelection extends HTMLElement {
    constructor(){
        super();
        this.__daftar = [
            'Populer',
            'Rating',
            'Terbaru',
        ];
    }
    connectedCallback() {
        this._render();
    }
    _render(){
        this.innerHTML = `
        <div class="anchor-selection peer w-fit flex items-center text-fblack container-shadow gap-x-4 container-rg py-2 px-4 rounded-md cursor-pointer">
            <span class="text-md lg:text-lg">Populer</span>
            <i class="fa fa-chevron-down text-fblack"></i>
        </div>
        <div class="target-selection hidden peer-hover:block hover:block w-fit fixed z-10 text-fblack container-shadow container-rg rounded-md cursor-pointer">
            <ul class="w-[140px] flex flex-col text-fblack text-md lg:text-lg">
                ${
                    String(this.__daftar.map((val) => {
                        return `
                            <li class="px-4 py-2 hover:bg-[#F2F2F2]">${val}</li>
                        `;
                    })).replace(/,/g, '')
                }
            </ul>
        </div>
        `;
    }
}
customElements.define('filter-selection', FilterSelection);
