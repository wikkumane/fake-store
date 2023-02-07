async function fakeStoreApi() {
  let response = await fetch('https://fakestoreapi.com/products');
  let data = await response.json();
  return data;
}

const url = 'https://fakestoreapi.com/products';
const divMain = document.querySelector('.main');
const mensClothing = document.querySelector('.men');
const womensClothing = document.querySelector('.women');
const electronics = document.querySelector('.elec');
const jewelry = document.querySelector('.jewelry');

async function allItems() {
  fakeStoreApi().then((data) => console.log(data));
  return await fakeStoreApi();
}

//mens category tab

const mensCategory = mensClothing.addEventListener('click', async () => {
  divMain.innerHTML = '';
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
        <p class="rating">&#11088;${elem.rating.rate}</p>
        </div>
        `;
      }
    });
  });
});

//womens category tab

const womensCategory = womensClothing.addEventListener('click', () => {
  divMain.innerHTML = '';
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
        <p class="rating">&#11088;${elem.rating.rate}</p>
        </div>
        `;
      }
    });
  });
});

//electronics category tab

const elecCategory = electronics.addEventListener('click', () => {
  divMain.innerHTML = '';
  allItems().then((data) => {
    data.forEach((elem) => {
      if (elem.category === 'electronics') {
        console.log(elem.category);
        divMain.innerHTML += `<div class="main-cards">
        <div class="photo"><img src="${elem.image}" alt="" />
        </div>
        <p class="category">${elem.category}</p>
        <p class="title">${elem.title}</p>
        <p class="description">${elem.description}</p>
        <p class="price">${elem.price}</p>
        <p class="rating">&#11088;${elem.rating.rate}</p>
        </div>
        `;
      }
    });
  });
});

// jewelry category tab

const jewelryCategory = jewelry.addEventListener('click', () => {
  divMain.innerHTML = '';
  allItems().then((data) => {
    data.forEach((elem) => {
      if (elem.category === 'jewelery') {
        console.log(elem.category);
        divMain.innerHTML += `<div class="main-cards">
        <div class="photo"><img src="${elem.image}" alt="" />
        </div>
        <p class="category">${elem.category}</p>
        <p class="title">${elem.title}</p>
        <p class="description">${elem.description}</p>
        <p class="price">${elem.price}</p>
        <p class="rating">&#11088;${elem.rating.rate}</p>
        </div>
        `;
      }
    });
  });
});

//local storage

// function setLocalData(key, data) {
//   let datatoSave = typeof data == 'object' ? JSON.stringify(data) : data;
//   localStorage.setItem(key, datatoSave);
// }

// function getLocalData(key) {
//   let dataToReturn;
//   dataToReturn = localStorage.getItem(key);
//   try {
//     dataToReturn = JSON.parse(dataToReturn);
//   } catch (e) {
//     dataToReturn = dataToReturn;
//   }
//   return dataToReturn;
// }

// function getDataFromStorage(url) {
//   return new Promise((resolve, reject) => {
//     const localData = getLocalData(url);
//     if (!localData) {
//       fetch(url)
//         .then((data) => {
//           data.json();
//         })
//         .then((data) => {
//           setLocalData(url, data);
//           resolve(data);
//         });
//     } else {
//       console.log('local storage');
//       resolve(localData);
//     }
//   });
// }
