import { mount } from '@vue/test-utils'
import TShirtConfig from '@/components/TShirtConfig.vue'

// För size modulen behövs en array med dom olika storlekarna skrivna i typen String.
// Storlekarna som skall finnas är S-XXL
// S ska vara default

//let t=['S','M','L','XL','XXL']
describe('Size', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(TShirtConfig)
        expect(wrapper.isVueInstance()).toBeTruthy()
      })
    /*test('all sizes exist', () => {
        
        expect([t].sort()).toEqual(["Sizes"].sort())
    })*/
    test('default size', () => {
        const wrapper = mount(TShirtConfig)
        expect(wrapper.vm.tShirt.size).toEqual('S')
    })
    test('change size', () => {
        const wrapper = mount(TShirtConfig)
        wrapper.vm.setSize('L')
        expect(wrapper.vm.tShirt.size).toEqual('L')
    })
})