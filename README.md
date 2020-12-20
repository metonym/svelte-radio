# svelte-radio

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> Composed Radio button group component for Svelte.

## Install

```bash
yarn add -D svelte-radio
# OR
npm i -D svelte-radio
```

## Usage

```svelte
<script>
  import { RadioGroup, Radio } from "svelte-radio";

  let value = "1";
</script>

<RadioGroup bind:value label="Radio group legend">
  <Radio label="Label 1" value="1" />
  <Radio label="Label 2" value="2" />
  <Radio label="Label 3" value="3" />
</RadioGroup>

value:
{value}

<div>
  <button
    type="button"
    on:click={() => {
      value = '2';
    }}
  >Set value to "2"</button>
</div>
```

### Styling

This component is unstyled by design. Use a global class selector to style the `.svelte-radio-group` and `.svelte-radio` classes.

```html
<style>
  :global(.svelte-radio-group) {
    border: 2px solid #e0e0e0;
    padding: 1rem;
  }

  :global(.svelte-radio) {
    margin-bottom: 0.5rem;
  }

  :global(.svelte-radio label) {
    margin-left: 0.25rem;
  }
</style>
```

## API

### RadioGroup

| Prop name    | Value                                         |
| :--------------- | :-------------------------------------------- |
| legend           | `string`                                      |
| value            | `string` or `number` (default: `undefined`)               |
| `...$$restProps` | (forward to the top-level `fieldset` element) |

### Radio

| Prop name    | Value                                         |
| :--------------- | :-------------------------------------------- |
| label            | `string`                                      |
| value            | `string` or `number` (default: `undefined`)               |
| checked          | `boolean` (default: `false`                   |
| `...$$restProps` | (forward to the second-level `input` element) |

## Dispatched events

### `Radio.Group`

| Event name  | Description                        |
| :---------- | :--------------------------------- |
| `on:change` | triggered if the selection changes |

```svelte
<RadioGroup
  bind:value
  label="Radio group legend"
  on:change={(e) => {
    console.log(e.detail);
  }}
>
  <Radio label="Label 1" value="1" />
  <Radio label="Label 2" value="2" />
  <Radio label="Label 3" value="3" />
</RadioGroup>
```

## TypeScript support

Svelte version 3.31 or greater is required to use this module with TypeScript.

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-radio.svg?color=blue
[npm-url]: https://npmjs.com/package/svelte-radio
[build]: https://travis-ci.com/metonym/svelte-radio.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/svelte-radio
