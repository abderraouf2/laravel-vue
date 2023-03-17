<template>
    <v-dialog transition="dialog-bottom-transition" max-width="50vw">
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                v-bind="attrs"
                v-on="on"
                class="mx-2"
                fab
                dark
                color="indigo"
            >
                <v-icon dark> mdi-plus </v-icon>
            </v-btn>
        </template>
        <template v-slot:default="dialog">
            <v-card>
                <div class="formWrapper">
                    <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                        style="width: 40vw"
                    >
                        <v-text-field
                            v-validate="'required|max:20'"
                            v-model="client.name"
                            :counter="50"
                            label="name"
                            name="name"
                        ></v-text-field>
                        <span :v-show="errors.has('name')" style="color: red">{{
                            errors.first("name")
                        }}</span>

                        <v-text-field
                            v-validate="'required|email'"
                            v-model="client.email"
                            :counter="50"
                            label="email"
                            name="email"
                        ></v-text-field>
                        <span
                            :v-show="errors.has('email')"
                            style="color: red"
                            >{{ errors.first("email") }}</span
                        >

                        <v-text-field
                            v-validate="'required|integer|digits:10'"
                            v-model="client.phone"
                            name="phone"
                            label="phone number"
                        ></v-text-field>
                        <span
                            :v-show="errors.has('phone')"
                            style="color: red"
                            >{{ errors.first("phone") }}</span
                        >

                        <v-text-field
                            v-model="client.address"
                            v-validate="'required'"
                            label="address"
                            name="address"
                        ></v-text-field>
                        <span
                            :v-show="errors.has('address')"
                            style="color: red"
                            >{{ errors.first("address") }}</span
                        >
                    </v-form>
                </div>
                <v-card-actions class="justify-end">
                    <v-btn
                        :disabled="!valid"
                        color="success"
                        class="mr-4"
                        @click="addclient(dialog)"
                    >
                        add client
                    </v-btn>
                    <v-btn
                        color="error"
                        class="mr-4"
                        @click="
                            dialog.value = false;
                            EmptyFieds();
                        "
                        >Close</v-btn
                    >
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>
import clients from "../../clients";
export default {
    data: () => ({
        client: {
            name: "",
            email: "",
            phone: null,
            address: "",
        },
        valid: false,
        namedRules: [
            (v) => !!v || "Name is required",
            (v) =>
                (v && v.length <= 50) || "Name must be less than 50 characters",
        ],
    }),

    methods: {
        async addclient(dialog) {
            let valid = false;
            valid = await this.$validator.validateAll();
            this.valid = valid;

            console.log(valid);
            if (
                this.client.name &&
                this.client.email &&
                this.client.phone &&
                this.client.address &&
                valid
            ) {
                clients.push(this.client);
                console.log(this.valid);
                dialog.value = false;
                this.EmptyFieds();
            }
        },
        EmptyFieds() {
            this.client = {
                name: "",
                email: "",
                phone: null,
                address: "",
            };
        },
    },
};
</script>
<style>
.formWrapper {
    height: 50vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
