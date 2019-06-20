function selectFirst () {
  var list = document.getElementById("btn1")
  var item = list.firstChild
  if (item != null) {
      item.setAttribute("style","color:red")
  }
}
function selectLast () {
 var list = document.getElementById("btn1")
 var item = list.lastChild
 if (item != null) {
     item.setAttribute("style","color:red")
 }
}
var node = null
function selectNext () {
 resetColor()
 if (node == null){
  var list = document.getElementById("btn1")
  node = list.firstChild;
     node.setAttribute("style","color:red")
     return
 }
 node = node.nextSibling
 if(node != null){
     node.setAttribute("style","color:red")
 }
} 

function selectPrev () {
resetColor()
if (node == null) {
   var list = document.getElementById("btn1")
   node = list.lastChild
   node.setAttribute("style","color:red")
   return
}
node = node.previousSibling
if (node != null){
 node.setAttribute("style","color:red")
}

}
function resetColor() {
  var ulli = document.getElementsByTagName("li")
  for (var i =0; i < ulli.length;i++){
    ulli[i].setAttribute("style","color:black")
  }
}
function newChild () {
  var list = document.getElementById("btn1")
  var itme = document.createElement("li")
  itme.textContent = "New item"
  list.appendChild(itme)
}
function newChildFisrt () {
 var list = document.getElementById("btn1")
 var item = document.createElement("li")
 item.textContent = "new Child Fisrt"
  list.insertBefore(item,list.firstChild)
}
function deleteChild () {
  var list = document.getElementById("btn1")
  var item = list.lastChild
  if (item != null){
      list.removeChild(item)
  }
}