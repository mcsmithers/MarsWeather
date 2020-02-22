import { shallowMount, createLocalVue } from '@vue/test-utils'
import Navigation from '@/components/Navigation.vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()


describe('Navigation.vue Test', () => {
  it('renders navigation links when component is created', () => {
    // render the component
    const wrapper = shallowMount(Navigation, { localVue, router })

    // check the name of the component
    expect(wrapper.name()).toMatch('Navigation')

    // check that 3 navigation links are created
    expect(wrapper.findAll('li').length).toEqual(3)
    expect(wrapper.findAll('li').at(0).text()).toMatch('Home')
    expect(wrapper.findAll('li').at(1).text()).toMatch('About')
    expect(wrapper.findAll('li').at(2).text()).toMatch('Contact')
  })
})
