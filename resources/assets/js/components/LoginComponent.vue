<template>
    <div>
        <AppHeader></AppHeader>
        <div class="container">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">Login</h4>
                </div>
                <div class="panel-body">
                    <div class="alert alert-danger" v-if="error">
                        <p>There was an error, unable to sign in with those credentials.</p>
                    </div>
                    <form autocomplete="off" @submit.prevent="login" method="post">
                        <div class="form-group">
                            <label for="email">E-mail</label>
                            <input type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" class="form-control" v-model="password" required>
                        </div>
                        <button type="submit" class="btn btn-default">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppHeader from './AppHeaderComponent.vue';
  export default {
      components: {AppHeader},
    data(){
      return {
        email: null,
        password: null,
        error: false
      }
    },
    methods: {
      login(){
        var app = this
        this.$auth.login({
            params: {
              email: app.email,
              password: app.password
            }, 
            success: function () {},
            error: function () {},
            rememberMe: true,
            redirect: '/dashboard',
            fetchUser: true,
        });       
      },
    }
  } 
</script>
