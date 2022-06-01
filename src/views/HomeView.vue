<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter" :style="{color:$store.state.colorCode}">
      {{$store.state.counter}}
    </div>
    <div class="counter-square">
      {{$store.state.counter}}
      <sup>2</sup>
      ={{$store.getters.counterSquare}}
    </div>
    <div class="button">
      <button @click="$store.dispatch('decreaseCount')">-</button>
      <button @click="$store.dispatch('increaseCount')">+</button>
    </div>
    <div class="colorInput">
      <input type="text" placeholder="Add color code here">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
}
</script>

<style scoped>
  div {
    margin-bottom: 10px;
  }

  .counter {
    font-size: 80px;
  }

  .button button {
    font-size: 40px;
    width: 100px;
    margin: 0px 10px;
  }
</style>
