

let img =document.getElementsByTagName("img")
let arr=[...img]
let el
let sum=[]
for(let i=0;i<arr.length;i++){
     el=`
     <div style
     ="background-color: #fc0;
        border:1px solid black;
        display:flex;
        align-items:center;
        justify-content: space-between;
         width:120px; height:120px;
         color: black;
         position: relative; 
         left: 0; top: 0;
         padding: 8px; z-index: 1000000000">
         <img style="object-fit:cover; width:50%"  src=${arr[i].src} alt="sda"/>
         <a style="text-decoration: none;
         background-color:black;
         width:60px; height=40px;
         color:white;font-size:13px "
         href=${arr[i].src} download="new-image-name.jpg">сохранить</a></div>`;
    sum.push(el)
}
document.body.innerHTML +=`
<div 
style="
display:flex;
position: absolute;
z-index: 99999;
top:50%;
left:50%;
margin:-200px 0 0 -200px;
width:500px;
justify-content:center;

padding:20px 10px;
background-color:gray;
flex-wrap:wrap;">${sum}
</div>`
