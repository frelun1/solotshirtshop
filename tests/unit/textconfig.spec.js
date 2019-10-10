import { mount } from '@vue/test-utils'
import TextConfig from '@/components/TextConfig.vue'




// Det ska gå att välja förvald text eller egen text på T-shirten, samt ändra storlek på texten.


let expectedData={ TPreText: 'Text', TTextSize: {Width: 'Width', Heigth: 'Height'}, TTextColor: 'Color', TTextStyle: 'Style', TTextFont: 'Font', TMyText: 'MyText'}

describe('Tshirt Text', () =>{
    test('Mount component', () => {
        const wrapper = mount(TextConfig)
        expect(wrapper.isVueInstance()).toBeTruthy()
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
})
