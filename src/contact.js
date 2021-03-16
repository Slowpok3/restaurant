function loadContact (){
    const parent = document.createElement('div');

    
    const heading = document.createElement('h1');
    heading.innerText = "134123";
    
    const paragraph = document.createElement('p');
    paragraph.innerText = "134123411233";
    
    parent.appendChild(heading);
    parent.appendChild(paragraph);

    return parent;
    
}
export default loadContact;