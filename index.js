let myLink = [];
let index = 0;
let savedLinks = JSON.parse(localStorage.getItem("myLinks"));

if(savedLinks) {
    myLink = savedLinks;
    render(myLink);
}

function saveLink() {
    let description = document.getElementById("input-description").value;
    let link = document.getElementById("input-link").value;

    myLink[index++] = [description, link];
    localStorage.setItem("myLinks", JSON.stringify(myLink));
    document.getElementById("input-description").value = "";
    document.getElementById("input-link").value = "";
    render(myLink);
}

function render(myLink) {
    let links = "";
    for (let i = 0; i < myLink.length; i++) {
        links += `
            <div id="link-secno${i}" class="save-link">
                <input id="${i}" type="checkbox">
                <input class="description-bar" type="text" value="${myLink[i][0]}">
                <hr id="hr">

                <div class="link">
                    <a href="${myLink[i][1]}" target="_blank">${myLink[i][1]}</a>
                </div>
            </div>
        `
    }
    document.getElementById("link-section").innerHTML = links;
}

function deleteLink(myLink) {
    let checkbox = document.querySelectorAll('input[type="checkbox"]');

    checkbox.forEach(element => {
        if(element.checked) {
            document.getElementById(`link-secno${element.id}`).remove();
            myLink.splice(element.id, 1);
            localStorage.setItem("myLinks", JSON.stringify(myLink));
        }
    })
}