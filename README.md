# Blog 项目总结

## 技术栈
- Vue 3.5+
- Vite 6
- Typescript
- Vue Router
- Pinia
- Axios
- Pinia
- ...

## 项目预览

![首页](https://wangruichuan-1321190606.cos.ap-beijing.myqcloud.com/blog/image.png?q-sign-algorithm=sha1&q-ak=AKIDFlRO1y3PGOFSPet_rGzmW4J76zbXfDRgdI1BFfMdtQ9sQWutCqWpyum1z64TO4j7&q-sign-time=1744973977;1744977577&q-key-time=1744973977;1744977577&q-header-list=host&q-url-param-list=ci-process&q-signature=447193d58d693d970b8f81684a53bfa82631f727&x-cos-security-token=Ua5N87Dx6WM7c3nzaul9Uc1IszTMKd7a94fe4ce4a54c979e11787f9b8897ea07YZfeA6s86vo1i7aVTX7B3lgdyCEISNbzFM2dfK4o67vd7pK-ZVVCuJmtOWG9k9MWpJK46DifOlumnv_PYSb01fVImS_v5J4WJSr_LOnpD5Mw5Zi0pLiVW3l30HCCGKG2FJM5TtZDtgAg-HsQK68IV_cjtWEjpNh3wpsS7GLhl9dLfNr9UAYLDK7uEU-PdArGeg1YC_l1JPE1sn1GSbi5ZQi6iWjF3D_pzMtgZmjH2szMy6h8z_iuMTFtCnWXYUQRK-6IssZEdKF3H4cJKRb01Q&ci-process=originImage)


## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
