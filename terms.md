* **api**
* **server**
* **Single Page Application** - dynamic webpage where the content changes based on the interaction
* **Multi page application** - several web pages connected together - reloads entire thing everytime
* **Client side - rendering (CSR)** - when client requests for app.. js executes before displaying
        * **arch** - initial html doc is minimal, then browser downloads js files (which has logics components) then, react takes over and give content dynamically in the browser.
        * **flow** - user requests a page, server give min html and js bundles, broswer executes js and builds html. user sees content only after js execution
        * **UX** - intial load is slower, user see blank while js is being download and executed, Once app is loaded, Navigation gets faster and page is updated DYNAMICALLY without full reload (just needed parts of page gets reloaded not page). rich interactions, smooth transistions. 
* **Server side rendering (SSR)** - here, server generates full built html and sends fully rendered page
        * **arch** - sever take request and generate COMPLETE html
        * **flow** -  user eq a page - server fetch needed data and generate full HTML and send fully rendered page - user sees content immediately & js can enhance interactivity afterward based on user actions
        * **UX** - intial load is faster cuz user get fully rendered page, further interactions may require full page reloads, And the transitions may not be smooth
* **Search Engine Optimization (SEO)** - practice of enhancing a website's visibility and ranking on search engine results pages (SERPs)
* **search engine results pages (SERPs)** - page displayed by a search engine in response to a user's query. it has types like organic results, paid, featured,, etc 
* **AJAX**

