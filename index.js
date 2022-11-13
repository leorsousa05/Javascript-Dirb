import fs from 'node:fs'
import axios from 'axios'

async function readFile(url) {
    const file = fs.readFileSync('./services/dir.txt', 'utf-8')
        .split('\n')
    
    for await (const word of file) {
        request(url, word)
    }
}

function request(url, word) {
    const actualURL = url + word
    axios.get(actualURL)
        .then((res) => console.log("URL Existe: " + actualURL))
        .catch((err) => err)
}

function main(args) {
    args.shift()
    args.shift()
    if(args[0]) {
        readFile(args[0])
    } else {
        print("Faltou o Link só :/")
    }
}

main(process.argv)
