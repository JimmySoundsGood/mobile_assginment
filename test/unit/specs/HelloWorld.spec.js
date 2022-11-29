import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  const Constructor = Vue.extend(HelloWorld)
  const vm = new Constructor().$mount()
  it('should render correct address', () => {
    expect(vm.$el.querySelector('.contxt').textContent)
      .toEqual(`Dongcheng District Metro Cultural Building`)
  })
})


describe('HelloWorld.vue', () => {
  const Constructor = Vue.extend(HelloWorld)
  const vm = new Constructor().$mount()
  it('should add correct food', () => {
    expect(vm.$el.querySelector('#pay').textContent).toBe(`Pay`)
  })
})

describe('HelloWorld.vue', () => {
  const Constructor = Vue.extend(HelloWorld)
  const vm = new Constructor().$mount()
  console.log('test' + vm.$el.querySelector('.title'));
  it('should render correct food name', () => {
    expect(vm.$el.querySelector('.title').textContent).toBe(`FRIES`)
  })
})




