<template>
    <v-simple-table class="tableWrapper" style="width: 100vw">
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left" style="width: 30vw">Name</th>
                    <th class="text-left" style="width: 25vw">email</th>
                    <th class="text-left" style="width: 25vw">phone</th>
                    <th class="text-left" style="width: 20vw"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="provider in providers" :key="provider.id">
                    <td>{{ provider.name }}</td>
                    <td>{{ provider.email }}</td>
                    <td>{{ provider.phone }}</td>
                    <td>
                        <editProvider :provider="provider" />

                        <v-dialog
                            transition="dialog-bottom-transition"
                            max-width="50vw"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon v-bind="attrs" v-on="on">
                                    mdi-plus-box
                                </v-icon>
                            </template>
                            <template v-slot:default="dialog">
                                <v-card>
                                    <providerDetails :provider="provider" />
                                    <v-card-actions class="justify-end">
                                        <v-btn
                                            color="error"
                                            @click="dialog.value = false"
                                            >Close</v-btn
                                        >
                                    </v-card-actions>
                                </v-card>
                            </template>
                        </v-dialog>

                        <v-icon
                            color="red"
                            v-on:click="deleteprovider(provider.id)"
                        >
                            mdi-delete
                        </v-icon>
                    </td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
import providers from "../../providers";
import addProvider from "./addProvider.vue";
import editProvider from "./editProvider.vue";
import providerDetails from "./providerDetails.vue";
export default {
    data() {
        return {
            providers,
        };
    },
    methods: {
        deleteprovider(index) {
            console.log(index);
            providers.splice(
                providers.findIndex((provider) => provider.id === index),
                1
            );
        },
    },
    components: {
        addProvider,
        editProvider,
        providerDetails,
    },
};
</script>

<style></style>
