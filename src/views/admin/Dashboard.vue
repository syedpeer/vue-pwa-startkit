<template>
    <v-layout >
        <v-jumbotron>
            <v-container >
                <v-layout >
                    <v-flex>
                        <h3 class="display-1">Welcome to my application</h3>
                        <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
                        <v-divider class="my-3"></v-divider>
                        <router-link :to="{ name: 'admin.page.one'}"><v-btn class="mx-0" color="primary" large>Go to Page One</v-btn></router-link>
                        <a href="https://github.com/borgert-inc/vue-pwa-startkit"><v-btn color="primary" large><v-icon class="mr-2">launch</v-icon> Github</v-btn></a>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-jumbotron>
    </v-layout>
</template>

<script>
    export default {
        name: 'Dashboard'
    }
</script>
