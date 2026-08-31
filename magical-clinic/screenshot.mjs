import { chromium } from '@playwright/test'
import { mkdirSync } from 'node:fs'

const outDir = 'screenshots'
mkdirSync(outDir, { recursive: true })

const pages = [
  ['home', '/'],
  ['o-nas', '/o-nas'],
  ['oferta', '/oferta'],
  ['cennik', '/cennik'],
  ['nasz-zespol', '/nasz-zespol'],
  ['kontakt', '/kontakt'],
]

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })

for (const [name, path] of pages) {
  await page.goto(`http://localhost:5173${path}`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(400)
  await page.screenshot({ path: `${outDir}/${name}.png`, fullPage: true })
  console.log(`captured ${name}`)
}

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } })
await mobile.goto('http://localhost:5173/', { waitUntil: 'networkidle' })
await mobile.waitForTimeout(400)
await mobile.screenshot({ path: `${outDir}/home-mobile.png`, fullPage: true })
console.log('captured home-mobile')

await browser.close()
