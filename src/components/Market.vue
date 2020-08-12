<template>
  <div>
    <div class="card-container">
      <form>
        <div>
          <p>付款超商</p>
          <!-- 串接JSON -->
          <select v-model="market" required class="market">
            <option>全家</option>
            <option>7-11</option>
            <option>萊爾富</option>
          </select>
        </div>
        <div>
          <p>填寫付款人信箱</p>
          <input
            onkeypress="if (event.keyCode == 13) {return false;}"
            v-model="email"
            required
            class="email"
            type="email"
            pattern="\w+@\w+"
            title="請輸入正確信箱"
          />
        </div>
        <div class="check-container">
          <input required v-model="checked" type="checkbox" value="一次付款" />
          請再次確認「訂單資訊」與「付款資訊」，付款完成後將發送通知信至您的E-mail信箱
          <p>第三方支付金流平台服務條款</p>
        </div>
        <div class="btn-container">
          <button @click="before">回上一步</button>
          <button type="submit" @click="next">確認付款</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      market: "",
      email: "",
      checked: ""
    };
  },
  methods: {
    before() {
      this.$router.push({ name: "Home" });
    },
    next() {
      if (this.market && this.email && this.checked) {
        this.$router.push({ name: "Context" });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.credit-number {
  width: 61px;
  height: 34px;
}
.font-style {
  font-size: 35px;
  margin: 0 5px;
  color: #cacaca;
  vertical-align: middle;
  cursor: pointer;
  &:hover {
    color: #36b996;
  }
}
.credit-container {
  display: flex;
  flex-direction: row;
}
.pay-container {
  display: flex;
  align-items: center;
  margin-left: 21px;
}
.time-container {
  width: 93px;
  height: 34px;
  // margin: 0 8px;
  // margin-right: 8px;
  text-align: center;
}
span {
  vertical-align: middle;
  padding: 0 5px;
}
.email {
  width: 235px;
  height: 34px;
}
.market {
  @extend .email;
  border-radius: 5px;
  background-color: white;
}
input {
  border-radius: 5px;
}
button {
  width: 98px;
  height: 40px;
  background-color: #d5f5e9;
  color: #5e5e5e;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #36b996;
  }
}
.btn-container {
  display: flex;
  justify-content: space-between;
}
.card-container {
  padding: 0 66px;
}
.check-container {
  padding-top: 22px;
}
</style>