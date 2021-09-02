
const numberOfBooks = document.getElementById('result-found');
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data))


    searchField.value = '';
}

const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
    const tenBooks = books.docs.slice(0, 10);

    numberOfBooks.innerHTML = `
    <h4 class="text-center text-primary">Result Found: ${books.numFound}</h4>
    `;

    tenBooks.forEach(book => {
        console.log(book);

        const div = document.createElement('div');
        div.classList.add('col')

        div.innerHTML = `
        <div class="card child-div">
        <div class="no-image">
          <img height='300px' src="https://covers.openlibrary.org/b/id/${book.cover_i ? book.cover_i : ''}-L.jpg" class="card-img-top" alt="...">
        </div>
          <div class="card-body text-color">
            <h5 class="card-title text-primary">Book Name: ${book.title ? book.title : 'Not found!'}</h5>
            <h5 class="card-title fw-light">Author Name: ${book.author_name ? book.author_name : 'Not found!'}</h5>
            <h5 class="card-title fw-light">Publish Year: ${book.first_publish_year ? book.first_publish_year : 'Not found!'}</h5>
            <h5 class="card-title fw-light ">Publisher: ${book.publisher ? book.publisher.slice(0, 1) : 'Not found!'}</h5>
          </div>
        </div>
        `;
        searchResult.appendChild(div);




    });






}



