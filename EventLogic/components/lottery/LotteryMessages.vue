<template>
  <div class="action">
    <div class="body">
      <h4>{{help}}</h4>
      <div>
        <label>Has winning number: </label>
        <textarea></textarea>
      </div>
      <div>
        <label>Has losing number: </label>
        <textarea></textarea>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      help: String,
    }
  };
</script>
