const fs = require('fs');
const plist = require('plist');

function convertPlistToJson(inputPath, outputPath) {
  const xml = fs.readFileSync(inputPath, 'utf8');
  const json = plist.parse(xml);
  fs.writeFileSync(outputPath, JSON.stringify(json, null, 2), 'utf8');
  console.log(`Converted ${inputPath} → ${outputPath}`);
}

// Usage: node scripts/convert-tmlanguage.js syntaxes/twig.tmLanguage syntaxes/twig.tmLanguage.json
if (require.main === module) {
  const [,, input, output] = process.argv;
  if (!input || !output) {
    console.error('Usage: node scripts/convert-tmlanguage.js <input.tmLanguage> <output.json>');
    process.exit(1);
  }
  convertPlistToJson(input, output);
}
