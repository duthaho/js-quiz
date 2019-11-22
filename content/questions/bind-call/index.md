---
title: Bind - Call
tags:
  - bind
  - call
order: 19
date: '2019-11-22'
answers:
  - 'undefined is 69 duthaho is 69'
  - 'function function'
  - 'duthaho is 69 duthaho is 69'
  - 'duthaho is 69 function // correct'
---

Kết quả là gì?

```javascript
const person = { name: 'duthaho' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 69));
console.log(sayHi.bind(person, 69));
```

<!-- explanation -->

Chúng ta đã biết cả hai hàm `call` và `bind` đều được dùng để thay đổi [this context](https://duthaho.com/blogs/js-this-context) của hàm.

Tuy nhiên, với `call` thì hàm sẽ được gọi ngay lập tức, còn `bind` thì nó sẽ trả về một hàm mới với context mình truyền vào chứ không gọi ngay lúc đó.
