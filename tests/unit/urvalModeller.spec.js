import { mount } from '@vue/test-utils'
import TShirtConfig from '@/components/TShirtConfig.vue'


describe('TShirtConfig', () =>{
    test('is a Vue instance', () => {
        const wrapper = mount(TShirtConfig)
        expect(wrapper.isVueInstance()).toBeTruthy()
      })
      test('Change modell', () => {
        const wrapper = mount(TShirtConfig)
        wrapper.vm.setModell('Female')
        expect(wrapper.vm.tShirt.modell).toEqual('Female')
      })
      test('Change fabric', () => {
        const wrapper = mount(TShirtConfig)
        wrapper.vm.setFabric('Cotton')
        expect(wrapper.vm.tShirt.fabric).toEqual('Cotton')
      })
})