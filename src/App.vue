<template>
div class="wrapper">
        <div class="head">
            <h2>Please fill the data:</h2>
        </div>
        <div class="input" id="input">
            <input v-model="date" placeholder="date" />
            <input v-model="order_type" placeholder="Order Type" />
            <input v-model="market" placeholder="Pair" />
            <input v-model="size" placeholder="Ammount" />
            <input v-model="price" placeholder="Price" />
            <input v-model="fee" placeholder="Date" />
            <input v-model="fee" placeholder="Fee" />
            <input v-model="result" placeholder="Result" />
            <button @click='addOrder'>Submit</button>
            <!-- <div class="table_data"></div> -->
        </div>
</template>

<script>
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
</script>

<style>

</style>
