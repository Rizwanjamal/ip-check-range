# ip-check-range

[![npm (scoped)](https://img.shields.io/npm/v/ipcheck.svg)](https://www.npmjs.com/package/ip-check-range)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/ipcheck.svg)](https://www.npmjs.com/package/ip-check-range)
[![Travis](https://api.travis-ci.org/gosquared/ipcheck.svg)](https://travis-ci.org/gosquared/ipcheck)
[![Dependencies](https://david-dm.org/gosquared/ipcheck.svg)](https://david-dm.org/gosquared/ipcheck)

[![NPM](https://nodei.co/npm/ip-check-range.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/ip-check-range)


Quickly parses IP addresses, allowing them to be checked for Range Matches.

## Install

`npm install ip-check-range --save`

## Usage

```js
var IPCheckRange = require('ip-check-rage');
IPCheckRange('192.168.34.253', ['192.168.0.1', '192.168.0-78.253']);    //= true
IPCheckRange('192.198.34.1', ['192.168-255.34.1', '192.168.0-78,253']); //= true
IPCheckRange('192.13.134.223', ['192.*.*.*', '192.168.*,*']);           //= true
IPCheckRange('192.16.0.124', ['192.168.0.1-178', '192.168.0-78,253']);  //= false
IPCheckRange('192.168.34.76', ['192.168.0.1', '192.168.0-78.23-253']);  //= true
```
## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/Rizwanjamal/ip-check-range/issues/new).
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Rizwan Jamal](http://www.rizwanjamal.tk) [![rizwanjamal.tk][author-www-img]][author-www-url]

[npmjs-url]: https://github.com/Rizwanjamal/ip-check-range
[npmjs-img]: https://img.shields.io/npm/v/ip-check-range.svg?label=ip-check-range

[license-url]: https://github.com/Rizwanjamal/ip-check-range/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/ip-check-range.svg

[downloads-url]: https://www.npmjs.com/package/ip-check-range
[downloads-img]: https://img.shields.io/npm/dm/ip-check-range.svg

[author-www-url]: http://www.rizwanjamal.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg
