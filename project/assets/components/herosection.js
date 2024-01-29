import './searchbar.js';

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
                    <search-bar></search-bar>
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
