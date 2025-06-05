[![Test and Publish](https://github.com/EBI-Metagenomics/domain-gfx/workflows/Test%20and%20Publish/badge.svg)](https://github.com/EBI-Metagenomics/domain-gfx/actions?query=workflow%3A%22Test+and+Publish%22)

# Domain graphics library

_in development_

A live example is available to play with at
[https://ebi-metagenomics.github.io/domain-gfx/](https://ebi-metagenomics.github.io/domain-gfx/)

## Installation:

This library is available on npm, to install it run:

`npm install --save domain-gfx`

Otherwise, you can use it directly from the unpkg CDN at
[https://unpkg.com/domain-gfx](https://unpkg.com/domain-gfx)

## Usage:

### Using ES modules, or a module bundler

**recommended way**

This library is available as a plain ES module, you can use it directly by
importing it into your code like this:

```js
import DomainGfx from 'domain-gfx';
```

**legacy browsers support (including Internet Explorer)**

To support IE, or other legacy browsers, you can use the `legacy` bundle which
includes a set of needed polyfills. It has only been tested back to IE10, and it
will probably break on previous versions of IE.

### Using a global

you can insert the script in your page, synchronously or not. It will add the
global `DomainGfx`.

If you are loading it asynchronously, you can listen for the `'domainGfxReady'`
event on the `document`, containing the DomainGfx class. e.g.:

```js
document.addEventListener('domainGfxReady', event => {
  const DomainGfx = event.detail;
  // Use the DomainGfx class...
  // ...
});
```

From the `dist` folder, use the `domain_gfx.es5.js` file, for ES5 support, or
`domain_gfx.es2015.js`, for ES2015 support.

## API:

### Syntax

```js
new DomainGfx(userParameters);
```

#### Parameters

* **userParameters**, `object`: contains information to render the graphic

  * **parent**, `Element`: container element for the graphic

  * **data**, optional `object`: data describing the content of the graphic

  * **params**, optional `object`: extra parameters, modifying the rendering
    (not used at the moment) like the scale of the image, or default sizes

#### Return value

A new instance of DomainGfx

#### Properties

* **DomainGfx.prototype.data** _getter data()_: returns the internal data stored
  in the instance

* **DomainGfx.prototype.data** _setter data(value)_: sanitize value, and sets
  the result as internal data and returns it

#### Methods

* **DomainGfx.prototype.delete()**: clean-up logic, removes event listeners and
  gets rid of pointers to DOM nodes to be able to GC them

## Examples:

```js
// DOM container
const parent = document.querySelector('.container');
// Domain graphics data object (see data syntax section)
const data = {
  length: 100,// sequence of length 400
  regions: [// array of sequence objects
    {
      text: 'domain name',
      start: 2,
      end: 40,
      aliStart: 5,// >= start
      aliEnd: 30,// <= end
      display: true,
      startStyle: 'jagged',
      endStyle: 'curved',
      color: 'blue'
      metadata: {// information for tooltip
        database: 'pfam',
        description: 'text about the domain',
        accession: 'PF00000',
        identifier: 'domain X',
      },
    },
  ],
  markups: [// array of markup objects
    {
      lineColour: '#0ff0f0',
      colour: '#bb5b55',
      display: true,
      vAlign: 'top',
      type: 'Pfam predicted active site',
      start: 5,
      headStyle: 'diamond',
      metadata: {
        database: 'pfam',
        description: 'S Pfam predicted active site',
      },
    },
  ],
  motifs: [// array of motif objects
    {
      colour: '#00a500',
      metadata: true,
      database: 'Phobius',
      type: 'sig_p',
      display: true,
      end: 50,
      start: 30
    },
  ],
};

const dg = new DomainGfx({data, parent});
```

## Gotchas and changes from earlier versions:

As compared to pre-existing older libraries such as PfamGraphics

### new way to create a graphic

* instead of passing as different parameters, first a node or a string to select
  a node, then an object with all the data, this now expects an object with a
  `parent`, and optional `data` and `params` keys.

* instead of calling the render method afterwards on the DomainGfx object, the
  render is done automatically when instantiating the object, and also everytime
  different data is assigned to the object.

### differences in the data object

Old data objects **should still be able to be used**, as this library still
accounts for the old formats. If it is not able to use the data please upgrade
the data object to a newer version.

Should be used:

* American spelling. e.g. `colour` -> `color`
* Keys in camelCase. e.g. `v_align` -> `vAlign`
* Correct type where need be. e.g. `start`: integer, `display`: boolean

## Todo:

* [ ] Add more documentation
  * [ ] shape of `data`
  * [ ] details for developers
* [ ] Add more unit tests
* [ ] Handle parameters (entity/text sizes, x/y scale, etc)
