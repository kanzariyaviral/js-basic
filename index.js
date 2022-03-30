let color=["red","black"]
color[3]="blue";
color[2]="pink";
color.pop()
console.log(color)
color.push("blue")
console.log(color)
color.shift()
console.log(color)
color.unshift("red")
console.log(color)
console.log(color.length)

color.push("black")
console.log(color)
console.log(color.indexOf("black"))
console.log(color.lastIndexOf("black"))
console.log(color.slice(1,3)) 

