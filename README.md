<p align="center">
  <img src="https://raw.githubusercontent.com/mxmzb/react-aiwriter/master/img/logo-emoji.png" height="150" />
</p>

<br />

<h2 align="center">React AIWriter</h2>
<h3 align="center">Inspired by the first versions [interface of ChatGPT](https://chat.openai.com/chat)</h3>

<br />

<p align="center">
  <a href="https://npmjs.org/package/react-aiwriter">
    <img src="https://img.shields.io/npm/v/react-aiwriter?style=for-the-badge" />
  </a>
  <a href="https://github.com/mxmzb/react-aiwriter/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/react-aiwriter?style=for-the-badge" />
  </a>
  <a href="https://npmjs.org/package/react-aiwriter">
    <img src="https://img.shields.io/bundlephobia/min/react-aiwriter?style=for-the-badge" />
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge&logo=github" />
</p>

<br />

<img src="https://raw.githubusercontent.com/mxmzb/react-aiwriter/master/img/chatgpt-example.png" />

### Example app and usage

I've written an extensive blog post about the current state of AI and its implications on software jobs, in which I have used this library. [Check it out](https://maximzubarev.com/ai-will-steal-your-job)! You can also run the included demo app locally:

```sh
$ git clone https://github.com/mxmzb/react-aiwriter.git
$ cd react-aiwriter && yarn
$ cd example && yarn
$ yarn dev
```

After installing the demo locally you can visit it at http://localhost:8000

## Intro

As I (and probably half of Twitter) have been playing around with [ChatGPT](https://chat.openai.com/chat), I came to like the way ChatGPT was rendering the words successively in a typewriter style. I found [TypewriterJS](https://github.com/tameemsafi/typewriterjs), but its configuration was too difficult to integrate arbitrary content from a CMS.

## Installation

```
$ yarn add react-aiwriter
```

## Quickstart

```jsx
import AIWriter from "react-aiwriter";

export default () => (
  <AIWriter>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </AIWriter>
);
```

## Documentation and API

### `AIWriter`

The main slider container, where you want to put all your slider elements inside.

| Prop       |  Default   |     Type      | Description                                             |
| :--------- | :--------: | :-----------: | :------------------------------------------------------ |
| `children` |    null    | `ReactNode[]` | Child elements. Should be text nodes                    |
| `delay`    |    `25`    |   `number`    | The time between nodes / words rendered in milliseconds |
| `onFinish` | `() => {}` |  `function`   | Do something after all nodes / words rendered           |

## License

`react-aiwriter` is licensed under the [MIT](https://github.com/mxmzb/react-aiwriter/blob/master/LICENSE).
