import Vue from 'vue';
import EventLogicApp from './components/EventLogicApp.vue';
import LotteryApp from './components/LotteryApp.vue';

export function init(selector, options, props) {
  let app = (props.config.lottery ? LotteryApp : EventLogicApp);
  return new Vue({
    el: selector,
    render(h) {
      return h(app, {
        props: props
      });
    }
  });
};
