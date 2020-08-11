<template>
  <div>
    <div class="container">
      <div>
        <img
          src="https://us.123rf.com/450wm/blueringmedia/blueringmedia1512/blueringmedia151200341/48870031-close-up-firework-on-white-illustration.jpg?ver=6"
        />
      </div>
      <p>稍候將寄送訂單詳細資訊送至您的E-mail</p>
      <button @click="toHomePage">返回首頁</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toHomePage() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
</style>