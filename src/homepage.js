function loadHomePage (){
    const parent = document.createElement('div');

    
    const heading = document.createElement('h1');
    heading.innerText = "Smaneej";
    
    const paragraph = document.createElement('p');
    paragraph.innerText = "eat here nigasd yummy smanoj";
    
    parent.appendChild(heading);
    parent.appendChild(paragraph);

    return parent;
    
}

export default loadHomePage;