module.exports = {
  publicPath: './', // 讓靜態檔可以直接打開
  transpileDependencies: true,
  productionSourceMap: false, // 關掉 .map 檔，減少體積
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/_mixins.scss" as *;`,
      },
    },
  },
  chainWebpack: (config) => {
    config.optimization.splitChunks(false) // 避免拆出多餘 chunk 檔案
    config.plugins.delete('prefetch') // 不要預先載入額外資源
    config.plugins.delete('preload')
  },
}
