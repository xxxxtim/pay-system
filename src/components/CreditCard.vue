<template>
  <div>
    <div>
      <div>
        <input type="checkbox" value="一次付款" />一次付款
        <input type="checkbox" value="分期付款" />分期付款
      </div>
      <div>
        <p>信用卡號:</p>
        <div class="credit-container">
          <div>
            <input class="credit-number" type="password" />
            <span>-</span>
            <input class="credit-number" type="password" />
            <span>-</span>
            <input class="credit-number" type="password" />
            <span>-</span>
            <input class="credit-number" type="password" />
          </div>
          <div class="pay-container">
            <font-awesome-icon class="font-style" :icon="['fab', 'cc-visa']" />
            <font-awesome-icon class="font-style" :icon="['fab', 'cc-jcb']" />
            <font-awesome-icon class="font-style" :icon="['fab', 'cc-mastercard']" />
          </div>
        </div>
      </div>
      <div>有效年月:</div>
      <div>背面末三碼</div>
      <div>填寫付款人信箱</div>
      <div>再次確認</div>
      <div>按鈕</div>
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
  border-radius: 5px;
}
.font-style {
  font-size: 25px;
  margin: 0 5px;
  color: #cacaca;
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
</style>