<template>
  <div id="clients">
    <div class="top">
      <we-balloon>
        <template #action>
          <we-button class="green" text="Novo cliente" icon="user-plus" />
        </template>
        <template #balloon>
          <v-form ref="form" v-model="createValid">
            <we-input
              v-model="name"
              isRequired
              type="text"
              placeholder="Nome"
            />
          </v-form>
          <we-button
            class="primary fill"
            icon="check"
            text="Criar cliente"
            @click="createClient"
            :loading="loadingBtn"
            :disabled="!createValid"
          ></we-button>
        </template>
      </we-balloon>
      <v-text-field
        label="Digite o nome"
        hide-details="auto"
        v-model="search"
        color="primary"
        class="outline"
        outlined
        dense
      >
        <font-awesome-icon icon="search" slot="append" />
      </v-text-field>
    </div>
    <div class="options">
      <div class="select-rounded">
        <div
          class="option"
          :class="{ active: accessType === 'current' }"
          @click="currentClients"
        >
          Sede Específica
        </div>
        <div
          class="option"
          :class="{ active: accessType === 'all' }"
          @click="allClients"
        >
          Todas as Sedes
        </div>
      </div>
    </div>
    <div class="list">
      <div
        class="item"
        v-for="(client, i) in filteredClients"
        :key="i"
        :class="{ active: currentClient.id === client.id }"
        @click="select(client)"
      >
        <div class="name">{{ client.name }}</div>
        <div class="select">Selecionar</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      createValid: false,
      name: "",
      search: "",
      loadingBtn: false,
      loading: false,
      accessType: "current"
    };
  },
  computed: {
    clients() {
      return this.$store.getters.getClients;
    },
    filteredClients() {
      return this.clients.filter(e => e.name.includes(this.search));
    },
    currentClient() {
      return this.$store.getters.getCurrentClient;
    },
    currentHeadOffice() {
      return this.$store.getters.getCurrentHeadOffice;
    }
  },
  methods: {
    ...mapActions([
      "clientsRequest",
      "createClientRequest",
      "clientsRequestByOffice"
    ]),
    async doRequests() {
      this.loading = true;
      await this.clientsRequestByOffice(this.currentHeadOffice.id);
      this.loading = false;
    },
    currentClients() {
      this.accessType = "current";
      this.doRequests();
    },
    async allClients() {
      this.accessType = "all";
      await this.clientsRequest();
    },
    async createClient() {
      this.loadingBtn = true;
      const payload = {
        name: this.name,
        headOfficeId: this.currentHeadOffice.id
      };
      console.log(payload);
      await this.createClientRequest(payload);
      await this.clientsRequest();
      this.loadingBtn = false;
    },
    select(client) {
      this.$store.commit("setCurrentClient", client);
    }
  },
  async mounted() {
    this.doRequests();
  }
};
</script>

<style lang="scss">
#clients {
  .top {
    margin-bottom: 26px;
    display: grid;
    grid-template-columns: 160px 1fr;
    gap: 26px;
  }

  .options {
    .select-rounded {
      display: flex;
      margin: 0 auto;
      height: 35px;
      width: fit-content;
      margin-bottom: 26px;
      font-size: 13px;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      font-weight: $medium;
      color: $dark60;
      border-radius: 20px;
      background: $white;
      border: 1px solid $line;

      .option {
        height: 100%;
        padding: 0 16px;
        display: flex;
        align-items: center;
        cursor: pointer;

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
  }

  .list {
    overflow-y: auto;
    max-height: calc(100vh - 288px);
    .item {
      padding: 0 15px;
      border: 1px solid $line;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      border-radius: 8px;
      margin-bottom: 12px;

      &.active {
        border: 2px solid $primary;

        .name {
          color: $primary;
        }
      }

      &:hover {
        border: 1px solid $primary;
        background: $primary;
        cursor: pointer;

        .name {
          color: $white;
        }

        .select {
          display: block;
        }
      }

      .name {
        font-size: 14px;
        font-weight: $semibold;
        color: $dark60;
      }

      .select {
        font-size: 14px;
        font-weight: $semibold;
        color: $white;
        display: none;
      }
    }
  }
}
</style>
