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
                <tr v-for="client in clients" :key="client.id">
                    <td>{{ client.name }}</td>
                    <td>{{ client.email }}</td>
                    <td>{{ client.phone }}</td>
                    <td>
                        <EditClient :client="client" />

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
                                    <ClientDetails :client="client" />
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
                            v-on:click="deleteclient(client.id)"
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
import clients from "../../clients";
import addClient from "./addClient.vue";
import EditClient from "./EditClient.vue";
import ClientDetails from "./ClientDetails.vue";
export default {
    data() {
        return {
            clients,
        };
    },
    methods: {
        deleteclient(index) {
            console.log(index);
            clients.splice(
                clients.findIndex((client) => client.id === index),
                1
            );
        },
    },
    components: {
        addClient,
        EditClient,
        ClientDetails,
    },
};
</script>

<style></style>
