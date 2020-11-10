<template>
  <v-tooltip
    :top="direction === 'top'"
    :right="direction === 'right'"
    :bottom="direction === 'bottom'"
    :left="direction === 'left'"
    :disabled="!name"
  >
    <template v-slot:activator="{ on, attrs }">
      <button
        class="icon"
        @click="$emit('click')"
        v-bind="attrs"
        v-on="on"
        :class="color"
      >
        <font-awesome-icon :icon="icon" />
      </button>
    </template>
    <span>{{ name }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: "we-icon-button",
  props: {
    icon: [String, Object],
    direction: {
      type: String,
      default: "top"
    },
    name: String,
    color: String
  }
};
</script>

<style lang="scss" scoped>
.icon {
  width: 38px;
  height: 38px;
  border-radius: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: rgba($dark60, 0.2);
  }

  &.icon-primary {
    svg {
      color: $primary;
    }
  }

  &.icon-white {
    svg {
      color: $white;
    }
  }

  &.icon-red {
    svg {
      color: $we-red;
    }
  }

  &.icon-green {
    svg {
      color: $we-green;
    }
  }

  svg {
    pointer-events: none;
    height: 18px;
    width: auto;
    color: $dark60;
  }
}
</style>
