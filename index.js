let previousEl = document.getElementById("previous-el")
let totalEntriesEl = document.getElementById("total-entries-el")
let countEl = document.getElementById("countPeople")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}
let totalCount = 0 

function save() {

    let entries = count + " - " 
    previousEl.textContent += entries

    totalCount += count
    let totalEntrirs = " " + totalCount
    totalEntriesEl.textContent = totalEntrirs
    countEl.textContent = 0
    count = 0
}
