<template>
  <div id="login">
    <div class="container">
      <div class="logo">
        <img
          src="@/assets/logo.svg"
          width="138"
          height="32"
          alt="WePipe Logo"
        />
      </div>
      <div class="we-title">Seja muito bem vindo!</div>
      <div class="select-rounded">
        <div
          class="option"
          :class="{ active: accessType === 'LOGIN' }"
          @click="accessType = 'LOGIN'"
        >
          Entrar
        </div>
        <div
          class="option"
          :class="{ active: accessType === 'REGISTER' }"
          @click="accessType = 'REGISTER'"
        >
          Cadastrar
        </div>
      </div>
      <LoginFields @login="signIn" />
      <div class="forgot-pass">
        Esqueci a senha
      </div>
    </div>
  </div>
</template>

<script>
import LoginFields from "@/views/login/LoginFields.vue";
import { mapActions } from "vuex";

export default {
  components: {
    LoginFields
  },
  data() {
    return {
      accessType: "LOGIN",
      loading: false
    };
  },
  methods: {
    ...mapActions(["authRequest"]),
    signIn(login) {
      this.loading = true;

      let formData = new FormData();

      for (var e in login) {
        formData.append(e, login[e]);
      }

      this.authRequest(formData).then(
        () => {
          this.$router.push({ path: "/", name: "Home" });
          this.loading = false;
        },
        () => {
          this.loading = false;
        }
      );
    }
  }
};
</script>

<style lang="scss">
#login {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 156px 820px 245px 204px;
  background: url("~@/assets/bg-hero-home.svg") no-repeat -100px center;

  .container {
    padding: 0;
    max-width: 390px;

    .logo {
      display: flex;
      margin-bottom: 49px;
    }

    .we-title {
      font-size: 64px;
      line-height: 75px;
      font-style: normal;
      font-weight: $semibold;
      color: $black;
      margin-bottom: 46px;
    }

    .select-rounded {
      display: flex;
      margin: 0 auto;
      height: 35px;
      width: fit-content;
      margin-bottom: 61px;
      font-size: 13px;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      font-weight: $medium;
      color: $dark60;
      border-radius: 20px;
      background: $white;

      .option {
        height: 100%;
        padding: 0 16px;
        display: flex;
        align-items: center;
        cursor: pointer;
        box-shadow: 0px 4px 10px rgba($black, 0.05);

        &:first-child {
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
        }

        &:last-child {
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
        }

        &:hover {
          color: $primary;
        }

        &.active {
          background: $primary;
          color: $white;
        }
      }
    }

    .login-fields,
    .register-fields {
      max-width: 370px;
    }

    .forgot-pass {
      font-size: 13px;
      line-height: 19.5px;
      font-style: normal;
      font-weight: $medium;
      color: $primary;
      text-align: center;
    }
  }
}
</style>
