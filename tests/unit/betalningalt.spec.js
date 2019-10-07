import { mount } from '@vue/test-utils'
import BetAlt from '@/components/BetAlt.vue'


//Det skall finnas faktura- och kortbetalnings altenativ. När man väljer ett av altenativen kan man skriva in informationen som behövs för att slutföra betalningen för respektive betalnings altenativ
//Samt rabattkod för rabatt


let expectedData={ FBetAlt: 'Faktura', FFirstName: 'Clas', FLastName: 'Glas', FAdress: {Street: 'Solgatan 10', zip: '22222', Town: 'Lund', Country: 'Sweden'}, 
CBetAlt: 'CreditCard', CFirstnName: 'Kalle', CLastName: 'Galén', CAdress: 'Mångatan 5', CCardnumber: '1234 4567 8901 2345', CCardDate: '30/12', CCardCCV: '999', DiscountCode: 'Free123' }

describe('Faktura', () =>{
    test('is a Vue instance', () => {
        const wrapper = mount(BetAlt)
        expect(wrapper.isVueInstance()).toBeTruthy()
      })
      test('sending betal info faktura', () => {
        const wrapper = mount(BetAlt)
        expect(wrapper.vm.fakturadata.faktura).toBeTruthy(expectedData.FBetAlt)
        expect(wrapper.vm.fakturadata.firstName).toEqual(expectedData.FFirstName)
        expect(wrapper.vm.fakturadata.lastname).toEqual(expectedData.FLastName)
        expect(wrapper.vm.fakturadata.adress).toEqual(expectedData.FAdress)
        expect(wrapper.vm.rabatt).toEqual(expectedData.DiscountCode)
    })
})

describe('Credic Card', () =>{
    test('is a Vue instance', () => {
        const wrapper = mount(BetAlt)
        expect(wrapper.isVueInstance()).toBeTruthy()
      })
      test('sending betal info credit card', () => {
        const wrapper = mount(BetAlt)
        expect(wrapper.vm.fakturadata.creditcard).toBeTruthy(expectedData.CBetAlt)
        expect(wrapper.vm.kortdata.firstName).toEqual(expectedData.CFirstnName)
        expect(wrapper.vm.kortdata.lastname).toEqual(expectedData.CLastName)
        expect(wrapper.vm.kortdata.adress).toEqual(expectedData.CAdress)
        expect(wrapper.vm.kortdata.cardnumber).toEqual(expectedData.CCardnumber)
        expect(wrapper.vm.kortdata.carddate).toEqual(expectedData.CCardDate)
        expect(wrapper.vm.kortdata.cardccv).toEqual(expectedData.CCardCCV)
        expect(wrapper.vm.rabatt).toEqual(expectedData.DiscountCode)
    })
})