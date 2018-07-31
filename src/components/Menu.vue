<template>
    <div>

        <v-list dense>

            <v-list-tile class="hidden-sm-and-up">
                <v-list-tile-action>
                    <v-icon>arrow_back</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>
                        Back
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-divider class="hidden-sm-and-up"></v-divider>

            <template v-for="item in items">

                <v-list-group v-if="item.children" v-model="item.model" :key="item.text" :prepend-icon="item.model ? item.icon : item.iconAlt" append-icon="">
                    <v-list-tile slot="activator">
                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ item.text }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile v-for="(child, i) in item.children" :key="i" @click="goTo(child.route)">
                        <v-list-tile-action v-if="child.icon">
                            <v-icon>{{ child.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ child.text }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>

                <v-list-tile v-else :key="item.text" @click="goTo(item.route)">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            {{ item.text }}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

            </template>
        </v-list>

    </div>
</template>

<script>
    export default {
        name: 'Menu',
        data() {
            return {
                items: [{
                        icon: 'dashboard',
                        text: 'Dashboard',
                        route: 'admin.dashboard'
                    },
                    {
                        icon: 'contacts',
                        text: 'Page One',
                        route: 'admin.page.one',
                    },
                    {
                        icon: 'comments',
                        text: 'Page Two',
                        route: 'admin.page.two',
                    },
                    {
                        icon: 'keyboard_arrow_up',
                        iconAlt: 'keyboard_arrow_down',
                        text: 'Sub Pages',
                        model: false,
                        children: [
                            { route: 'admin.subpage.one', text: 'Sub One' },
                            { route: 'admin.subpage.two', text: 'Sub Two' }
                        ]
                    }
                ]
            }
        },
        methods: {
            goTo: function (route) {
                this.$router.push({ name: route })
            }
        }
    }

</script>

<style scoped>
    .v-card {
        margin: 10px;
        font-size: 12px;
    }
</style>

