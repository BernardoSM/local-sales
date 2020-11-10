<template>
  <div id="products">
    <div class="top">
      <we-balloon>
        <template #action>
          <we-button class="green" text="Novo produto" icon="plus" />
        </template>
        <template #balloon>
          <v-form ref="form" v-model="createValid">
            <we-input
              v-model="description"
              isRequired
              type="text"
              placeholder="Nome"
            />
            <we-input
              v-model="value"
              isRequired
              type="text"
              v-mask="'#####'"
              placeholder="Valor"
            />
          </v-form>
          <we-button
            class="primary fill"
            icon="check"
            text="Criar produto"
            @click="createProduct"
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
        v-for="(product, i) in filteredProducts"
        :key="i"
        :class="{ active: isSelected(product) }"
        @click="select(product)"
      >
        <div class="name">
          {{ product.description }}
          <span class="value"> R$ {{ product.value }} </span>
        </div>
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
      description: "",
      value: "",
      search: "",
      loadingBtn: false,
      loading: false
    };
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
    filteredProducts() {
      return this.products.filter(e => e.description.includes(this.search));
    },
    currentProducts() {
      return this.$store.getters.getCurrentProducts;
    }
  },
  methods: {
    ...mapActions(["productsRequest", "createProductRequest"]),
    async doRequests() {
      this.loading = true;
      await this.productsRequest();
      this.loading = false;
    },
    async createProduct() {
      this.loadingBtn = true;
      const { description, value } = this;
      await this.createProductRequest({ description, value });
      this.loadingBtn = false;
    },
    select(product) {
      this.$store.commit("setCurrentProducts", product);
    },
    isSelected(product) {
      return this.currentProducts.some(e => e.id === product.id);
    }
  },
  async mounted() {
    this.doRequests();
  }
};
</script>

<style lang="scss">
#products {
  .top {
    margin-bottom: 26px;
    display: grid;
    grid-template-columns: 160px 1fr;
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
        background: $white;

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

          .value {
            color: $white;
          }
        }

        .select {
          display: block;
        }
      }

      .name {
        font-size: 14px;
        font-weight: $semibold;
        color: $dark60;

        .value {
          color: $we-green;
        }
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
