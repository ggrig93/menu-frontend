<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="mb-3 row">
          <div class="col-sm-12">
            <span v-if="errors.length" class="text-red">
              <b>Please correct the following error(s):</b>
              <ul>
                <li v-for="error in errors" :key="error.id">{{ error }}</li>
              </ul>
            </span>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="email" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input v-model="formData.email" type="email" class="form-control" id="email">
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input v-model="formData.password" type="password" class="form-control" id="inputPassword">
          </div>
        </div>
        <div class="mb-3 row">
          <div class="col-sm-12">
            <button
                class="btn btn-outline-primary px-5"
                @click="loginAction">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import router from "@/router";

export default {
  name: 'LoginPage',
  data(){
    return{
      errors: [],
      formData: {
        email: '',
        password: ''
      },
    };
  },
  methods: {
    async loginAction() {
      this.errors = [];
      const re = /\S+@\S+\.\S+/;
      if (!this.formData.email || !re.test(this.formData.email)) {
        this.errors.push('Invalid Email.');
      }
      if (!this.formData.password) {
        this.errors.push('Password required.');
      } else {
        try {
          this.$store.dispatch('authMod/attemptLogin', this.formData);
          await router.push("/")
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
}
</script>