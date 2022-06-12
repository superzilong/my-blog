---
description: 一文搞懂JS中this的用法💪
sidebar_position: 2
---

# Javascript中的this

## 匿名函数中的this

匿名函数中的this取决于调用时候的调用对象, 是运行时决定的.

``` javascript
const a = {
    b: function() {
        console.log(this);
    }
};
a.b(); // expect: Object a
a.b.call(a); // expect: Object a

const c = a.b;
c(); // expect: Object global, strict mode is undefined

a.b.call(undefined); // expect: Object global, strict mode is undefined
```

在此例中, 可以把a.b()看做a.b.call(a)的简写, this就是调用的对象a.call函数的第一个参数用来绑定函数中的this.

在运行c()时, 由于没有对象在调用, 非严格模式下this就是window或者global. 严格模式下就是undefined.

在运行a.b.call(undefined)时, 将函数中的this绑定为undefined, , this仍然是window或者global.

## 箭头函数中的this

而箭头函数的this规则如下MDN所描述的:
> An arrow function does not have its own this. The this value of the enclosing lexical scope is used; arrow functions follow the normal variable lookup rules.

箭头函数没有自己的 this 值，箭头函数中所使用的 this 都是来自**函数作用域链**，它的取值遵循普通普通变量一样的规则，在函数作用域链中一层一层往上找. 另外,这里指的是lexical scope, 意思是这个this是代码文本中的作用域.

```javascript
const a = {
    b: ()=>console.log(this)
}
a.b(); // expect: object

//这种写法相当于
const that = this
const a = {
    b: function() {
        console.log(that);
    }
}
a.b();

const c = {
    d: function() {
        const e = ()=> console.log(this);
        e();
    }
}

// 这种写法相当于
const c = {
    d: function() {
        that = this;
        const e = function() {
            console.log(that);
        }
        e();
    }
}
c.d(); // expect: object c
```

## class中的field声明使用箭头函数

在类中的字段声明中使用箭头函数, this将绑定为类中的this,并且不会更改

```javascript
class Bork {
    //Property initializer syntax
    instanceProperty = "bork";
    boundFunction = () => {
        return this.instanceProperty;
    };

    //Static class properties
    static staticProperty = "babelIsCool";
    static staticFunction = function () {
        return Bork.staticProperty;
    };
}

let myBork = new Bork;

//Property initializers are not on the prototype.
console.log(myBork.__proto__.boundFunction); // > undefined

//Bound functions are bound to the class instance.
console.log(myBork.boundFunction.call(undefined)); // > "bork"

//Global call.
const func = myBork.boundFunction;
console.log(func()); // > "bork"

//Static function exists on the class.
console.log(Bork.staticFunction()); // > "babelIsCool"
```

## 参考

* <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#As_an_object_method>
* <https://www.w3schools.com/js/js_arrow_function.asp>
* <https://babeljs.io/docs/en/babel-plugin-proposal-class-properties>
* <https://blog.fundebug.com/2019/06/18/arrow-function-this/>