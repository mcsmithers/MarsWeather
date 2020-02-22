import store from '@/store'

describe('Vuex Store Test', () => {
    it('initializes with correct values', () => {
        expect(store.state.bannerMessage).toMatch(/^$/)
        expect(store.state.bannerType).toMatch('Info')
      })

      it('test getters of the Vuex Store', () => {
        // Set the banner data
        store.state.bannerMessage = 'Successful Message'
        store.state.bannerType = 'Success'

        // Test the Getters
        expect(store.getters.getBannerMessage).toMatch('Successful Message')
        expect(store.getters.getBannerType).toMatch('Success')
      })

      it('test mutations of the Vuex Store', () => {
        // Set the banner data
        store.state.bannerMessage = 'Successful Message'
        store.state.bannerType = 'Success'

        // Call the mutations
        store.commit('setBannerMessage', 'Failed Message')
        store.commit('setBannerType', 'Failure')

        // Test the results
        expect(store.state.bannerMessage).toMatch('Failed Message')
        expect(store.state.bannerType).toMatch('Failure')
      })

      it('test actions of the Vuex Store', () => {
        // Set the banner data
        store.state.bannerMessage = 'Temporary Message'
        store.state.bannerType = 'Info'

        // Call the mutations
        store.dispatch('setBanner', {
          message: 'It worked!',
          type: 'Success' }
        )

        // Test the results
        expect(store.state.bannerMessage).toMatch('It worked!')
        expect(store.state.bannerType).toMatch('Success')
      })
})
