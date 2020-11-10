<template>
  <div class="login-fields">
    <div class="fields">
      <v-text-field
        label="Email"
        :rules="emailRules"
        hide-details="auto"
        v-model="login.email"
        color="dark60"
      ></v-text-field>
      <v-text-field
        label="Senha"
        :rules="passwordRules"
        hide-details="auto"
        v-model="login.password"
        color="dark60"
      ></v-text-field>
    </div>
    <we-button
      class="primary"
      text="Fazer login"
      icon="arrow-right"
      iconPosition="right"
      @click.native="signIn()"
    ></we-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailRules: [
        email => !!email || "Email não inserido.",
        email => (email && email.length >= 3) || "Min 3 characters"
      ],
      passwordRules: [
        password => !!password || "Senha não inserida.",
        password => (password && password.length >= 8) || "Min 4 characters"
      ],
      login: {
        password: "",
        email: "",
        domain: "wepipe"
      }
    };
  },
  methods: {
    signIn() {
      this.$emit("login", this.login);
    }
  }
};
</script>

<style lang="scss">
.login-fields {
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
