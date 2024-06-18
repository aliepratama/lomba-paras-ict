import '../components/searchbar.js';
import '../components/categoriessection.js';
import DataSource from '../data/datasource.js';

class SearchPage extends HTMLElement {
    constructor() {
        super();
        this.__keyword = this.attributes.stateKeyword;
    }
    connectedCallback() {
        this._render();
    }
    _render(){
        this.__lists = this.__keyword ? DataSource.getKeyword(this.__keyword.value) : null;
        console.log(this.__lists);
        this.innerHTML = `
        <div class="w-full h-40 bg-[#F9F9F9]"></div>
        <div class="-mt-10 w-full px-3 lg:px-20 flex flex-col gap-y-8 lg:gap-y-16 items-center">
            <div class="w-full lg:w-2/3">
                <search-bar ${this.__keyword ? `key="${this.__keyword.value}"` : ''}></search-bar>
            </div>
            <div class="flex flex-col items-center gap-y-8">
                <h4 class="heading1">Pencarian ${this.__keyword ? this.__keyword.value : 'Buku'}</h4>
                <h4 class="regular-text text-fblack">
                    ${this.__keyword ? `Berikut hasil pencarian dari kata kunci ${this.__keyword.value}` : 'Silahkan ketik kata kunci judul buku yang Anda inginkan!'}
                </h4>
            </div>
            ${
                this.__keyword ? 
                `
                    <div class="w-full grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-y-14 py-8">
                    ${
                    String(this.__lists.map((val) => {
                        return `
                        <div 
                            class="w-fit flex-col px-9 py-7 group cursor-pointer container-rg container-shadow rounded-[40px] items-center gap-y-4 after:content-[attr(number)] badge-rating"
                            number="#${val.trend}">
                            <div class="w-full flex justify-center">
                                <div class="books w-[175px] h-[263px] lg:w-[230px] lg:h-[345px] bg-center bg-no-repeat bg-cover">
                                </div>
                            </div>
                            <div class="flex flex-col gap-y-4">
                                <div class="flex flex-col gap-y-2">
                                    <span class="max-w-[200px] lg:max-w-[264px] font-semibold text-xl lg:text-2xl prevent-overflow-text group-hover:underline">
                                        ${val.title}
                                    </span>
                                    <span class="max-w-[200px] lg:max-w-[264px] text-lg lg:text-xl prevent-overflow-text">
                                        ${val.author}
                                    </span>
                                </div>
                                <div class="flex gap-x-6">
                                    <div class="w-fit px-3 py-2 bg-[#FFD2DF] rounded-xl">
                                        <span class="text-lg lg:text-xl text-primary">
                                            ${val.category}
                                        </span>
                                    </div>
                                    <div class="w-fit flex items-center gap-x-2 text-primary">
                                        <i class="fa fa-star"></i>
                                        <span class="text-lg lg:text-xl">${val.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `;
                    })).replace(/,/g, '')
                    }
                </div>
                ` 
                : '<categories-section mode="full"></categories-section>'
            }
        </div>
        `;
        this.querySelectorAll('.books').forEach((val, key) => val.style.backgroundImage = `url('${this.__lists[key].image}')`);
    }
}
customElements.define('search-page', SearchPage);
