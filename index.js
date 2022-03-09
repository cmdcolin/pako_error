import pkg from 'pako'
import fs from 'fs'
const { inflate } = pkg

const buffer = fs.readFileSync('./simple.vcf.gz')
const unzip = inflate(buffer)
const text = new TextDecoder().decode(unzip)
console.log(text.slice(0,100))
