import { shallowMount, mount } from '@vue/test-utils';
import Parent from '@/components/Parent.vue';
import Child from '@/components/Child.vue';

import {expect, assert} from 'chai';

describe('Parent.vue', () => {
  describe('app loads very basically', () => {
    const wrapper = mount(Parent);
    it('loads deeply', () => {
      expect(wrapper.find('h1').text()).to.equal('This is the parent');
    });
  });

  describe('Testing for existence of child', () => {
    const wrapper = mount(Parent);
    it('app contains Child components', () => {
      // console.log(wrapper.html());
      expect(wrapper.findAll(Child)).to.have.length(1);
    });
    it('should be able to find within the child component', () => {
      // console.log(wrapper.html());
      expect(wrapper.find(Child).contains('textarea')).to.be.true;
    });
  });
});
