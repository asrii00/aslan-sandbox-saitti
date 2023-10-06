2023/10/06: GitHub Pages website should be live at: https://asrii00.github.io/aslan-sandbox-saitti/index.html   
I had issues with images not loading on the GitHub pages version (local was ok), but it seems to be fine now. I drastically reduced image quality because I suspected it had something to do with maximum allowed filesize.  
Known issues/todo:   
- Small form validation issue on Contact page (eventListener not getting triggered as expected)
- Inconsistent image formatting on Pet Gallery (could be unified, might also be able to get away with larger filesizes)
- (Missing weather API key, intentionally removed from public repo for now.)
- Header looks a bit different when using Firefox vs. on Chrome
- Weather widget could have time sensitive icons (moon instead of sun at night)
- Dark/light theme switcher code exists but hasn't been added



## HTML

Website contains: 
1. Basic HTML structure
1. HTML elements like: headings, paragraphs, lists
1. A HTML Form, links, and images (jpeg and GIF)
1. A table (The Mondrian "painting" is a table)
1. Semantic elements (header, nav, section, footer)


## CSS

Website contains:
1. Basic styling (colors, fonts)
1. Use of classes and ID's 
1. Responsive design elements (Mobile friendly)
1. Use of flexbox (in navigation)
1. A sincere attempt at having a clear and user-friendly layout. "Personal website straight from 2004" happens to be my preferred website aesthetic.


## Javascript basics 

Website contains: 
1. Simple interactions (alert, button click event) (Contact page)
1. Multiple event listeners (blur, change, focus) and basic DOM manipulations (Contact page)
1. Use of arrays, objects and functions (Index page)
1. Advanced logic, forEach loop and dynamic DOM updates (About page / about.js)
1. Use of a constructor (Index)



## Asynchronous operations 
1. A timer is used (Index -> lightbulb)
1. A Fetch call is implemented (data for Pet Gallery on the About page is fetched from a json file + weather data) // Weather API key removed for now
1. Data from the asynchronous call is displayed on the webpage (Pet Gallery + weather data)
1. Basic error handling for Fetch (About page)
1. Filtering (Pet Gallery on About page)


