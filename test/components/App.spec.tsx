import * as React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import App from '../../src/components/App'



describe('<App />', () => {
  it('Should render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.be.ok
  })
})