<template>
  <div id="resume">
    <we-button
      text="Finalizar compra"
      class="green"
      :disabled="!finished"
      v-if="!clicked"
      @click="createResume"
    ></we-button>
    <template v-else>
      <h2>A venda foi realizada com sucesso!</h2>
      <div class="data">
        <span class="label">Sede:</span> {{ currentHeadOffice.name }}
      </div>
      <div class="data">
        <span class="label">Cliente:</span> {{ currentClient.name }}
      </div>
      <div class="data">
        <span class="label">Valor total:</span> R$ {{ totalProductsValue }}
      </div>
      <div class="list">
        <div class="item" v-for="(product, i) in currentProducts" :key="i">
          <div class="name">
            {{ product.description }}
            <span class="value"> R$ {{ product.value }} </span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      loadingBtn: false,
      loading: false,
      clicked: false
    };
  },
  computed: {
    finished() {
      return (
        this.currentHeadOffice &&
        this.currentClient &&
        this.currentProducts.length > 0
      );
    },
    resume() {
      return this.$store.getters.getResumes;
    },
    currentHeadOffice() {
      return this.$store.getters.getCurrentHeadOffice;
    },
    currentClient() {
      return this.$store.getters.getCurrentClient;
    },
    currentProducts() {
      return this.$store.getters.getCurrentProducts;
    },
    totalProductsValue() {
      let total = 0;
      this.currentProducts.forEach(e => (total += e.value));
      return total;
    },
    currentResume() {
      return this.$store.getters.getCurrentResume;
    }
  },
  methods: {
    ...mapActions(["resumesRequest", "createResumeRequest"]),
    async createResume() {
      this.clicked = true;
      const payload = {
        totalValue: this.totalProductsValue,
        clientId: this.currentClient.id,
        headOfficeId: this.currentHeadOffice.id,
        items: this.currentProducts.map(e => {
          return {
            quantity: 1,
            productId: e.id
          };
        })
      };

      this.createResumeRequest(payload);
    }
  }
};
</script>

<style lang="scss">
#resume {
  button {
    margin: 0 auto;
  }

  h2 {
    text-align: center;
    color: $we-green;
    margin-bottom: 26px;
  }

  .data {
    font-size: 16px;
    font-weight: $medium;
    color: $black;
    text-align: center;
    margin-bottom: 8px;

    .label {
      color: $dark60;
    }
  }

  .list {
    padding-top: 32px;

    .item {
      padding: 0 15px;
      border: 1px solid $line;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      border-radius: 8px;
      margin-bottom: 12px;

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
