import { shallowMount } from '@vue/test-utils'
import EarthWeather from '@/components/EarthWeather.vue'

describe('EarthWeather.vue Test', () => {
  it('renders renders weather information for a location on Earth based on user input', () => {
    // render the component
    const wrapper = shallowMount(EarthWeather, {
      propsData: {
        earthTemps: []
      }
    })

    // check the name of the component
    expect(wrapper.name()).toMatch('EarthWeather')
  })
})
