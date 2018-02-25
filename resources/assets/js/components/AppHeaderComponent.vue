<template>
    <div class="container app-header">
        <h1>Laravel-Vue</h1>
        <nav class="navbar navbar-blue">
            <ul class="nav navbar-nav">
                <li v-if="!$auth.check()">
                    <router-link v-bind:to="'/'">Home</router-link>
                <li v-else>
                    <router-link v-bind:to="'/dashboard'">Dashboard</router-link>
                </li>
                <li v-if="!$auth.check()"><router-link v-bind:to="'login'">Login</router-link></li>
                <li v-if="!$auth.check()"><router-link v-bind:to="'register'">Register</router-link></li>
            </ul>
            <ul class="nav navbar-nav pull-right">
                <li v-if="$auth.check()">
                    <a href="#" @click.prevent="$auth.logout()">Logout</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
  
}
</script>
