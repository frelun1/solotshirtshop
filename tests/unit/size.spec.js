import { mount } from '@vue/test-utils'
import TShirtConfig from '@/components/TShirtConfig.vue'

// För size modulen behövs en array med dom olika storlekarna skrivna i typen String.
// Storlekarna som skall finnas är S-XXL
// S ska vara default

describe('Size', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(TShirtConfig)
        expect(wrapper.isVueInstance()).toBeTruthy()
      })
    test('default size', () => {
        const wrapper = mount(TShirtConfig)
        wrapper.vm.setSize('S')
        expect(wrapper.vm.tShirt.size).toEqual('S')
    })
    test('change size', () => {
        const wrapper = mount(TShirtConfig)
        wrapper.vm.setSize('L')
        expect(wrapper.vm.tShirt.size).toEqual('L')
    })
})