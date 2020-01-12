---
title: Function Constructor
tags:
  - function
  - constructor
date: '2019-11-22'
answers:
  - 'Person {firstName: "du", lastName: "ti"} undefined // correct'
  - 'Person {firstName: "du", lastName: "ti"} Person {firstName: "du", lastName: "teo"}'
  - 'Person {firstName: "du", lastName: "ti"} {}'
  - 'Person {firstName: "du", lastName: "ti"} ReferenceError'
---

Kết quả là gì?

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const ti = new Person('du', 'ti');
const teo = Person('du', 'teo');

console.log(ti);
console.log(teo);
```

<!-- explanation -->

Khi gọi một [Function Constructor](https://duthaho.com/blogs/prototype-in-javascript-2), `this` sẽ được tạo và trả về một cách ngầm định nếu chúng ta gọi bằng từ khóa `new`, nếu không `this` sẽ không được tạo và sẽ là global window object (trong trình duyệt).
