<template>
  <div class="body">
    <div class="modal modal-confirm">
      <font-awesome-icon icon="times" class="close" @click="$emit('close')" />
      <div class="text">
        <div class="title" :class="type">
          {{ title }}
        </div>
        <div v-if="description" v-html="description" class="description"></div>
      </div>
      <img
        :src="require(`@/assets/${image}-icon-${type}.svg`)"
        alt="Confirmar"
      />
      <we-button
        :class="`btn-${type}`"
        :text="buttonText"
        :icon="buttonIcon"
        @click.native="$emit('button-click')"
      />
    </div>
    <div class="background"></div>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "type", "image", "buttonText", "buttonIcon"]
};
</script>

<style lang="scss" scoped>
.body {
  height: 100%;
  width: 100%;
  position: fixed;
  padding: 20px;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100000;
  box-sizing: border-box;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $black;
  opacity: 0.9;
  z-index: 100000;
}

.modal {
  height: auto;
  width: 100%;
  padding: 40px;
  font-family: $font;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  background: $white;
  border-radius: 30px;
  box-sizing: border-box;
  z-index: 100001;
  max-width: 480px;
  position: relative;

  .close {
    width: 24px;
    height: auto;
    position: absolute;
    top: 18px;
    right: 18px;
    color: $black;
    cursor: pointer;

    &:hover {
      color: $we-red;
    }
  }

  img {
    width: auto;
    height: 208px;
    display: block;
    margin: 0 auto;
    margin-bottom: 50px;
  }

  .text {
    margin-bottom: 35px;
    text-align: center;

    .title {
      font-weight: $semibold;
      font-size: 24px;
      color: $black;
      margin-bottom: 16px;
      padding: 0 30px;

      &.success {
        color: $we-green;
      }

      &.we-error {
        color: $we-red;
      }
    }

    .description {
      font-weight: $semibold;
      font-size: 16px;
      color: $black;
    }
  }
}
</style>
