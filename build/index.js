const { run } = require('runjs')
const chalk = require('chalk')
const config = require('../vue.config.js')
const rawArgv = process.argv.slice(2)
const args = rawArgv.join(' ')
const client = require('scp2')

run(`vue-cli-service build ${args}`)

console.log(chalk.cyan('  Build complete.\n'))
console.log(chalk.yellow(
  '  Tip: built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
))
client.scp('./dist', {
  host: '49.233.70.235',
  username: 'root',
  password: 'xxzxB105_2012',
  path: '/www/wwwroot/fupin.howeaver.cn'
}, function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('文件上传完毕!\n')
  }
})