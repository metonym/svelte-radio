<script lang="ts">
  import { RadioGroup, Radio } from "./types";

  let value = "1";
</script>

<RadioGroup label="Group label" bind:value>
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
    }}>Set value to "2"</button>
</div>
