class FaqSection extends HTMLElement {
    constructor(){
        super();
        this.__qna = [
            {
                question: 'Bagaimana cara mencari buku di perpustakaan digital ini?',
                answer: 'Untuk mencari buku, Anda dapat menggunakan fitur pencarian di bagian atas halaman utama. Cukup ketik judul, penulis, atau kata kunci terkait, dan hasilnya akan ditampilkan secara langsung.',
            },
            {
                question: 'Apakah saya perlu memiliki akun untuk mengakses koleksi buku?',
                answer: 'Tidak, Anda tidak perlu memiliki akun untuk melakukan pencarian buku. Namun, untuk mengakses fitur lain seperti menyimpan buku favorit atau memberikan ulasan, Anda akan perlu membuat akun.',
            },
            {
                question: 'Bagaimana cara mendapatkan akses ke buku-buku yang ingin saya baca?',
                answer: 'Setelah Anda menemukan buku yang ingin dibaca, Anda dapat langsung mengaksesnya dengan mengklik tautan atau ikon buku tersebut. Beberapa buku mungkin tersedia untuk dibaca secara langsung, sementara yang lain mungkin memerlukan peminjaman atau langganan.',
            },
            {
                question: 'Apakah ada biaya untuk mengakses buku di perpustakaan digital ini?',
                answer: 'Kebanyakan buku yang tersedia di perpustakaan digital kami dapat diakses secara gratis. Namun, ada beberapa buku yang mungkin memiliki biaya sewa atau pembelian, yang akan ditampilkan dengan jelas sebelum Anda mengonfirmasi transaksi.',
            },
            {
                question: 'Apakah saya dapat mengunduh buku-buku dari perpustakaan digital ini?',
                answer: 'Ya, beberapa buku mungkin tersedia untuk diunduh secara langsung ke perangkat Anda. Fitur ini bergantung pada kebijakan penerbit dan hak cipta yang terkait dengan buku tersebut.',
            },
            {
                question: 'Bagaimana jika saya tidak dapat menemukan buku yang saya cari?',
                answer: 'Jika Anda tidak dapat menemukan buku yang Anda cari, Anda dapat menghubungi tim dukungan kami melalui formulir kontak yang tersedia di situs web kami.',
            },
        ];
    }
    connectedCallback() {
        this._render();
    }
    _render(){
        this.innerHTML = `
        <div class="w-full flex flex-col items-center gap-y-12 lg:gap-y-16 px-3 lg:px-24 py-8 lg:py-16">
            <h4 class="heading1">Frequently Asked Questions</h4>
            <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-12 place-content-between">
            ${
                String(this.__qna.map((val) => {
                    return `
                    <div class="flex flex-col gap-y-8">
                        <h4 class="w-full lg:max-w-[596px] text-2xl lg:text-3xl font-serif text-fblack">
                            ${val.question}
                        </h4>
                        <p class="w-full lg:max-w-[596px] text-md lg:text-xl text-fblack">
                            ${val.answer}
                        </p>
                    </div>
            `;})).replace(/,/g, '')
            }
            </div>
        </div>
        `;
    }
}
customElements.define('faq-section', FaqSection);
