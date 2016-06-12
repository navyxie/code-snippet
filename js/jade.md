## jade 命令行编译jade成html

```js
jade -O ./xxx.json < xxx.jade > xxx.html
```

## jade js 脚本编译jade成html

js
```js
var jade = require('jade'),
    fs = require('fs');

fs.readFile('template.jade', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
    var fn = jade.compile(data);
    var html = fn({name:'Oleg'});
    console.log(html);
});
```

template.jade
```html
!!!
html
  head
    title= 'Hello world'
  body
    p Hello #{name}!
```