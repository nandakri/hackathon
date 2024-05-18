const canvas=document.getElementById('dicecanvas');
const ctx = canvas.getContext('2d');
const p=document.getElementById('ans');
document.addEventListener('keydown',function(event){
    if(event.code==='Space'){
        rolldice();
    }
});
function rolldice(){
    const randnumb=Math.floor(Math.random()*6)+1;  
    drawdice(randnumb);
    p.innerHTML="You got "+randnumb;    
}   
function drawdice(number){
    ctx.clearRect(0,0,canvas.clientWidth,canvas.height);
    ctx.strokeRect(10,10,180,180);
    ctx,fillStyle='#000';
    const dots={
        1:[[100,100]],
        2:[[60,60],[140,140]],
        3:[[60,60],[100,100],[140,140]],
        4:[[60,60],[60,140],[140,60],[140,140]],
        5:[[60,60],[60,140],[100,100],[140,60],[140,140]],
        6:[[60,60],[60,100],[60,140],[140,60],[140,100],[140,140]]
    };

    dots[number].forEach(([x,y])=>{
        ctx.beginPath();
        ctx.arc(x,y,10,0,2*Math.PI)
        ctx.fill();
    });
}