import { shallowMount, mount } from '@vue/test-utils';
import LotteryApp from '@/EventLogic/components/LotteryApp.vue';
import LotteryMessages from '@/EventLogic/components/lottery/LotteryMessages.vue';

import {expect, assert} from 'chai';

import defaultProps from './defaultProps';

describe('LotteryApp.vue', () => {
  describe('app loads very basically', () => {
    const wrapper = mount(LotteryApp, {
      propsData: defaultProps
    });
    it('loads deeply', () => {
      expect(wrapper.find('h1').text()).to.equal('Daily Step Count');
    });
  });

  describe('Testing interaction with lottery messages', () => {
    const wrapper = mount(LotteryApp, {
      propsData: defaultProps
    });
    it('app contains two LotteryMessage components', () => {
      // console.log(wrapper.html());
      expect(wrapper.findAll(LotteryMessages)).to.have.length(2);
    });
    it('should be able to find within the component', () => {
      // console.log(wrapper.html());
      expect(wrapper.find(LotteryMessages).contains('textarea')).to.be.true;
    });
  });
});
