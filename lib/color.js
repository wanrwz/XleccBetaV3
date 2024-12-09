const chalk = require('chalk')

const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const mylog = (text, color) => {
return !color ? chalk.greenBright('[ botwa ] ') + chalk.magentaBright(text) : chalk.greenBright('[ botwa ] ') + chalk.keyword(color)(text)
}

module.exports = { color, mylog }