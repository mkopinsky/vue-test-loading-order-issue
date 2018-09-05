import { shallowMount, mount } from '@vue/test-utils';
import {expect, assert} from 'chai';

import Child from '@/components/Child.vue';

describe('Child.vue', () => {
  it('component loads without errors', () => {
    const wrapper = mount(Child);
    // expect(wrapper.contains('div')).to.be.true;
  });
});
