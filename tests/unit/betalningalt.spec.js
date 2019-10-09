import { mount } from '@vue/test-utils'
import BetAltFaktura from '@/components/BetAltFaktura.vue'
import Rabatt from '@/components/Rabatt.vue'
import BetAltKredit from '@/components/BetAltKredit.vue'


//Det skall finnas faktura- och kortbetalnings altenativ. När man väljer ett av altenativen kan man skriva in informationen som behövs för att slutföra betalningen för respektive betalnings altenativ
//Samt rabattkod för rabatt


let expectedData={ FBetAlt: 'Faktura', FFirstName: 'Clas', FLastName: 'Glas', FAdress: {Street: 'Solgatan 10', Zip: '22222', Town: 'Lund', Country: 'Sweden'}, 
CBetAlt: 'CreditCard', CFirstName: 'Kalle', CLastName: 'Galén', CAdress: 'Mångatan 5', CCardNumber: '1234 4567 8901 2345', CCardDate: '30/12', CCardCCV: '999', DiscountCode: 'Free123' }

describe('Faktura', () =>{
    test('laddar komponent', () => {
        const wrapper = mount(BetAltFaktura)
        expect(wrapper.isVueInstance()).toBeTruthy()
      })
      test('kollar av faktura info', () => {
        const wrapper = mount(BetAltFaktura)
        wrapper.vm.setFFirstName(expectedData.FFirstName)
        expect(wrapper.vm.fakturaData.FFirstName).toEqual(expectedData.FFirstName)

        wrapper.vm.setFAdress(expectedData.FAdress)
        expect(wrapper.vm.fakturaData.FAdress).toEqual(expectedData.FAdress)

        wrapper.vm.setFBetAlt(expectedData.FBetAlt)
        expect(wrapper.vm.fakturaData.FBetAlt).toEqual(expectedData.FBetAlt)

        wrapper.vm.setFLastName(expectedData.FLastName)
        expect(wrapper.vm.fakturaData.FLastName).toEqual(expectedData.FLastName)
      })
    })

describe('Rabatt', () =>{
    test('laddar komponent', () => {
        const wrapper = mount(Rabatt)
        expect(wrapper.isVueInstance()).toBeTruthy()
      })
      test('kollar av rabattkod', () => {
        const wrapper = mount(Rabatt)
        wrapper.vm.setDiscountCode(expectedData.DiscountCode)
        expect(wrapper.vm.rabatt.DiscountCode).toEqual(expectedData.DiscountCode)
    })
  })

describe('Credic Card', () =>{
    test('laddar komponent', () => {
        const wrapper = mount(BetAltKredit)
        expect(wrapper.isVueInstance()).toBeTruthy()
      })
      test('kollar av kreditkorts info', () => {
        const wrapper = mount(BetAltKredit)

        wrapper.vm.setCBetAlt(expectedData.CBetAlt)
        expect(wrapper.vm.kortData.CBetAlt).toEqual(expectedData.CBetAlt)

        wrapper.vm.setCFirstName(expectedData.CFirstnName)
        expect(wrapper.vm.kortData.CFirstName).toEqual(expectedData.CFirstnName)

        wrapper.vm.setCLastName(expectedData.CLastName)
        expect(wrapper.vm.kortData.CLastName).toEqual(expectedData.CLastName)

        wrapper.vm.setCAdress(expectedData.CAdress)
        expect(wrapper.vm.kortData.CAdress).toEqual(expectedData.CAdress)

        wrapper.vm.setCCardNumber(expectedData.CCardNumber)
        expect(wrapper.vm.kortData.CCardNumber).toEqual(expectedData.CCardNumber)

        wrapper.vm.setCDate(expectedData.CCardDate)
        expect(wrapper.vm.kortData.CCardDate).toEqual(expectedData.CCardDate)

        wrapper.vm.setCCcv(expectedData.CCardCCV)
        expect(wrapper.vm.kortData.CCardCCV).toEqual(expectedData.CCardCCV)
      })
    })
