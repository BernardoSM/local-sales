<template>
  <div class="we-input">
    <div class="label" v-if="label">{{ label }}</div>
    <div class="field">
      <v-text-field
        v-if="type === 'text'"
        :rules="requiredRules"
        :hide-details="hideDetails"
        color="primary"
        outlined
        dense
        :value="value"
        v-bind="$attrs"
        @blur="onBlur"
        @focus="onFocus"
        @input="onInput"
      />
      <v-text-field
        v-if="type === 'email'"
        :rules="emailRules"
        :hide-details="hideDetails"
        color="primary"
        outlined
        dense
        :value="value"
        v-bind="$attrs"
        @blur="onBlur"
        @focus="onFocus"
        @input="onInput"
      />
      <v-textarea
        v-if="type === 'textarea'"
        :hide-details="hideDetails"
        auto-grow
        outlined
        :value="value"
        v-bind="$attrs"
        @blur="onBlur"
        @focus="onFocus"
        @input="onInput"
      ></v-textarea>
      <v-select
        v-if="type === 'select'"
        :hide-details="hideDetails"
        outlined
        dense
        nudge-top="40"
        v-bind="$attrs"
        :value="value"
        @blur="onBlur"
        @focus="onFocus"
        @input="onInput"
      />
      <v-select
        v-if="type === 'multiselect'"
        :hide-details="hideDetails"
        multiple
        outlined
        dense
        nudge-bottom="40"
        v-bind="$attrs"
        :value="value"
        @blur="onBlur"
        @focus="onFocus"
        @input="onInput"
      >
        <template v-slot:selection="{ item, index }">
          <span v-if="index === 0">{{ item }}</span>
          <span v-if="index === 1" class="number">
            {{ value.length - 1 }}
          </span>
        </template>
      </v-select>
      <v-menu
        v-if="type === 'datepicker'"
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="0"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            :hide-details="hideDetails"
            color="primary"
            class="datepicker"
            placeholder="Selecionar data"
            outlined
            dense
            clearable
            :value="dateValue"
            @blur="onBlur"
            @focus="onFocus"
            @input="onInput"
            v-bind="attrs"
            v-on="on"
          >
            <font-awesome-icon
              :icon="{ prefix: 'far', iconName: 'calendar-alt' }"
              slot="append"
            />
          </v-text-field>
        </template>
        <v-date-picker
          locale="pt-br"
          :value="value"
          @input="onInput"
        ></v-date-picker>
      </v-menu>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "we-input",
  props: {
    label: String,
    value: {
      type: [String, Number, Array],
      description: "Input value"
    },
    type: {
      type: String,
      required: true
    },
    hideDetails: {
      type: [String, Boolean],
      default: "auto"
    },
    isRequired: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      menu: false,
      emailRules: [
        v => !!v || "Campo obrigatório",
        v => /.+@.+\..+/.test(v) || "E-mail deve ser válido"
      ]
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput,
        blur: this.onBlur,
        focus: this.onFocus
      };
    },
    dateValue() {
      let formated = "";

      if (this.value) {
        let date = new Date(this.value);
        date.setDate(date.getDate() + 1);
        formated = date.toLocaleString("pt-BR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
        });
      }

      return formated;
    },
    requiredRules() {
      return this.isRequired ? [v => !!v || "Campo obrigatório"] : [];
    }
  },
  methods: {
    onInput(evt) {
      this.menu = false;
      this.$emit("input", evt);
    },
    onFocus() {
      this.focused = true;
    },
    onBlur() {
      this.focused = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.we-input {
  position: relative;

  .label {
    font-size: 12px;
    font-weight: $medium;
    color: $dark60;
    margin-bottom: 3px;
    padding-left: 13px;
  }

  .field {
    width: 100%;

    .v-select {
      color: $black;

      &:hover {
        background: $dark8;
        border-radius: 7px;
      }

      .number {
        height: 18px;
        background: $primary;
        border-radius: 5px;
        color: $white;
        font-size: 12px;
        font-weight: $semibold;
        padding: 0 7px;
        display: flex;
        align-items: center;
        margin-left: 5px;
      }
    }
  }
}
</style>
