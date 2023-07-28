// logout "button clicked" when the user clicks the "SAVE INPUT" button

// function addUrl() {
// 	// body...
// 	console.log("button clicked from onclick attribute");
// }

let urlArr=[];
const inputText=document.getElementById("input-el");
const ulEl=document.getElementById("un-el");
const inpBtn=document.getElementById("input-btn");
const deleteBtn=document.getElementById("delete-btn")

const leadsFromLS=JSON.parse(localStorage.getItem("urlArr"))

deleteBtn.addEventListener("dblclick",function(){
	localStorage.clear()
	urlArr=[]
	render(urlArr)

})

if(leadsFromLS){
	urlArr=leadsFromLS
	render(urlArr)
}


let tabBtn=document.getElementById("tab-btn")
tabBtn.addEventListener("click",function(){
	chrome.tabs.query({active:true,currentWindow:true},function (tabs) {
		// body...
				// Grab the browser url for current tab
		console.log(tabs[0].url)
		// save the url instead logging it out
		urlArr.push(tabs[0].url)
		localStorage.setItem("urlArr",JSON.stringify(urlArr))
		render(urlArr)
	})

})


inpBtn.addEventListener("click",function(){
	console.log("button clicked from addEventListener")
	urlArr.push(inputText.value);
	console.log(urlArr)
	//clearOut the input field
	inputText.value="";
	localStorage.setItem("urlArr",JSON.stringify(urlArr))
	render(urlArr)
})

function render(arr){
	let listItem="";
	for( let i=0;i<arr.length;i++){
		listItem += `<li>
							<a target='_blank' href='${arr[i]}'>
								${arr[i]}
							</a>
					 </li>`

	}
	ulEl.innerHTML=listItem;

}
