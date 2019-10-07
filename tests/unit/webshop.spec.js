import { mount } from '@vue/test-utils'
import Webshop from '@/components/Webshop.vue'

describe('Webshop.vue', () => {
    test('laddas komponenten', () => {
        const wrapper = mount(Webshop)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

 
})
