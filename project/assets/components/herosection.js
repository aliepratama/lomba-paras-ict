class HeroSection extends HTMLElement {
    connectedCallback() {
        this._render();
    }
    _render(){
        this.innerHTML = `
            <div class="flex justify-between items-center px-3 lg:px-24 py-8 lg:py-16">
                <div class="flex flex-col gap-y-6 lg:gap-y-12">
                    <div class="flex flex-col gap-y-4 lg:gap-y-6 items-center lg:items-start">
                        <h1 class="heading1">
                            Pusat pencarian buku digital, Tingkatkan 
                            <span class="text-primary">budaya membaca.</span>
                        </h1>
                        <h4 class="regular-text text-fblack">
                            Mencari buku yang Anda inginkan dalam beberapa sentuhan saja!
                        </h4>
                    </div>
                    <div class="flex gap-x-2 lg:gap-x-7 w-full justify-between">
                        <div class="w-full flex items-center justify-center input-text-rg px-4 py-3 lg:py-5 lg:px-6 gap-x-4">
                            <input 
                                id="search-input" 
                                class="w-full regular-text text-left text-lblack prevent-input-text" 
                                type="text" 
                                placeholder="Contoh: Laskar Pelangi"
                                aria-label="Masukkan kata kunci buku"
                                title="Input Kata Kunci"/>
                            <label for="search-input" aria-labelledby="search-input">
                                <i class="fa fa-search regular-text text-left text-lblack"></i>
                            </label>
                        </div>
                        <button 
                            class="flex button-fill-rg regular-text text-left px-4 py-3 lg:p-5 gap-x-4 items-center"
                            aria-label="Cari dengan kata kunci"
                            title="Cari">
                            <i class="fa fa-search"></i>
                            <span>Cari</span>
                        </button>
                    </div>
                </div>
                <div class="hidden-m">
                    <img 
                        class="max-h-80"
                        src="../project/assets/public/hero_image.png" 
                        alt="Illustration woman read a book"/>
                </div>
            </div>
        `;
    }
}
customElements.define('hero-section', HeroSection);
