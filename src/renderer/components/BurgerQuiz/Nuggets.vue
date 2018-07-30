<template>
  <router-view :bus="bus"></router-view>
</template>
<script>
  export default {
    created: function () {
      console.log('Nuggets')
    },
    props: ['bus']
  }
</script>