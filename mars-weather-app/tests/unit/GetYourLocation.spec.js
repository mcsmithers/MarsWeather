import { shallowMount } from '@vue/test-utils'
import GetYourLocation from '@/components/GetYourLocation.vue'

describe('GetYourLocation.vue Test', () => {
  it('renders a table of geographic coordinates and a city when component is created', () => {
    // render the component
    const wrapper = shallowMount(GetYourLocation, {
      propsData: {
        locations: [
          {
            id: 1,
            latitude: '29.561',
            longitude: '-98.594',
            city: 'San Antonio'
          }
        ]
      }
    })

    // check the name of the component
    expect(wrapper.name()).toMatch('GetYourLocation')

    // check that the heading text is rendered
    expect(wrapper.findAll('h1').length).toEqual(1)
    expect(wrapper.findAll('h1').at(0).text()).toMatch('Want to compare to Your Location?')

    // check that 3 columns are created in the table
    expect(wrapper.findAll('th').length).toEqual(3)
    expect(wrapper.findAll('th').at(0).text()).toMatch('Latitude')
    expect(wrapper.findAll('th').at(1).text()).toMatch('Longitude')
    expect(wrapper.findAll('th').at(2).text()).toMatch('City')

    // check that 1 row with 3 columns each are created in the table
    expect(wrapper.findAll('td').length).toEqual(3)
    expect(wrapper.findAll('td').at(0).text()).toMatch('29.561')
    expect(wrapper.findAll('td').at(2).text()).toMatch('San Antonio')
  })
})
