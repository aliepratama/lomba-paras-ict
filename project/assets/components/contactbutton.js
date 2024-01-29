class ContactButton extends HTMLElement {
    connectedCallback() {
        this._render();
    }
    _render(){
        this.innerHTML = `
            <button class="w-fit fixed bottom-8 right-8 z-40 container-rg container-shadow p-4 rounded-full text-primary">
                <i class="fa fa-headset text-3xl"></i>
            </button>
        `;
    }
}
customElements.define('contact-button', ContactButton);
