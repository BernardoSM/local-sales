<template>
  <div id="contacts">
    <nav-top>
      <template #top-content>
        <v-text-field
          label="Digite o nome, telefone, documento..."
          hide-details="auto"
          v-model="search"
          color="primary"
          class="outline"
          outlined
          dense
        >
          <font-awesome-icon icon="search" slot="append" />
        </v-text-field>
        <we-balloon>
          <template #action>
            <we-button class="green" text="Novo contato" icon="user-plus" />
          </template>
          <template #balloon>
            <v-form ref="form" v-model="createValid">
              <we-input
                v-model="first_name"
                isRequired
                type="text"
                placeholder="Nome"
              />
              <we-input
                v-model="last_name"
                isRequired
                type="text"
                placeholder="Sobrenome"
              />
              <we-input
                v-model="email"
                isRequired
                type="email"
                placeholder="Email"
              />
            </v-form>
            <we-button
              class="primary fill"
              icon="check"
              text="Criar contato"
              @click="createContact"
              :loading="loadingBtn"
              :disabled="!createValid"
            ></we-button>
          </template>
        </we-balloon>
      </template>
    </nav-top>
    <div class="board">
      <div class="functions">
        <div class="filters">
          <div class="items">
            <we-input
              type="multiselect"
              v-model="value"
              :items="items"
              placeholder="Categoria"
            />
          </div>
        </div>
        <div class="actions">
          <we-icon-button
            icon="sync-alt"
            @click="doRequests"
            name="Recarregar"
          />
          <we-icon-button icon="download" />
        </div>
      </div>
      <div class="list" v-scroll.self="handleScroll">
        <div class="labels">
          <div class="label">
            <div class="name">Nome</div>
            <div class="icon">
              <font-awesome-icon icon="sort-up" />
              <font-awesome-icon icon="sort-down" />
            </div>
          </div>
          <div class="label">
            <div class="name">Telefone</div>
            <div class="icon">
              <font-awesome-icon icon="sort-up" />
              <font-awesome-icon icon="sort-down" />
            </div>
          </div>
          <div class="label">
            <div class="name">Documento</div>
            <div class="icon">
              <font-awesome-icon icon="sort-up" />
              <font-awesome-icon icon="sort-down" />
            </div>
          </div>
          <div class="label">
            <div class="name">Data de Cadastro</div>
            <div class="icon">
              <font-awesome-icon icon="sort-up" />
              <font-awesome-icon icon="sort-down" />
            </div>
          </div>
          <div class="label">
            <div class="name">Última atualização</div>
            <div class="icon">
              <font-awesome-icon icon="sort-up" />
              <font-awesome-icon icon="sort-down" />
            </div>
          </div>
        </div>
        <div class="items">
          <div
            class="card-list"
            v-for="(contact, i) in contacts"
            :key="i"
            @click="$store.commit('openContactModal', contact.id)"
          >
            <div class="column profile">
              <div class="picture">
                <img
                  v-if="contact.picture"
                  :src="contact.picture"
                  :alt="contact.first_name"
                  width="38"
                  height="38"
                />
                <img
                  v-else
                  src="@/assets/profile.svg"
                  :alt="contact.first_name"
                  width="38"
                  height="38"
                />
              </div>
              <div class="data">
                <div class="name">
                  {{ contact.first_name }} {{ contact.last_name }}
                </div>
                <div class="email">{{ contact.email }}</div>
              </div>
            </div>
            <div class="column">{{ contact.phone }}</div>
            <div class="column">{{ contact.document }}</div>
            <div class="column">{{ contact.created_at }}</div>
            <div class="column">{{ contact.updated_at }}</div>
          </div>
        </div>
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
      search: "",
      value: [],
      items: ["Opcao1", "Opcao2"],
      first_name: "",
      last_name: "",
      email: "",
      loadingBtn: false
    };
  },
  computed: {
    contacts() {
      return this.$store.getters.getContacts;
    }
  },
  methods: {
    ...mapActions(["contactsRequest", "createContactRequest"]),
    async doRequests() {
      this.loading = true;
      await this.contactsRequest();
      this.loading = false;
    },
    async createContact() {
      this.loadingBtn = true;
      const { first_name, last_name, email } = this;
      await this.createContactRequest({ first_name, last_name, email });
      this.loadingBtn = false;
    },
    handleScroll(e) {
      let scrolledBottom =
        e.target.scrollTop + e.target.clientHeight === e.target.scrollHeight;
      if (scrolledBottom) {
        console.log("chegou no final");
      }
    }
  },
  async mounted() {
    this.doRequests();
  }
};
</script>

<style lang="scss">
#contacts {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 69px calc(100vh - 69px);
  position: relative;

  .board {
    background: $background;
    width: 100%;
    height: 100%;

    .functions {
      padding: 13px 50px;
      border-bottom: 1px solid $line;
      display: flex;
      justify-content: space-between;

      .filters {
        .items {
          display: grid;
          grid-template-columns: repeat(auto-fill, 140px);
          gap: 16px;
        }
      }

      .actions {
        display: flex;
        align-items: flex-end;

        .item {
          height: 27px;
          padding: 0 9px;
          display: flex;
          align-items: center;
          font-size: 12px;
          font-weight: $semibold;
          color: $dark60;
          border-radius: 5px;
          margin-left: 8px;
          cursor: pointer;

          &.highlight {
            color: $we-blue;
          }

          &:hover {
            background: $dark8;
          }

          svg {
            height: 16px;
            width: auto;
            margin-right: 7px;
          }
        }
      }
    }
  }

  .list {
    padding: 0 50px;
    $column-size: 1fr;
    max-height: calc(100vh - 138px);
    overflow-y: auto;

    .labels {
      padding: 0 14px;
      padding-top: 14px;
      padding-bottom: 14px;
      display: grid;
      grid-template-columns: minmax(340px, 1fr) $column-size $column-size $column-size $column-size;
      gap: 8px;

      .label {
        display: flex;
        align-items: center;
        cursor: pointer;

        &:hover {
          .name,
          .icon svg {
            color: $black;
          }
        }

        .name {
          font-size: 13px;
          text-transform: uppercase;
          font-weight: $semibold;
          color: $dark60;
        }

        .icon {
          position: relative;
          width: 12px;
          margin-left: 8px;
          height: 16px;

          svg {
            position: absolute;
            top: 0;
            right: 0;
            color: $dark60;
          }
        }
      }
    }

    .items {
      .card-list {
        padding: 11px 14px;
        background: $white;
        border-radius: 10px;
        border: 1px solid $line;
        display: grid;
        grid-template-columns: minmax(340px, 1fr) $column-size $column-size $column-size $column-size;
        gap: 8px;
        margin-bottom: 12px;
        cursor: pointer;

        &:hover {
          background: $primary;
          border: 1px solid $primary;

          .column {
            color: $white;

            &.profile .data .email {
              color: $white;
            }
          }
        }

        .column {
          display: flex;
          height: 100%;
          align-items: center;
          font-size: 14px;
          font-weight: $regular;
          color: $black;

          &.profile {
            .picture {
              width: 38px;
              height: 38px;
              display: block;
              margin-right: 12px;
              overflow: hidden;
              border-radius: 20px;
              border: 1px solid $line;

              img {
                width: 100%;
                height: auto;
              }
            }

            .data {
              .name {
                font-weight: $medium;
              }
              .email {
                color: $dark60;
              }
            }
          }
        }
      }
    }
  }
}
</style>
