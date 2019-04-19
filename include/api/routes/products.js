const express = require('express');
const route = express.Router();

// http://localhost:3001/api/products/
route.get('/', (req, res, next) => {
    res.status(200).json([
        {id: 1, image_urls: "images/books/petermay-coffinroad.jpg", author: "Peter May", title: "Coffin Road", category: "Pocket", lang: "en", price: 99, instock: 100, instockdate: new Date("2019-03-05"), rating: 1.3, totalratings: 12, quantity: 1},
        {id: 2, image_urls: "images/books/petermay-entryisland.jpg", author: "Peter May", title: "Entry Island", category: "Inbunden", lang: "en", price: 299, instock: 90, instockdate: new Date("2019-03-04"), rating: 2.5, totalratings: 20, quantity: 1},
        {id: 3, image_urls: "images/books/petermay-ranishtweed.jpg", author: "Peter May", title: "Ranish Tweed", category: "Ljudbok", lang: "en", price: 199, instock: 80, instockdate: new Date("2019-03-03"), rating: 3.7, totalratings: 5, quantity: 1},
        {id: 4, image_urls: "images/books/jeffreyarcher-bestkeptsecret.jpg", author: "Jeffrey Archer", title: "Best Kept Secret", category: "Pocket", lang: "en", price: 149, instock: 70, instockdate: new Date("2019-03-02"), rating: 2.3, totalratings: 45, quantity: 1},
        {id: 5, image_urls: "images/books/jeffreyarcher-headsyouwin.jpg", author: "Jeffrey Archer", title: "Heads You Win", category: "Inbunden", lang: "en", price: 299, instock: 200, instockdate: new Date("2019-03-02"), rating: 4.1, totalratings: 30, quantity: 1},
        {id: 6, image_urls: "images/books/jeffreyarcher-thiswasaman.jpg", author: "Jeffrey Archer", title: "This Was A Man", category: "Ljudbok", lang: "en", price: 299, instock: 30, instockdate: new Date("2019-03-06"), rating: 4.0, totalratings: 8, quantity: 1},
        {id: 7, image_urls: "images/books/danbrown-angelsanddemons.jpg", author: "Dan Brown", title: "Angels And Demons", category: "Pocket", lang: "en", price: 99, instock: 300, instockdate: new Date("2019-03-06"), rating: 5, totalratings: 1, quantity: 1},
        {id: 8, image_urls: "images/books/danbrown-deceptionpoint.jpg", author: "Dan Brown", title: "Deception Point", category: "Inbunden", lang: "en", price: 399, instock: 2300, instockdate: new Date("2019-03-06"), rating: 3.0, totalratings: 23, quantity: 1},
        {id: 9, image_urls: "images/books/danbrown-origin.jpg", author: "Dan Brown", title: "Origin", category: "Ljudbok", lang: "en", price: 199, instock: 300, instockdate: new Date("2019-03-10"), rating: 1.7, totalratings: 78, quantity: 1},
        {id: 10, image_urls: "images/books/stieglarsson-thegirlwhokickedthehornetsnest.jpg", author: "Stieg Larsson", title: "The Girl Who Kicked The Hornets Nest", category: "Pocket", lang: "en", price: 149, instock: 67, instockdate: new Date("2019-03-10"), rating: 4.6, totalratings: 6, quantity: 1},
        {id: 11, image_urls: "images/books/stieglarsson-thegirlwhoplayedwithfire.jpg", author: "Stieg Larsson", title: "The Girl Who Played With Fire", category: "Inbunden", lang: "en", price: 239, instock: 67, instockdate: new Date("2019-03-10"), rating: 4.7, totalratings: 64, quantity: 1},
        {id: 12, image_urls: "images/books/stieglarsson-thegirlwiththedragontattoo.jpg", author: "Stieg Larsson", title: "The Girl With The Dragon Tattoo", category: "Ljudbok", lang: "en", price: 150, instock: 67, instockdate: new Date("2019-03-10"), rating: 2.0, totalratings: 29, quantity: 1},
        {id: 13, image_urls: "images/books/fredrikbackman-brittmarievarhar.jpg", author: "Fredrik Backman", title: "Britt Marie Var Här", category: "Pocket", lang: "sv", price: 79, instock: 79, instockdate: new Date("2019-03-10"), rating: 2.4, totalratings: 8, quantity: 1},
        {id: 14, image_urls: "images/books/fredrikbackman-enmansomheterove.jpg", author: "Fredrik Backman", title: "En Man Som Heter Ove", category: "Inbunden", lang: "sv", price: 120, instock: 67, instockdate: new Date("2019-03-10"), rating: 1.9, totalratings: 9, quantity: 1},
        {id: 15, image_urls: "images/books/fredrikbackman-minmormorhalsarochsagerforlat.jpg", author: "Fredrik Backman", title: "Min Mormor Hälsar Och Säger Förlåt", category: "Ljudbok", lang: "sv", price: 89, instock: 67, instockdate: new Date("2019-03-10"), rating: 1.3, totalratings: 10, quantity: 1},
        {id: 16, image_urls: "images/books/kenfollett-aplacecalledfreedom.jpg", author: "Ken Follett", title: "A Placed Called Freedom", category: "Ljudbok", lang: "sv", price: 39, instock: 31, instockdate: new Date("2019-03-10"), rating: 1.1, totalratings: 17, quantity: 1},
        {id: 17, image_urls: "images/books/kenfollett-fallofgiants.jpg", author: "Ken Follett", title: "Fall Of Giants", category: "Ljudbok", lang: "sv", price: 89, instock: 58, instockdate: new Date("2019-03-10"), rating: 4.9, totalratings: 51, quantity: 1},
        {id: 18, image_urls: "images/books/kenfollett-thepillarsoftheearth.jpg", author: "Ken Follett", title: "The Pillars Of TheEarth", category: "Inbunden", lang: "sv", price: 199, instock: 67, instockdate: new Date("2019-03-10"), rating: 1, totalratings: 123, quantity: 1},
        {id: 19, image_urls: "images/books/janguillou-brobyggarna.jpg", author: "Jan Guillou", title: "Brobyggarna", category: "Inbunden", lang: "sv", price: 399, instock: 27, instockdate: new Date("2018-03-10"), rating: 4.5, totalratings: 110, quantity: 1},
        {id: 20, image_urls: "images/books/janguillou-dandy.jpg", author: "Jan Guillou", title: "Dandy", category: "Inbunden", lang: "sv", price: 399, instock: 89, instockdate: new Date("2019-01-10"), rating: 4.1, totalratings: 80, quantity: 1},
        {id: 21, image_urls: "images/books/janguillou-mellanrottochsvart.jpg", author: "Jan Guillou", title: "Mellan Rött Och Svart", category: "Ljudbok", lang: "sv", price: 299, instock: 16, instockdate: new Date("2016-03-10"), rating: 4.0, totalratings: 39, quantity: 1}
       ]);
});

module.exports = route;