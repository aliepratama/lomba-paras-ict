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
                image: './assets/public/book2.png',
                title: 'Bintang',
                author: 'Tere Liye',
                category: 'Fiksi',
                rating: '4.8',
            },
            {
                id: 3,
                image: './assets/public/book3.png',
                title: 'Metode Penelitian: Kuantitatif, Kualitatif, dan Penelitian Gabungan (Edisi Pertama)',
                author: 'Prof. Dr. A. Muri Yusuf, M.Pd.',
                category: 'Sains',
                rating: '4.7',
            },
            {
                id: 4,
                image: './assets/public/book4.png',
                title: 'Metodologi Penelitian Hukum Islam (Edisi Revisi)',
                author: 'Dr. Faisal Ananda Arfa, M.A. dan Dr. Watni Marpaung, M.A.',
                category: 'Agama',
                rating: '4.7',
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
                <button class="slider-button swiper-button-next">
                    <i class="fa fa-angle-right text-2xl lg:text-4xl"></i>
                </button>
            </div>
        </div>
        `;
        this.querySelectorAll('.books').forEach((val, key) => val.style.backgroundImage = `url('${this.__lists[key].image}')`);
    }
}
customElements.define('trending-section', TrendingSection);
