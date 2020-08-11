<template>
  <div>
    <div class="choice-container">
      <!-- <div class="font-container"> -->
      <div
        :class="{toggle:status==='credit-card'}"
        class="font-container"
        @click="status='credit-card'"
      >
        <font-awesome-icon class="font-style" icon="credit-card" />
        <p>信用卡/金融卡</p>
      </div>
      <div :class="{toggle:status==='pay-pal'}" class="font-container" @click="status='pay-pal'">
        <!-- <div :class="isActive?'toggle':'font-container'" @click="isActive=!isActive"> -->
        <font-awesome-icon class="font-style" :icon="['fab', 'cc-paypal']" />
        <p>聯銀卡</p>
      </div>
      <div :class="{toggle:status==='market'}" class="font-container" @click="status='market'">
        <font-awesome-icon class="font-style" icon="store" />
        <p>超商付款</p>
      </div>
    </div>
    <div class="choice-container">
      <div :class="{toggle:status==='web-atm'}" class="font-container" @click="status='web-atm'">
        <font-awesome-icon class="font-style" icon="globe" />
        <p>Web ATM</p>
      </div>
      <div
        :class="{toggle:status==='atm-trans'}"
        class="font-container"
        @click="status='atm-trans'"
      >
        <font-awesome-icon class="font-style" icon="money-bill-wave" />
        <p>ATM轉帳</p>
      </div>
    </div>
    <div class="button-container">
      <button @click="next" class="button-style">下一步</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      status: ""
    };
  },

  methods: {
    next() {
      // if (this.status === "credit-card") {
      //   // router.push({ path: "/2" });
      //   this.$router.push({ path: "/2" });
      // }
      switch (this.status) {
        case "credit-card":
          this.$router.push({ name: "CreditCard" });
          break;
        case "pay-pal":
          this.$router.push({ name: "CreditCard" });
          break;
        case "market":
          this.$router.push({ name: "Market" });
          break;
        case "web-atm":
          this.$router.push({ name: "Atm" });
          break;
        case "atm-trans":
          this.$router.push({ name: "Atm" });
          break;
        default:
          this.$router.push({ name: "Home" });
      }
    }
  }
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