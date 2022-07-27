<template>
  <div class="product-component">
    <span><img src="https://wallpapercave.com/dwp2x/wp3631253.jpg" alt=""></span>
    <span><img src="https://wallpapercave.com/dwp2x/wp3631253.jpg" alt=""></span>
    <span><img src="https://wallpapercave.com/dwp2x/wp3631253.jpg" alt=""></span>
    <span><img src="https://wallpapercave.com/dwp2x/wp3631253.jpg" alt=""></span>
    <span><img src="https://wallpapercave.com/dwp2x/wp3631253.jpg" alt=""></span>
    <span><img src="https://wallpapercave.com/dwp2x/wp3631253.jpg" alt=""></span>
    <span><img src="https://wallpapercave.com/dwp2x/wp3631253.jpg" alt=""></span>
    <span><img src="https://wallpapercave.com/dwp2x/wp3631253.jpg" alt=""></span>
    <span><img src="https://wallpapercave.com/dwp2x/wp3631253.jpg" alt=""></span>
    <span><img src="https://wallpapercave.com/dwp2x/wp3631253.jpg" alt=""></span>
    <span><img src="https://wallpapercave.com/dwp2x/wp3631253.jpg" alt=""></span>
    <span><img src="https://wallpapercave.com/dwp2x/wp3631253.jpg" alt=""></span>
  </div>
</template>

<script>
export default {
  name: 'ProductsComp',
  data () {
    return {
      msg: 'This is header Component'
    }
  }
}
</script>

<style scoped>
.product-component {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    border: 1px solid black;
}
span {
    border: 1px solid black;
}
img {
    height: 250px;
    width: 200px;
    margin: 15px;
}
</style>
