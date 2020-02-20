import { shallowMount } from '@vue/test-utils';
import Footer from '@/components/Footer.vue';

describe('Footer.vue Test', () => {
  it('renders message when component is created', () => {
    // render the component
    const wrapper = shallowMount(Footer, {
      propsData: {
        message: 'Christina Smithers, 2020'
      }
    });

    // check the name of the component
    expect(wrapper.name()).toMatch('Footer')

    // check that the title is rendered
    expect(wrapper.text()).toMatch('Christina Smithers, 2020')
  });
});
