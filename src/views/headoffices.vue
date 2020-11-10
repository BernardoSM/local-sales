<template>
  <div id="headoffices">
    <div class="top">
      <we-balloon>
        <template #action>
          <we-button class="green" text="Nova sede" icon="plus" />
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
            text="Criar sede"
            @click="createHeadOffice"
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
    <div class="list">
      <div
        class="item"
        v-for="(office, i) in filteredOffices"
        :key="i"
        :class="{ active: currentHeadOffice.id === office.id }"
        @click="select(office)"
      >
        <div class="name">{{ office.name }}</div>
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
      loading: false
    };
  },
  computed: {
    headOffices() {
      return this.$store.getters.getHeadOffices;
    },
    filteredOffices() {
      return this.headOffices.filter(e => e.name.includes(this.search));
    },
    currentHeadOffice() {
      return this.$store.getters.getCurrentHeadOffice;
    }
  },
  methods: {
    ...mapActions(["headOfficesRequest", "createHeadOfficeRequest"]),
    async doRequests() {
      this.loading = true;
      await this.headOfficesRequest();
      this.loading = false;
    },
    async createHeadOffice() {
      this.loadingBtn = true;
      const { name } = this;
      await this.createHeadOfficeRequest({ name });
      await this.headOfficesRequest();
      this.loadingBtn = false;
    },
    select(office) {
      this.$store.commit("setCurrentHeadOffice", office);
    }
  },
  async mounted() {
    this.doRequests();
  }
};
</script>

<style lang="scss">
#headoffices {
  .top {
    margin-bottom: 26px;
    display: grid;
    grid-template-columns: 130px 1fr;
    gap: 26px;
  }

  .list {
    overflow-y: auto;
    max-height: calc(100vh - 228px);
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
