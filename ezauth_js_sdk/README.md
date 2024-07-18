# Javascript EZAuth SDK

The Javascript EZAuth SDK is a library that allows you to easily integrate EZAuth into your Javascript application.
It works in Frameworks like `React`, `NextJS`, or in plain `HTML` and `Javascript` by including our bundle.

## Installation

For Plain HTML and Javascript, you can include our bundle in your HTML file:

```html
<script src="https://raw.githubusercontent.com/JohnGrubba/ezauth_sdk/master/ezauth_js_sdk/dist/ezauth-js-adapter.js"></script>
```

You can then initialize the SDK by calling the `EZAuth` object:

```javascript
const ezauth = new window["ezauth-js-adapter"].EZAuthClient('http://localhost:3250/')

ezauth.init().then(() => {
    console.log('EZAuth Initialized')
})
```