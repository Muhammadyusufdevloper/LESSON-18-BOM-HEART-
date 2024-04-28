const API__URL = "https://dummyjson.com";
const cardWrapper = document.querySelector(".card__wrapper")

async function getCard(api) {
    let paramp = new URLSearchParams(window.location.search)
    let id = paramp.get("id")
    let data = await fetch(`${api}/products/${id}`)
    data
        .json()
        .then(res => mapCard(res))
        .catch(error => console.log(error))

}

getCard(API__URL)

function mapCard(params) {
    let image = params.images.map((i)=>`<img src=${i} alt="images">`)
    cardWrapper.innerHTML = `
    <div class="card__img-cards">
        <div class="card">
            <img src=${params.thumbnail} alt="">
            <div class="card__imges-card__min-card">${image}</div>
        </div>
    </div>
    <div class="card__info-card">
        <h3 class="card__info-card__title">${params.title}</h3>
        <div class="card__info-card__part">
        <p class="card__info-card__desc__price">$${params.price}</p>
            <div class="card__info-card__part__reting">
                <img src="../assets/image/yuldiz.svg" alt="yulduz img">
                <p class="card__info-card__desc">${params.rating}</p>
            </div>
        </div>
        <div class="card__info-card__desc__card">
            <span>Short Description:</span>
            <p class="card__info-card__desc">${params.description}</p>
        </div>
        <p class="card__info-card__desc"><span>Discount Percentage:</span> ${params.discountPercentage}</p>
        <p class="card__info-card__desc"><span>Stock:</span> ${params.stock}</p>
        <p class="card__info-card__desc"><span>Category:</span> ${params.category}</p>
        <p class="card__info-card__desc"><span>Brand:</span> ${params.brand}</p>
    </div>
    
    `
}