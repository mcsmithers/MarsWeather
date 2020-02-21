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

      // check to be sure api calls work as needed
      expect(axios.get).toHaveBeenCalledTimes(2);
      expect(axios.get).toBeCalledWith('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
      expect(axios.get).toBeCalledWith('ttps://api.openweathermap.org/data/2.5/weather?zip=78240,us&appid=18fcb2ae16f7d9575c588dac714c9282')
    })
  });
});

describe('Content.vue Test', () => {
  it('Renders the Mars temps', () => {
  // render the component
    const wrapper = shallowMount(ListTemps)

  // check the name of the component
  expect(wrapper.name()).toMatch('ListTemps')
  })
})
