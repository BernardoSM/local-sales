<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<script>
import "@/styles/_font.scss";
import "@/styles/_forms.scss";

export default {};
</script>

<style lang="scss">
.shadow {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
}

body,
html {
  font-family: $font;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

a {
  text-decoration: none;
}

button {
  &:focus {
    outline: 0;
  }
}

.v-application {
  .v-tooltip__content {
    background: $dark60;
    font-weight: $medium;
    font-size: 12px;
    padding: 2px 10px;
  }

  .v-picker {
    .v-picker__body {
      .v-date-picker-header {
        .v-btn__content .v-icon svg {
          width: 16px;
          height: 16px;
        }
        .v-date-picker-header__value button {
          color: $dark60 !important;
          font-weight: $semibold !important;

          &:hover {
            color: $primary !important;
          }
        }
      }
    }
  }

  .v-form {
    .v-input {
      margin-bottom: 8px;
    }
  }
}

.v-application--wrap {
  width: 100%;
  height: 100%;

  .v-input {
    font-size: 14px;
    font-weight: $medium;
    color: $dark60;
    border-radius: 7px;
    border: 1px solid $we-inherit;

    &.datepicker {
      &.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
        > .v-input__control
        > .v-input__slot {
        padding: 0;
      }

      input {
        padding: 10px 12px;
        max-height: 100%;
      }

      &.v-input--dense .v-input__control .v-input__slot .v-input__append-inner {
        &:last-child {
          margin-right: 16px;
        }

        svg {
          color: $dark60;
          font-size: 16px;
        }
      }
    }

    .v-input__slot {
      &:hover {
        background: $dark8;
      }
    }

    .v-text-field__slot {
      .v-label {
        font-size: 14px;
        line-height: 1.3;
        color: $black;
      }

      input::placeholder {
        color: $dark60;
      }

      textarea::placeholder {
        color: $dark60;
      }
    }

    &.outline {
      &.v-text-field--outlined fieldset {
        border: 1px solid $line;
        border-radius: 7px;
      }
    }

    &.v-input--dense {
      .v-input__control {
        .v-input__slot {
          min-height: 38px;

          .v-input__append-inner {
            margin-top: 0;
            height: 38px;
            display: flex;
            align-items: center;
            position: relative;
          }
        }
      }
    }

    &.v-select {
      border: 1px solid $we-inherit;

      .v-select__selections .v-select__selection::first-letter {
        text-transform: uppercase;
      }

      input::placeholder {
        color: $dark60;
      }

      .v-icon__component {
        width: 12px;
      }
    }

    &.v-select.v-text-field--outlined {
      fieldset {
        border: 1px solid $we-inherit;
        border-radius: 7px;
      }
    }

    &.v-text-field--outlined {
      fieldset {
        border: 1px solid $we-inherit;
        border-radius: 7px;
      }

      &.v-input--is-focused {
        fieldset {
          border: 1px solid $primary;
          background: $white;
        }
      }
    }

    &.v-input--is-label-active {
      color: $black;
      background: $we-inherit;
      border-radius: 7px;
      border: 1px solid $we-inherit;

      .v-input__slot {
        &:hover {
          background: $dark8;
        }
      }

      fieldset {
        border: none;
      }

      >>> span {
        color: $primary;
      }
    }
  }
}

.v-menu__content {
  border-radius: 7px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);

  .v-list {
    padding: 7px 0;

    &.v-list--dense .v-list-item .v-list-item__title::first-letter {
      text-transform: uppercase;
    }

    .v-list-item {
      height: 36px;

      .v-list-item__action {
        margin-right: 10px;

        .v-simple-checkbox {
          .v-icon {
            font-size: 21px;
            vertical-align: top;
          }
        }
      }
    }
  }
}

$scrollbar-width: 5px;
$scrollbar-padding: 15px;

*::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: $we-inherit;
  opacity: 0;
}

*::-webkit-scrollbar {
  height: (($scrollbar-padding * 2) + $scrollbar-width);
  width: 6px;
  height: 6px;
  background-color: $we-inherit;
  opacity: 0;
  height: 10px;
}

*::-webkit-scrollbar-thumb {
  width: 6px;
  height: 6px;
  border-radius: 10px;
  background-color: $dark20;
  background-clip: padding-box;

  @media (max-width: 991px) {
    border-radius: 0;
  }
}
</style>
