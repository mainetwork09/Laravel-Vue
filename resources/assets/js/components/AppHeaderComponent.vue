<template>
    <div class="container app-header">
        <h1>Laravel-Vue</h1>
        <nav class="navbar navbar-default">
            <ul class="nav navbar-nav">
                <li><router-link v-bind:to="'/'">Home</router-link></li>
                <li><router-link v-bind:to="'login'">Login</router-link></li>
                <li><router-link v-bind:to="'register'">Register</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
  
}
</script>
