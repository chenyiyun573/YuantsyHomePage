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


### 20240907 1539 PT
I modified a lot of code in related sections, but it seems it was solved by deleting the 
```
AOS.init
    once: true,
    //disable: 'phone',
```
in App.jsx. 
This version of code is stored as 1.1.2










### 20240905 2031 PT



History: React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
