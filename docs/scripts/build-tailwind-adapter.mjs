import fs from 'fs/promises'
import postcss from 'postcss'
import tailwindAdapter from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

const inputPath = 'src/index.css'
const outPath = 'temp.adapter.tailwind.css'

async function build(){
  const css = await fs.readFile(inputPath, 'utf8')
  const result = await postcss([tailwindAdapter(), autoprefixer()]).process(css, { from: inputPath })
  await fs.writeFile(outPath, result.css)
  console.log('Wrote', outPath)
}

build().catch(err => { console.error(err); process.exit(1) })
