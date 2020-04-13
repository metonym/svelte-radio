<script>
  import Radio from "svelte-radio";

  let value = "2";
  let events = [];

  function logEvent(type, detail) {
    events = [...events, { type, detail }];
  }
</script>

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

  h2 {
    font-size: 0.75rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }

  .padding {
    padding: 1rem;
  }

  .empty {
    padding: 0.5rem 0;
    color: #6f6f6f;
  }

  ul {
    list-style: none;
  }

  li {
    color: #393939;
    padding: 0.5rem 0;
    border-bottom: 1px solid #e0e0e0;
  }

  .tag {
    font-size: 0.875rem;
    padding: 0.25rem;
    color: #393939;
    background-color: #f4f4f4;
    border-radius: 0.25rem;
  }

  .tag pre {
    margin: 0.5rem 0;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    background-color: #f4f4f4;
  }

  .tag:before {
    content: "“";
  }

  .tag:after {
    content: "”";
  }

  button {
    background: none;
    border: 0;
    cursor: pointer;
    font: inherit;
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    outline: 2px solid #e0e0e0;
    margin-right: 0.5rem;
    margin-bottom: 0.25rem;
  }

  button:active {
    outline-color: #0f62fe;
    color: #0f62fe;
  }

  button:focus {
    outline-color: #0f62fe;
  }

  .buttons {
    margin-top: 1rem;
  }
</style>

<svelte:head>
  <title>svelte-radio</title>
</svelte:head>

<Radio.Group
  bind:value
  on:change={({ detail }) => {
    logEvent('change', detail);
  }}>
  <Radio.Button label="Label 1" value="1" />
  <Radio.Button label="Label 2" value="2" />
  <Radio.Button label="Label 3" value="3" />
</Radio.Group>

<div class="padding">
  <h2>Bound value</h2>
  <span class="tag">{value}</span>
</div>

<div class="buttons">
  <button
    type="button"
    on:click={() => {
      value = '1';
    }}>
    Set value to 1
  </button>

</div>

<ul class="padding">
  <h2>Events</h2>
  {#if events.length === 0}
    <div class="empty">No events.</div>
  {/if}
  {#each events as event}
    <li>
      {event.type}
      <span class="tag">
        <pre>{JSON.stringify(event.detail, null, 2)}</pre>
      </span>
    </li>
  {/each}
</ul>
