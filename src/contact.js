const media = ["Phone (+123 456 789)", "Email","FaceBook", "Twitter"];

function contactPageDisplay() {
    const contentSection = document.getElementById("content");
    const h1 = document.createElement("h1");
    h1.textContent = "Hillside Restaurant";
    const contacts = document.createElement("ul");
    for (let contact of media) {
        const contactLink = document.createElement("a");
        const contactItem = document.createElement("li");
        contactLink.textContent = contact;
        contactItem.appendChild(contactLink);
        contacts.appendChild(contactItem);
    }
    contentSection.appendChild(h1);
    contentSection.appendChild(contacts);
}

export {contactPageDisplay}