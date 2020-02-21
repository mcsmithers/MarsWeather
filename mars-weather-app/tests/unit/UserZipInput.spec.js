import { shallowMount } from '@vue/test-utils'
import UserZipInput from '@/components/UserZipInput.vue'

describe('UserZipInput.vue Test', () => {
  it('Provides a user input to pull local temperature data', () => {
  // render the component
    const wrapper = shallowMount(UserZipInput)

    // check the name of the component
    expect(wrapper.name()).toMatch('UserZipInput')
  })
})
