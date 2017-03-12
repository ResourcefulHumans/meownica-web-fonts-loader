# meownica-web-fonts-loader

[![Build Status](https://travis-ci.org/ResourcefulHumans/meownica-web-fonts-loader.svg?branch=master)](https://travis-ci.org/ResourcefulHumans/meownica-web-fonts-loader)
[![semantic-release](https://img.shields.io/badge/semver-semantic%20release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Code Climate](https://codeclimate.com/github/ResourcefulHumans/meownica-web-fonts-loader/badges/gpa.svg)](https://codeclimate.com/github/ResourcefulHumans/meownica-web-fonts-loader)


[![NPM](https://nodei.co/npm/meownica-web-fonts-loader.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/meownica-web-fonts-loader/)

An asynchronous web-font loader based on code by meowni.ca: https://meowni.ca/posts/web-fonts/

## Usage

Install it via npm:

    npm install --save meownica-web-fonts-loader
    
And use it in your JavaScript

```js
import loadFont from 'meownica-web-fonts-loader'
    
loadFont('//fonts.googleapis.com/css?family=Roboto+Slab:400,700')
```

### Advanced usage

The `loadFont` method has two optional arguments:

 1. use `addClassOnLoad` to add the given class to the body element after the font has been loaded
 1. use `cb` to provide a callback that will be called after the font has been loaded, its argument will be the XMLHttpRequest object 
