<script>
  export let id = "radio-" + Math.random().toString(36);
  export let value = "";
  export let label = "Radio button label";
  export let checked = false;

  import { getContext, onDestroy } from "svelte";

  const ctx = getContext("RadioGroup");
  let unsubscribe = undefined;

  onDestroy(() => {
    if (ctx !== undefined) {
      ctx.remove({ id });
    }

    if (unsubscribe !== undefined) {
      unsubscribe();
    }
  });

  $: if (ctx !== undefined) {
    ctx.add({ id, value, label, checked });

    if (checked) {
      ctx.toggle({ id });
    }

    unsubscribe = ctx.items.subscribe(value => {
      if (value[id] !== undefined) {
        checked = value[id].checked;
      }
    });
  }
</script>

<div class="svelte-radio">
  <input
    {...$$restProps}
    type="radio"
    {id}
    {value}
    {checked}
    on:focus
    on:blur
    on:change
    on:change={({ target }) => {
      checked = target.checked;
    }}
    on:keydown />
  <label for={id}>{label}</label>
</div>
