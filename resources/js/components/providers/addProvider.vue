<template>
    <v-btn
        v-bind="attrs"
        v-on="on"
        class="mx-2"
        fab
        dark
        color="indigo"
        @click="addDialog = true"
    >
        <v-icon dark> mdi-plus </v-icon>

        <v-dialog
            :value="dialog"
            transition="dialog-bottom-transition"
            max-width="50vw"
            @input="$emit('input', $event)"
        >
            <v-card>
                <div class="formWrapper">
                    <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                        style="width: 40vw"
                    >
                        <v-text-field
                            data-testid="providerName"
                            v-validate="'required|max:20'"
                            v-model="provider.name"
                            :counter="50"
                            label="name"
                            name="name"
                        ></v-text-field>
                        <span :v-show="errors.has('name')" style="color: red">{{
                            errors.first("name")
                        }}</span>

                        <v-text-field
                            data-testid="providerEmail"
                            v-validate="'required|email'"
                            v-model="provider.email"
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
                            data-testid="providerPhone"
                            v-validate="'required|integer|digits:10'"
                            v-model="provider.phone"
                            name="phone"
                            label="phone number"
                        ></v-text-field>
                        <span
                            :v-show="errors.has('phone')"
                            style="color: red"
                            >{{ errors.first("phone") }}</span
                        >

                        <v-text-field
                            data-testid="providerAddress"
                            v-model="provider.address"
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
                        data-testid="dialog-add-button"
                        :disabled="!valid"
                        color="success"
                        class="mr-4"
                        @click="addprovider(addDialog)"
                    >
                        add provider
                    </v-btn>
                    <v-btn
                        data-testid="dialog-close-button"
                        color="error"
                        class="mr-4"
                        @click="
                            addDialog = false;
                            EmptyFieds();
                        "
                        >Close</v-btn
                    >
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-btn>
</template>

<script>
import providers from "../../providers";
export default {
    data: () => ({
        provider: {
            name: "",
            email: "",
            phone: null,
            address: "",
        },
        valid: false,
        addDialog: false,
        namedRules: [
            (v) => !!v || "Name is required",
            (v) =>
                (v && v.length <= 50) || "Name must be less than 50 characters",
        ],
    }),

    methods: {
        async addprovider(dialog) {
            let valid = false;
            valid = await this.$validator.validateAll();
            this.valid = valid;

            console.log(valid);
            if (
                this.provider.name &&
                this.provider.email &&
                this.provider.phone &&
                this.provider.address &&
                valid
            ) {
                providers.push(this.provider);
                console.log(this.valid);
                dialog.value = false;
                this.EmptyFieds();
            }
        },
        EmptyFieds() {
            this.provider = {
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
