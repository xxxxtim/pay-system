<template>
  <div>
    <div class="msg-container">
      <h3>訂單資訊</h3>
      <div>
        <p class="name">商品名稱</p>
        <p>I Phone XR 手機殼x1</p>
      </div>
      <div>
        <p class="name">訂單編號</p>
        <p>17485739</p>
      </div>
      <div>
        <p class="name">訂單金額</p>
        <p>NT $ 600</p>
      </div>
    </div>
    <div class="button-container">
      <button class="button-style">返回商店</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
  color: black;
}
.name {
  font-family: NotoSansCJKtc-DemiLight;
  color: #5e5e5e;
  font-size: 16px;
}
.msg-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 234px;
  padding-left: 26px;
  height: 281px;
  background-color: #f3f3f3;
  border-radius: 10px 0px 0px 10px;
}
.button-style {
  background-color: #4b4b4b;
  color: white;
  line-height: 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  width: 89px;
  height: 40px;
  &:hover {
    background-color: #afafaf;
  }
}
.button-container {
  margin-top: 20px;
}
</style>