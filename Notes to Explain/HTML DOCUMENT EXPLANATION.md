HTML DOCUMENT EXPLANATION



**doctype** -- the document is written using html 5(refers the subject of the code)

///

if doctype is removed:  css may not behave correctly,differnet browser display the page differently

///

**HTML LANG=EN --** refers the page language of the code inside the html tag (root element)

&#x09;(Root Element)**HTML**--every element inside this

&#x09;Other Lang --**EN**(English)**,TA**(tamil)**,FR**(French),**HI(**Hindi)

&#x09;Lang is not compulsory but strongly recommended



**Head --** this contains info about the webpage(head is not visible)

&#x09; inside this

&#x09;	**meta, title, link ---** thses  are the things contain the head element



**meta(not visible)**  -- metadata (meta == info about something) (metadata == information about the webpage)

&#x09;inside this:

&#x09;	charset==character set ,UTF-8 == character encoding (common)without this the content may be(???)like this(**IT TELLS THE BROWSER TO INTERPRET DOCUMENT UDING UTF 8 CHARACTER ENCODING SO TEXT AND SYMBOLS DISPLAY CORRECTLY)**





**view port--** <meta name="viewport" content = "width=device-width,initial-scale=1.0">

&#x09;	this refers to device width (mobile,tablet,laptop,desktop)

&#x09;	**meta name="viewport"**  display webpage based on the device screen size.  initial-scale=1.0(display size 100% zoom)



**body**-- contains all the elements of the webpage (only one should use)

&#x09;inside this:

&#x09;	almost every visible tag (**h1,p,img,button,form,input,table,div,section,nav,header,footer)**



**HEADER** is a semantic elements (represents the top section of the webpage )

&#x09;the header tag contains(**project name,theme toggle button,mobile menu button**(only for mobile view)).(we can use here div also but the header section tells the engines this is the main content of the webpage)





**Sematic vs Non Semantic html**

**Sematic:**(clearly describes the meaning and purpose of the content)

header(top section), nav(navigation links), main(main content), section(related content), article(independent content), footer(bottom section), aside(sidebar)

**Non-Sematic:**(these don't describe the purpose of the )

div, span



**uses of semantic , non semantic:**

&#x09;easy to read

&#x09;better seo

&#x09;accessibility

&#x09;

**Class(attribute):**

class ="header" --- why class(without class css wouldn't know which specific header styling to apply)





**<div>(non semantic)** -- it is generic block level container used to grp related elements together(without grouping it is difficult)



**<nav>--** anything that helps users to interact with or move arounf the webpage( this performs using links to the next page or where we want to go page)



&#x09;<button

&#x09;	id="themeToggle"

&#x09;	class="nav-btn">



&#x09;	theme button // mennu bar



&#x09;	</button>



in this **id** js used id because the id are unique ,class is used by the css to stlye the elements





**side bar navigation:** aside ( semantic elements)it represent the content but seprate from it 

&#x09;**in this sidebar we contain the navigation links to take into the next page**





**id** -- already says used for javascript (how the js use this) **document.getelementById("sidebar")**  id is unique so the js knows which element to manipulate



**<ul>--** unordered list  

**<ol>--ordered list**

&#x20; **<li>--** list items

**li**  uses the onclick heml even attribute (**user clicks this elements run some javascript)**

in project when i click sort the loadpage will appear , same for all the sidebar items

## **SPA** Single Page Application



instead of opening mutiple html doc seprately we use this single page html 
JavaScript changes the content dynamically(webpage is more faster and smoother)





**<main>==** this holds the main content of the page next to body our screen shows the dashboard,sorting, queue,stack,linked list (When we perform onclick the page never change the main tag alone change (content area) if we use div element it works but that tells the div is the primary content to the js so the engines may confuses



this main tag use the **id here the process starts from the js** 















