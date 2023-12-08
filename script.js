//your code here!
const scrollcontainer=document.getElementById("infi-list");
let i=0;
function AddoneItem(){
	const li=document.createElement("li");
	li.innerText=`item ${++i}`;
	scrollcontainer.appendChild(li);
}
for(let i=0;i<10;i++)
	{
		AddoneItem();
	}
scrollcontainer.addEventListener(scroll , ()=>{
	const MaxScrollHeight=scrollcontainer.scrollHeight-scrollcontainer.clientHeight;
	let currentScrollTop=scrollcontainer.scrollTop;
	let threshold=Math.abs(MaxScrollHeight-currentScrollTop);
	if(threshold<=5){
		for(let i=0;i<2;i++)
			{
				AddoneItem();
			}
	}
})