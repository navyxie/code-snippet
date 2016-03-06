# prototype,__proto__,constructor之间的关系

## 没有修正 constructor 属性

```
function a(name){this.name=name}
a.prototype.fn_a1 = function(){return 'fn_a1'}

function b(){}

b.prototype = new a('function_a');

var instanceB = new b();
instanceB.fn_a1();//fn_a1
instanceB.name;//function_a

b.constructor === a.constructor === Function;//所有函数的构造函数都是Function
instanceB.constructor === instanceB.__proto__.constructor === instanceB.__proto__.__proto__.constructor === a;//由于b.prototype.constructor没有指正，即b.prototype.constructor = b,所有构造函数是a
instanceB.constructor.prototype.fn2 = function(){return 'fn2'};//函数fn2是添加到构造函数a的原型对象prototype中
```

未修正构造函数指向时的原型链：

![未修正构造函数指向时的原型链](https://mmbiz.qlogo.cn/mmbiz/E7ia3F4UicMxicaqSDqsmE7HFSc3K1wqVmVAXWs7muRhWbNMKBXvNyWNVysccB6StwAiclIEG13pca9eJEicGS4TWYQ/0?wx_fmt=jpeg)

## 修正 constructor 属性

```
function a(name){this.name=name}
a.prototype.fn_a1 = function(){return 'fn_a1'}

function b(){}

b.prototype = new a('function_a');
b.prototype.constructor = b;

var instanceB = new b();
//instanceB.__proto__.constructor = b;//也可以在构造函数的实例原型链的constructor修正，但是不建议这么做，一般也不会这么多。
instanceB.fn_a1();//fn_a1
instanceB.name;//function_a

b.constructor === a.constructor === Function;//所有函数的构造函数都是Function
instanceB.constructor === instanceB.__proto__.constructor === b;//已修正constructor
instanceB.__proto__.__proto__.constructor === a;//b继承a
instanceB.__proto__ === b.prototype;
b.prototype.__proto__ === a.prototype;
b.prototype.__proto__.constructor === a;
instanceB.__proto__.__proto__.__proto__.constructor === Object;//原型链末端的constructor指向Object,因为__proto__是对象，所有对象都继承至Object
instanceB.constructor.prototype.fn2 = function(){return 'fn2'};//函数fn2是添加到构造函数b的原型对象prototype中
```

修正构造函数指向时的原型链：

![修正构造函数指向时的原型链](https://mmbiz.qlogo.cn/mmbiz/E7ia3F4UicMxicaqSDqsmE7HFSc3K1wqVmV2oSWeqibHJTZ9EKRp6y5KdMjwaJ8SFurIibQNpWIRNqoghnhCCCT2Nlw/0?wx_fmt=jpeg)

总结：

- 构造函数的属性prototype中的属性和方法会挂载到原型链__proto__中
- 原型链是通过__proto__属性连接起来的，一直追朔到原型链顶端
- 构造函数拥有prototype属性，并且prototype的__proto__属性指向其父类的prototype属性
- 构造函数的实例拥有__proto__属性，并且指向其构造函数的prototype属性。
