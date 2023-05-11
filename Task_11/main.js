// Dark Theme for site

const Theme = {

    i: 0,

    changeTheme() {
        const darkMode = document.querySelector("html")

        if (Theme.i == 0) {
            Theme.i = 1;
            darkMode.setAttribute("data-bs-theme", "");
        } else {
            Theme.i = 0;
            darkMode.setAttribute("data-bs-theme", "dark");
        }
    }
}

Theme.changeTheme();

const buttonTheme = document.getElementById("flexSwitchCheckDefault");
buttonTheme.addEventListener("click", Theme.changeTheme);

// Working with the cards

const cards = document.getElementById("cards");

const productsCards = {

    url: 'https://dummyjson.com/products/',
    limit: 9,
    skip: 0,

    loadCards() {
        let url = `${this.url}?limit=${this.limit}&skip=${this.skip}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const products = data.products;
                products.forEach(products => {
                    this.addCards(products);
                });
            });
        this.skip += this.limit;
    },

    addCards(products) {
        cards.innerHTML += `<div class="col">
                                <div class="card h-100">
                                    <img src="${products.images[0]}" class="card-img-top rounded-3" alt="${products.title}">
                                    <div class="card-body">
                                        <h5 class="card-title">${products.title}</h5>
                                        <p class="card-text">${products.description}</p>
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${products.id}">
                                            Buy now
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="modal fade" id="${products.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="staticBackdropLabel">${products.title}</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        Brand: ${products.brand}  <br>
                                        Price: ${products.price}$ <br>
                                        Stock: ${products.stock}  <br>
<br>
                                            <div id="carouselExample" class="carousel slide">
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                        <img src="${products.images[1]}" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="${products.images[2]}" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="${products.images[3]}" class="d-block w-100" alt="...">
                                                    </div>
                                                </div>
                                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button>
                                            </div>

                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Buy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>`
    }

}

productsCards.loadCards();

const buttonCards = document.getElementById("buttonCards");
buttonCards.onclick = () => productsCards.loadCards();