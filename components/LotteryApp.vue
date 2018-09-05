<template>
  <div class="feedback">
    <h1>Event Name</h1>
    <div class="then">
      <LotteryMessages help="Participant is eligible to win the lottery" />
    </div>
    <div class="otherwise">
      <LotteryMessages help="Participant is NOT eligible to win the lottery"/>
    </div>
  </div>
</template>
<script>
  import LotteryMessages from './LotteryMessages.vue';

  export default {
    components: {
      LotteryMessages,
    }
  }
</script>
