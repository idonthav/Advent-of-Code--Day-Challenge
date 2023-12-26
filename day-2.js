const fs = require('fs')
const path = require("path")

var t = 0
const directory = __dirname
const filePath = path.join(directory, "test.txt")

const fileContent = fs.readFileSync(filePath, "utf-8")
const linesArray = fileContent.split(/\r?\n/)

linesArray.forEach((game) => {
    const [game_id, subsets] = game.split(": ")
    var subset = []
    subset = subsets.split("; ")

    var valid_game = true
    for (var i = 0; i < subset.length; i++){
        var set = []
        set = subset[i].split(", ")
        var initial = { "red": 0, "green": 0, "blue": 0 }

        for (var ball = 0; ball < set.length; ball++){
            var [count, color] = set[ball].split(" ")
            initial[color] = parseInt(count)
            if (initial["red"] > 12 || initial["green"] > 13 || initial["blue"] > 14){
                valid_game = false
            }
        }
        
    }
    if (valid_game) {
        t += parseInt(game_id.split(" ")[1])
    }
})
console.log(t)