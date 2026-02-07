<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# isNonNegativeNumberArray

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is an array-like object containing only nonnegative numbers.



<section class="usage">

## Usage

```javascript
import isNonNegativeNumberArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number-array@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { objects, primitives } from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number-array@esm/index.mjs';
```

#### isNonNegativeNumberArray( value )

Tests if a `value` is an array-like object containing **only** nonnegative numbers.

<!-- eslint-disable no-new-wrappers -->

```javascript
import Number from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@esm/index.mjs';

var bool = isNonNegativeNumberArray( [ 3.0, new Number(3.0) ] );
// returns true

bool = isNonNegativeNumberArray( [ 3.0, '3.0' ] );
// returns false
```

#### isNonNegativeNumberArray.primitives( value )

Tests if a `value` is an array-like object containing **only** primitive nonnegative numbers.

<!-- eslint-disable no-new-wrappers -->

```javascript
import Number from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@esm/index.mjs';

var bool = isNonNegativeNumberArray.primitives( [ 1.0, 0.0, 10.0 ] );
// returns true

bool = isNonNegativeNumberArray.primitives( [ 3.0, new Number(1.0) ] );
// returns false
```

#### isNonNegativeNumberArray.objects( value )

Tests if a `value` is an array-like object containing **only** object nonnegative numbers.

<!-- eslint-disable no-new-wrappers, max-len -->

```javascript
import Number from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@esm/index.mjs';

var bool = isNonNegativeNumberArray.objects( [ new Number(1.0), new Number(1.0) ] );
// returns true

bool = isNonNegativeNumberArray.objects( [ 1.0, 0.0, 10.0 ] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Number from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@esm/index.mjs';
import isNonNegativeNumberArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number-array@esm/index.mjs';

var bool = isNonNegativeNumberArray( [ 5.0, 0.2, 3.9 ] );
// returns true

bool = isNonNegativeNumberArray( [ 1, 2, 3 ] );
// returns true

bool = isNonNegativeNumberArray( [ 1, new Number( 6 ), 3 ] );
// returns true

bool = isNonNegativeNumberArray( [ 1, 'abc', 3 ] );
// returns false

bool = isNonNegativeNumberArray( 78.0 );
// returns false

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-array`][@stdlib/assert/is-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-nonnegative-number-array.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-nonnegative-number-array

[test-image]: https://github.com/stdlib-js/assert-is-nonnegative-number-array/actions/workflows/test.yml/badge.svg?branch=v0.2.3
[test-url]: https://github.com/stdlib-js/assert-is-nonnegative-number-array/actions/workflows/test.yml?query=branch:v0.2.3

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-nonnegative-number-array/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-nonnegative-number-array?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-nonnegative-number-array.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-nonnegative-number-array/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-nonnegative-number-array/tree/deno
[deno-readme]: https://github.com/stdlib-js/assert-is-nonnegative-number-array/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/assert-is-nonnegative-number-array/tree/umd
[umd-readme]: https://github.com/stdlib-js/assert-is-nonnegative-number-array/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/assert-is-nonnegative-number-array/tree/esm
[esm-readme]: https://github.com/stdlib-js/assert-is-nonnegative-number-array/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/assert-is-nonnegative-number-array/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-nonnegative-number-array/main/LICENSE

<!-- <related-links> -->

[@stdlib/assert/is-array]: https://github.com/stdlib-js/assert-is-array/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
