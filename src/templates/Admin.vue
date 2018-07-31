<template>

    <v-app>

        <v-navigation-drawer class="grey lighten-4" app fixed :clipped="$vuetify.breakpoint.mdAndUp" v-model="drawer">
            <Menu drawer />
        </v-navigation-drawer>

        <v-toolbar color="primary" dark app :clipped-left="$vuetify.breakpoint.mdAndUp" fixed>
            <v-toolbar-side-icon @click.native="drawer = !drawer" class="toolbar-side-icon"></v-toolbar-side-icon>
            <span class="appName">{{ appName }}</span>
            <v-spacer></v-spacer>
            <MenuProfile />
        </v-toolbar>

        <v-content>
            <v-container fluid fill-height>
                <router-view />
            </v-container>
        </v-content>

        <v-footer class="pa-3 footer">
            <v-spacer></v-spacer>
            <div>{{ appName }} &copy; {{ new Date().getFullYear() }}</div>
        </v-footer>

    </v-app>

</template>

<script>
import Menu from '@/components/Menu'
import MenuProfile from '@/components/MenuProfile'

export default {
    name: 'Template',
    components: {
        Menu,
        MenuProfile
    },
    data: () => ({
        appName: 'My Application',
        drawer: null,
        items: [
            { title: 'Settings' },
            { title: 'Profile' },
            { title: 'Sign out' }
        ]
    })
}
</script>

<style scoped>
    .appName {
        font-size: 14px;
        text-transform: uppercase;
    }
    .v-toolbar__side-icon {
        margin-left: -14px !important;
    }
    .v-footer {
        font-size: 11px;
        color: #555;
        text-transform: uppercase;
    }
</style>
