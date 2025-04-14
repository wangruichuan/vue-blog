// uno.config.ts
import { defineConfig } from 'unocss'
import presetWind4 from '@unocss/preset-wind4'

export default defineConfig({
  // ...UnoCSS options
  presets: [presetWind4({
    reset: true, // 默认值为 true
  })],
})
