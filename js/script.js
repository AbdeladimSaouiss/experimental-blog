const axios = require('axios');
var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=1014d84c0cfa4bb389fa7e71415bc8cc';

// var req = new Request(url);

// fetch(req)
//     .then(function(res){
//         return res.json();
//     }).then(function(data) {
//         console.log(data.articles);
//     })

function createNode(element) {
    return document.createElement(element);
}

function append(parent, child) {
    return parent.appendChild(child);
}

const cards = document.getElementById("cards") 
axios.get(url)
    .then(function(res) {
        console.log(res.data.articles);
        let articles = res.data.articles;  // Data comes from Url
        articles.map((article) => {
            let card = createNode("div"),
                cardImg = createNode('div'),
                img = createNode('img'),
                cardCt = createNode('div'),
                p = createNode('p');

            //Add classes
            card.classList.add('card');
            cardImg.classList.add('card-image');
            cardCt.classList.add('card-content');

            // Add content
            img.src = article.urlToImage;
            p.innerText = article.title; 

            append(cardCt, p);
            append(cardImg, img);
            append(card, cardImg);
            append(card, cardCt);
            append(cards, card)
        });
    })