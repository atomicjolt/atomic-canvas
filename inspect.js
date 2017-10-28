#!/usr/bin/env

const highlight = require('cli-highlight').highlight;
const fs = require('fs');
const args = process.argv.slice(2);

const logJS = log => console.log(
  highlight(
    log,
    {
      language: 'javascript',
      ignoreIllegals: true
    }
  )
);

if (args.length === 2) {
  const requestedModule = require(`./libs/constants/${args[0]}`);
  const constant = requestedModule[args[1]];
  const output = `
  {
    type: '${constant.type}',
    method: '${constant.method}',
    key: '${constant.key}',
    required: ${JSON.stringify(constant.required)}
  }
  import { ${args[1]} } from 'atomic-canvas/libs/constants/${args[0]}';
  `;
  logJS(output);
} else if (args.length === 1) {
  logJS(fs.readFileSync(`./src/constants/${args[0]}.js`, 'utf8'));
} else {
  fs.readdirSync('./src/constants').forEach(file => console.log(file.replace('.js', '')));
}
