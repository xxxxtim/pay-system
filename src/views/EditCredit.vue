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
        <p>金融卡/信用卡</p>
        <CreditCard></CreditCard>
      </div>
    </div>
  </div>
</template>

<script>
import OrderMsgs from "@/components/OrderMsgs.vue";
import CreditCard from "@/components/CreditCard.vue";
export default {
  name: "EditCredit",
  components: {
    OrderMsgs,
    CreditCard
  }
};
</script>

<style lang="scss" scoped>
.schedule-container {
  width: 50%;
  margin-left: 36%;
}
.progress {
  counter-reset: step;
}
.progress li {
  list-style-type: none;
  float: left;
  width: 33.33%;
  position: relative;
  text-align: center;
}
.progress li:before {
  content: counter(step);
  counter-increment: step;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #ddd;
  display: block;
  text-align: center;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  background-color: #afafaf;
  color: white;
  border: none;
}
.progress li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #afafaf;
  top: 15px;
  left: -50%;
  z-index: -1;
}
.progress li:first-child:after {
  content: none;
}
.progress li.active {
  color: green;
}
.progress li.active:before {
  /*   border-color:green; */
  background-color: #8defcb;
  color: white;
}
.progress li.active + li:after {
  background-color: #8defcb;
}
p {
  text-align: center;
  font-size: 12px;
}
</style>