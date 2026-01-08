let count = 0;

setTimeout(()=>{
    console.log("hello")
},4000)



const clockID = setInterval(()=>{
    count++;
    // count = count + 1;
    console.log(count)

    if(count>=5){
        clearInterval(clockID)
    }
},3000)