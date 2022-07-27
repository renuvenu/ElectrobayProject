<template>
  <div class="mobile-component">
    <Header></Header>
    <div id="root">
            <div class="sidebar">
                <div class="side">
                    <div class="brand">
                        <h3 style="text-decoration: underline;">Brand</h3>
                        <input type="checkbox" name="checkbox" value="samsung" v-model="checkBoxes"/>
                        <label for="checkbox">Samsung</label><br>
                        <input type="checkbox" value="apple" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Apple</label><br>
                        <input  type="checkbox" value="redmi" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Redmi</label><br>
                        <input  type="checkbox" value="oppo" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Oppo</label><br>
                        <input type="checkbox" value="fog" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Fog</label><br>
                        <input type="checkbox" value="huawei" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Huawei</label><br>
                        <input type="checkbox" value="infinix" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Infinix</label><br>
                        <input type="checkbox" value="oneplus" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">One plus</label><br>
                    </div>

                    <div class="camera">
                        <h3 style="text-decoration: underline;">Camera</h3>
                        <input type="checkbox" value="40-60" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">40-60MP</label><br>
                        <input type="checkbox" value="60-80" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">60-80MP</label><br>
                        <input type="checkbox" value="80-100" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">80-100MP</label><br>
                        <input type="checkbox" value="100-120" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">100-120MP</label><br>
                        <input type="checkbox" value="120-140" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">120-140MP</label><br>
                        <input type="checkbox" value="140-160" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">140-160MP</label><br>

                    </div>

                    <div class="ram">
                        <h3 style="text-decoration: underline;">RAM</h3>
                        <input type="checkbox" value="2" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">2GB</label><br>
                        <input type="checkbox" value="3" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">3GB</label><br>
                        <input type="checkbox" value="4" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">4GB</label><br>
                        <input type="checkbox" value="6" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">6GB</label><br>
                        <input type="checkbox" value="8" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">8GB</label><br>
                        <input type="checkbox" value="over8" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Over 8GB</label><br>

                    </div>
                    <div class="price">
                        <h3 style="text-decoration: underline;">Price</h3>
                        <input type="checkbox" name="checkbox" value="5000" v-model="checkBoxes"/>
                        <label for="checkbox">Under ₹5000</label><br>
                        <input type="checkbox" name="checkbox" value="5000to10000" v-model="checkBoxes"/>
                        <label for="checkbox">₹5000 - ₹10,000</label><br>
                        <input type="checkbox" name="checkbox" value="10000to50000" v-model="checkBoxes"/>
                        <label for="checkbox">₹10,000 - ₹50,000</label><br>
                        <input type="checkbox" name="checkbox" value="over50000" v-model="checkBoxes"/>
                        <label for="checkbox">Over ₹50,000</label><br>
                    </div>
                </div>

            </div>

            <div class="myitems">
                <div class="flex">
                     <div class="grid">
                        <div v-for="(data, index) in productList" :key="index" :class="['card']">
                            <single-product-vue :product="data"></single-product-vue>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterVue></FooterVue>
  </div>
</template>
<script>
import Header from './Header.vue'
import FooterVue from './Footer.vue'
import SingleProductVue from './SingleProduct.vue'
/* eslint-disable */
export default {
  name: 'Mobile',
  data () {
    return {
      msg: 'This is Mobile Component'
    }
  },
  components: {
    Header,
    FooterVue,
    SingleProductVue
  }
}
</script>

<style scoped>
body{
  margin-left: 0px;
}
#root{
    display: flex;
}
.brand{
    margin-left: 50px;
    /* font-weight: bold; */
    color: whitesmoke;
    
}
.brand input,label{
    margin-left:10px;
    float: left;
}
.camera{
    margin-left: 50px;
    /* font-weight: bolder; */
    color: whitesmoke;
}
.camera input,label{
    margin-left:10px;
    float: left;
}
.ram{
    margin-left: 50px;
    /* font-weight: bolder; */
    color: whitesmoke;
}
.ram input,label{
    margin-left:10px;
    float: left;
}
.price{
    margin-left: 50px;
    /* font-weight: bolder; */
    color: whitesmoke;
}
.price input,label{
    margin-left:10px;
    float: left;
}
.side{
  margin-left: 0px !important;
}
.sidebar{
    overflow: scroll;
    width: 20vw;
    height: 1000px;
    font-size: large; 
    left: 0px !important;
    margin-left: 0px !important;
    margin-top: 45px;
    border-right: 3px solid whitesmoke;
    padding-left: 0px;
    background-color: #1F305E;
}
.myitems{
    margin-left: 100px;
    width: 80vw;
    max-height: 700px;
    padding: 10px;
}
.flex{
    margin-left: 50px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: center;
    /* margin-bottom: 600px !important; */
}
.grid{
    padding: 18px;
    display: flex;
    flex-wrap: wrap;
       height: 500px;
    overflow: scroll;
}
#image{
    height: 290px;
    width: 200px;
}
.card{
    padding: 10px;
    margin: 12px;
}


</style>
