import loadHomePage from './homepage';
import loadTabs from './tabs';



const a = document.getElementById("content");

a.appendChild(loadTabs());

a.appendChild(loadHomePage());


console.log("whadsssup");
//alert("hi");
