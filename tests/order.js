import { mount } from '@vue/test-utils'
import Order from '@/components/Order.vue'
import Cart from '@/components/Cart.vue'

// Orderbekräftelsen som kunde skall få ska inehålla vilken/vilka t-shirt/s som kunden beställt (i form av en beskrivande text(String)), pris (i kronor(Float)), ordernummer(Int), Beställningsdatum(Date),
// betalningsmetod(String), nummer till kunden(int), leveransadress(till kunden(namn, efternam, adress, postnummer, land) och eventuellt till utlämningsställe om fraktsättet är Utlämningsställe)
// 

describe('Cart', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(Cart)
        expect(wrapper.isVueInstance()).toBeTruthy()
      })
    test('place order', () => {
        const wrapper = mount(Cart)
        wrapper.vm.addtoCart('T-Shirt')
        wrapper.vm.placeOrder()
        expect(wrapper.text()).toContain('Your orderinformation will be sent to your email')
    })
})
describe('Order', () =>{
    test('is a Vue instance', () => {
        const wrapper = mount(Order)
        expect(wrapper.isVueInstance()).toBeTruthy()
      })
    test('sending orderinformation', () => {
        const wrapper = mount(Order)
        wrapper.vm.placeOrder()
        expect(wrapper.text()).toContain(CName,CLastName,CAdress,CPostalcode, CCountry)
        expect(wrapper.text()).toContain(t-ShirtDesc)
        expect(wrapper.text()).toContain(Payment)
        expect(wrapper.text()).toContain(Price)
        expect(wrapper.text()).toContain(OrderNumber)
        expect(wrapper.text()).toContain(OrderDate)
        expect(wrapper.text()).toContain(Delivery)
        expect(wrapper.text()).toContain(CNumber)
        if(Delivery == 'Utlämningsställe'){
            expect(wrapper.text()).toContain(UName, UAdress, UPostalcode)
        }
    })
    test('se order history', () => {
        const wrapper = mount(Order)
        wrapper.vm.seOrderHistory()
        expect(wrapper.text()).toContain('Your order history')
    })
    test('my T-Shirts', () => {
        const wrapper = mount(Order)
        wrapper.vm.seOldOrder()
        expect()
    })
})