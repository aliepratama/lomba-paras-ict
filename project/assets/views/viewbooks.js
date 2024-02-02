import '../components/filterselection.js';
import '../components/categoriesbar.js';

class ViewBooksPage extends HTMLElement {
    constructor(){
        super();
        this.stateSort = true;
    }
    toogleStateSort(){
        this.stateSort = !this.stateSort;
        this._render();
    }
    connectedCallback() {
        this._render();
    }
    _render(){
        this.innerHTML = `
        <div class="w-full flex justify-between items-center px-24 py-10">
            <filter-selection></filter-selection>
            <categories-bar></categories-bar>
            <div class="text-2xl flex gap-x-6">
                <i class="fa fa-sort-alpha-down sort-button ${this.stateSort ? 'text-primary' : ''}"></i>
                <i class="fa fa-sort-alpha-up sort-button ${!this.stateSort ? 'text-primary' : ''}"></i>
            </div>
        </div>
        <div></div>
        <h1>View Books</h1>
        `;
        this.querySelectorAll('.sort-button').forEach((val) => val.addEventListener('click', () => {
            this.toogleStateSort()
        }));
    }
}
customElements.define('viewbooks-page', ViewBooksPage);
