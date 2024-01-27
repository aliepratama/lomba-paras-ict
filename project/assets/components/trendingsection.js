class TrendingSection extends HTMLElement {
    constructor(){
        super();
        this.__lists = [
            {
                id: 1,
                image: './assets/public/book1.png',
                title: 'Filosofi Teras: Filsafat Yunani',
                author: 'Henry Manampiring',
                category: 'Filsafat',
                rating: '4.9',
            },
            {
                id: 2,
                image: './assets/public/book1.png',
                title: 'Filosofi Teras: Filsafat Yunani',
                author: 'Henry Manampiring',
                category: 'Filsafat',
                rating: '4.9',
            },
            {
                id: 3,
                image: './assets/public/book1.png',
                title: 'Filosofi Teras: Filsafat Yunani',
                author: 'Henry Manampiring',
                category: 'Filsafat',
                rating: '4.9',
            },
            {
                id: 4,
                image: './assets/public/book1.png',
                title: 'Filosofi Teras: Filsafat Yunani',
                author: 'Henry Manampiring',
                category: 'Filsafat',
                rating: '4.9',
            },
        ];
    }
    connectedCallback() {
        this._render();
    }
    _render(){
        this.innerHTML = `
        <div class="w-full flex flex-col gap-y-20 lg:gap-y-24 px-3 lg:px-24 py-8 lg:py-16">
            <div class="w-full flex justify-between">
                <h4 class="text-2xl lg:text-3xl font-serif text-fblack">On Trending</h4>
                <button class="text-xl lg:text-2xl text-primary">Lihat Semua</button>
            </div>
            <div class="swiper w-full flex justify-between items-center">
                <button class="slider-button swiper-button-prev">
                    <i class="fa fa-angle-left text-2xl lg:text-4xl"></i>
                </button>
                <div class="swiper-wrapper w-2/3 lg:w-full flex flex-row justify-between -mx-8">
                ${
                String(this.__lists.map((val) => {
                    return `
                    <div 
                        class="swiper-slide w-fit flex-col px-9 py-7 group cursor-pointer container-rg container-shadow rounded-[40px] items-center gap-y-4 after:content-[attr(number)] badge-rating"
                        number="#${val.id}">
                        <div class="w-full flex justify-center">
                            <img 
                            class="max-w-[175px] lg:max-w-[230px]"
                            src="${val.image}" 
                            alt="Buku"/>
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
                <button class="slider-button swiper-button-next">
                    <i class="fa fa-angle-right text-2xl lg:text-4xl"></i>
                </button>
            </div>
        </div>
        `;
    }
}
customElements.define('trending-section', TrendingSection);
