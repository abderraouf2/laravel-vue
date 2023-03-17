<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">Name:</th>
                    <th class="text-left">
                        {{ provider.name }}
                    </th>
                </tr>
                <tr>
                    <th class="text-left">Email:</th>
                    <th class="text-left">
                        {{ provider.email }}
                    </th>
                </tr>
                <tr>
                    <th class="text-left">Phone:</th>
                    <th class="text-left">
                        {{ provider.phone }}
                    </th>
                </tr>
                <tr>
                    <th class="text-left">Address:</th>
                    <th class="text-left">
                        {{ provider.address }}
                    </th>
                </tr>
            </thead>
        </template>
    </v-simple-table>
</template>

<script>
export default {
    props: {
        provider: Object,
    },
};
</script>

<style>
.details {
    width: 50vw;
    height: 50vh;
}
</style>
