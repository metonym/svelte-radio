/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RadioProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["input"]> {
  /**
   * @default "radio-" + Math.random().toString(36)
   */
  id?: string;

  /**
   * @default ""
   */
  value?: number | string;

  /**
   * @default "Radio button label"
   */
  label?: string;

  /**
   * @default false
   */
  checked?: boolean;
}

export default class Radio extends SvelteComponentTyped<
  RadioProps,
  {
    focus: WindowEventMap["focus"];
    blur: WindowEventMap["blur"];
    change: WindowEventMap["change"];
    keydown: WindowEventMap["keydown"];
  },
  {}
> {}
