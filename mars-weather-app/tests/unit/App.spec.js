import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue Test', () => {
  it('renders sub-components when the component is created', () => {
    // render the component
    const wrapper = shallowMount(App)

    // check the name of the component
    expect(wrapper.name()).toMatch('app')

    // check that all 4 sub-components are used
    expect(wrapper.findAll('.header-title').exists()).toBeTruthy()
    expect(wrapper.findAll('.navigation-links').exists()).toBeTruthy()
    expect(wrapper.findAll('.data-content').exists()).toBeTruthy()
    expect(wrapper.findAll('.footer').exists()).toBeTruthy()
  })
})
