<template>
  <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ product.name }} edit</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
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
                  id=""
                  placeholder="description"
                  v-model="formData.description">
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
                  @change="changeHandler">
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
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                  @click="updateAction"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import router from "@/router";

export default {
  name: 'EditProduct',
  props: ['product'],
  data(){
    return{
      formData: {
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        image: this.product.image,
        categoryId: this.product.categoryId,
      },
    };
  },
  computed: {
    ...mapGetters('categoriesMod', ['categories']),
  },
  watch: {
    product: {
      deep: true,
      immediate: true,
      handler() {
        this.formData = {
          name: this.product.name,
          description: this.product.description,
          price: this.product.price,
          image: this.product.image,
          categoryId: this.product.categoryId,
        }
      }
    }
  },
  mounted() {
    this.getCategories()
    this.getProducts()
  },
  methods:{
    ...mapActions('categoriesMod', ['getCategories']),
    ...mapActions('productsMod', ['getProducts']),
    changeHandler() {
      this.formData.image = event.target.files[0]
    },
    async updateAction(){
      try{
        let data = new FormData();

        for(let key in this.formData) {
          data.append(key, this.formData[key])
        }
        this.$store.dispatch('productsMod/updateProduct', {data, id: this.product.id});
        await router.push("/")
      }
      catch(error){
        console.log(error)
      }
    },
  }
}
</script>