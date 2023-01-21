const imagens = [
    { src: '../works-uilson_and_william/teste-1.jpg', alt: 'Image 1', title: 'Title 1' },
    { src: '../works-uilson_and_william/teste-2.jpg', alt: 'Image 2', title: 'Title 2' },
    { src: '../works-uilson_and_william/teste-3.jpg', alt: 'Image 3', title: 'Title 3' },
    { src: '../works-uilson_and_william/teste-4.jpg', alt: 'Image 4', title: 'Title 4' },
    { src: '../works-uilson_and_william/teste-5.jpg', alt: 'Image 5', title: 'Title 5' },
    { src: '../works-uilson_and_william/teste-6.jpg', alt: 'Image 6', title: 'Title 6' },
    { src: '../works-uilson_and_william/teste-7.jpg', alt: 'Image 7', title: 'Title 7' }
];


const container = document.querySelector('.carousel');

imagens.forEach(function(image) {
    var img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    img.title = image.title;
    img.classList.add('original-image');
    container.appendChild(img);
  });

  window.onload = function() {
    let current = 0;
    let images = carousel.getElementsByTagName("img");
    images[current].style.display = "block";

    setTimeout(function(){
        setInterval(function() {
            for (var i = 0; i < images.length; i++) {
                images[i].style.display = "none";
            }
            current = (current != images.length - 1) ? current + 1 : 0;
            images[current].style.display = "block";
        }, 2000);
    }, 2000)
}