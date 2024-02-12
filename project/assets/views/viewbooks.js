import DataSource from "../data/datasource.js";
import { FadeIn } from '../js/animation.js';
import '../components/filterselection.js';
import '../components/categoriesbar.js';

class ViewBooksPage extends HTMLElement {
    constructor(){
        super();
        this.stateSort = true;
        this.stateActive = this.attributes.category ? this.attributes.category.value : 'Semua buku';
        this.stateFilter = 'Populer';
    }
    setStateActive(key){
        this.stateActive = key;
        this._render();
    }
    setStateFilter(key){
        this.stateFilter = key;
        this._render();
    }
    toogleStateSort(){
        this.stateSort = !this.stateSort;
        this._render();
    }
    connectedCallback() {
        this._render();
    }
    _render(){
        switch(this.stateFilter){
            case 'Populer':
                this.__lists = this.stateSort ? DataSource.getPopular(10, true, this.stateActive) : DataSource.getPopular(10, false, this.stateActive);
                break;
            case 'Rating':
                this.__lists = this.stateSort ? DataSource.getRating(10, true, this.stateActive) : DataSource.getRating(10, false, this.stateActive);
                break;
            case 'Terbaru':
                this.__lists = this.stateSort ? DataSource.getNewest(10, true, this.stateActive) : DataSource.getNewest(10, false, this.stateActive);
                break;
            default:
                this.__lists = this.stateSort ? DataSource.getPopular(10, true, this.stateActive) : DataSource.getPopular(10, false, this.stateActive);
                break;
        }
        this.innerHTML = `
        <div class="w-full flex flex-col gap-y-8 lg:gap-y-14 py-8 lg:py-10">
            <div class="w-full flex justify-between items-center px-5 lg:px-24">
                <filter-selection stateFilter="${this.stateFilter}"></filter-selection>
                <div class="w-fit hidden-m">
                    <categories-bar stateActive="${this.stateActive}"></categories-bar>
                </div>
                <div class="text-2xl flex gap-x-6">
                    <i class="fa fa-sort-alpha-down sort-button ${this.stateSort ? 'text-primary' : ''}"></i>
                    <i class="fa fa-sort-alpha-up sort-button ${!this.stateSort ? 'text-primary' : ''}"></i>
                </div>
            </div>
            <div class="lg:hidden w-full px-5">
                <categories-bar stateActive="${this.stateActive}"></categories-bar>
            </div>
            ${
                this.__lists.length > 0 ?
                `
                <div class="books-container w-full grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-y-14">
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
                : `
                <div class="books-container w-full flex flex-col items-center justify-center gap-y-8 py-12">
                    <div>
                        <img 
                        class="animate-4 max-h-80"
                        src="../project/assets/public/not_found.png" 
                        alt="Illustration man looking for a book"/>
                    </div>
                    <span class="regular-text text-fblack">Tidak ditemukan buku!</span>
                </div>
                `
            }
        </div>
        `;
        this.querySelectorAll('.books').forEach((val, key) => val.style.backgroundImage = `url('${this.__lists[key].image}')`);
        this.querySelectorAll('.bar-button').forEach((val) => 
            val.addEventListener('click', () => {
                this.setStateActive(val.childNodes[1].innerText);
        }));
        this.querySelectorAll('.sort-button').forEach((val) => val.addEventListener('click', () => {
            this.toogleStateSort()
        }));
        this.querySelectorAll('.filter-list').forEach((val) => val.addEventListener('click', () => {
            console.log(val.childNodes[1]);
            this.setStateFilter(val.childNodes[1].innerText);
        }));
        new FadeIn(this, this.querySelector('.books-container')).setDuration(500).animate();
    }
}
customElements.define('viewbooks-page', ViewBooksPage);
