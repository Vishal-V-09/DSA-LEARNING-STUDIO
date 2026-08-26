javascript



first global variable and dom section here the entire document's every function (instead of creating repeatedly only once at top)

and in that we use const, let both (**const--** can't be reassign , secure || **let--** can be reassign, flexible)



document--**represents the html document**  ------ in html the js ask the document can i take so that **Document.getelementById()**

\*\*getelement (\*\*this show the id from the html doc)

**queryslectorall()** (this is used to access all matching elements not just one)

\*\*queryselector() (\*\*this shows the first matching elements)

**syntax : element.addEventListener(event, function); || Multiple handlers support ,modern and flexible**

**onclick can be used instead** But the onclick handles only one handlers

**menuToggle.addEventListener()**  (this is used to open and close the menu functions || when we click the menu that opens the menu bar)

toggle() ---( is used to switches class on and off)  || this toggle reduce the multiple line of code(add,remove,add again,remove again) these are handle by toggle





load theme() ----(this is the function can be reused multiple times where we need)

***localstorage()* ----** this is the small storage space where the browsers stores the website data ("**Theme")**

&#x09;**syntax : localStorage.getItem("key");**

&#x09;This local storage can be called through (**GetItem())** ||Why this means ( when i try to restart or rest the webpage the site still in the same theme through this local storage)

&#x09;We have another one function called (**setItems()) ||** which is used to save data



\*\*if else (\*\*that checks the theme is dark or light before if dark the toggle shows(light(**sun**)) else shows (dark(**moon**)) || \*themetoggle.textcontent ="**sun"\* <button></button>**



&#x20;  **Website Opens**

&#x20;       │

&#x20;       ▼

&#x20;  loadTheme()

&#x20;       │

&#x20;       ▼

Read localStorage

&#x20;       │

&#x20;       ▼

&#x20;  Theme = Dark?

&#x20;     /    \\

&#x20;   Yes     No

&#x20;    │       │

&#x20;    ▼       ▼

Apply Dark  Keep Light







**const pages = { ... }**



**Object:** it is a collection of related data stored in a key value pairs



**const** **objectName** = {

&#x20;   key1: value1,

&#x20;   key2: value2,

&#x20;   key3: value3

};





in our js file we use Backticks(`)(`) for multi line string(HTML) called **template literals**





&#x09;Why we don't use quotes because the quotes are only for one line strings || instead js introduced this 

&#x09;	



&#x09;**EG:   Without literals                 EG:   With literals**

&#x09;	**let html =                             let html = `**

&#x09;	**"<h1>" +                               <h1>**      

&#x09;	**"Welcome" +                            Welcome**

&#x09;	**"</h1>";                               </h1>`;**



The application uses the html page and the page dynamically replaces its content using js instead of loading separate HTML pages 



In our projects we don't need to refresh for each page all pages are loaded in one page because our project is **Singla Page Application (SPA)**

&#x20;

**Real life eg.** cupboard: (This is **Object**)

&#x09;		drawer 1,drawer 2, drawer 3 ,drawer 4 (These are **Keys)**







And now one more thing 

&#x20;we use **const pages not let pages:**  because we never replace the entire object || ( Even we use const  **content of the objects can be accessed and used** -- we can't reassign with different objects







































&#x09;			

























