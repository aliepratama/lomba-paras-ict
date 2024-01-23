class SideBar extends HTMLElement {
    connectedCallback() {
        this._render();
    }
    _render(){
        this.innerHTML = `
            <div class="fixed z-50 top-0 w-full bg-white h-[100vh] flex flex-col justify-between hidden-lg p-6">
                <div class="w-full flex flex-col">
                    <div class="w-full flex justify-between">
                        <span>Menu</span>
                        <i id="closeSidebar" class="fa fa-times button-span-rg"></i>
                    </div>
                    <ul class="w-full flex flex-col gap-y-7 py-7">
                        <li class="button-span-rg font-bold">Beranda</li>
                        <li class="button-span-rg font-bold">Direktori</li>
                        <li class="button-span-rg font-bold">Informasi</li>
                        <li class="button-span-rg font-bold">Masuk dengan akun</li>
                        <li class="button-span-rg font-bold">Daftar akun</li>
                    </ul>
                </div>
                <div>
                    <img
                        class="max-h-10" 
                        src="assets/public/logo.png" 
                        alt="Logo eLibrary"/>
                </div>
            </div>
        `;
    }
}
customElements.define('side-bar', SideBar);
