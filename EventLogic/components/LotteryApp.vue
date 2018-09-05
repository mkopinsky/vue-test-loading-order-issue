<template>
  <div class="feedback">
    <h1>
      {{eventName}}
    </h1>
    <div class="scenarios">
      <div class="scenario" >
        <div class="then">
          <LotteryMessages
            help="Participant is eligible to win the lottery"
          />
        </div>
        <div class="otherwise">
          <LotteryMessages
            help="Participant is NOT eligible to win the lottery"
          />
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  // import BaseApp from './BaseApp.vue';

  import LotteryMessages from './lottery/LotteryMessages.vue';

  export default {
    // extends: BaseApp,
    
    components: {
      // NOTE: there are other components imported/registered in BaseApp
      LotteryMessages,
    },
    props: {
      eventName: {
        type: String
      },
      hasEventHistory: {
        type: Boolean
      },
      config: {
        type: Object
      },
      originalScenarios: {
        type: Array
      }
    },
    data() {
      return {
        scenarios: JSON.parse(JSON.stringify(this.originalScenarios)),
        defaultButtonClasses: ['btn', 'btn-sm']
      };
    },

  }
</script>
