<template>
  <div id="product">
    <div class="container">
      <h2>Ajouter un produit</h2>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Nom du produit :"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.name"
            placeholder="Nom du produit"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Description :"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.description"
            placeholder="Description"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Categories :"
          label-for="input-3"
        >
          <b-form-select
            id="input-3"
            v-model="form.categories"
            :options="categories"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-4" label="Image :" label-for="input-3">
          <b-form-file
            id="input-4"
            v-model="form.image"
            @change="onFileSelected"
            required
            >Select File</b-form-file
          >
        </b-form-group>

        <b-form-group id="input-5" label="Quantité" label-for="input-5">
          <b-form-select
            id="input-5"
            v-model="form.quantity"
            :options="quantity"
            required
          ></b-form-select>
        </b-form-group>
        <b-button class="mr-2" type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>
  </div>
</template>

<script>
//import axios from 'axios';
export default {
  data() {
    return {
      form: {
        name: "",
        description: "",
        selectedFile: null,
        categories: null,
        quantity: null,
      },
      categories: [
        { text: "Selectionner une catégorie", value: null },
        "Pommade",
        "Sirop",
        "Comprimé/Gélule",
        "Orodispersible",
        "Suppositoire",
        "Voie nasale",
        "Désinfectant",
      ],
      quantity: [
        { text: "Selectionner la quantité", value: null },
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onFileSelected(event) {
      this.selectedFile = event.target.file[0];
    },
    onReset(event) {
      event.preventDefault();
      this.form.name = "";
      this.form.description = "";
      this.form.categories = null;
      this.form.quantity = null;
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style></style>
