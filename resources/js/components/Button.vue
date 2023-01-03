<template>
    <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
      link 
      to='/'
    >
      <v-icon dark>
        {{ linkto }}
      </v-icon>
    </v-btn>
</template>

<script>
    export default {
        props :{
          linkto : String,
        }
    }
</script>