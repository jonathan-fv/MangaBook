let http = new XMLHttpRequest()
http.open('GET', './src/data/data.json', true)
http.send()


http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let cards = JSON.parse(this.responseText)
        let output = ""

        for (let item of cards){
            output += `
            <div class="card">
                <img src="./src/images/manga/${item.image}" class="card-img-top" alt="${item.titre}">
                <div class="card-body">
                    <h5 class="card-title">${item.titre}</h5>
                    <p class="card-text">${item.resume}</p>
                </div>
                <div class="link d-flex justify-content-around ">
                    <a href="./pages/book.html" class="btn btn-dark d-flex align-items-center"><span class="material-symbols-outlined">
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
        }
        document.querySelector("#dataContainer").innerHTML = output
    }
}

