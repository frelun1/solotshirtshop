import { mount } from '@vue/test-utils'
import TShirtConfig from '@/components/TShirtConfig.vue'

describe('Färg', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(TShirtConfig)
        expect(wrapper.isVueInstance()).toBeTruthy()
      })
    test('standard färg', () => {
        const wrapper = mount(TShirtConfig)
        expect(wrapper.vm.tShirt.farg).toEqual('Vit')
    })
    test('byt färg', () => {
        const wrapper = mount(TShirtConfig)
        wrapper.vm.setFarg('Puder Rosa')
        expect(wrapper.vm.tShirt.farg).toEqual('Puder Rosa')
    })
})