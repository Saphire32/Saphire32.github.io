onmousemove = function(e){
  
  let size = Math.random() * 80;
  
  let pos = e;
  let dot;
  dot = document.createElement('div');
  dot.className = "dot";
  dot.style.left = (pos.x - size/2) + "px";
  dot.style.top = (pos.y - size/2) + "px";
  dot.style.height = size + "px";
  dot.style.width = size + "px";
  
  document.body.appendChild(dot);
  setTimeout(() => { /*fjerner dem igen efter 1s*/
    document.body.removeChild(dot);
  }, 1000)
}