async function fakeStoreApi() {
  let response = await fetch('https://fakestoreapi.com/products');
  let data = await response.json();
  return data;
}
const divMain = document.querySelector('.main');
const mensClothing = document.querySelector('.men');
const womensClothing = document.querySelector('.women');

async function allItems() {
  fakeStoreApi().then((data) => console.log(data));
  return await fakeStoreApi();
}

const mensCategory = mensClothing.addEventListener('click', async () => {
  allItems().then((data) => {
    data.forEach((elem) => {
      if (elem.category === `men's clothing`) {
        console.log(elem.category);
        divMain.innerHTML += `<div class="main-cards">
        <div class="photo"><img src="${elem.image}" alt="" />
        </div>
        <p class="category">${elem.category}</p>
        <p class="title">${elem.title}</p>
        <p class="description">${elem.description}</p>
        <p class="price">${elem.price}</p>
        <p class="rating">${elem.rating.rate}
        </div>
        `;
      }
    });
  });
});

const womensCategory = womensClothing.addEventListener('click', () => {
  allItems().then((data) => {
    data.forEach((elem) => {
      if (elem.category === `women's clothing`) {
        console.log(elem.category);
        divMain.innerHTML += `<div class="main-cards">
        <div class="photo"><img src="${elem.image}" alt="" />
        </div>
        <p class="category">${elem.category}</p>
        <p class="title">${elem.title}</p>
        <p class="description">${elem.description}</p>
        <p class="price">${elem.price}</p>
        <p class="rating">${elem.rating.rate}
        </div>
        `;
      }
    });
  });
});
