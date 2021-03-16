import loadHomePage from './homepage';
import loadContact from './contact';
import loadMenu from './menu';

function loadTabs(){
    const parent = document.createElement('div');

    const homeTab = document.createElement('button');
    const menuTab = document.createElement('button');
    const contactTab = document.createElement('button');

    homeTab.innerText = "home";
    menuTab.innerText = "menu";
    contactTab.innerText = "contact";

    homeTab.addEventListener("click", function(){
        const a = document.getElementById("content")
        a.removeChild(a.lastChild);
        a.appendChild(loadHomePage());
    });
    contactTab.addEventListener("click", function(){
        const a = document.getElementById("content")
        a.removeChild(a.lastChild);
        a.appendChild(loadContact());
    });
    menuTab.addEventListener("click", function(){
        const a = document.getElementById("content")
        a.removeChild(a.lastChild);
        a.appendChild(loadMenu());
    });



    parent.appendChild(homeTab);
    parent.appendChild(menuTab);
    parent.appendChild(contactTab);

    return parent;

}

export default loadTabs;