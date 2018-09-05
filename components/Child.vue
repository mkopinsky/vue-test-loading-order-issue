<template>
  <div class="child">
    <h4>{{help}}</h4>
    <textarea></textarea>
  </div>
</template>
<script>
  export default {
    props: {
      help: String,
    }
  };
</script>
