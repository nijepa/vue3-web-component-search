# custom-search

## Vite, Vue3 web-component *`custom-search`*

(standalone web component made with Vue3 & Vite)

<hr>

## Usage

### Import component

#### in HTML header in `structure.vm` velocity template

```html
  <script type="module" crossorigin src="/scripts/path/to/search.js"></script>
```

### Place component

#### in velocity template `header.vm`

```html
  <custom-search />
```

## Interacting with component

### Script for *emmiting/listening* event *to/from* component and getting required translations:

```js
  <script async defer>
    const search = document.querySelector("custom-search");
    const showSearch = () => {
      search.setAttribute("is-active", "true");
    };
    const searchClosed = () => {
      search.setAttribute("is-active", "false");
    };
    window.addEventListener("close-search", searchClosed);
    const msgs = {
      empty: "$!{messages.get('incentivemall.productoverview.empty')}",
      placeholder: "$!{messages.get('incentivemall.productoverview.search')}"
    }
    search.setAttribute("translations", JSON.stringify(msgs))
  </script>
```

### Header navbar elemet with search icon to init component:

```html
  <li class="nav-item d-flex align-items-center" onclick="showSearch()">  
    <svg id="search" class="search__icon svg-icon ml-0" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlink:href="/images/icons/all_in_one.svg#search"></use></svg>
  </li>
```

<hr>

### Props

- #### ***show/hide component:***

  ### **`isActive`**

    - Type: String
    - Default: 'false'

- #### ***Translations are recived from velocity template as object, need to use `JSON.parse`:***

  ### **`translations`**

    - Type: String


<hr>

## Deployment

- build app 
- rename compiled file to **`search.js`**
- upload file to **`Doocroot-Explorer -> scripts/path/for/app`**

<hr>

### Project setup

```
npm install
```

#### Compiles and hot-reloads for development

```
npm run serve
```

#### Compiles and minifies for production

```
npm run build
```
