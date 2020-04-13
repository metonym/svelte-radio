# svelte-radio

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> Customizable radio button component for Svelte.

## Install

```bash
yarn add -D svelte-radio
```

## Usage

```html
<script>
  import Radio from "svelte-radio";

  let value = "1";
</script>

<Radio.Group bind:value>
  <Radio.Button label="Label 1" value="1" />
  <Radio.Button label="Label 2" value="2" />
  <Radio.Button label="Label 3" value="3" />
</Radio.Group>
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

### `Radio.Group`

| Property name    | Value                                         |
| :--------------- | :-------------------------------------------- |
| legend           | `string`                                      |
| value            | `string` (default: `undefined`)               |
| `...$$restProps` | (forward to the top-level `fieldset` element) |

### `Radio.Button`

| Property name    | Value                                         |
| :--------------- | :-------------------------------------------- |
| label            | `string`                                      |
| value            | `string` (default: `undefined`)               |
| checked          | `boolean` (default: `false`                   |
| `...$$restProps` | (forward to the second-level `input` element) |

## Forwarded events

### `Radio.Group`

| Event name  | Description                        |
| :---------- | :--------------------------------- |
| `on:change` | triggered if the selection changes |

```html
<Radio.Group on:change={({ detail }) => { console.log(detail); }} />
<!--
  {
    "selected": {
      "id": string,
      "value": string,
      "label": string,
      "checked": true
    }
  }
-->
```

### `Radio.Button`

```html
<Radio.Button on:focus on:blur on:change on:keydown />
```

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-radio.svg?color=blue
[npm-url]: https://npmjs.com/package/svelte-radio
[build]: https://travis-ci.com/metonym/svelte-radio.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/svelte-radio
