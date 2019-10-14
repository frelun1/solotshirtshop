import { mount } from '@vue/test-utils'
import TShirtConfig from '@/components/TShirtConfig.vue'
import TextConfig from '@/components/TextConfig.vue'
import LoggaConfig from '@/components/LoggaConfig.vue'

let expectedTextData={ TPreText: 'Text', TTextSize: {Width: 'Width', Heigth: 'Height'}, TTextColor: 'Color', TTextStyle: 'Style', TTextFont: 'Font', TMyText: 'MyText'}
let expectedLoggaData={ LMyPic: 'MyPic', LPicSize: {Width: 'Width', Heigth: 'Height'}, LPrePic: 'PrePic', LPrePicSize: {Width: 'Width', Heigth: 'Height'}}

describe('Som kund vill jag kunna se hur min t-shirt kommer att se ut under tiden jag skapar den.', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(TShirtConfig)
        expect(wrapper.isVueInstance()).toBeTruthy()
      })
    test('standard tshirt', () => {
        const wrapper = mount(TShirtConfig)
        expect(wrapper.vm.tShirt.farg).toEqual('Vit')
        expect(wrapper.vm.tShirt.size).toEqual('S')
        
        const testWrapper = mount(TextConfig)
        expect(testWrapper.vm.textConfig.TPreText).toEqual("")
        expect(testWrapper.vm.textConfig.TMyText).toEqual("")
        expect(testWrapper.vm.textConfig.TMyText).toEqual("")
        expect(testWrapper.vm.textConfig.TTextSize).toEqual({})
        expect(testWrapper.vm.textConfig.TTextColor).toEqual("")
        expect(testWrapper.vm.textConfig.TTextStyle).toEqual("")
        expect(testWrapper.vm.textConfig.TTextFont).toEqual("")

        const loggawrapper = mount(LoggaConfig)
        loggawrapper.vm.setLMyPic("PIC URL")
        loggawrapper.vm.setLPicSize({})
        loggawrapper.vm.setLPrePic("PIC URL/id")
        loggawrapper.vm.setLPrePicSize({})
    })
    test('custom tshirt', () => {
        const wrapper = mount(TShirtConfig)
        wrapper.vm.setFarg('Puder Rosa')
        wrapper.vm.setSize('XL')

        const testWrapper = mount(TextConfig)
        testWrapper.vm.setTPreText(expectedTextData.TPreText)
        testWrapper.vm.setTMyText(expectedTextData.TMyText)
        testWrapper.vm.setTTextSize(expectedTextData.TTextSize)
        testWrapper.vm.setTTextColor(expectedTextData.TTextColor)        
        testWrapper.vm.setTTextStyle(expectedTextData.TTextStyle)
        testWrapper.vm.setTTextFont(expectedTextData.TTextFont)

        const loggawrapper = mount(LoggaConfig)
        loggawrapper.vm.setLMyPic(expectedLoggaData.LMyPic)
        loggawrapper.vm.setLPicSize(expectedLoggaData.LPicSize)
        loggawrapper.vm.setLPrePic(expectedLoggaData.LPrePic)
        loggawrapper.vm.setLPrePicSize(expectedLoggaData.LPrePicSize)

        expect(wrapper.vm.tShirt.farg).toEqual('Puder Rosa')
        expect(wrapper.vm.tShirt.size).toEqual('XL')
        expect(testWrapper.vm.textConfig.TPreText).toEqual(expectedTextData.TPreText)
        expect(testWrapper.vm.textConfig.TMyText).toEqual(expectedTextData.TMyText)
        expect(testWrapper.vm.textConfig.TMyText).toEqual(expectedTextData.TMyText)
        expect(testWrapper.vm.textConfig.TTextSize).toEqual(expectedTextData.TTextSize)
        expect(testWrapper.vm.textConfig.TTextColor).toEqual(expectedTextData.TTextColor)
        expect(testWrapper.vm.textConfig.TTextStyle).toEqual(expectedTextData.TTextStyle)        
        expect(testWrapper.vm.textConfig.TTextFont).toEqual(expectedTextData.TTextFont)
        expect(loggawrapper.vm.loggaConfig.LMyPic).toEqual(expectedLoggaData.LMyPic)
        expect(loggawrapper.vm.loggaConfig.LPicSize).toEqual(expectedLoggaData.LPicSize)
        expect(loggawrapper.vm.loggaConfig.LPrePic).toEqual(expectedLoggaData.LPrePic)
        expect(loggawrapper.vm.loggaConfig.LPrePicSize).toEqual(expectedLoggaData.LPrePicSize)

    })
})