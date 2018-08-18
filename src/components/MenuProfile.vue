<template>
    <v-menu :close-on-content-click="false" offset-x>
        <v-btn slot="activator" dark icon >
            <v-icon>more_vert</v-icon>
        </v-btn>
        <v-card>
            <v-list>
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="https://www.gravatar.com/avatar/0CA5BF0968B8083AD41382045CFB60FD">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title class="name-strong">{{ user.name }}</v-list-tile-title>
                        <v-list-tile-sub-title>{{ user.email }}</v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <v-divider></v-divider>
            <v-list>
                <v-list-tile v-for="(item, index) in items" :key="index">
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-card>
    </v-menu>
</template>

<script>
export default {
    name: 'MenuProfile',
    data() {
        return {
            items: [
                { title: 'Settings' },
                { title: 'Profile' },
                { title: 'Exit' }
            ]
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    }
}
</script>

<style scoped>
    .v-list__tile {
        height: 30px !important;
    }
    .v-list__tile__title {
        font-size: 14px;
    }
    .name-strong {
        font-weight: bold;
    }
</style>

