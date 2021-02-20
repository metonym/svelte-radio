<script>
  /**
   * @event {{ selected: { checked: true; id: string; label: string; value: number | string; } }} change
   */

  export let legend = "Radio group legend";

  /** @type {number | string} */
  export let value = undefined;

  import {
    setContext,
    onMount,
    afterUpdate,
    createEventDispatcher,
    tick,
  } from "svelte";
  import { writable, derived } from "svelte/store";

  const dispatch = createEventDispatcher();
  const items = writable({});
  const flat = derived(items, (_) => Object.values(_));
  const state = derived(flat, (_) => _.map(({ checked }) => checked).join(""));

  let prevState = undefined;
  let prevValue = value;

  function updateValues(item) {
    items.update((_) => {
      Object.keys(_).forEach((id) => {
        _[id].checked = id === item.id;
      });

      return _;
    });
  }

  setContext("RadioGroup", {
    items,
    add: (item) => {
      items.update((_) => ({ ..._, [item.id]: item }));
    },
    toggle: updateValues,
    remove: (item) => {
      items.update((_) => {
        delete _[item.id];
        return _;
      });
    },
  });

  onMount(() => {
    if ($flat.filter(({ checked }) => checked).length === 0) {
      const item = $flat.filter((_) => _.value === value)[0] || $flat[0];

      items.update((_) => {
        _[item.id].checked = true;
        return _;
      });
    }
  });

  afterUpdate(async () => {
    if (value !== prevValue) {
      prevValue = value;

      const selected = Object.values($items).filter(
        (_) => _.value === value
      )[0];

      if (selected !== undefined) updateValues(selected);
    }

    await tick();

    if (prevState !== undefined && $state !== prevState) {
      const selected = $flat.filter(({ checked }) => checked)[0];

      value = selected.value;

      dispatch("change", { selected: { ...selected } });
    }

    prevState = $state;
  });
</script>

<fieldset class:svelte-radio-group={true} {...$$restProps}>
  <slot name="legend">
    <legend>{legend}</legend>
  </slot>
  <slot />
</fieldset>
