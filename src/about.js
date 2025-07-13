function aboutPageDisplay() {
    const contentSection = document.getElementById("content");
    contentSection.innerHTML = '';
    const h1 = document.createElement("h1");
    h1.textContent = "Hillside Restaurant";
    const p1 = document.createElement("p");
    p1.textContent = `
    Welcome to Hillside Restaurant, home to Kenya's finest dishes.
    We aim to showcase the beauty and sweetness of African dishes by 
    delivering the best to our customers.`
    contentSection.appendChild(h1);
    contentSection.appendChild(p1);

}
