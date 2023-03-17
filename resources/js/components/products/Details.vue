<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">Name:</th>
                    <th class="text-left">
                        {{ product.name }}
                    </th>
                </tr>
                <tr>
                    <th class="text-left">Description:</th>
                    <th class="text-left">
                        {{ product.description }}
                    </th>
                </tr>
                <tr>
                    <th class="text-left">Price:</th>
                    <th class="text-left">
                        {{ product.price }}
                    </th>
                </tr>
                <tr>
                    <th class="text-left">Quantity:</th>
                    <th class="text-left">
                        {{ product.quantity }}
                    </th>
                </tr>
            </thead>
        </template>
    </v-simple-table>
</template>

<script>
export default {
    props: {
        product: Object,
    },
};
</script>

<style>
.details {
    width: 50vw;
    height: 50vh;
}
</style>
