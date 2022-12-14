<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <span v-if="errors.length" class="text-red">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors" :key="error.id">{{ error }}</li>
          </ul>
        </span>
        <div class="form-group">
          <div class="mb-3 row">
            <div class="col-sm-6">
              <input
                  type="text"
                  class="form-control"
                  id="staticEmail"
                  placeholder="name"
                  v-model="formData.name">
            </div>
            <div class="col-sm-6">
              <input
                  type="text"
                  class="form-control"
                  v-model="formData.description"
                  placeholder="description">
            </div>
          </div>
          <div class="mb-3 row">
            <div class="col-sm-6">
              <input type="text" class="form-control" id="" placeholder="price" v-model="formData.price">
            </div>
            <div class="col-sm-6">
                  <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile02"
                      @change="changeHandler"
                  >
            </div>
          </div>
          <div class="mb-3 row  d-flex justify-content-center">
            <div class="col-sm-6">
              <select
                  class="form-select"
                  aria-label="Default select category"
                  v-model="formData.categoryId">
                <option
                    v-for="item in categories"
                    :key="item.id"
                    :value="item.id"
                >{{ item.name }}</option>
              </select>
            </div>
          </div>
          <div class="mb-3 row">
            <div class="col-sm-12">
              <button
                  class="btn btn-outline-primary px-5"
                  @click="createAction">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import router from "@/router";
export default {
  name: 'AddProduct',
  data(){
    return{
      errors: [],
      formData: {
        name: '',
        description: '',
        price: null,
        image: '',
        categoryId: '',
      },
    };
  },
  computed: {
    ...mapGetters('categoriesMod', ['categories']),
  },
  mounted() {
    this.getCategories()
  },
  methods:{
    ...mapActions('categoriesMod', ['getCategories']),
    changeHandler() {
      this.formData.image = event.target.files[0]
    },
    async createAction(){
      this.errors = [];

      if (!this.formData.name) {
        this.errors.push('Name required.');
      }
      if (!this.formData.description) {
        this.errors.push('Description required.');
      }
      if (!this.formData.price || isNaN(this.formData.price)) {
        this.errors.push('Invalid Price.');
      }
      if (!this.formData.image) {
        this.errors.push('Image required.');
      }
      if (!this.formData.categoryId) {
        this.errors.push('Category required.');
      } else {

        let data = new FormData();

        for (let key in this.formData) {
          data.append(key, this.formData[key])
        }

        try {
          this.$store.dispatch('productsMod/createProduct', data);
          await router.push("/")
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
}
</script>