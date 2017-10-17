document.addEventListener('DOMContentLoaded',function(){

  for (var i=0;i<464;i++){
    var canvas=document.createElement('div');
    canvas.className='canvas';
    canvas.style.height='20px';
    canvas.style.width='20px';
    canvas.style.float='left';



    // canvas.style.display='inline-block';



    var container=document.getElementsByClassName('container')[0];


    container.appendChild(canvas);



  }//end of for loop.


var color='';

var colorWheelContainer = document.getElementById('colorWheelContainer');

console.log(colorWheelContainer)

colorWheelContainer.addEventListener('click',function(event){
color = event.target.style.backgroundColor;


})


container.addEventListener('click', function(event){  //prevents filling color through whole container

if (event.target.className !== "container") {
    event.target.style.backgroundColor = color
}




})


var resetButton = document.getElementById('reset'); //reset button loops over all divs
resetButton.addEventListener('click',reset)

function reset(){
  for(var j=0;j<464;j++){
    document.getElementsByClassName('canvas')[j].style.backgroundColor='white';


  }


}













  })
