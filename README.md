# vue-template-pre-loader-with-mark
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url] 

```shell 
$ npm install vue-template-pre-loader-with-mark --save-dev
```

# Usage
```javascript
{
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {  
        preLoaders : {
            "html":"vue-template-pre-loader-with-mark"
        }
    }
}
```

```javascript
{
    test: /\.vue$/,
    loader: 'vue-loader',
    query: {  
        preLoaders : {
            "html":"vue-template-pre-loader-with-mark"
        }
    }
}
```


# result

```html 
<div __template_path="/src/component.vue" __location_root>
    <div __location="0.0" class="pagination__overlay"></div> 
    <div __location="0.1" class="commerce-layout-wrapper">
        <div __location="0.1.0"></div>
    </div>
</div>
```

# Author

Jinwoong Han ( theskyend0@gmail.com )


# License
[MIT](LICENSE)


[npm-image]: https://img.shields.io/npm/v/vue-template-pre-loader-with-mark.svg
[npm-url]: https://npmjs.org/package/vue-template-pre-loader-with-mark
[downloads-image]: https://img.shields.io/npm/dm/vue-template-pre-loader-with-mark.svg
[downloads-url]: https://npmjs.org/package/vue-template-pre-loader-with-mark
