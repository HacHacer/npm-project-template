import chalk from 'chalk'
console.log(chalk.blue('Hello world!'));
console.log(chalk.red(`Server is listening on port`));
console.log(chalk.bgHex('#DEADED').underline('Hello, world!'));
console.log(chalk.bgRgb(15, 100, 204).inverse('Hello!'));
console.log(chalk.rgb(255, 136, 0).bold('Orange!'));
console.log(chalk.hex('#FF8800').bold('Orange!'));
console.log(chalk.bgAnsi256(194)('Honeydew, more or less'));
const a=`██████╗  ██████╗  ██████╗██╗  ██╗██████╗  █████╗ ███╗   ██╗ ██████╗ 
██╔══██╗██╔═══██╗██╔════╝██║ ██╔╝██╔══██╗██╔══██╗████╗  ██║██╔════╝ 
██████╔╝██║   ██║██║     █████╔╝ ██████╔╝███████║██╔██╗ ██║██║  ███╗
██╔══██╗██║   ██║██║     ██╔═██╗ ██╔══██╗██╔══██║██║╚██╗██║██║   ██║
██║  ██║╚██████╔╝╚██████╗██║  ██╗██████╔╝██║  ██║██║ ╚████║╚██████╔╝
╚═╝  ╚═╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝` 
                                                                    
console.log(chalk.bgRed(a));