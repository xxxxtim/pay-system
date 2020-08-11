<template>
  <div>
    <div class="schedule-container">
      <ul class="progress">
        <li class="active"></li>
        <li class="active"></li>
        <li class="active"></li>
      </ul>
    </div>

    <div class="context-container">
      <!-- <OrderMsgs></OrderMsgs> -->
      <div>
        <h2>Finish</h2>
      </div>
      <div>
        <h1>您的訂單已完成付款！</h1>
        <!-- <Market></Market> -->
        <PullGun></PullGun>
      </div>
    </div>
  </div>
</template>

<script>
import OrderMsgs from "@/components/OrderMsgs.vue";
import Market from "@/components/Market.vue";
import PullGun from "@/components/PullGun.vue";
export default {
  name: "Finish",
  components: {
    Market,
    OrderMsgs,
    PullGun
  }
};
</script>

<style lang="scss" scoped>
p {
  text-align: center;
  font-size: 12px;
}
h1 {
  width: 45%;
}
h2 {
  font-size: 30px;
  margin-top: 90px;
}
.schedule-container {
  width: 50%;
  margin-left: 33%;
}
</style>