//const fs = require('fs')
import fs from 'fs'
import chalk from 'chalk';
// const chalk = require('chalk')

fs.readFile('zero.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    let oneEntry = data.split("~~")
    
     
    for ( let i = 0 ; i < oneEntry.length ; i++){
        let tilledCount = oneEntry[i].split("~").length
        
        if (tilledCount < 16){
            console.log(chalk.bgRed.black(oneEntry[i]))
        } else {
            console.log(chalk.bgGreen.blue.bold(oneEntry[i]))
        }
        
        
    }
  })

console.log(chalk.bgRed('haha'))