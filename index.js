let ar=["abcdef"];
let n=3;
let op=[]

let text=ar[0].split('')
console.log(Math.round(text.length/2))



if(text.length%2!=0){
    for(let i=0;i<=Math.round(text.length/2)+1;i+=2){
  op.push(text[i]+text[i+1])
  if(text[i+1]==undefined){
    
    op[op.length-1]=text[i] +'&'
  }
}
}

else{
    for(let i=0;i<text.length;i+=2){
        op.push(text[i]+text[i+1])
        }
    }

console.log(op)



