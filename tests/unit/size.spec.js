import { mount } from '@vue/test-utils'
import Size from '@/components/Size.vue'

// För size modulen behövs en array med dom olika storlekarna skrivna i typen String.
// Storlekarna som skall finnas är S-XXL
// S ska vara default
// eslint-disable-next-line no-undef
t=['S','M','L','XL','XXL']
describe('Size', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(Size)
        expect(wrapper.isVueInstance()).toBeTruthy()
      })
    test('all sizes exist', () => {
        
        expect(["t"].sort()).toEqual(["Sizes"].sort())
    })
    test('default size', () => {
        const wrapper = mount(Size)
        expect(wrapper.vm.contents).toEqual('S')
    })
    test('change size', () => {
        const wrapper = mount(Size)
        wrapper.vm.changeSize('L')
        expect(wrapper.vm.contents).toEqual('L')
    })
})