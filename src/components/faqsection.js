import './accordion.js';

class FaqSection extends HTMLElement {
    constructor(){
        super();
        this.__count = 4
    }
    connectedCallback() {
        this._render();
    }
    _render(){
        let temp = `
        <div class="w-full flex flex-col items-center gap-y-12 lg:gap-y-12 px-3 lg:px-24 py-8 lg:py-16">
            <h4 class="heading1">Frequently Asked Questions</h4>
            <div class="w-full flex flex-col gap-y-12">
        `;
        for(let i = 0; i < this.__count; i++){
            temp += `<accordion-card index="${i}"></accordion-card>`;
        }
        temp += `</div></div>`;
        this.innerHTML = temp;
    }
}
customElements.define('faq-section', FaqSection);
