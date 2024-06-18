class FilterSelection extends HTMLElement {
    constructor(){
        super();
        this.__daftar = [
            'Populer',
            'Rating',
            'Terbaru',
        ];
        this.activeProps = this.attributes.stateFilter.value;
    }
    connectedCallback() {
        this._render();
    }
    _render(){
        this.innerHTML = `
        <div class="anchor-selection peer w-fit flex items-center text-fblack container-shadow gap-x-4 container-rg py-2 px-4 rounded-md cursor-pointer">
            <span class="text-md lg:text-lg">${this.activeProps}</span>
            <i class="fa fa-chevron-down text-fblack"></i>
        </div>
        <div class="target-selection hidden peer-hover:block hover:block w-fit fixed z-10 text-fblack container-shadow container-rg rounded-md cursor-pointer">
            <ul class="w-[140px] flex flex-col text-fblack text-md lg:text-lg">
                ${
                    String(this.__daftar.map((val) => {
                        return `
                            <li class="filter-list flex px-4 py-2 hover:bg-[#F2F2F2] justify-between items-center">
                                <span>${val}</span>
                                ${this.activeProps == val ? '<i class="fa fa-check text-sm"></i>' : ''}
                            </li>
                        `;
                    })).replace(/,/g, '')
                }
            </ul>
        </div>
        `;
    }
}
customElements.define('filter-selection', FilterSelection);
