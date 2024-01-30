import '../components/searchbar.js';
import '../components/categoriessection.js';

class SearchPage extends HTMLElement {
    connectedCallback() {
        this._render();
    }
    _render(){
        this.innerHTML = `
        <div class="w-full h-40 bg-[#F9F9F9]"></div>
        <div class="-mt-10 w-full px-3 lg:px-20 flex flex-col gap-y-8 lg:gap-y-16 items-center">
            <div class="w-full lg:w-2/3">
                <search-bar></search-bar>
            </div>
            <div class="flex flex-col items-center gap-y-8">
                <h4 class="heading1">Pencarian buku</h4>
                <h4 class="regular-text text-fblack">
                    Silahkan ketik kata kunci judul buku yang Anda inginkan!
                </h4>
            </div>
            <categories-section></categories-section>
        </div>
        `;
    }
}
customElements.define('search-page', SearchPage);
