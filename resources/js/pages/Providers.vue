<template>
<div class="wrapper">
        <SideBar width="20vw" />
        <div class="container1">
            <div class="btnwrapper">
              <addProvider />
            </div>
            <providersList />
         </div>
</div></template>

<script>
import SideBar from '../components/SideBar.vue';
import addProvider from '../components/providers/addProvider.vue';
import providersList from '../components/providers/providersList.vue';
    export default {
        components :{
            SideBar,
            addProvider,
            providersList
        }
    }
</script>