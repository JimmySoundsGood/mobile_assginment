<template>
  <div class="box">
    <div class="head">
      <div class="nav-flex">
        <div class="nav-item1">
          <img src="../assets/recommand1.png" />
        </div>
        <div class="nav-item2">
          <img src="../assets/hamburger2.png" />
        </div>
        <div class="nav-item3">
          <img src="../assets/waterGlass3.png" />
        </div>
        <div class="nav-item4">
          <img src="../assets/snake4.png" />
        </div>
      </div>
    </div>

    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img class="star1" src="../assets/star1.png" alt="" />
          <img class="star2" src="../assets/star1-1.png" alt="" />
          <img class="star3" src="../assets/star1-2.png" alt="" />
          <img class="food" src="../assets/banner1.png" alt="" />
          <img
            class="add"
            @click="addgoods('shutiao', 4)"
            src="../assets/add.png"
            alt=""
          />
          <p class="title">FRIES</p>
          <p class="price">4$</p>
        </div>

        <div class="swiper-slide">
          <img class="star1" src="../assets/star1.png" alt="" />
          <img class="star2" src="../assets/star1-1.png" alt="" />
          <img class="star3" src="../assets/star1-2.png" alt="" />
          <img class="food" src="../assets/banner2.png" />
          <img class="add" @click="addgoods('kafei', 3)" src="../assets/add.png" />
          <p class="title">LATTE</p>
          <p class="price">3$</p>
        </div>

        <div class="swiper-slide">
          <img class="star1" src="../assets/star1.png" alt="" />
          <img class="star2" src="../assets/star1-1.png" alt="" />
          <img class="star3" src="../assets/star1-2.png" alt="" />
          <img class="food" src="../assets/banner3.png" alt="" />
          <img class="add" @click="addgoods('hanbao', 6)" src="../assets/add.png" />
          <p class="title">BURGER</p>
          <p class="price">6$</p>
        </div>
      </div>
    </div>

    <div class="plate_container">
      <div class="plate_box">
        <img class="pz" src="../assets/pz.png" alt="" />
        <img
          class="shutiao food"
          :class="[exit('shutiao') ? 'show' : '']"
          @click="removegoods('shutiao', 4)"
          src="../assets/shutiao.png"
          alt=""
        />
        <img
          class="kafei food"
          :class="[exit('kafei') ? 'show' : '']"
          @click="removegoods('kafei', 3)"
          src="../assets/kafei.png"
          alt=""
        />
        <img
          class="hanbao food"
          :class="[exit('hanbao') ? 'show' : '']"
          @click="removegoods('hanbao', 6)"
          src="../assets/hanbao.png"
          alt=""
        />
      </div>
    </div>

    <div class="place btn-group">
      <div class="btn">
        <img src="../assets/map.png" alt="" />
      </div>
      <div class="contxt">
        <p>Dongcheng District Metro</p>
        <p>Cultural Building</p>
      </div>
      <div class="btn">
        <img src="../assets/mobile.png" alt="" />
      </div>
    </div>
    <div class="payline">
      <div class="price">{{ sum }}$</div>
      <a href="" id="pay">Pay</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      list: [],
      sum: 0
    }
  },
  methods: {
    exit(type) {
      let index = this.list.findIndex((ele) => {
        return ele === type
      })
      if (index === -1) {
        return false
      } else {
        return true
      }
    },
    addgoods(type, number) {
      let index = this.list.findIndex((ele) => {
        return ele === type
      })
      if (index === -1) {
        this.list.push(type)
        this.sum = this.sum + number
      }
    },
    removegoods(type, number) {
      let index = this.list.findIndex((ele) => {
        return ele === type
      })
      if (index !== -1) {
        this.list.splice(index, 1)
        this.sum = this.sum - number
      }
    }
  },
  mounted() {
    // eslint-disable-next-line
    var mySwiper = new Swiper('.swiper', {
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style lang="less" scoped>
.box {
  height: 100%;
}

.head {
  background: linear-gradient(324.97deg, #fd003c -11%, #ff5d79 105.7%);
}

.nav-flex {
  display: flex;
  align-items: center;
}

.nav-flex div {
  flex: 1;
  margin: 1rem 1rem;
}

.foot {
  height: 10%;
  background-color: yellow;
}

.main {
  overflow: auto;
  height: 100%;
  background-color: white;
}

.swiper {
  position: relative;
}
.swiper .star1 {
  position: absolute;
  left: 10rem;
  top: 2rem;
  z-index: 9999;
}
.swiper .star2 {
  position: absolute;
  left: 14rem;
  top: 12rem;
  z-index: 9999;
}
.swiper .star3 {
  position: absolute;
  left: 2rem;
  top: 10rem;
  z-index: 9999;
}
.swiper .swiper-slide {
  height: 20rem;
  background-color: #f4f4f4;
  position: relative;
}
.swiper .swiper-slide .food {
  position: absolute;
  left: -1rem;
  top: 2rem;
  width: 15rem;
}
.swiper .swiper-slide .title {
  color: #eb5c77;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 600;
  font-size: 2.5rem;
  width: 1.6rem;
  text-align: right;
  position: absolute;
  right: 9rem;
  top: 0.8rem;
}
.swiper .swiper-slide .price {
  font-weight: 300;
  font-size: 1.5rem;
  color: #eb5c77;
  text-align: right;
  width: 1.6rem;
  position: absolute;
  right: 4rem;
  top: 6rem;
}
.swiper .swiper-slide .add {
  position: absolute;
  right: 0.13333333rem;
  bottom: 0.8rem;
  height: 8rem;
}
.plate_container {
  padding-bottom: 2.8rem;
  background-color: #f4f4f4;
}

.plate_container .plate_box {
  position: relative;
  padding-top: 5rem;
  padding-bottom: 1.33333333rem;
  margin: auto;
}

.plate_container .plate_box .pz {
  margin: auto;
  display: block;
  height: 20vh;
  width: 85vw;
}
.plate_box .food {
  cursor: pointer;
  transition: all 0.6s;
}
.plate_box .shutiao {
  position: absolute;
  top: 0;
  left: 8rem;
  height: 0;
}
.plate_box .shutiao.show {
  top: 10vh;
  left: 55vw;
  height: 10rem;
}
.plate_box .hanbao {
  position: absolute;
  top: 0;
  left: 8rem;
  height: 0;
}
.plate_box .hanbao.show {
  top: 12vh;
  left: 10vw;
  height: 12rem;
}
.plate_box .kafei {
  position: absolute;
  top: 0rem;
  left: 8rem;
  height: 0;
}
.plate_box .kafei.show {
  top: -3vh;
  left: 26vw;
  height: 12rem;
}

.place {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  background-color: #f4f4f4;
}

.place .cotxt {
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
}

.place .btn {
  margin: 0 2rem;
}

.payline {
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 99999;
}

.payline .price {
  font-size: 1.68rem;
  line-height: 1.2rem;
  font-weight: bold;
  color: #333;
  padding: 2rem 2rem;
}

.payline #pay {
  background: linear-gradient(324.97deg, #fd003c -11%, #ff5d79 105.7%);
  color: #fff;
  font-size: 3rem;
  line-height: 4rem;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 600;
}

.payline a {
  text-decoration: none;
}
</style>
