let pixel = document.getElementById('pixelArt');

function displayFelter() {
  //const pixel = Array();

  for(let x = 0; x < 1; x++){
    //var pixel = document.createElement('div');

    //skaber 400 inputs+labels med id'er
    for (var c = 0; c < 1200; c++) {
      //c < 380 for fuld plade hvis der felterne har border på 1px
      pixel.innerHTML += "<input type='checkbox' class='felter' id='felt" + c +"'/><label class='felt-front' id='front" + c +"' for='felt" + c +"'></label>";
    } //document.getElementById('pixelArt').appendChild(pixel);
  }
}

displayFelter();

//getting all checkbox , iterating to add event listener
document.querySelectorAll(".pixelArt").forEach((item) => {
  //calling the function to pass the current element under ireration
  AddBackGround(item);
  //adding event listener to the checkbox so on change it will add/remove the background color
  item.addEventListener('change', function(e){
    // e is event object, e.target is the element on wich any event accured
    AddBackGround(e.target)
  })
})

function AddBackGround(item) {
  let colorChoice = document.getElementById('color');


  const elemId = item.getAttribute('id');

  const labelElement = `label[for=${elemId}]`;

  let shadowEffect = document.getElementById('shadowEffect');

  let grid = document.getElementById('grid');

  if (item.checked) {
    document.querySelector(labelElement).style.backgroundColor = colorChoice.value;
  }
  else if (item.checked == false){
    document.querySelector(labelElement).style.backgroundColor = "";
  }
  

  function Grid() {
    grid.addEventListener('change', function(){
      
      if (grid.checked){     
        document.querySelectorAll('label').forEach(function(ClearG1){
          ClearG1.classList.add('grid');
        });
      pixel.style.height = "348px";
      }
      if (grid.checked == false) {
        document.querySelectorAll('label').forEach(function(clearG2){
          clearG2.classList.remove('grid');
        });
        pixel.style.height = "300px";
      }
    });
  }
  Grid();
}

function resetCanva() {
  let felt = document.querySelectorAll('.felter');
  let front = document.querySelectorAll('.felt-front');
  let clear = document.getElementById('clear');
  clear.addEventListener('clear', () => {
    felt.checked = false;
    //front.style.backgroundColor = "";
    //front.classList.remove('effect')
    document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = false);
    document.querySelectorAll('label').forEach(function(clear){
     clear.style.backgroundColor = "";
     clear.style.backgroundImage = "";
      //clear.classList.remove('effect');
      //clear.classList.remove('border');
    });
    pixel.style.height = "300px";
  });
}
resetCanva();

let download = document.getElementById('download')

var element = document.getElementById('pixelArt');
var getCanvas;
var newData;

download.addEventListener('click', function() {
  html2canvas(element, {
    onrendered: function(canvas) {
      getCanvas = canvas;
      var imgageData = getCanvas.toDataURL("image/png");
      var a = document.createElement("a");
      
      a.href = imgageData;
      a.download = "PixelArt.png";
      a.click();
      //clearDynamicLink(a);
    }
  });
});