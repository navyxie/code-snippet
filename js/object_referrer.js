var a = {n:1};
var b = a;
a.c = a = {m:2};
console.log(a.x);//undefined
console.log(b);//{n:1,m:2}

有趣的讨论：
- 赋值是从右往左的
- .运算符高于=运算符

参考：

- [写了10年Javascript未必全了解的连续赋值运算](http://yanhaijing.com/javascript/2012/04/05/javascript-continuous-assignment-operator/)
- [javascript 连等赋值问题](https://segmentfault.com/q/1010000002637728)
- [从一个简单例子来理解js引用类型指针的工作方式](http://www.cnblogs.com/vajoy/p/3703859.html)
- [justjavac(迷渡) 专注最时髦的web开发技术](http://justjavac.com/javascript/2012/04/05/javascript-continuous-assignment-operator.html)