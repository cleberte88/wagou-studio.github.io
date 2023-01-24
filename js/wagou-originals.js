// const imagens = [
//     { src: '../works-uilson_and_william/teste-1.jpg', alt: 'Image 1', title: 'Title 1', desc: 'teste', date: '00/00/0000' },
//     { src: '../works-uilson_and_william/teste-2.jpg', alt: 'Image 2', title: 'Title 2', desc: 'teste', date: '00/00/0000' },
//     { src: '../works-uilson_and_william/teste-3.jpg', alt: 'Image 3', title: 'Title 3', desc: 'teste', date: '00/00/0000' },
//     { src: '../works-uilson_and_william/teste-4.jpg', alt: 'Image 4', title: 'Title 4', desc: 'teste', date: '00/00/0000' },
//     { src: '../works-uilson_and_william/teste-5.jpg', alt: 'Image 5', title: 'Title 5', desc: 'teste', date: '00/00/0000' },
//     { src: '../works-uilson_and_william/teste-6.jpg', alt: 'Image 6', title: 'Title 6', desc: 'teste', date: '00/00/0000' },
//     { src: '../works-uilson_and_william/teste-7.jpg', alt: 'Image 7', title: 'Title 7', desc: 'teste', date: '00/00/0000' }
// ];


// const container = document.querySelector('.carousel');

// imagens.forEach(function (image) {
//     var img = document.createElement('img');
//     img.src = image.src;
//     img.alt = image.alt;
//     img.title = image.title;
//     img.classList.add('original-image');

//     var desc = document.createElement('p');
//     // desc.classList.add('description-image')
//     desc.innerHTML = `<h3>${image.title}</h3> <p>${image.desc}</p> <p>${image.date}</p>`;

//     container.appendChild(desc);
//     container.appendChild(img);
// });

// window.onload = function () {
//     let current = 0;
//     let images = carousel.getElementsByTagName("img");
//     images[current].style.display = "block";

//     setTimeout(function () {
//         setInterval(function () {
//             for (var i = 0; i < images.length; i++) {
//                 images[i].style.display = "none";
//             }
//             current = (current != images.length - 1) ? current + 1 : 0;
//             images[current].style.display = "block";
//         }, 2000);
//     }, 2000)
// }

// let descriptions = carousel.getElementsByTagName("p");
//     descriptions[current].style.display = "none";

//     setInterval(function() {
//         for (var i = 0; i < descriptions.length; i++) {
//             descriptions[i].style.display = "none";
//         }
//         current = (current != images.length - 1) ? current + 1 : 0;
//         images[current].style.display = "block";
//         descriptions[current].style.display = "block";
//     }, 2000);


let vitrine = document.createElement('div');
vitrine.setAttribute('id','vitrine');


let items = [
    {
        id:1,
        name: 'Item 1',
        description: 'Description of Item 1',
        image: 'https://via.placeholder.com/150',
        date: '00/00/0001'
    },
    {
        id:2,
        name: 'Item 2',
        description: 'Description of Item 2',
        image: 'https://via.placeholder.com/150',
        date: '00/00/0002'
    },
    {
        id:3,
        name: 'Item 3',
        description: 'Description of Item 3',
        image: 'https://via.placeholder.com/150',
        date: '00/00/0003'
    }
]

// create HTML elements for each item
for(let i = 0; i < items.length; i++) {
    let item = document.createElement('div');
    item.setAttribute('class', 'item');

    let img = document.createElement('img');
    img.setAttribute('src', items[i].image);
    img.setAttribute('alt', items[i].name);
    img.setAttribute('class', 'img-item');
    item.appendChild(img);

    let info = document.createElement('div');
    info.classList.add('description-image')
    info.setAttribute('class', 'info');
    info.style.display = 'none';

    let title = document.createElement('h3');
    // title.classList.add('description-image')
    let titleText = document.createTextNode(items[i].name);
    title.appendChild(titleText);
    info.appendChild(title);

    let desc = document.createElement('p');
    // desc.classList.add('description-image')
    let descText = document.createTextNode(items[i].description);
    desc.appendChild(descText);
    info.appendChild(desc);

    let date = document.createElement('p');
    // date.classList.add('description-image')
    // link.setAttribute('href',`/item/${ites[i].id}`);
    let linkText = document.createTextNode(items[i].date);
    date.appendChild(linkText);
    info.appendChild(date);
    item.appendChild(info);


    // let divAll = document.createElement('div');
    // divAll.classList.add('description-image');
    // divAll.appendChild(title);
    // divAll.appendChild(desc);
    // divAll.appendChild(date);

    item.addEventListener('mouseover', function() {
        item.querySelector('.info').style.display = 'block';
    });

    item.addEventListener('mouseleave', function() {
        item.querySelector('.info').style.display = 'none';
    });

    vitrine.appendChild(item);
}

document.body.appendChild(vitrine);

// Carousel functionality
let currentIndex = 0;
let itemsLength = items.length;

function showNextItem() {
    let items = document.querySelectorAll('.item');
    items.forEach(item => item.style.display = 'none');

    if (currentIndex === itemsLength - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    items[currentIndex].style.display = 'block';
}
setInterval(showNextItem, 2000);

let container = document.getElementById('carousel');
container.appendChild(vitrine);