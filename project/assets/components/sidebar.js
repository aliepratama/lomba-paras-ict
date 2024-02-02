import menu from "../data/menu.js";

class SideBar extends HTMLElement {
    constructor(){
        super();
        this.routerCallback = null;
    }
    connectedCallback() {
        this._render();
    }
    _render(){
        this.innerHTML = `
            <div class="fixed z-50 top-0 w-full bg-white h-[100vh] flex flex-col justify-between hidden-lg p-6">
                <div class="w-full flex flex-col">
                    <div class="w-full flex justify-between">
                        <span>Menu</span>
                        <i 
                        id="closeSidebar" 
                        aria-label="Kembali ke halaman"
                        title="Kembali"
                        class="fa fa-times button-span-rg"></i>
                    </div>
                    <ul class="w-full flex flex-col gap-y-7 py-7">
                    ${
                        String(menu.map((val) => {
                            return `
                                <li key="${val.key}" 
                                class="route-sidebar font-bold ${this.attributes.active.value == val.key ? 'button-span-rg-active' : 'button-span-rg'}">
                                ${val.title}</li>
                            `;
                        })).replace(/,/g, '')
                    }
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
        // this.querySelectorAll('.route-sidebar').forEach(val => val.addEventListener('click', () => {
        //     console.log(val)
        //     console.log(val.routerCallback)
        //     val.routerCallback(val.getAttribute('key'));
        // }));
    }
}
customElements.define('side-bar', SideBar);
