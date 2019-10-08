import { mount } from '@vue/test-utils'
import BetAlt from '@/components/BetAlt.vue'
import Rabatt from '@/components/Rabatt.vue'


//Det skall finnas faktura- och kortbetalnings altenativ. När man väljer ett av altenativen kan man skriva in informationen som behövs för att slutföra betalningen för respektive betalnings altenativ
//Samt rabattkod för rabatt


let expectedData={ FBetAlt: 'Faktura', FFirstName: 'Clas', FLastName: 'Glas', FAdress: {Street: 'Solgatan 10', Zip: '22222', Town: 'Lund', Country: 'Sweden'}, 
CBetAlt: 'CreditCard', CFirstnName: 'Kalle', CLastName: 'Galén', CAdress: 'Mångatan 5', CCardNumber: '1234 4567 8901 2345', CCardDate: '30/12', CCardCCV: '999', DiscountCode: 'Free123' }

describe('Faktura', () =>{
    test('laddar komponent', () => {
        const wrapper = mount(BetAlt)
        expect(wrapper.isVueInstance()).toBeTruthy()
      })
      test('kollar av faktura info', () => {
        const wrapper = mount(BetAlt)
        wrapper.vm.setFFirstName(expectedData.FFirstName)
        expect(wrapper.vm.fakturaData.FFirstName).toEqual(expectedData.FFirstName)

        wrapper.vm.setFAdress(expectedData.FAdress)
        expect(wrapper.vm.fakturaData.FAdress).toEqual(expectedData.FAdress)

        wrapper.vm.setFaktura(expectedData.Faktura)
        expect(wrapper.vm.fakturaData.Faktura).toEqual(expectedData.FBetAlt)

        wrapper.vm.setFLastName(expectedData.FLastName)
        expect(wrapper.vm.fakturaData.FLastName).toEqual(expectedData.FLastName)
      })
      test('kollar av rabattkod', () => {
        const wrapper = mount(Rabatt)
        wrapper.vm.setFLastName(expectedData.DiscountCode)
        expect(wrapper.vm.Rabatt).toEqual(expectedData.DiscountCode)
    })
})

describe('Credic Card', () =>{
    test('laddar komponent', () => {
        const wrapper = mount(BetAlt)
        expect(wrapper.isVueInstance()).toBeTruthy()
      })
      test('kollar av kreditkorts info', () => {
        const wrapper = mount(BetAlt)

        expect(wrapper.vm.fakturaData.creditcard).toEqual(expectedData.CBetAlt)
        
        expect(wrapper.vm.kortData.firstName).toEqual(expectedData.CFirstnName)

        expect(wrapper.vm.kortData.lastName).toEqual(expectedData.CLastName)

        expect(wrapper.vm.kortData.adress).toEqual(expectedData.CAdress)

        expect(wrapper.vm.kortData.cardNumber).toEqual(expectedData.CCardNumber)

        expect(wrapper.vm.kortData.cardDate).toEqual(expectedData.CCardDate)

        expect(wrapper.vm.kortData.cardCCV).toEqual(expectedData.CCardCCV)
      })
      test('kollar av rabattkod', () => {
        const wrapper = mount(Rabatt)
        expect(wrapper.vm.rabatt).toEqual(expectedData.DiscountCode)
    })
})