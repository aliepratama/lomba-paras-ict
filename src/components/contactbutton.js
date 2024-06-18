class ContactButton extends HTMLElement {
    connectedCallback() {
        this._render();
    }
    _render(){
        this.innerHTML = `
            <button class="w-fit group fixed bottom-8 right-8 z-40 container-rg container-shadow p-4 rounded-full text-primary flex items-center gap-x-4 transition-all">
                <i class="fa fa-headset text-3xl"></i>
                <span class="transition-all hidden opacity-0 group-hover:block group-hover:opacity-100">Butuh Bantuan?</span>
            </button>
        `;
        // const button = this.querySelector('button')
        // const text = document.createElement('span');
        // text.innerHTML = 'Butuh Bantuan?';
        // button.addEventListener('mouseover', () => {
        //     button.animate([
        //         {width:}
        //     ], {duration: 500})
        //     button.appendChild(text);
        // });
        // button.addEventListener('mouseleave', () => {
        //     button.removeChild(text);
        // });
    }
}
customElements.define('contact-button', ContactButton);
