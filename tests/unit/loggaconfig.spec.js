import { mount } from '@vue/test-utils'
import LoggaConfig from '@/components/LoggaConfig.vue'


// Det ska gå att välja förvald bild eller egen bild på T-shirten, samt ändra storleken på bilden.
// Val av storlek på bilden är förinställda storlekar (width/heigth) 
// (Storlek på bild en kostnadsfråga?)


let expectedData={ LMyPic: 'MyPic', LPicSize: {Width: 'Width', Heigth: 'Height'}, 
LPrePic: 'PrePic', LPrePicSize: {Width: 'Width', Heigth: 'Height'}}

describe('Logga', () =>{
  test('Mount unit', () => {
      const wrapper = mount(LoggaConfig)
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
    test('Testing logga configs', () => {
      const wrapper = mount(LoggaConfig)
      wrapper.vm.setLMyPic(expectedData.LMyPic)
      expect(wrapper.vm.loggaConfig.LMyPic).toEqual(expectedData.LMyPic)

      wrapper.vm.setLPicSize(expectedData.LPicSize)
      expect(wrapper.vm.loggaConfig.LPicSize).toEqual(expectedData.LPicSize)

      wrapper.vm.setLPrePic(expectedData.LPrePic)
      expect(wrapper.vm.loggaConfig.LPrePic).toEqual(expectedData.LPrePic)

      wrapper.vm.setLPrePicSize(expectedData.LPrePicSize)
      expect(wrapper.vm.loggaConfig.LPrePicSize).toEqual(expectedData.LPrePicSize)
    })
})