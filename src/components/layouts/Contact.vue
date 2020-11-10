<template>
  <div id="contact">
    <div class="head">
      <div class="options">
        <we-icon-button
          icon="user-times"
          name="Apagar contato"
          direction="bottom"
          @click="deleteContact(contact.id)"
        />
        <we-icon-button icon="times" @click="$emit('close')" />
      </div>
      <div class="data">
        <div class="picture">
          <img
            v-if="contact.picture"
            :src="contact.picture"
            :alt="contact.first_name"
            width="96"
            height="96"
          />
          <img
            v-else
            src="@/assets/profile.svg"
            :alt="contact.first_name"
            width="96"
            height="96"
          />
          <div class="action">
            <input
              type="file"
              id="upload"
              ref="file"
              class="picture"
              accept="image/x-png,image/gif,image/jpeg"
              @change="onFileChange"
            />
            <we-icon-button
              color="icon-green"
              icon="camera"
              name="Atualizar foto"
              @click="selectImage"
            />
            <we-icon-button
              color="icon-red"
              icon="times"
              name="Remover foto"
              @click="deleteContactImage(contact.id)"
            />
          </div>
          <we-loading-overflow class="small" :loading="imgLoading" />
        </div>
        <div class="name">{{ contact.first_name }} {{ contact.last_name }}</div>
      </div>
    </div>
    <div class="body">
      <nav class="right-menu">
        <a href="#profile" class="nav-item link">
          <font-awesome-icon icon="user" />
        </a>
        <a href="#address" class="nav-item link">
          <font-awesome-icon icon="globe-americas" />
        </a>
        <a href="#bank" class="nav-item link">
          <font-awesome-icon
            :icon="{ prefix: 'far', iconName: 'credit-card' }"
          />
        </a>
        <a href="#activities" class="nav-item link">
          <font-awesome-icon icon="tasks" />
        </a>
        <a href="#custom-fields" class="nav-item link">
          <font-awesome-icon icon="folder-plus" />
        </a>
      </nav>
      <section id="profile" name="profile">
        <div class="title">
          <div class="icon">
            <font-awesome-icon icon="user" />
          </div>
          Dados Pessoais
        </div>
        <div class="fields">
          <we-input
            v-model="contact.first_name"
            type="text"
            placeholder="Nome"
            label="Nome"
          />
          <we-input
            type="text"
            v-model="contact.last_name"
            placeholder="Sobrenome"
            label="Sobrenome"
          />
          <we-input
            label="Sexo"
            type="select"
            v-model="contact.gender"
            :items="['masculino', 'feminino']"
            placeholder="Sexo"
          />
          <we-input
            v-model="contact.birthdate"
            type="datepicker"
            placeholder="Data de Nascimento"
            label="Data de Nascimento"
          />
          <we-input
            v-model="contact.email"
            type="text"
            placeholder="E-mail"
            label="E-mail"
          />
          <we-input
            v-model="contact.phone"
            type="text"
            placeholder="Telefone"
            label="Telefone"
            v-mask="'(##) #####-####'"
          />
          <we-input type="text" placeholder="Documento" label="Documento" />
        </div>
      </section>
      <section id="address" name="address">
        <div class="title">
          <div class="icon">
            <font-awesome-icon icon="globe-americas" />
          </div>
          Localização
        </div>
        <div class="fields">
          <we-input
            v-model="contact.address_zipcode"
            type="text"
            placeholder="CEP"
            label="CEP"
            v-mask="'#####-###'"
          />
          <we-input
            v-model="contact.address_street"
            type="text"
            placeholder="Rua"
            label="Rua"
          />
          <we-input
            v-model="contact.address_number"
            v-mask="'######'"
            type="text"
            placeholder="Número"
            label="Número"
          />
          <we-input
            v-model="contact.address_block"
            type="text"
            placeholder="Apartamento/Bloco"
            label="Apartamento/Bloco"
          />
          <we-input
            v-model="contact.address_city"
            type="text"
            placeholder="Cidade"
            label="Cidade"
          />
          <we-input
            v-model="contact.address_state"
            type="text"
            placeholder="Estado"
            label="Estado"
          />
          <we-input
            v-model="contact.address_country"
            type="text"
            placeholder="País"
            label="País"
          />
        </div>
      </section>
      <section id="bank" name="bank">
        <div class="title">
          <div class="icon">
            <font-awesome-icon
              :icon="{ prefix: 'far', iconName: 'credit-card' }"
            />
          </div>
          Dados Bancários
        </div>
        <div class="fields">
          <we-input
            v-model="contact.bank_name"
            type="text"
            placeholder="Nome do Banco"
            label="Nome do Banco"
          />
          <we-input
            v-model="contact.bank_code"
            type="text"
            placeholder="Código"
            v-mask="'######'"
            label="Código"
          />
          <we-input
            v-model="contact.bank_agency"
            type="text"
            placeholder="Agência"
            v-mask="['####', '####-#', '####-##']"
            label="Agência"
          />
          <we-input
            v-model="contact.bank_account"
            type="text"
            placeholder="Conta"
            v-mask="[
              '#####-#',
              '######-#',
              '#######-#',
              '########-#',
              '#########-#',
              '###########-#'
            ]"
            label="Conta"
          />
          <we-input
            label="Tipo de Conta"
            type="select"
            clearable
            v-model="contact.bank_account_type"
            :items="['Corrente', 'Poupança']"
            placeholder="Tipo de Conta"
          />
          <we-input
            label="Dono da Conta"
            type="select"
            v-model="contact.bank_account_owner"
            :items="['Sim', 'Não']"
            placeholder="Dono da Conta"
          />
          <we-input
            v-model="contact.bank_account_owner_document"
            type="text"
            placeholder="Documento do Dono"
            label="Documento do Dono"
            v-mask="'###.###.###-##'"
          />
        </div>
      </section>
      <section id="activities" name="activities">
        <div class="title">
          <div class="icon">
            <font-awesome-icon icon="tasks" />
          </div>
          Atividades
        </div>
        <div class="fields fill">
          <we-input type="textarea" placeholder="Adicione uma descrição" />
        </div>
      </section>
      <section id="custom-fields" name="custom-fields">
        <div class="title">
          <div class="icon">
            <font-awesome-icon icon="folder-plus" />
          </div>
          Campos Customizados
        </div>
      </section>
    </div>
    <div class="bottom active">
      <we-button
        @click="updateContact(contact)"
        class="green"
        text="Salvar alterações"
        icon="check"
        :loading="btnLoading"
      />
    </div>
    <we-loading-overflow :loading="loading" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      name: "wolf",
      gender: "",
      loading: true,
      btnLoading: false,
      imgLoading: false,
      picture: {}
    };
  },
  computed: {
    contact() {
      return this.$store.getters.getCurrentContact;
    }
  },
  methods: {
    ...mapActions([
      "contactRequest",
      "updateContactRequest",
      "deleteContactRequest",
      "updateContactPictureRequest",
      "deleteContactPictureRequest"
    ]),
    async updateContact(contact) {
      this.btnLoading = true;
      await this.updateContactRequest(contact);
      this.btnLoading = false;
    },
    async deleteContact(id) {
      this.loading = true;
      await this.deleteContactRequest(id);
      this.loading = false;
      this.$emit("close");
    },
    selectImage() {
      this.$refs.file.click();
    },
    async onFileChange(e) {
      const file = e.target.files[0];
      this.picture = file;
      this.imgLoading = true;
      await this.updateContactPictureRequest(this.picture);
      this.imgLoading = false;
    },
    async deleteContactImage(id) {
      this.imgLoading = true;
      await this.deleteContactPictureRequest(id);
      this.imgLoading = false;
    }
  },
  async mounted() {
    await this.contactRequest(this.$route.params.contactId);
    this.loading = false;
  }
};
</script>

<style lang="scss">
#contact {
  height: calc(100% - 20px);
  width: 600px;
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fff;
  border-radius: 10px;
  box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.25);
  z-index: 1;
  overflow: hidden;

  .head {
    height: 85px;
    background: $background;
    border-bottom: 1px solid $line;
    position: relative;

    .options {
      position: absolute;
      top: 10px;
      right: 10px;
      display: flex;
    }

    .data {
      display: flex;
      padding: 0 15px;
      justify-content: center;
      position: relative;
      align-items: center;
      bottom: -25px;
      pointer-events: none;
      z-index: 1;

      .picture {
        width: 98px;
        height: 98px;
        margin-right: 16px;
        background: $line;
        border-radius: 49px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        pointer-events: initial;
        overflow: hidden;
        border: 1px solid $line;

        img {
          width: 100%;
          height: auto;
          position: absolute;
          top: 0;
        }

        &:hover {
          .action {
            display: flex;
          }
        }

        .action {
          display: none;
          pointer-events: initial;
          position: absolute;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;

          #upload {
            width: 100%;
            height: 100%;
            opacity: 0;
            -moz-opacity: 0;
            filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0);
            position: absolute;
            top: 0;
            left: 0;
            pointer-events: none;
          }
        }
      }

      .name {
        position: relative;
        bottom: 5px;
        font-size: 18px;
        color: $black;
        font-weight: $regular;
      }
    }
  }

  .body {
    padding: 55px 98px 55px 25px;
    max-height: calc(100vh - 105px);
    overflow-y: auto;
    position: relative;

    .right-menu {
      position: fixed;
      right: 0;
      top: 140px;
      right: 15px;
      width: 38px;

      .link {
        width: 100%;
        height: 40px;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 10px;
        position: relative;
        cursor: pointer;

        &:hover {
          svg {
            color: $dark60;
          }
        }

        &.active {
          &::before {
            content: "";
            position: absolute;
            width: 3px;
            height: 100%;
            right: 0;
            top: 0;
            background: $primary;
            border-radius: 3px;
          }
          svg {
            color: $black;
          }
        }

        svg {
          height: 24px;
          width: auto;
          color: $dark20;
        }
      }
    }

    section {
      margin-bottom: 24px;

      .title {
        display: flex;
        align-items: center;
        font-weight: $semibold;
        color: $dark60;
        font-size: 16px !important;
        margin-bottom: 16px;

        .icon {
          width: 30px;
          display: flex;
          align-items: center;

          svg {
            height: 18px;
            width: auto;
          }
        }
      }

      .fields {
        padding-left: 23px;
        display: grid;
        grid-template-columns: 218px 218px;
        gap: 16px;

        &.fill {
          grid-template-columns: 1fr;
        }
      }
    }
  }

  .bottom {
    position: absolute;
    width: 100%;
    bottom: -50px;
    height: 50px;
    display: flex;
    justify-content: center;

    &.active {
      bottom: 0;
    }

    button {
      min-width: 176px;
    }
  }
}
</style>
