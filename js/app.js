const searchButton = document.getElementById('search-button')
const inputField = document.getElementById('input-field')

searchButton.addEventListener('click', function () {
    const search = inputField.value;
    const url = `http://openlibrary.org/search.json?q=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data.docs))
})

const displayResult = books => {

    // console.log(books);
    const displayDetails = document.getElementById('meal-details')
    books.forEach(book => {
        // const url = https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg
        const url = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        fetch(url)
            .then(res => res.json())
            .then(data => (data))
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
<div class="card h-100">
            <img src="${url}" class="card-img-top" alt="...">
            <div class="card-body">
               Book Name : <h5 class="card-title">${book.title}</h5>
              Book Author:  <p class="card-text">${book.author_name}</p>
            </div>
        </div>
`;
        displayDetails.appendChild(div);








        /* const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100">
            <img src="${url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">${book.author_name}</p>
            </div>
        </div>
`;
        displayDetails.appendChild(div) */
    })
}

/*  <div class="card">
        <img src="${url}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${book.author_name}</h5>
    <p class="card-text">${book.title}</p>
    </div> */
    // </div> 