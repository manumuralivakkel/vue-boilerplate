// src/components/__tests__/HelloWorld.test.ts

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    // Correctly pass the prop to the component
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'Hello Jest'
      }
    })

    // Now the component's text should contain the prop's value
    expect(wrapper.text()).toContain('Hello Jest')
  })
})