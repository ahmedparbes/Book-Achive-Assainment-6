/*  */

/* search */
const searchBox = () => {
    const searchField = document.getElementById('input-field');
    const value = searchField.value;
    searchField.value = '';
    const url = `http://openlibrary.org/search.json?q=${value}`
    fetch(url)
        .then(res => res.json())
        .then(data => loadBooks(data.docs))
}

/* load book here */
const loadBooks = books => {

    /* number of result found */

    let len = books.length;
    const findResult = document.getElementById('find-result');
    const value = findResult.innerText;
    const previousBalanceTotal = value;
    const totalResultFound = 'Total Result Found' + ' ' + len;
    findResult.innerText = totalResultFound;

    /* number of result found  end Here*/

    for (let i = 0; i <= 10; i++) {
        const displayDetails = document.getElementById('details');
        const result = books[i];
        const url = `https://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg`
        fetch(url)
            .then(res => res.json)
            .then(data => console.log(data))

        /* load book resourse on UI */

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

/* load book resourse on UI end here*/