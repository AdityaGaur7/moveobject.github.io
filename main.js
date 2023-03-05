 const canvas=document.getElementById("canva")
 const ctx=canvas.getContext("2d")

 let x=0;
 let y=0;
 let vxl=0;
 let vxr=0;
 let vyu=0;
 let vyd=0;

 function update(){
    x+=vxl;
    x+=vxr;
    y+=vyu;
    y+=vyd;
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillRect(x,y,50,50)
    requestAnimationFrame(update)
 }
 update()