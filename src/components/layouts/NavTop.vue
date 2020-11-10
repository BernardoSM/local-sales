<template>
  <section id="nav-top">
    <div class="top">
      <div class="content">
        <div class="title">Contatos</div>
        <slot name="top-content" />
      </div>
      <div class="functions">
        <we-icon-button :icon="{ prefix: 'far', iconName: 'bell' }" />
        <div class="item">
          <img src="@/assets/User.png" alt="Usuário" width="38" height="38" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  }
};
</script>

<style lang="scss">
#nav-top {
  border-bottom: 1px solid $line;
  padding: 13px 50px;

  .top {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .content {
      display: flex;
      align-items: center;
      width: 100%;

      .title {
        font-size: 24px;
        font-weight: $regular;
        color: $black;
        margin-right: 36px;
      }

      .v-input.outline {
        max-width: 389px;
        margin-right: 18px;
      }
    }

    .functions {
      display: flex;

      .item {
        width: 38px;
        height: 38px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 18px;
        border-radius: 19px;
        cursor: pointer;

        &:hover {
          background: $dark8;
        }

        img {
          height: 32px;
          width: 32px;
        }
      }
    }
  }
}
</style>
