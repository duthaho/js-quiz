---
title: Arrow Functions
tags:
  - arrow functions
  - binding
date: '2019-11-23'
answers:
  - 'Border Collie, Wooh'
  - 'Border Collie, undefined'
  - 'undefined, Wooh // correct'
  - 'undefined, undefined'
---

Kết quả là gì?

```javascript
let dog = {
  breed: 'Border Collie',
  sound: 'Wooh',
  getBreed: () => {
    return this.breed;
  },
  getSound: function() {
    return this.sound;
  }
};
console.log(dog.getBreed(), dog.getSound());
```

<!-- explanation -->

`this` trong một `Arrow functions` không được `bind` như trong một function bình thường mà `this` được thừa hưởng từ scope bên ngoài của nó (`lexical scoping`). Đó là lý do tại sao `this` trong function `getBreed` không phải là object `dog` mà là global object, ở trình duyệt là window object, nên `this.breed` trả về `undefined`.
