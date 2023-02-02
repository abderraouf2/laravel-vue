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
import addProvider from '../components/addProvider.vue';
import providersList from '../components/providersList.vue';
    export default {
        components :{
            SideBar,
            addProvider,
            providersList
        }
    }
</script>