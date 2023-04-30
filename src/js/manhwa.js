const urlParams = new URLSearchParams(window.location.search)
const genre = urlParams.get('genre')

fetch('./src/data/data.json')
    .then(res=> res.json())
    .then(data =>{
        const filterData = data.filter(item =>item.genre === 'Manhwa')
        filterData.forEach(element => {
            document.querySelector("#dataContainer").innerHTML += `
            <div class="card">
                <img src="./src/images/manga/${element.image}" class="card-img-top" alt="${element.titre}">
                <div class="card-body">
                    <h5 class="card-title">${element.titre}</h5>
                    <p class="card-text">${element.resume}</p>
                </div>
                <div class="link d-flex justify-content-around ">
                    <a href="book.html?isbn=${element.isbn}" class="btn btn-dark d-flex align-items-center"><span class="material-symbols-outlined">
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