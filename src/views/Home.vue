<template>
  <div>
    <div class="schedule-container">
      <ul class="progress">
        <li class="active"></li>
        <li></li>
        <li></li>
      </ul>
    </div>

    <div class="context-container">
      <OrderMsgs></OrderMsgs>
      <div>
        <h1>STEP1. 選擇付款方式</h1>
        <ChoiceBtns></ChoiceBtns>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import OrderMsgs from "@/components/OrderMsgs.vue";
import ChoiceBtns from "@/components/ChoiceBtns.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    OrderMsgs,
    ChoiceBtns
  }
};
</script>
<style lang="scss">
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
h1 {
  font-size: 20px;
  box-shadow: inset 0 -17px #b5ffe4;
  margin: 30px auto;
  width: 33%;
  text-align: center;
}
.context-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  clear: both;
}
</style>
