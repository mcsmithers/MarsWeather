import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';

describe('Header.vue Test', () => {
  it('renders message when component is created', () => {
    // render the component
    const wrapper = shallowMount(Header, {
      propsData: {
        title: 'Mars Weather'
      }
    });

    // check the name of the component
    expect(wrapper.name()).toMatch('Header')
  });
});
