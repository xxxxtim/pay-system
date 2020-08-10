<template>
  <div>
    <div class="card-container">
      <form>
        <div>
          <input type="radio" name="location" value="一次付款" />一次付款
          <input type="radio" name="location" value="分期付款" />分期付款
        </div>
        <div>
          <p>信用卡號:</p>
          <div class="credit-container">
            <div>
              <input class="credit-number" type="text" pattern="\d{4}" title="請輸入4個數字" />
              <span>-</span>
              <input class="credit-number" type="text" pattern="\d{4}" title="請輸入4個數字" />
              <span>-</span>
              <input class="credit-number" type="text" pattern="\d{4}" title="請輸入4個數字" />
              <span>-</span>
              <input class="credit-number" type="text" pattern="\d{4}" title="請輸入4個數字" />
            </div>
            <div class="pay-container">
              <font-awesome-icon class="font-style" :icon="['fab', 'cc-visa']" />
              <font-awesome-icon class="font-style" :icon="['fab', 'cc-jcb']" />
              <font-awesome-icon class="font-style" :icon="['fab', 'cc-mastercard']" />
            </div>
          </div>
        </div>
        <div>
          <p>有效年月:</p>
          <div>
            <input
              class="time-container"
              type="text"
              placeholder="輸入月份"
              pattern="^0[1-9]|1[0-2]$"
              title="輸入月份 ex:01"
            />
            <span>/</span>
            <input
              class="time-container"
              type="text"
              placeholder="輸入西元年"
              pattern="\d{4}"
              title="西元年(4碼)"
            />
            <span>年</span>
          </div>
        </div>
        <div>
          <p>背面末三碼</p>
          <div>
            <input class="time-container" type="text" pattern="\d{3}" title="請輸入數字" />
            <font-awesome-icon class="font-style" icon="credit-card" />
          </div>
        </div>
        <div>
          <p>填寫付款人信箱</p>
          <input class="email" type="email" pattern="\w+@\w+" title="請輸入正確信箱" />
        </div>
        <div class="check-container">
          <input type="checkbox" value="一次付款" />
          請再次確認「訂單資訊」與「付款資訊」，付款完成後將發送通知信至您的E-mail信箱
          <p>第三方支付金流平台服務條款</p>
        </div>
        <div class="btn-container">
          <button>回上一步</button>
          <button>確認付款</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
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