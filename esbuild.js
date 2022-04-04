const { build } = require("esbuild");
/**
 * Commented out a few more niche typescript + esbuild techniques - esbuild decorators works for decorator metadata
 * but I can't seem to get a nest.js app bundled correctly so best to not bother with decorator metadata with this technique
 *
 * type checking is another "meh" feature in esbuild - it seems faster to run tsc and esbuild separately
 */
// const { esbuildDecorators } = require("@anatine/esbuild-decorators");
// const { esbuildPluginDecorator } = require("esbuild-plugin-decorator");
// const { EsbuildPlugin } = require("vite-esbuild-typescript-checker");

async function buildAll() {
  // const tsconfig = "./tsconfig.json";

  await build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    minify: true,
    platform: "node",
    sourcemap: process.env.NODE_ENV !== "production" ? "inline" : false,
    plugins: [
      // esbuildDecorators({
      //   tsconfig,
      // }),
      // EsbuildPlugin({
      //   checker: {
      //     typescript: {
      //       configFile: "./tsconfig.json",
      //     },
      //   },
      // }),
      // esbuildPluginDecorator({
      //   tsconfigPath: "tsconfig.json",
      //   compiler: "tsc",
      //   verbose: true,
      // }),
    ],
    target: ["node14"],
    outfile: "dist/index.js",
  });
}

buildAll();
