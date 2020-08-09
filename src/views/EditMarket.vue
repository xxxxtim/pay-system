<template>
  <div>
    <div class="schedule-container">
      <ul class="progress">
        <li class="active"></li>
        <li class="active"></li>
        <li></li>
      </ul>
    </div>

    <div class="context-container">
      <OrderMsgs></OrderMsgs>
      <div>
        <h1>STEP2. 填寫付款資訊</h1>
        <p>超商付款</p>
        <Market></Market>
      </div>
    </div>
  </div>
</template>

<script>
import OrderMsgs from "@/components/OrderMsgs.vue";
import Market from "@/components/Market.vue";
export default {
  name: "EditAtm",
  components: {
    Market,
    OrderMsgs
  }
};
</script>

<style lang="scss" scoped>
p {
  text-align: center;
  font-size: 12px;
}
</style>