const fs = require('fs')

const sourceMapRegaxs = [
  [/\(process\.env\.NODE_ENV\s===\s"production"\s\?\s""\s:\s".*?"\)/gi, '""'],
  [/"\/\*#.?sourceMappingURL=.*"/gi, '""'],
]

const distPath = __dirname + '/../dist'

/**
 * loop over files modify it using regax
 */
fs.readdirSync(distPath).forEach(file => {
  const filePath = `${distPath}/${file}`
  const fileContent = String(fs.readFileSync(filePath, 'utf-8'))
  console.log(sourceMapRegaxs.map(([s]) => s.test(fileContent)))
  const fileContentAfterModified = sourceMapRegaxs.reduce(
    (str, args) => str.replace(...args),
    fileContent,
  )
  fs.writeFileSync(filePath, fileContentAfterModified)
})
