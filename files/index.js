
document.getElementById('tab-one').onclick = function(){
  document.getElementById('tab-two').classList.remove('in-view')
  document.getElementById('tab-three').classList.remove('in-view')
}

document.getElementById('tab-two').onclick = function(){
  document.getElementById('tab-two').classList.add('in-view')
  document.getElementById('tab-three').classList.remove('in-view')
}

document.getElementById('tab-three').onclick = function(){
  document.getElementById('tab-two').classList.add('in-view')
  document.getElementById('tab-three').classList.add('in-view')
}