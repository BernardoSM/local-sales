<template>
  <div class="register-fields">
    <div class="fields">
      <v-text-field
        label="Nome Completo"
        :rules="nameRules"
        hide-details="auto"
        v-model.trim="name"
        color="dark60"
        @blur="setName"
      ></v-text-field>
      <v-text-field
        label="Email"
        :rules="emailRules"
        hide-details="auto"
        v-model.trim="register.email"
        color="dark60"
      ></v-text-field>
      <v-text-field
        label="Ocupação"
        hide-details="auto"
        v-model.trim="register.job"
        color="dark60"
      ></v-text-field>
    </div>
    <we-button
      class="primary"
      text="Fazer cadastro"
      icon="arrow-right"
      iconPosition="right"
      @click.native="signUp"
    ></we-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameRules: [
        name => !!name || "Email não inserido.",
        name => (name && name.length >= 3) || "Min 3 characters"
      ],
      emailRules: [
        email => !!email || "Senha não inserida.",
        email => (email && email.length >= 3) || "Min 8 characters"
      ],
      register: {
        first_name: "",
        last_name: "",
        job: "",
        role: "admin",
        email: ""
      },
      name: ""
    };
  },
  methods: {
    signUp() {
      this.$emit("register", this.register);
    },
    setName() {
      let splitName = this.name.split(" ");

      this.first_name = splitName.shift();
      this.last_name = splitName.join(" ");
    }
  }
};
</script>

<style lang="scss">
.register-fields {
  margin-bottom: 22px;
  width: 100%;
  .fields {
    .v-text-field {
      width: 100%;
      margin-top: 0px;
      padding-top: 0px;
      margin-bottom: 34px;
      font-size: 16px;
      line-height: 24px;

      &:last-child {
        margin-bottom: 54px;
      }

      input {
        padding: 6px 0px;
      }
    }
  }

  button {
    width: 100%;
    border-radius: 5px;
    text-align: center;
    height: 56px;
    justify-content: center;
  }
}
</style>
