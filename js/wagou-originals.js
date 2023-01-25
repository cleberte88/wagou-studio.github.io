let vitrine = document.createElement('div');
vitrine.setAttribute('id', 'vitrine');


let items = [
    {
        id: 1,
        name: 'William',
        description: 'Animador e pós produtor da Wagou',
        image: {
            src: "../img/william.jpeg"
        },
        date: '00/00/0001'
    },
    {
        id: 2,
        name: 'Wilson',
        description: 'Animador e desenvolvedor Front-End',
        image: {
            src: "../img/foto do wilson.jpg"
        },
        date: '00/00/0002'
    },
    {
        id: 3,
        name: 'Cleberte',
        description: 'Desenvolvedor Front-End',
        image: {
            src: "../img/cleberte.jpeg"
        },
        date: '12/12/2000'
    }
]

// create HTML elements for each item
for (let i = 0; i < items.length; i++) {
    let item = document.createElement('div');
    item.setAttribute('class', 'item');

    let img = document.createElement('img');
    img.setAttribute('src', items[i].image.src);
    img.setAttribute('alt', items[i].name);
    img.setAttribute('class', 'img-item');
    item.appendChild(img);

    let info = document.createElement('div');
    info.classList.add('description-image')
    info.setAttribute('class', 'info');
    info.style.display = 'none';

    let title = document.createElement('h3');
    let titleText = document.createTextNode(items[i].name);
    title.appendChild(titleText);
    info.appendChild(title);

    let desc = document.createElement('p');
    let descText = document.createTextNode(items[i].description);
    desc.appendChild(descText);
    info.appendChild(desc);

    let date = document.createElement('p');
    let linkText = document.createTextNode(items[i].date);
    date.appendChild(linkText);
    info.appendChild(date);
    item.appendChild(info);

    item.addEventListener('mouseover', function () {
        item.querySelector('.info').style.display = 'block';
    });

    item.addEventListener('mouseleave', function () {
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



//criação dinâmica da parte de imagens dispostas da página

let imgDesc = [
    {
        id: 1,
        name: 'Item 1',
        description: 'Teste de descrição do original',
        image: '../img/cleberte.jpeg',
        urlPath: "../reel.html"
    },
    {
        id: 2,
        name: 'Item 2',
        description: 'Description of Item 2',
        image: '../img/foto do wilson.jpg',
        urlPath: "../reel.html"
    },
    {
        id: 3,
        name: 'Item 3',
        description: 'Description of Item 3',
        image: '../img/william.jpeg',
        urlPath: "../reel.html"
    }
];

let section = document.getElementById('container-originals-content');
let divAll = document.querySelector('.divAll-content');
let title = document.createElement('h2');
title.setAttribute('class', 'title-section');
title.innerHTML = 'Mais sobre nossos originals';
section.appendChild(title);
section.appendChild(divAll);

imgDesc.forEach(function (item, index) {
    let div = document.createElement('div');
    div.setAttribute('class', 'div-img-desc');
    let img = document.createElement('img');
    let p = document.createElement('p');

    function redirectCallback() {
        window.location.replace(item.urlPath);
        console.log(`Index ${index} funcionou`);
    }

    img.src = item.image;
    img.alt = item.name;
    img.onclick = redirectCallback;

    p.onclick = redirectCallback;

    p.innerHTML = item.description;

    div.appendChild(img);
    div.appendChild(p);
    divAll.appendChild(div);
});