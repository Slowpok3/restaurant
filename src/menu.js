function loadMenu (){
    const parent = document.createElement('div');

    
    const heading = document.createElement('h1');
    heading.innerText = "Smaneej McDouble";
    
    const paragraph = document.createElement('p');
    paragraph.innerText = "big smaneej doubles";

    const heading2 = document.createElement('h1');
    heading.innerText = "Smaneej Mmommy milkshake";
    
    const paragraph2 = document.createElement('p');
    paragraph.innerText = "adfsdka";
    
    parent.appendChild(heading);
    parent.appendChild(paragraph);
    parent.appendChild(heading2);
    parent.appendChild(paragraph2);

    return parent;
    
}
export default loadMenu;