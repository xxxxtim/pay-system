<template>
  <div>
    <div class="choice-container">
      <!-- <div class="font-container"> -->
      <div :class="isActive?'toggle':'font-container'" @click="isActive=!isActive">
        <font-awesome-icon class="font-style" icon="credit-card" />
        <p>信用卡/金融卡</p>
      </div>
      <div class="font-container">
        <!-- <div :class="isActive?'toggle':'font-container'" @click="isActive=!isActive"> -->
        <font-awesome-icon class="font-style" :icon="['fab', 'cc-paypal']" />
        <p>聯銀卡</p>
      </div>
      <div class="font-container">
        <font-awesome-icon class="font-style" icon="store" />
        <p>超商付款</p>
      </div>
    </div>
    <div class="choice-container">
      <div class="font-container">
        <font-awesome-icon class="font-style" icon="globe" />
        <p>超商付款</p>
      </div>
      <div class="font-container">
        <font-awesome-icon class="font-style" icon="money-bill-wave" />
        <p>ATM轉帳</p>
      </div>
    </div>
    <div class="button-container">
      <button class="button-style">下一步</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
.choice-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.font-container {
  background-color: #f7f7f7;
  color: black;
  text-align: center;
  padding: 15px;
  width: 161px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  // &:hover {
  //   background-color: #36b996;
  //   color: white;
  // }
}
.toggle {
  @extend.font-container;
  background-color: #36b996;
  color: white;
}
.font-style {
  font-size: 49px;
}
.button-container {
  text-align: end;
}
.button-style {
  background-color: #36b996;
  color: white;
  border-radius: 5px;
  line-height: 20px;
  width: 89px;
  height: 40px;
  border: none;
  cursor: pointer;
  &:hover {
    color: #5e5e5e;
    background-color: #d5f5e9;
  }
}
</style>