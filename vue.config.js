const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],

  outputDir: "./docs",
  publicPath: "/vue_router_project/",
});
