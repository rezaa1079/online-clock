var container_span = document.querySelectorAll("#clock span");

lastDate = [];

const date = new Date();

lastDate["h"] = date.getHours();
lastDate["m"] = date.getMinutes();
lastDate["s"] = date.getSeconds();


function switchNewNumber(element, number){
  if (element != undefined){
    element.style.transition="700ms"
    element.style.filter="blur(30px)"
    setTimeout(function(){
      element.style.filter="blur(0px)"
      element.innerHTML = number;
    }, 200)
  }
}
switchNewNumber(container_span[0], lastDate["h"])
switchNewNumber(container_span[1], lastDate["m"])
switchNewNumber(container_span[2], lastDate["s"])


setInterval(function(){
  const date = new Date();

  if(lastDate["h"] != date.getHours()){lastDate["h"]=date.getHours(); switchNewNumber(container_span[0], lastDate["h"])}  
  if(lastDate["m"] != date.getMinutes()){lastDate["m"]=date.getMinutes() ; switchNewNumber(container_span[1], lastDate["m"])}  
  if(lastDate["s"] !=  date.getSeconds()){lastDate["s"]=date.getSeconds() ; switchNewNumber(container_span[2], lastDate["s"])}  
}, 1000);




