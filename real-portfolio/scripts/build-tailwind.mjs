import fs from 'fs/promises'
import postcss from 'postcss'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

const inputPath = 'src/index.css'
const outPath = 'temp.api.tailwind.css'

async function build(){
  const css = await fs.readFile(inputPath, 'utf8')
  const result = await postcss([tailwind(), autoprefixer()]).process(css, { from: inputPath })
  await fs.writeFile(outPath, result.css)
  console.log('Wrote', outPath)
}

build().catch(err => { console.error(err); process.exit(1) })
