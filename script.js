//const mybtn = document.getElementById("mybtn")
//mybtn.addEventListener('click' , ()=>{

//})
// const ChangeColor=()=>{
//    document.getElementById('mySpan').style.fontSize="22px";
//     document.getElementById('mySpan').style.color="red";
// }

const FirstDiv = document.getElementById('FirstDiv')

const theFunc=()=>{
   if(document.getElementById('BlueBox').style.background==="gray"){
     document.getElementById('BlueBox').style.background="blue"
        document.getElementById('Greenbox').style.background="green"
   }

    else{
       document.getElementById('BlueBox').style.background="gray"
       document.getElementById('Greenbox').style.background="gray"
   }
}

FirstDiv.addEventListener('click',theFunc)