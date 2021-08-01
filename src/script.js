const app = new Vue({
    el: '#input',
    data: {
        list: {
            date: [],
            order_type: [],
            market: [],
            size: [],
            price: [],
            fee: [],
            result: [],
        },
        date: null,
        order_type: null,
        market: null,
        size: null,
        price: null,
        fee: null,
        result: null,

    }
},
mounted() {
    if (localStorage.getItem(ls)) {
        list = JSON.parse(localStorage.getItem('ls'));
    }
},

methods: {
    addOrder() {
        //check it something typed
        if (!this.date && !this.order_type && !this.market && !this.size && !this.price && !this.fee && this.result) return;

        this.list.date.push(this.date);
        this.list.order_type.push(this.order_type);
        this.list.market.push(this.market);
        this.list.size.push(this.size);
        this.list.price.push(this.price);
        this.list.fee.push(this.fee);
        this.list.result.push(this.result);

        // *** clear field ?
        this.date = '';
        this.order_type = '';
        this.market = '';
        this.size = '';
        this.price = '';
        this.fee = '';
        this.result = '';

        this.saveLocalStorage();

    },
    saveLocalStorage() {
        const parsed = JSON.stringify(this.list);
        localStorage.setItem('list', parsed);
    }
}
})











// //test
// function localStorage(arr){
//     let obj = {
//         1:{
//         date: date,
//         order: order_type,
//         pair:pair,
//         ammount: 23,
//         price: 32500,
//         fee: 0.002,
//         result: 14,
//         }, //first array as [date, order type, pair, ammount, price, fee, result]

//         2:{
//             1:{
//                 date: date,
//                 order: order_type,
//                 pair:pair,
//                 ammount: 23,
//                 price: 32500,
//                 fee: 0.002,
//                 result: 14,
//                 }, //second array as [date, order type, pair, ammount, price, fee, result]
//         },
//     }

// }

// function addToLocalStorage(data) {
//     let localstorage = {};
//     for (let i = 0; i < arr.length; i++) {
//         localStorage[i].setItem(date);
//         localStorage[i].setItem(order);
//         localStorage[i].setItem(pair);
//         localStorage[i].setItem(ammount);
//         localStorage[i].setItem(price);
//         localStorage[i].setItem(fee);
//         localStorage[i].setItem(result);
//     }

//     function executeFromLocalStorage(data) {
//         for (let i = 0; i < localStorage.length; i++) {
//             let orderInfo = localStorage.getItem(i);
//             for (let key in orderIfo) {
//                 //create new cells and add value to them via executing orderInfo[key];
//             }
//         }
//     }
// }