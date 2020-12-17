# Fizzy UI utils

UI utility & helper functions

Used in [Flickity](https://flickity.metafizzy.co), [Isotope](https://isotope.metafizzy.co), [Masonry](https://masonry.desandro.com), [Draggabilly](https://draggabilly.desandro.com)

## Install

npm: `npm install fizzy-ui-utils`

Yarn: `yarn add fizzy-ui-utils`

## API

``` js
// fizzyUIUtils is the browser global
const utils = fizzyUIUtils;

// ---- ---- //

utils.makeArray( obj )
// make array from object
// makeArray('single object') => [ 'single object' ]

utils.modulo( num, div )
// num [modulo] div

utils.removeFrom( ary, obj )
// remove object from array

utils.getQueryElement( elem )
// if elem is a string, use it as a selector and return element

MyClass.prototype.handleEvent = utils.handleEvent;
// enable MyClass.onclick when element.addEventListener( 'click', this, false )

utils.filterFindElements( elems, selector )
// iterate through elems, filter and find all elements that match selector

utils.debounceMethod( MyClass, methodName, threhold )
// debounce a class method

utils.docReady( callback )
// trigger callback on document ready

utils.toDashed( str )
// 'camelCaseString' -> 'camel-case-string'

utils.htmlInit( MyClass, namespace )
// on document ready, initialize MyClass on every element
// that matches [data-my-class] attribute
// pass in JSON options from attribute value
```

**Legacy API** The following methods were available in v2, and still available in v3, but should be avoided in favor of native browser API

``` js
utils.extend( a, b )
// extend object
// use Object.assign() or { ...obj } instead

utils.getParent( elem, selector )
// get parent element of an element, given a selector string
// use elem.closest( selector ) instead
```

## Browser support

---

[MIT license](https://desandro.mit-license.org/). Have at it.

By [Metafizzy 🌈🐻](https://metafizzy.co)
