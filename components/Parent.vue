<template>
  <div class="parent">
    <h1>This is the parent</h1>
    <Child help="This is the child" />
  </div>
</template>
<script>
  import Child from './Child.vue';

  export default {
    components: {
      Child,
    }
  }
</script>
