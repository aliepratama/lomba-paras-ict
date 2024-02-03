class SearchBar extends HTMLElement {
    connectedCallback(){
        this._render();
    }
    _render(){
        this.innerHTML = `
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
        `;
    }
}
customElements.define('search-bar', SearchBar);
