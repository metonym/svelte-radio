/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RadioGroupProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["fieldset"]> {
  /**
   * @default "Radio group legend"
   */
  legend?: string;

  value?: number | string;
}

export default class RadioGroup extends SvelteComponentTyped<
  RadioGroupProps,
  {
    change: CustomEvent<{
      selected: {
        checked: true;
        id: string;
        label: string;
        value: number | string;
      };
    }>;
  },
  { default: {}; legend: {} }
> {}
