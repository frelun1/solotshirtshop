import { mount } from '@vue/test-utils'
import Order from '@/components/Order.vue'
import OrderHistory from '@/components/Orderhistory.vue'

// Orderbekräftelsen som kunde skall få ska inehålla vilken/vilka t-shirt/s som kunden beställt (i form av en beskrivande text(String)), pris (i kronor(Float)), ordernummer(Int), Beställningsdatum(Date),
// betalningsmetod(String), nummer till kunden(int), leveransadress(till kunden(namn, efternam, adress, postnummer, land) och eventuellt till utlämningsställe om fraktsättet är Utlämningsställe)
// 

let expectedData={CName:'Ben',CLastName:'Ingvarsson',CAdress:{street:'Storgatan 2b',zip:'123 45',city:'Testra',Country:'Sweden'},Payment:'credit card',Price:'250kr',OrderNumber:'123456789',OrderDate:'2019-10/03',Delivery:'Utlämningsställe',
CNumber:'0566558877',UName:'ICA Kvantum Emporia',UAdress:{street:'Emporia, Hyllie stationsväg 22',zip:'215 32',city:'Malmö',Country:'sweden'},ShirtDesc:'This is a T-Shirt'}
describe('Order', () =>{
    test('is a Vue instance', () => {
        const wrapper = mount(Order)
        expect(wrapper.isVueInstance()).toBeTruthy()
      })
    test('sending orderinformation', () => {
        const wrapper = mount(Order)
        wrapper.vm.setFirstName(expectedData.CName)
        wrapper.vm.setTShirt(expectedData.ShirtDesc)
        wrapper.vm.setOrderNumber(expectedData.OrderNumber)
        wrapper.vm.setCAdress(expectedData.CAdress.street,expectedData.CAdress.zip,expectedData.CAdress.city,expectedData.CAdress.Country)
        wrapper.vm.setPayment(expectedData.Payment)
        wrapper.vm.setPrice(expectedData.Price)
        wrapper.vm.setOrderDate(expectedData.OrderDate)
        wrapper.vm.setDelivery(expectedData.Delivery)
        wrapper.vm.setCNumber(expectedData.CNumber)
        if(expectedData.Delivery == 'Utlämningsställe'){
            wrapper.vm.setUName(expectedData.UName)
            wrapper.vm.setUAdress(expectedData.UAdress.street,expectedData.UAdress.zip,expectedData.UAdress.city,expectedData.UAdress.Country)
        }
        expect(wrapper.vm.orderData.CName).toEqual(expectedData.CName)
        expect(wrapper.vm.orderData.CAdress).toEqual(expectedData.CAdress)
        expect(wrapper.vm.orderData.tShirt).toEqual(expectedData.ShirtDesc)
        expect(wrapper.vm.orderData.OrderNumber).toEqual(expectedData.OrderNumber)
        expect(wrapper.vm.orderData.Payment).toEqual(expectedData.Payment)
        expect(wrapper.vm.orderData.Price).toEqual(expectedData.Price)
        expect(wrapper.vm.orderData.OrderDate).toEqual(expectedData.OrderDate)
        expect(wrapper.vm.orderData.Delivery).toEqual(expectedData.Delivery)
        expect(wrapper.vm.orderData.CNumber).toEqual(expectedData.CNumber)
        if(expectedData.Delivery == 'Utlämningsställe'){
            expect(wrapper.vm.orderData.UName).toEqual(expectedData.UName)
            expect(wrapper.vm.orderData.UAdress).toEqual(expectedData.UAdress)
        }
    })
})

describe('OrderHistory', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(OrderHistory)
        expect(wrapper.isVueInstance()).toBeTruthy()
      })
    test('se order history', () => {
        const wrapper = mount(OrderHistory)
        wrapper.vm.seOldOrder(expectedData.OrderNumber)
        expect(wrapper.vm.orderHistory.First.OrderNumber).toEqual(expectedData.OrderNumber)
    })
    test('my T-Shirt', () => {
        const wrapper = mount(OrderHistory)
        wrapper.vm.descOldOrder(expectedData.ShirtDesc)
        expect(wrapper.vm.orderHistory.First.tShirt).toEqual(expectedData.ShirtDesc)
    })
})
    
