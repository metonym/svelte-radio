import resolve from "rollup-plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import pkg from "./package.json";

export default ["es", "umd"].map((format) => {
  const UMD = format === "umd";

  return {
    input: "src",
    output: {
      exports: "named",
      format,
      file: UMD ? pkg.main : pkg.module,
      name: UMD ? "svelte-radio" : undefined,
    },
    plugins: [svelte(), resolve()],
  };
});
