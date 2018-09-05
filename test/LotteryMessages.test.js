import { shallowMount, mount } from '@vue/test-utils';
import {expect, assert} from 'chai';
import defaultProps from './defaultProps';

import LotteryMessages from '@/components/LotteryMessages.vue';

describe('LotteryMessages.vue', () => {
  it('component loads without errors', () => {
    const wrapper = mount(LotteryMessages, {
      propsData: defaultProps
    });
    // expect(wrapper.contains('div')).to.be.true;
  });
});
