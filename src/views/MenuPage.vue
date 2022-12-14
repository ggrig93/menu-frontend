<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex justify-content-end">
        <router-link v-if="hasToken" class="navbar-brand" to="/add/product">
          <button class="btn btn-outline-success" type="submit">Add Product</button>
        </router-link>
      </div>
    </div>
    <div class="row mt-5 scrollable">
      <div class="col-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
              <th scope="col">img</th>
              <th scope="col">Edit</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr
                v-for="item in products"
                :key="item.id">
              <th>{{ item.name }}</th>
              <td>{{ item.description }}</td>
              <td>{{ item.price }}</td>
              <th>{{ getCategoryName(item.categoryId) }}</th>
              <td>
                <img :src="getThumbnail(item.image)" :height="height"/>
              </td>
              <td>
                <button
                    class="btn btn-outline-primary"
                    :id="item.id"
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                    @click="currentProduct = item"
                    :disabled="!hasToken">
                  edit
                </button>
                <EditProduct
                    :product="currentProduct"
                />
              </td>
              <td>
                <button
                    class="btn btn-outline-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#removeModal"
                    @click="currentProduct = item"
                    :disabled="!hasToken">
                  remove
                </button>
                <DeleteProduct
                    :id="item.id"
                    :name="item.name"
                    :product="currentProduct"/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import EditProduct from "@/components/EditProduct";
import DeleteProduct from "@/components/DeleteProduct";
import environment from '../../environment';

export default {
  name: 'MenuPage',
  components: {DeleteProduct, EditProduct},
  data () {
    return {
      height: 150,
      currentProduct: {}
    }
  },
  computed: {
    ...mapGetters('productsMod', ['products']),
    ...mapGetters('authMod', ['token']),
    ...mapGetters('categoriesMod', ['categories']),
    hasToken() {
      return this.token || localStorage.getItem('token')
    }
  },
  mounted() {
    this.getProducts()
    this.getCategories()
  },
  methods: {
    ...mapActions('categoriesMod', ['getCategories']),
    ...mapActions('productsMod', ['getProducts']),
    getThumbnail(image) {
      if (image){
        return `${environment.baseURL}storage/${image}`
      }
    },
    getCategoryName(id) {
      return this.categories.find(item => item.id === id)?.name
    }
  }
}
</script>
