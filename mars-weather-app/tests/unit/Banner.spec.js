import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Banner from '@/components/Banner.vue'

// Create a local Vue object for you to add components and plugins,
// without polluting the global Vue object
const localVue = createLocalVue()

// Utilize Vuex in the local Vue object
localVue.use(Vuex)

// Unit test suite for the Banner component
describe('Banner.vue Test', () => {
        let wrapper = null
        let getters = null
        let actions = null
        let store = null

    // SETUP - run prior to each unit test
    beforeEach(() => {
        getters = {
        getBannerMessage: () => 'Default',
        getBannerType: () => 'Info'
        }

        actions = {
        setBanner: jest.fn()
        }

        store = new Vuex.Store({
        actions,
        getters
        })
    })

    // TEARDOWN - run after to each unit test
    afterEach(() => {
        wrapper.destroy()
        jest.resetModules()
        jest.clearAllMocks()
    })

    it('initializes with correct elements', () => {
        // render the component
        wrapper = shallowMount(Banner, { localVue, store })

        // check the name of the component
        expect(wrapper.name()).toMatch('Banner')

        // check that each element of the user is initialized
        expect(wrapper.vm.bannerMessage).toMatch('Default')
        expect(wrapper.vm.bannerBackgroundColor).toMatch('blue')
    })

    it('initializes with error message', () => {
        getters = {
          getBannerMessage: () => 'Banner message 123',
          getBannerType: () => 'Error'
        }

        store = new Vuex.Store({
          actions,
          getters
        })

        // render the component
        wrapper = shallowMount(Banner, { localVue, store })

        // check that each element of the user is initialized to empty strings
        expect(wrapper.vm.bannerMessage).toMatch('Banner message 123')
        expect(wrapper.vm.bannerBackgroundColor).toMatch('red')
    })

    it('initializes with success message', () => {
        getters = {
          getBannerMessage: () => 'Banner message 456',
          getBannerType: () => 'Success'
        }

        store = new Vuex.Store({
          actions,
          getters
        })

        // render the component
        wrapper = shallowMount(Banner, { localVue, store })

        // check that each element of the user is initialized to empty strings
        expect(wrapper.vm.bannerMessage).toMatch('Banner message 456')
        expect(wrapper.vm.bannerBackgroundColor).toMatch('green')
    })

    it('initializes with info message', () => {
        getters = {
            getBannerMessage: () => 'Banner message 789',
            getBannerType: () => 'Info'
        }

        store = new Vuex.Store({
            actions,
            getters
        })

        // render the component
        wrapper = shallowMount(Banner, { localVue, store })

        // check that each element of the user is initialized to empty strings
        expect(wrapper.vm.bannerMessage).toMatch('Banner message 789')
        expect(wrapper.vm.bannerBackgroundColor).toMatch('blue')
    })
})
