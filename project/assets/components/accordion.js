import { FadeInDown } from "../js/animation.js";

class Accordion extends HTMLElement {
    constructor(){
        super();
        this.__stateOpen = false;
        this.__qna = [
            {
                question: 'Bagaimana cara mencari buku disini?',
                answer: 'Untuk mencari buku, Anda dapat menggunakan fitur pencarian di bagian atas halaman utama. Cukup ketik judul, penulis, atau kata kunci terkait, dan hasilnya akan ditampilkan secara langsung.',
            },
            {
                question: 'Apakah perlu akun untuk mengakses koleksi buku?',
                answer: 'Tidak, Anda tidak perlu memiliki akun untuk melakukan pencarian buku. Namun, untuk mengakses fitur lain seperti menyimpan buku favorit atau memberikan ulasan, Anda akan perlu membuat akun.',
            },
            {
                question: 'Bagaimana cara akses ke buku yang ingin dibaca?',
                answer: 'Setelah Anda menemukan buku yang ingin dibaca, Anda dapat langsung mengaksesnya dengan mengklik tautan atau ikon buku tersebut. Beberapa buku mungkin tersedia untuk dibaca secara langsung, sementara yang lain mungkin memerlukan peminjaman atau langganan.',
            },
            {
                question: 'Apakah ada biaya untuk mengakses buku disini?',
                answer: 'Kebanyakan buku yang tersedia di perpustakaan digital kami dapat diakses secara gratis. Namun, ada beberapa buku yang mungkin memiliki biaya sewa atau pembelian, yang akan ditampilkan dengan jelas sebelum Anda mengonfirmasi transaksi.',
            },
        ];
    }
    toogleStateOpen(){
        this.__stateOpen = !this.__stateOpen;
        this._render();
    }
    connectedCallback(){
        this._render();
    }
    _render(){
        const indexProps = this.attributes.index.value;
        this.innerHTML = `
            <div class="w-full flex flex-col gap-y-8 border-b-2 border-b-slate-200 py-8 transition-all">
                <div class="w-full flex justify-between items-center">
                    <span class="button-accordion text-xl lg:text-3xl font-serif text-fblack cursor-pointer hover:underline">${this.__qna[indexProps].question}</span>
                    <div class="w-fit">
                        <button class="button-accordion button-fill-rg aspect-square transition-all">
                            <i class="fa ${this.__stateOpen ? 'fa-minus' : 'fa-plus'}"></i>
                        </button>
                    </div>
                </div>
                <div class="${this.__stateOpen ? '' : 'hidden'}">
                    <p class="accordion-text text-lg lg:text-xl text-fblack">${this.__qna[indexProps].answer}</p>
                </div>
            </div>
        `;
        this.querySelectorAll('.button-accordion').forEach(val => val.addEventListener('click', () => {
            this.toogleStateOpen();
            new FadeInDown(this.querySelector('.accordion-text')).animate();
        }));
    }
}
customElements.define('accordion-card', Accordion);
