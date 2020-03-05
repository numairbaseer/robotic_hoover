// Helper functions

function tray(a,b) {
	var temp1 = a.toString()
	var temp2 = " "
	var temp3 = b.toString()
	var result = temp1 + temp2 + temp3
	return result
}

function remove(arr) {
    var what, a = arguments, L = a.length, ax
    while (L > 1 && arr.length) {
        what = a[--L]
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1)
        }
    }
    return arr
}

// Reads the input file

var fs = require('fs')
var textByLine = fs.readFileSync('input.txt').toString().split('\n')

// Gets the dimensions of the room

var dimensions = textByLine[0]
var max_x = parseInt(dimensions[0])
var max_y = parseInt(dimensions[2])

// Gets the intital position of the robotic hoover

var initial_pos = textByLine[1]
var x = parseInt(initial_pos[0])
var y = parseInt(initial_pos[2])

// Gets the locations of the patches of dirt

var patches = []
for (var j = 2; j < textByLine.length-1; j++)
	patches.push(textByLine[j])

// Gets the driving instructions

var steps = textByLine[textByLine.length-1]
var steps_arr = Array.from(steps)

// Logic

var count = 0
for (var i = 0; i < steps_arr.length; i++) {
	if (steps_arr[i] == "N" && y < max_y) {
		y++
		var temp = tray(x,y)
		if (patches.includes(temp)) {
			count++
			remove(patches,temp)
		}
	}
	else if (steps_arr[i] == "S" && y > 0) {
		y--
		var temp = tray(x,y)
		if (patches.includes(temp)) {
			count++
			remove(patches,temp)
		}
	}
	else if (steps_arr[i] == "E" && x < max_x) {
		x++
		var temp = tray(x,y)
		if (patches.includes(temp)) {
			count++
			remove(patches,temp)
		}
	}
	else if (steps_arr[i] == "W" && x > 0) {
		x--
		var temp = tray(x,y)
		if (patches.includes(temp)) {
			count++
			remove(patches,temp)
		}
	}
}

// Ouputs the ending coordinates of the robotic hoover

console.log(tray(x,y))

// Ouputs the number of dirt patches picked up by the robotic hoover

console.log(count)
