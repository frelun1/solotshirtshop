import { mount } from '@vue/test-utils'
import TestLogga from '@/components/TestLogga.vue'


//Det skall finnas faktura- och kortbetalnings altenativ. När man väljer ett av altenativen kan man skriva in informationen som behövs för att slutföra betalningen för respektive betalnings altenativ
//Samt rabattkod för rabatt


let expectedData={ TPreText: 'Text', TTextSize: 'Size', TTextColor: 'Color', TTextStyle: 'Style', TTextFont: 'Font', TMyText: 'MyText',  
LMyPic: 'MyPic', LPicSize: {Width: 'Width', Heigth: 'Height'}, LPrePic: 'PrePic', LPrePicSize: {Width: 'Width', Heigth: 'Height'}}

describe('Text', () =>{
  test('Mount unit', () => {
      const wrapper = mount(TextLogga)
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
    test('Testing text configs', () => {
      const wrapper = mount(TextLogga)
      wrapper.vm.setTPreText(expectedData.TPreText)
      expect(wrapper.vm.textConfig.TPreText).toEqual(expectedData.TPreText)

      wrapper.vm.setTMyText(expectedData.TMyText)
      expect(wrapper.vm.textConfig.TMyText).toEqual(expectedData.TMyText)

      wrapper.vm.setTTextSize(expectedData.TTextSize)
      expect(wrapper.vm.textConfig.TTextSize).toEqual(expectedData.TTextSize)

      wrapper.vm.setTTextColor(expectedData.TTextColor)
      expect(wrapper.vm.textConfig.TTextColor).toEqual(expectedData.TTextColor)

      wrapper.vm.setTTextStyle(expectedData.TTextStyle)
      expect(wrapper.vm.textConfig.TTextStyle).toEqual(expectedData.TTextStyle)

      wrapper.vm.setTTextFont(expectedData.TTextFont)
      expect(wrapper.vm.textConfig.TTextFont).toEqual(expectedData.TTextFont)

      wrapper.vm.setTMyText(expectedData.TMyText)
      expect(wrapper.vm.textConfig.TMyText).toEqual(expectedData.TMyText)
    })
})

describe('Logga', () =>{
  test('Mount unit', () => {
      const wrapper = mount(TextLogga)
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
    test('Testing logga configs', () => {
      const wrapper = mount(TextLogga)
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