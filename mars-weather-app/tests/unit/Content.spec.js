import { shallowMount } from '@vue/test-utils';
import ListTemps from '@/components/ListTemps.vue';
import Content from '@/components/Content.vue';
import axios from 'axios';

// Mock the axios library
jest.mock('axios');

// API fetching test
describe('Content.vue Test with Successful HTTP GET', () => {
  var wrapper;

  beforeEach(() => {
    const response_get = { data: [
      {
        earthDate: 1,
        sol: 1,
        avgTemp: 'temp_1',
        windSpd: 'spd1'
      },
      {
        earthDate: 2,
        sol: 2,
        avgTemp: 'temp_2',
        windSpd: 'spd2'
      }
    ] };

    // Set the response from the GET call to axios
    axios.get.mockResolvedValue(response_get);

    // render the component
    wrapper = shallowMount(Content);

    afterEach(() => {
      jest.resetModules();
      jest.clearAllMocks();
    });

    it('loads the user data when the component is created and mounted', () => {
      // check the name of the component
      expect(wrapper.name()).toMatch('Content')

      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toBeCalledWith('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
    })
  });
});

// List of temps testing
describe('ListTemps.vue Test', () => {
  it('renders a table of temps when component is created', () => {
    // render the component
    const wrapper = shallowMount(ListTemps, {
      propsData: {
        temps: [
          {
            earthDate: 1,
            sol: 1,
            avgTemp: 'temp_1',
            windSpd: 'spd1'
          },
          {
            earthDate: 2,
            sol: 2,
            avgTemp: 'temp_2',
            windSpd: 'spd2'
          }
        ]
      }
    });

    // check the name of the component
    expect(wrapper.name()).toMatch('ListTemps')

    // check that the heading text is rendered
    expect(wrapper.findAll('h1').length).toEqual(1)
    expect(wrapper.findAll('h1').at(0).text()).toMatch('List of Temps:')

    // check that 4 columns are created in the table
    expect(wrapper.findAll('th').length).toEqual(4)
    expect(wrapper.findAll('th').at(0).text()).toMatch('Sol')
    expect(wrapper.findAll('th').at(1).text()).toMatch('Date')
    expect(wrapper.findAll('th').at(2).text()).toMatch('AvgTemp')
    expect(wrapper.findAll('th').at(3).text()).toMatch('Speed')

    // check that 2 rows with 4 columns each are created in the table
    expect(wrapper.findAll('td').length).toEqual(8)
    expect(wrapper.findAll('td').at(0).text()).toMatch('1')
    // expect(wrapper.findAll('td').at(1).text()).toMatch('2020-01-01')
    // expect(wrapper.findAll('td').at(2).text()).toMatch('-56')
    // expect(wrapper.findAll('td').at(3).text()).toMatch('225.4')
    expect(wrapper.findAll('td').at(4).text()).toMatch('2')
    // expect(wrapper.findAll('td').at(5).text()).toMatch('2019-12-31')
    // expect(wrapper.findAll('td').at(6).text()).toMatch('-55')
    // expect(wrapper.findAll('td').at(7).text()).toMatch('200.5')
  });
});
