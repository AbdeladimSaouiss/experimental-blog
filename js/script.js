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

axios.get(url)
    .then(function(res) {
        console.log(res.data.articles);
        res.data.articles.map(article => article)
    })