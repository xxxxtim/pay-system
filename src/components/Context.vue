<template>
  <div>
    <div>
      <div class="list-container">
        <p>付款超商：</p>
        <h2>全家便利商店</h2>
      </div>
      <div class="list-container">
        <p>付款代碼：</p>
        <h2>HSD6DSK2349</h2>
      </div>
      <div class="list-container">
        <p>付款期限：</p>
        <h2>2019-08-08 23:59:59</h2>
      </div>
      <div class="list-container">
        <p>* 請至您選擇之超商店內機台輸入代碼進行繳費，逾期訂單自動作廢。</p>
      </div>
      <div class="button-container">
        <button>返回首頁</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
.button-container {
  text-align: right;
  margin-top: 75px;
}
h2 {
  font-weight: normal;
}
* {
  margin: 0;
}
.list-container {
  padding-bottom: 30px;
}
</style>