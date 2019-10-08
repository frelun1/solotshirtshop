import { mount } from '@vue/test-utils'
import BetAlt from '@/components/BetAlt.vue'


//Det skall finnas faktura- och kortbetalnings altenativ. När man väljer ett av altenativen kan man skriva in informationen som behövs för att slutföra betalningen för respektive betalnings altenativ
//Samt rabattkod för rabatt


let expectedData={ FBetAlt: 'Faktura', FFirstName: 'Clas', FLastName: 'Glas', FAdress: {Street: 'Solgatan 10', zip: '22222', Town: 'Lund', Country: 'Sweden'}, 
CBetAlt: 'CreditCard', CFirstnName: 'Kalle', CLastName: 'Galén', CAdress: 'Mångatan 5', CCardnumber: '1234 4567 8901 2345', CCardDate: '30/12', CCardCCV: '999', DiscountCode: 'Free123' }

describe('Faktura', () =>{
    test('laddar komponent', () => {
        const wrapper = mount(BetAlt)
        expect(wrapper.isVueInstance()).toBeTruthy()
      })
      test('kollar av faktura info', () => {
        const wrapper = mount(BetAlt)
        expect(wrapper.vm.fakturaData.faktura).toBeTruthy(expectedData.FBetAlt)
        expect(wrapper.vm.fakturaData.firstName).toEqual(expectedData.FFirstName)
        expect(wrapper.vm.fakturaData.lastname).toEqual(expectedData.FLastName)
        expect(wrapper.vm.fakturaData.adress).toEqual(expectedData.FAdress)
      })
      test('kollar av rabattkod', () => {
        expect(wrapper.vm.rabatt).toEqual(expectedData.DiscountCode)
    })
})

describe('Credic Card', () =>{
    test('laddar komponent', () => {
        const wrapper = mount(BetAlt)
        expect(wrapper.isVueInstance()).toBeTruthy()
      })
      test('kollar av kreditkorts info', () => {
        const wrapper = mount(BetAlt)
        expect(wrapper.vm.fakturaData.creditcard).toBeTruthy(expectedData.CBetAlt)
        expect(wrapper.vm.kortData.firstName).toEqual(expectedData.CFirstnName)
        expect(wrapper.vm.kortData.lastname).toEqual(expectedData.CLastName)
        expect(wrapper.vm.kortData.adress).toEqual(expectedData.CAdress)
        expect(wrapper.vm.kortData.cardnumber).toEqual(expectedData.CCardnumber)
        expect(wrapper.vm.kortData.carddate).toEqual(expectedData.CCardDate)
        expect(wrapper.vm.kortData.cardccv).toEqual(expectedData.CCardCCV)
      })
      test('kollar av rabattkod', () => {
        expect(wrapper.vm.rabatt).toEqual(expectedData.DiscountCode)
    })
})