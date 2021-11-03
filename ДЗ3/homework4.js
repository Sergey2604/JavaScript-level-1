"use strict";

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            '1.jpg',
            '2.jpg'
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            '3.jpg'
        ]
    },
    {
        id: 8,
        price: 78,
    },
]
// let productPhoto = products.filter(function (prod) {
//     for (let photos in prod) {
//         if (prod.photos.length > 0) {
//             return prod;
//         }
//     }
// })

let productsPhoto = products.filter(function (prod) {
    return 'photos' in prod && prod.photos.length > 0;
});
console.log(productsPhoto);

let productsPrice = products.sort(function (price1,price2) {
   return price1.price - price2.price;
    }
);
console.log(productsPrice);