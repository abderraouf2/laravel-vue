
<template>
    <div class="wrapper">
        <SideBar width="20vw" />
        <div class="container1">
            <div class="btnwrapper">
              <addClient />
            </div>
            <UsersTable />
         </div>
</div>
</template>

<script lang="js">
        import SideBar from '../components/SideBar.vue';
        import addClient from '../components/addClient.vue';
        import UsersTable from '../components/UsersTable.vue';
    export default{
        components : {
            SideBar,
            addClient,
            UsersTable
        }
    }
</script>