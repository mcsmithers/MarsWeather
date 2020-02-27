import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue Test', () => {
  it('Powers the application', () => {
  // render the component
    const wrapper = shallowMount(App)

    // check the name of the component
    expect(wrapper.name()).toMatch('app')

  })
})
