<template>
  <section id="nav-left">
    <div class="logo">
      <img src="@/assets/logo.svg" width="122" height="29" alt="WePipe Logo" />
    </div>
    <nav class="menu">
      <router-link
        :to="{ name: 'Pipelines' }"
        class="item"
        active-class="active"
      >
        <div class="icon">
          <font-awesome-icon icon="columns" />
        </div>
        Pipeline
      </router-link>
      <router-link
        :to="{ name: 'Activities' }"
        class="item"
        active-class="active"
      >
        <div class="icon">
          <font-awesome-icon
            :icon="{ prefix: 'far', iconName: 'calendar-alt' }"
          />
        </div>
        Atividades
      </router-link>
      <router-link :to="{ name: 'Deals' }" class="item" active-class="active">
        <div class="icon">
          <font-awesome-icon icon="coins" />
        </div>
        Oportunidades
      </router-link>
      <router-link
        :to="{ name: 'Contacts' }"
        class="item"
        active-class="active"
      >
        <div class="icon">
          <font-awesome-icon icon="users" />
        </div>
        Contatos
      </router-link>
      <router-link :to="{ name: 'Users' }" class="item" active-class="active">
        <div class="icon">
          <font-awesome-icon icon="user-tie" />
        </div>
        Usuários
      </router-link>
    </nav>
    <nav class="menu admin">
      <div class="label">Administrador</div>
      <router-link
        :to="{ name: 'Configurations' }"
        class="item"
        active-class="active"
      >
        <div class="icon">
          <font-awesome-icon icon="cog" />
        </div>
        Configurações
      </router-link>
    </nav>
  </section>
</template>

<style lang="scss">
#nav-left {
  border-right: 1px solid $line;

  .logo {
    height: 69px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid $line;

    img {
      width: 122px;
      height: auto;
    }
  }
  .menu {
    padding: 19px 8px;
    border-bottom: 1px solid $line;

    &:last-child {
      border-bottom: 0;
    }

    .label {
      font-size: 12px;
      font-weight: $medium;
      padding-left: 16px;
      margin-bottom: 9px;
      color: rgba($black, 0.3);
    }

    .item {
      height: 40px;
      display: flex;
      align-items: center;
      color: $dark60;
      font-size: 12px;
      font-weight: $semibold;
      padding: 0 6px;
      border-radius: 7px;
      margin-bottom: 13px;

      &:hover {
        background: $dark5;
      }

      &.active {
        color: $primary;
        background: $primary25;
      }

      &:last-child {
        margin-bottom: 0;
      }

      .icon {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 15px;

        svg {
          height: 22px;
          width: auto;
        }
      }
    }
  }
}
</style>
