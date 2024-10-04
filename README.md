After git clone this repo:
```
npm install
npm install antd

```

Use this to run this page:
```
npm run dev
``` 

### 20241004 0001 PT
1. Changed the ./src/router/index.jsx, cancel the /home subpath as home page, just use without subpath.

2. Solve this bug: 
```
when in mobile, the menu for example, here:
<a class="flex text-gray-700 hover:bg-gray-100 rounded-lg py-1.5 px-2 internal-link" href="https://yuantsy.com">Agent 智能体</a>
;; it jumps into https://yuantsy.com/https://yuantsy.com
```
Key Changes:
Modified handleClick in useEffect:
If the href starts with http:// or https://, use window.location.href to navigate. This will ensure that external URLs are opened correctly.
Otherwise, use navigate(href) for internal routes.

3. Delete the SVGs of Knowledge Tree Section. And rewrite some sentences. 

4. Remove 3 grids of Models part, 6 is too much and unnecessary. 

5. In the English Title of Agent part, when on mobile device. free you and with will be connected with no space, I added one space after "free you"

6. Change the Career part's lead the future into create the future. 

7. Change the Web Tab icon from vite.svg into yuantsy.ico.

End work at 20241004 1341 PT, this version of code is saved as 1.2.1.







### 20240904 2134 PT
Check the code pushed by Liu Wei at branch react-1.0.0.
The page has been splited very well. 
I will save this version of code as branch 1.1.0. Then start to modify the content on my side. 


Currently, I want to use the Home Page only. Maybe I will add other pages in the future. 
For the existing Pricing, Customer, Blog, Docs, Extra button on the header of each page. 
I plan to change them to Agent, KnowledgeTree, Wiki, with defined, fixed URL of other sites. 

And for the footer, I need to use the code by Li Hang at branch react-ts-1.0.0.


### 20240905 0023 PT
Deleted irrelevant htmls. 
Deleted irrelevant pages in jsx.

This version of code is stored as 1.1.1.

### 20240905 1109 PT
I renamed each section into the name I defined. This version of code is as 1.1.1.0

### 20240907 1440 PT
One problem exists, the title of Agent section and Tree section and Career section cannot show up on phone screen. I guess it was due to the min limitation of width of these components. Also, I already put this version of code into yuantsy.com. 
Before make any changes to solve the phone rendering problem. Let me push this version of code to github. 
This version of code is stored as 1.1.2


### 20240907 1548 PT
I tried solely delete the phone disable ASO in App.jsx.
It works. This version of code is stored as 1.2.0











### 20240905 2031 PT

History: React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
