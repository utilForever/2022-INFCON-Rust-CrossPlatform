# 2022-INFCON-Rust-CrossPlatform

INFCON 2022 - Rust 크로스 플랫폼 프로그래밍 발표 자료 및 예제 코드

## Contents

- [Presentation](./인프콘%202022%20-%20Rust%20크로스%20플랫폼%20프로그래밍.pdf)

- Supplement

- Example
  - Core library
    - [rust-cross](./rust-cross)
    - [rust-cross-ios](./rust-cross-ios)
    - [rust-cross-web](./rust-cross-web)
  - [iOS Example](./example-ios)
  - [Web Example](./example-web/)

## Quick Start

### Rust + WebAssembly

1. Run this command inside the `rust-cross-web` directory:

```sh
wasm-pack build
```

2. Copy `pkg` folder to `example-web` directory.

### WebAssembly with TypeScript

1. Ensure that the local development server and its dependencies are installed by running this command within the `example-web` directory:
```sh
npm install
```

2. Run this command from within the `example-web` directory:
```sh
npm run start
```

3. Go to `http://localhost:8080/`

## References

- Rust Core
  - Beginner
    * [The Rust Programming Language](https://doc.rust-lang.org/book/)
    * [Rustlings](https://github.com/rust-lang/rustlings/)
    * [Rust By Example](https://doc.rust-lang.org/stable/rust-by-example/)
    * [Rust-101 by Ralf Jung](https://www.ralfj.de/projects/rust-101/main.html)
    * [Exercism - Rust](https://exercism.org/tracks/rust)
    * [Book: The Rust Programming Language](http://www.yes24.com/Product/Goods/83075894)
    * [Book: Rust in Action](https://www.manning.com/books/rust-in-action)
    * [Book: Programming Rust](https://www.oreilly.com/library/view/programming-rust-2nd/9781492052586/)
  - Intermediate
    * [The Standard Library](https://doc.rust-lang.org/std/index.html)
    * [The Edition Guide](https://doc.rust-lang.org/edition-guide/index.html)
    * [The Cargo Book](https://doc.rust-lang.org/cargo/index.html)
    * [The rustdoc Book](https://doc.rust-lang.org/rustdoc/index.html)
    * [The rustc Book](https://doc.rust-lang.org/rustc/index.html)
    * [Book: Concurrent Programming](http://www.yes24.com/Product/Goods/108570426)
    * [Book: Rust for Rustaceans](https://rust-for-rustaceans.com/)
  - Advanced
    * [The Rust Reference](https://doc.rust-lang.org/reference/index.html)
    * [The Rustonomicon](https://doc.rust-lang.org/nomicon/index.html)
    * [The Rust Unstable Book](https://doc.rust-lang.org/nightly/unstable-book/index.html)
- Rust + iOS
  * [Building and Deploying a Rust library on iOS](https://mozilla.github.io/firefox-browser-architecture/experiments/2017-09-06-rust-on-ios.html)
- Rust + WebAssembly
  * [Rust and WebAssembly](https://rustwasm.github.io/docs/book/)
  * [Book: The Art of WebAssembly](https://nostarch.com/art-webassembly)
  * [Book: WebAssembly: The Definitive Guide](https://www.oreilly.com/library/view/webassembly-the-definitive/9781492089834/)

## How To Contribute

Contributions are always welcome, either reporting issues/bugs or forking the repository and then issuing pull requests when you have completed some additional coding that you feel will be beneficial to the main project. If you are interested in contributing in a more dedicated capacity, then please contact me.

## Contact

You can contact me via e-mail (utilForever at gmail.com). I am always happy to answer questions or help with any issues you might have, and please be sure to share any additional work or your creations with me, I love seeing what other people are making.

## License

<img align="right" src="http://opensource.org/trademarks/opensource/OSI-Approved-License-100x137.png">

The class is licensed under the [MIT License](http://opensource.org/licenses/MIT):

Copyright &copy; 2022 [Chris Ohk](http://www.github.com/utilForever).

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.