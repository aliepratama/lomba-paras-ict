class ViewBooksPage extends HTMLElement {
    connectedCallback() {
        this._render();
    }
    _render(){
        this.innerHTML = `
        <h1>View Books</h1>
        `;
    }
}
customElements.define('viewbooks-page', ViewBooksPage);
