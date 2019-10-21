import { mount } from '@vue/test-utils'
import TShirtConfig from '@/components/TShirtConfig.vue'
import TextConfig from '@/components/TextConfig.vue'
import loggaConfig from '@/components/loggaConfig.vue'

// krav 19,. Som kund vill jag kunna ha samma möjligheter att arbeta med text, 
// färg och bild på baksidan som jag har på framsidan.

let expectedData={ LMyPic: 'MyPic', LPicSize: {Width: '30', Heigth: '30', TPreText: 'Text', TTextSize: {Width: '30', Heigth: '5'}, TTextColor: 'Black', TTextStyle: 'Style', TTextFont: 'Font', TMyText: 'MyText'}, 
LPrePic: 'PrePic', LPrePicSize: {Width: '30', Heigth: '30'}}

describe('Framsida samt Baksida', () => {
    test('baksida', () => {
        const wrapper = mount(TShirtConfig)
        wrapper.vm.setSide('baksida')
        expect(wrapper.vm.tShirt.side).toEqual('baksida')
    })
    test('Testing logga configs', () => {
        const wrapper = mount(loggaConfig)
        wrapper.vm.setLMyPic(expectedData.LMyPic)
        expect(wrapper.vm.loggaConfig.LMyPic).toEqual(expectedData.LMyPic)
  
        wrapper.vm.setLPicSize(expectedData.LPicSize)
        expect(wrapper.vm.loggaConfig.LPicSize).toEqual(expectedData.LPicSize)
  
        wrapper.vm.setLPrePic(expectedData.LPrePic)
        expect(wrapper.vm.loggaConfig.LPrePic).toEqual(expectedData.LPrePic)
  
        wrapper.vm.setLPrePicSize(expectedData.LPrePicSize)
        expect(wrapper.vm.loggaConfig.LPrePicSize).toEqual(expectedData.LPrePicSize)
    })
    test('Testing text configs', () => {
        const wrapper = mount(TextConfig)
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
    })
    test('byt färg', () => {
        const wrapper = mount(TShirtConfig)
        wrapper.vm.setFarg('Puder Rosa')
        expect(wrapper.vm.tShirt.farg).toEqual('Puder Rosa')
    })
})