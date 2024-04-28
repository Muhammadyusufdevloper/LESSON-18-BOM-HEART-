const prodactWrapper = document.querySelector(".prodact__wrapper");

let wishilst = JSON.parse(localStorage.getItem("wishilst")) || [];

function mapProdact(cardData) {
  let card = "";
  cardData.forEach((prodact) => {
    card += `
          <div class="prodact__cards" data-id="${prodact.id}">
              <div class="prodact__img-card">
                  <img   class="prodact-img" src=${prodact.thumbnail} alt="${prodact.title} img">
                  <div class="prodact__hover__btns">
                      <button class="prodact__shop-btn">
                          <img src="../assets/image/shopping1.svg" alt="Shoping img">
                      </button>
                      <button class="prodact__heart-btn">
                          <img src="../assets/image/heart.svg" alt="heart img">
                      </button>
                      <button class="prodact__sorch-btn">
                          <img src="../assets/image/sorch.svg" alt="sorch img">
                      </button>
                  </div>
              </div>
              <div class="prodact__info-card">
              <div class="prodact__info__rating-card">
                    <img src="../assets/image/yuldiz.svg" alt="yulduz img">
                    <span class="prodact__info__rating-text">${prodact.rating}</span>
              </div>
              <h3 class="prodact__info__title">${prodact.title}</h3>
              <p class="prodact__info__text">${prodact.description}</</p>
              <div class="prodact__info-card__part">
                  <span class="prodact__info__price">${prodact.price}$</</span>
                  <span class="prodact__info__price prodact__info__price__acsiya">875.54$</span>
              </div>
              </div>
          </div>
          `;
  });
  prodactWrapper.innerHTML = card;
}

mapProdact(wishilst);

const addToWishlist = (id) => {
  let wishilst = JSON.parse(localStorage.getItem("wishilst")) || [];
  updetWishilst = wishilst.filter((el) => el.id !== +id);
  localStorage.setItem("wishilst", JSON.stringify(updetWishilst));
  mapProdact(wishilst)
};

prodactWrapper.addEventListener("click", (e) => {
  if (e.target.className === "prodact-img") {
    let id = e.target.closest(".prodact__cards").dataset.id;
    window.open(`./pages/card.html?id=${id}`, "_self");
  } else if (e.target.className === "prodact__heart-btn") {
    let id = e.target.closest(".prodact__cards").dataset.id;
    addToWishlist(id);
  }
});
