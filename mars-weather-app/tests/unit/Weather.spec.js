import { shallowMount } from '@vue/test-utils'
import Weather from '@/components/Weather.vue'

describe('Weather.vue Test', () => {
  it('renders a table of Eath temps when component is created', () => {
    // render the component
    const wrapper = shallowMount(Weather, {
      propsData: {
        locations: [
          {
            earthDate: '2020-01-01',
            locAvg: '-8.594',
            speed: 25.1
          }
        ]
      }
    })

    // check the name of the component
    expect(wrapper.name()).toMatch('Weather')

    // check that the heading text is rendered
    expect(wrapper.findAll('h1').length).toEqual(1)
    expect(wrapper.findAll('h1').at(0).text()).toMatch('Here is your weather compared to Mars:')

    // check that 3 columns are created in the table
    expect(wrapper.findAll('th').length).toEqual(2)
    expect(wrapper.findAll('th').at(0).text()).toMatch('Date')
    expect(wrapper.findAll('th').at(1).text()).toMatch('AvgTemp')
    expect(wrapper.findAll('th').at(2).text()).toMatch('Speed')

    // check that 1 row with 3 columns each are created in the table
    expect(wrapper.findAll('td').length).toEqual(3)
    expect(wrapper.findAll('td').at(0).text()).toMatch('2020-01-01')
    expect(wrapper.findAll('td').at(2).text()).toMatch('10.2')
  })
})
