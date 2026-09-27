import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
// --mode offline：构建免安装离线版（file:// 双击 index.html 可用）
export default defineConfig(({ mode }) => {
  const offline = mode === 'offline'

  // 离线版把代码中的根相对资源路径改为相对路径（file:// 下 /images 会指向盘符根）
  const relativizeAssets = () => ({
    name: 'relativize-asset-paths',
    transform(code) {
      return code.replace(/([`'"])\/(images|audio)\//g, '$1./$2/')
    },
  })

  return {
    plugins: [react(), ...(offline ? [relativizeAssets(), viteSingleFile()] : [])],
    ...(offline ? { base: './' } : {}),
    // dev 监听排除构建产物目录，避免离线构建写文件时触发 EBUSY 崩溃
    server: { watch: { ignored: ['**/dist/**', '**/dist-offline/**'] } },
  }
})
