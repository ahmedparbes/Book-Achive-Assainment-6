const searchBox = () => {
    const searchField = document.getElementById('input-field');
    const value = searchField.value;
    searchField.value = '';
    const url = `http://openlibrary.org/search.json?q=${value}`
    fetch(url)
        .then(res => res.json())
        .then(data => loadBooks(data.docs))
}

const loadBooks = books => {

    //result found
    let len = books.length;
    console.log('Result Found', len);


    for (let i = 0; i <= 10; i++) {
        const displayDetails = document.getElementById('details');
        const result = books[i];
        console.log(result);
        const url = `https://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg`
        fetch(url)
            .then(res => res.json)
            .then(data => console.log(data))

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            
            <div class="card h-100">
            <img src="${url}" class="card-img-top" alt="...">
            <div class="card-body">
               Book Name : <h5 class="card-title">${result.title}</h5>
               <hr>
               Book Author:  <h6 class="card-text">${result.author_name}</h6>
              <hr>
               Book Publisher:  <h6 class="card-text">${result.publisher}</h6>
              <hr>
              First Published <h6>${result.first_publish_year}</h6>
              <hr>
            </div>
        </div>
            `;
        displayDetails.appendChild(div);

    }
}