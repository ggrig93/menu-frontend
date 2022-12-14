<template>
  <div class="modal fade" id="removeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Are you sure you want to delete {{product.name}}?</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="deleteAction">
          Remove
        </button>
      </div>
    </div>
  </div>
  </div>
</template>
<script>

import router from "@/router";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'DeleteProduct',
  props:['id', 'name', 'product'],
  data(){
    return{};
  },
  computed: {
    ...mapGetters('categoriesMod', ['categories']),
  },
  mounted() {
    this.getProducts()
  },
  methods:{
    ...mapActions('productsMod', ['getProducts']),
    async deleteAction(){
      try{
        this.$store.dispatch('productsMod/removeProduct', this.product.id);
        await router.push("/")
      }
      catch(error){
        console.log(error)
      }
    },
  }
}
</script>