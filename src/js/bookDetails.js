const urlParams = new URLSearchParams(window.location.search)
const isbn = urlParams.get('isbn')

fetch('./src/data/data.json')
    .then(res => res.json())
    .then(data => {
        const book = data.find(item => item.isbn === isbn)
        console.log(book)
        document.querySelector("#container_book").innerHTML = `
            <div class="card card_book">
                <h2>${book.titre}</h2>
                <div class="infos d-flex align-self-start">
                    <div class="cover">
                        <img src="./src/images/manga/${book.image}" alt="${book.titre}">
                    </div>
                    <div class="details">
                        <p><span>Auteur:</span> ${book.auteur}</p>
                        <p><span>Editeur:</span> ${book.editeur}</p>
                        <p><span>Date de parution:</span> ${book.date_de_publication}</p>
                        <p><span>Format:</span> ${book.format}</p>
                        <p><span>Genre:</span> ${book.genre}</p>
                        <p><span>Nombre de pages:</span> ${book.nb_pages} pages</p>
                        <p><span>ISBN:</span> ${book.isbn}</p>
                    </div>
                </div>
                <div class="resume">
                    <p><span>Résumé:</span></p>
                    <p>${book.resume}</p>
                </div>
                <div class="add d-flex justify-content-end">
                    <button class="btn btn-primary d-flex justify-content-around align-items-center">
                        <span class="material-symbols-outlined">library_books</span> 
                        &nbsp;Mangathèque
                    </button>
                    <button class="btn btn-success d-flex justify-content-around align-items-center">
                        <span class="material-symbols-outlined">heart_plus</span> 
                        &nbsp;Wishlist
                    </button>
                </div>
            </div>
        `
    })