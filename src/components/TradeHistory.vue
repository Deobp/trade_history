<template>
    <div class="wrapper">
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
    </div>
</template>

<script>
export default {
  name: 'TradeHistory',
  props: {
    msg: String
  }
}
</script>