<template>
  <div class="we-balloon" v-click-outside="closeBalloon">
    <div class="action" @click="openBalloon">
      <slot name="action" />
    </div>
    <div class="balloon" :class="{ opened }">
      <slot name="balloon" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opened: false
    };
  },
  methods: {
    openBalloon() {
      this.opened = true;
    },
    closeBalloon() {
      this.opened = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.we-balloon {
  position: relative;
  z-index: 1;

  .balloon {
    width: 228px;
    padding: 15px;
    border-radius: 10px;
    background: $white;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 44px;
    left: 0;
    display: none;

    &.opened {
      display: block;
    }

    button {
      margin: 0 auto;
    }
  }
}
</style>
