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

# Unlink

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Remove a directory entry.



<section class="usage">

## Usage

```javascript
import unlink from 'https://cdn.jsdelivr.net/gh/stdlib-js/fs-unlink@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { sync } from 'https://cdn.jsdelivr.net/gh/stdlib-js/fs-unlink@deno/mod.js';
```

#### unlink( path, clbk )

Asynchronously removes a directory entry specified by `path`.

<!-- run-disable -->

```javascript
var join = require( 'path' ).join;
var fpath = join( __dirname, 'examples', 'fixtures', 'file.txt' );

unlink( fpath, done );

function done( error ) {
    if ( error ) {
        throw error;
    }
}
```

#### unlink.sync( path )

Synchronously removes a directory entry specified by `path`.

<!-- run-disable -->

```javascript
var join = require( 'path' ).join;
var fpath = join( __dirname, 'examples', 'fixtures', 'file.txt' );

var err = unlink.sync( fpath );
if ( err instanceof Error ) {
    throw err;
}
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If a provided `path` is a symbolic link, the function removes the symbolic link named by the `path` and does not affect any file or directory named by the contents of the symbolic link. Otherwise, the function removes the link named by the provided `path` and decrements the link count of the file referenced by the link. 

    When a file's link count becomes `0` and no process has the file open, the space occupied by the file is freed and the file is no longer accessible. If one or more processes have the file open when the last link is removed, the link is removed before the function returns; however, the removal of file contents is postponed until all references to the file are closed.

    If the `path` refers to a socket, FIFO, or device, processes which have the object open may continue to use it.

-   The path argument should **not** be a directory. To remove a directory, use [`rmdir()`][@stdlib/fs/rmdir].

-   The difference between `unlink.sync` and [`fs.unlinkSync()`][node-fs] is that [`fs.unlinkSync()`][node-fs] will throw if an `error` is encountered (e.g., if given a non-existent path) and this API will return an `error`. Hence, the following anti-pattern

    <!-- run-disable -->

    ```javascript
    var fs = require( 'fs' );

    // Check for path existence to prevent an error being thrown...
    if ( fs.existsSync( '/path/to' ) ) {
        fs.unlinkSync( '/path/to/file.txt' );
    }
    ```

    can be replaced by an approach which addresses existence via `error` handling.

    <!-- run-disable -->

    ```javascript
    import unlink from 'https://cdn.jsdelivr.net/gh/stdlib-js/fs-unlink@deno/mod.js';

    // Explicitly handle the error...
    var err = unlink.sync( '/path/to/file.txt' );
    if ( err instanceof Error ) {
        // You choose what to do...
        throw err;
    }
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var join = require( 'path' ).join;
var readFile = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/fs-read-file' ).sync;
var writeFile = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/fs-write-file' ).sync;
var exists = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/fs-exists' ).sync;
var unlink = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/fs-unlink' ).sync;

var src = join( __dirname, 'examples', 'fixtures', 'file.txt' );
var dest = join( __dirname, 'examples', 'tmp.txt' );

// Create a temporary file:
writeFile( dest, readFile( src ) );

// Confirm that the temporary file exists:
console.log( exists( dest ) );
// => true

// Delete the temporary file:
unlink( dest );

// Confirm that the temporary file no longer exists:
console.log( exists( dest ) );
// => false
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/fs-exists`][@stdlib/fs/exists]</span><span class="delimiter">: </span><span class="description">test whether a path exists on the filesystem.</span>

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

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/fs-unlink.svg
[npm-url]: https://npmjs.org/package/@stdlib/fs-unlink

[test-image]: https://github.com/stdlib-js/fs-unlink/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/fs-unlink/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/fs-unlink/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/fs-unlink?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/fs-unlink.svg
[dependencies-url]: https://david-dm.org/stdlib-js/fs-unlink/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/fs-unlink#cli
[cli-url]: https://github.com/stdlib-js/fs-unlink/tree/cli
[@stdlib/fs-unlink]: https://github.com/stdlib-js/fs-unlink/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/fs-unlink/tree/deno
[deno-readme]: https://github.com/stdlib-js/fs-unlink/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/fs-unlink/tree/umd
[umd-readme]: https://github.com/stdlib-js/fs-unlink/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/fs-unlink/tree/esm
[esm-readme]: https://github.com/stdlib-js/fs-unlink/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/fs-unlink/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/fs-unlink/main/LICENSE

[node-fs]: https://nodejs.org/api/fs.html

[@stdlib/fs/rmdir]: https://github.com/stdlib-js/fs-rmdir/tree/deno

<!-- <related-links> -->

[@stdlib/fs/exists]: https://github.com/stdlib-js/fs-exists/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
