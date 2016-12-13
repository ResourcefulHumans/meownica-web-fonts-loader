'use strict'

/* globals describe, it */

import loader from '../index'

describe('loader', () => {
  it('should load webfonts', done => {
    let numStyles = document.getElementsByTagName('style').length
    loader('http://fonts.googleapis.com/css?family=Magra')
    let i = window.setInterval(() => {
      if (document.getElementsByTagName('style').length === numStyles + 1) {
        window.clearInterval(i)
        return done()
      }
    }, 25)
  })
  it('should add class to body', done => {
    loader('http://fonts.googleapis.com/css?family=Magra', 'loaded')
    let i = window.setInterval(() => {
      if (/loaded/.test(document.documentElement.className)) {
        window.clearInterval(i)
        return done()
      }
    }, 25)
  })
  it('should execute the callback', done => {
    loader('http://fonts.googleapis.com/css?family=Magra', 'loaded', () => {
      done()
    })
  })
})
