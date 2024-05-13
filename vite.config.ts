/** @type {import('vite').UserConfig} */
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true, // 타입 정의 파일 생성
        }),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: '@yongholeeme/secureDice', // 라이브러리 이름
            formats: ['es'],
            fileName: (format) => `index.${format}.js`, // 파일 이름 형식
        },
        rollupOptions: {
            external: ['react', 'react-dom'], // 외부 의존성 제외
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
})
