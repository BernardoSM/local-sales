<template>
  <div id="layout-default">
    <nav class="nav-top">
      <router-link
        :to="{ name: 'headoffices' }"
        class="item"
        active-class="active"
      >
        Sedes
      </router-link>
      <router-link :to="{ name: 'clients' }" class="item" active-class="active">
        Clientes
      </router-link>
      <router-link
        :to="{ name: 'products' }"
        class="item"
        active-class="active"
      >
        Produtos
      </router-link>
      <router-link
        :to="{ name: 'resume' }"
        disabled
        class="item"
        active-class="active"
      >
        Resumo
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#layout-default {
  width: 100%;
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding-top: 100px;

  .nav-top {
    display: flex;
    border-bottom: 1px solid $line;
    margin-bottom: 26px;

    .item {
      padding-bottom: 8px;
      margin-right: 16px;
      font-weight: $medium;
      color: $dark60;

      &:hover {
        color: $black;
      }

      &.active {
        color: $primary;
        font-weight: $semibold;
      }
    }
  }
}
</style>
