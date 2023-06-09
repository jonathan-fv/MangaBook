fetch('./src/data/data.json')
    .then(res => res.json())
    .then (data =>{
        data.forEach(item => {
            document.querySelector("#dataContainer").innerHTML += `
            <div class="card">
                <img src="./src/images/manga/${item.image}" class="card-img-top" alt="${item.titre}">
                <div class="card-body">
                    <h5 class="card-title">${item.titre}</h5>
                    <p class="card-text">${item.resume}</p>
                </div>
                <div class="link d-flex justify-content-around ">
                    <a href="book.html?isbn=${item.isbn}" class="btn btn-dark d-flex align-items-center"><span class="material-symbols-outlined">
                    info
                    </span> &nbsp;Détails</a>
                    <button class="btn btn-primary d-flex justify-content-around">
                    <span class="material-symbols-outlined">
                    library_books
                    </span> &nbsp;Mangathèque
                    </button>
                    <button class="btn btn-success d-flex justify-content-around">
                        <span class="material-symbols-outlined">
                    heart_plus
                    </span> &nbsp;Wishlist
                    </button>
                </div>
            </div>
            `
        });
    })

