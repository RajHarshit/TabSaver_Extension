let myLeads = []
const inputHr = document.getElementById("input-hr")
const inputBtn = document.getElementById("input-btn")
const tabBtn =  document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulHr = document.getElementById("ul-hr")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


tabBtn.addEventListener("click", function(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		myLeads.push(tabs[0].url)
		localStorage.setItem("myLeads" , JSON.stringify(myLeads))
		render(myLeads)
	})
	
})


tabBtn.addEventListener("click", function() {
	myLeads.push(inputHr.value)
	inputHr.value = ""

	localStorage.setItem("myLeads" , JSON.stringify(myLeads))

	render(myLeads)
})


function render(leads) {
	let listItems = ""

	for (let i = 0; i < leads.length; i++) {
		listItems += `
						<li>
							<a target='_blank' href="${leads[i]}">
							 	${leads[i]}
							</a>
						</li>
					`
	}
	ulHr.innerHTML = listItems
}


deleteBtn.addEventListener("dblclick", function() {
	myLeads = []
	localStorage.clear()
	render(myLeads)
})


inputBtn.addEventListener("click", function() {
	myLeads.push(inputHr.value)
	inputHr.value = ""

	localStorage.setItem("myLeads" , JSON.stringify(myLeads))

	render(myLeads)
})

    