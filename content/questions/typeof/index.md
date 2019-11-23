---
title: Typeof
tags:
  - typeof
order: 24
date: '2019-11-23'
answers:
  - 'object array number'
  - 'object object number'
  - 'object object object'
  - 'function function function  // correct'
---

Kết quả là gì?

```javascript
console.log(typeof Object, typeof Array, typeof Number);
```

<!-- explanation -->

Object, Array và Number đều là các [Function Constructor](https://duthaho.com/blogs/prototype-in-javascript-2), chúng dùng để tạo ra các object với từ khóa `new`.
