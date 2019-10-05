import { mount } from '@vue/test-utils'
import Order from '@/components/Order.vue'
import OrderHistory from '@/components/Orderhistory.vue'
/*import Cart from '@/components/Cart.vue'

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
})*/

let expectedData={CName:'Ben',CLastName:'Ingvarsson',CAdress:{street:'Storgatan 2b',zip:'123 45',city:'Testra',Country:'Sweden'},Payment:'credit card',Price:'250kr',OrderNumber:'123456789',OrderDate:'2019-10/03',Delivery:'Utlämningsställe',
CNumber:'0566558877',UName:'ICA Kvantum Emporia',UAdress:{street:'Emporia, Hyllie stationsväg 22',zip:'215 32',city:'Malmö',Country:'sweden'},ShirtDesc:'This is a T-Shirt'}
describe('Order', () =>{
    test('is a Vue instance', () => {
        const wrapper = mount(Order)
        expect(wrapper.isVueInstance()).toBeTruthy()
      })
    test('sending orderinformation', () => {
        const wrapper = mount(Order)
        expect(wrapper.vm.orderData.firstName).toEqual(expectedData.CName)
        expect(wrapper.vm.orderData.tShirt).toEqual(expectedData.ShirtDesc)
        /*expect(wrapper.text()).toContain(expectedData.Payment)
        expect(wrapper.text()).toContain(expectedData.Price)
        expect(wrapper.text()).toContain(expectedData.OrderNumber)
        expect(wrapper.text()).toContain(expectedData.OrderDate)
        expect(wrapper.text()).toContain(expectedData.Delivery)
        expect(wrapper.text()).toContain(expectedData.CNumber)
        if(expectedData.Delivery == 'Utlämningsställe'){
            expect(wrapper.text()).toContain(expectedData.UName, expectedData.UAdress)
        }*/
    })
})

describe('OrderHistory', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(OrderHistory)
        expect(wrapper.isVueInstance()).toBeTruthy()
      })
    test('se order history', () => {
        const wrapper = mount(OrderHistory)
        expect(wrapper.vm.orderHistory.First.OrderNumber).toEqual(expectedData.OrderNumber)
    })
    test('my T-Shirts', () => {
        const wrapper = mount(OrderHistory)
        wrapper.vm.seOldOrder(expectedData.OrderNumber)
        expect(wrapper.vm.orderHistory.First.OrderNumber).toEqual(expectedData.OrderNumber)
    })
})
    
