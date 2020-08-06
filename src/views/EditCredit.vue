<template>
  <div>
    <CreditCard></CreditCard>
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
</style>