<template>
  <button @click="$emit('click')" :class="iconPosition" :disabled="loading">
    <v-progress-circular
      v-if="loading"
      indeterminate
      color="darken"
      size="20"
      width="3"
    ></v-progress-circular>
    <template v-else>
      <font-awesome-icon v-if="icon" :icon="icon" />
      {{ text }}
    </template>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    icon: [String, Array],
    iconPosition: String,
    loading: Boolean
  }
};
</script>

<style lang="scss" scoped>
button {
  text-decoration: none;
  border: none;
  border-radius: 7px;
  font-family: $font;
  font-weight: $semibold;
  font-size: 13px;
  color: $white;
  height: 40px;
  padding: 0 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: lighten($black, 40%);
  transition: 0.2s;
  cursor: pointer;

  &.fill {
    width: 100%;
    justify-content: center;
  }

  &.right {
    flex-direction: row-reverse;

    svg {
      margin-right: 0;
      margin-left: 11px;
    }
  }

  svg {
    height: 16px;
    width: auto;
    color: $white;
    margin-right: 11px;
  }

  &.primary {
    background: $primary;
    color: $white;
    transition: 0.2s;

    &.shadow {
      box-shadow: 0px 1px 20px rgba($primary, 0.4);
    }

    &:hover {
      background: darken($primary, 8) !important;
    }
  }

  &.green {
    background: $we-green;
    color: $white;
    transition: 0.2s;

    &.shadow {
      box-shadow: 0px 1px 20px rgba($we-green, 0.4);
    }

    &:hover {
      background: darken($we-green, 8);
    }
  }

  &.big {
    height: 60px;
  }

  &:hover {
    transition: 0.2s;
    color: $white;
    box-shadow: none;
  }

  &:focus {
    border: none;
    box-shadow: none;
    outline: none;
  }

  &:disabled {
    background: $dark8 !important;
    color: $dark60;
    cursor: initial;

    svg {
      color: $dark60;
    }

    &:hover {
      background: $dark8 !important;
      color: $dark60;
    }
  }
}
</style>
