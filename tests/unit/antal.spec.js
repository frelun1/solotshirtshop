import { mount } from '@vue/test-utils'
import Order from '@/components/Order.vue'

describe('Antal', () => {
    test('standard antal', () => {
        const wrapper = mount(Order)
        wrapper.vm.setNumberOf('1')
        expect(wrapper.vm.orderData.numberOf).toEqual('1')
    })
    test('öka antal till 2', () => {
        const wrapper = mount(Order)
        wrapper.vm.setNumberOf('2')
        expect(wrapper.vm.orderData.numberOf).toEqual('2')
    })
})