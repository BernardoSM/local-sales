<template>
  <div class="loading" v-if="loading">
    <div class="text">Carregando</div>
    <v-progress-linear indeterminate color="primary"></v-progress-linear>
  </div>
</template>

<script>
export default {
  props: {
    loading: Boolean
  }
};
</script>

<style lang="scss" scoped>
.loading {
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba($white, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;

  &.small {
    .text {
      font-size: 13px;
      margin-bottom: 4px;
    }

    .v-progress-linear {
      max-width: 80px;
    }
  }

  .text {
    font-weight: $medium;
    color: $dark60;
    margin-bottom: 11px;
  }

  .v-progress-linear {
    max-width: 300px;
    border-radius: 4px;
  }
}
</style>
