import { mount } from '@vue/test-utils'
import Webshop from '@/components/Webshop.vue'

describe('Webshop.vue', () => {
    test('laddas komponenten', () => {
        const wrapper = mount(Webshop)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
    test('välj t-shirt', () => {
        const wrapper = mount(Webshop)
        wrapper.vm.setTShirt('För Kvinnor')
        expect(wrapper.vm.webshopData.valdTShirt).toEqual('För Kvinnor')
    })
 
})
