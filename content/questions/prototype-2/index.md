---
title: Prototype 2
tags:
  - prototype
order: 46
date: '2019-11-24'
answers:
  - 'woof // correct'
  - 'arf'
---

Kết quả là gì?

```javascript
function Dog(name) {
  this.name = name;
  this.speak = function() {
    return 'woof';
  };
}

const dog = new Dog('Pogo');

Dog.prototype.speak = function() {
  return 'arf';
};

console.log(dog.speak());
```

<!-- explanation -->

Khi gọi đến thuộc tính hay phương thức của một object, đầu tiên nó sẽ tìm trong object trước, nếu không tìm thấy, mới tiếp tục tìm trong [Prototype](http://duthaho.com/blogs/prototype-in-javascript-2) của nó.
