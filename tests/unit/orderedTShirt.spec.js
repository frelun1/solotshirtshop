import { mount } from '@vue/test-utils'
import OrderedTShirt from '@/components/OrderedTShirt.vue'



let expectedData={Id: '1',Storlek: 'Medium', Färg: 'Svart', Model: 'Kort ärmad', Material: 'Satin', Tryck: 'Dödskalle', Pris: '150kr'}

describe('OrderedTShirt', () =>{
    test('Laddar Vue component', () => {
        const wrapper = mount(OrderedTShirt)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
    test('Skickar OrderedTShirt', () => {
        const wrapper = mount(OrderedTShirt)
        wrapper.vm.setId(expectedData.Id)
        wrapper.vm.setStorlek(expectedData.Storlek)
        wrapper.vm.setFärg(expectedData.Färg)
        wrapper.vm.setModel(expectedData.Model)
        wrapper.vm.setMaterial(expectedData.Material)
        wrapper.vm.setTryck(expectedData.Tryck)
        wrapper.vm.setPris(expectedData.Pris)
    })
})
