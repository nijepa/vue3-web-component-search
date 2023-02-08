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
  <li class="nav-item" onclick="showSearch()">  
    <svg  xmlns="http://www.w3.org/2000/svg" id="search" x="0px" y="0px" width="100%" height="100%" 
          viewBox="0 0 56.693 56.693" enable-background="new 0 0 56.693 56.693" preserveAspectRatio="xMidYMid meet">
      <path d="M52.129,48.053L39.204,35.127c2.157-3.124,3.428-6.905,3.428-10.98c0-10.688-8.695-19.383-19.383-19.383
        S3.866,13.46,3.866,24.147s8.695,19.382,19.383,19.382c4.075,0,7.856-1.271,10.98-3.428l12.926,12.927
        c0.686,0.685,1.587,1.028,2.487,1.028s1.802-0.343,2.487-1.028C53.502,51.656,53.502,49.425,52.129,48.053z M23.249,41.529
        c-9.585,0-17.383-7.798-17.383-17.382c0-9.585,7.798-17.383,17.383-17.383s17.383,7.798,17.383,17.383
        C40.631,33.732,32.834,41.529,23.249,41.529z M50.715,51.613c-0.592,0.592-1.555,0.591-2.146,0L35.824,38.868
        c0.77-0.659,1.488-1.376,2.147-2.146l12.745,12.746C51.307,50.059,51.307,51.022,50.715,51.613z"/>
      <path d="M24.478,10.495c-4.004-0.126-7.753,1.346-10.566,4.161c-2.814,2.814-4.292,6.567-4.16,10.566
        c0.018,0.541,0.461,0.967,0.998,0.967c0.012,0,0.022,0,0.034,0c0.552-0.018,0.984-0.48,0.966-1.032
        c-0.112-3.441,1.157-6.668,3.576-9.087c2.418-2.418,5.64-3.701,9.086-3.576c0.541,0.031,1.015-0.414,1.032-0.967
        C25.462,10.976,25.03,10.513,24.478,10.495z"/>
    </svg>
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
