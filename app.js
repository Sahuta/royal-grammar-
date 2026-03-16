let data = []
let queue = []
let current = 0

fetch("https://gist.githubusercontent.com/ompugao/da2202901371e602b114e27ad59d87c0/raw/royal-300.json")
.then(r=>r.json())
.then(d=>{
data = d
queue = shuffle([...data])
next()
})

function shuffle(a){
for(let i=a.length-1;i>0;i--){
let j=Math.floor(Math.random()*(i+1))
[a[i],a[j]]=[a[j],a[i]]
}
return a
}

function next(){

if(queue.length==0){
queue = shuffle([...data])
}

let q = queue.shift()

current = q

document.getElementById("japanese").innerText = q.japanese
document.getElementById("english").innerText = q.english
document.getElementById("note").innerText = q.note

document.getElementById("english").style.display="none"
document.getElementById("note").style.display="none"

}

function showAnswer(){
document.getElementById("english").style.display="block"
document.getElementById("note").style.display="block"
}

function markEasy(){
next()
}

function markHard(){

queue.splice(
Math.floor(Math.random()*Math.min(5,queue.length)),
0,
current
)

next()

}