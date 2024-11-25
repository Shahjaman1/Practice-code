// alert("hello");

const getRandom = (arr)=>{
    let rno = Math.floor(Math.random() * arr.length);
    console.log(rno);
    return arr[rno]
  }
 

const randomGroup =["Samir's " , "Shahwaj's","individual"];

let btn = document.querySelector(".btn").addEventListener("click",()=>{
    console.log("hello");
    let grp = getRandom(randomGroup);
    console.log(`this is grp ${grp}`)
    if(grp != "individual"){
        alert(`Congrates you are in ${grp} Group`);
    }
    else{
        alert(`Congrates you are not in any Group do your project own`);
    }
})
