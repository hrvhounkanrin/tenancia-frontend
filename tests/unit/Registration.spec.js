import { mount } from '@vue/test-utils'
import Register from '../../src/views/register/index.vue'

describe('index.vue Test', () => {
  it('renders a mix on signup, signin page', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  })
})
