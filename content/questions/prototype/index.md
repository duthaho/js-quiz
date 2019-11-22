---
title: Prototype
tags:
  - prototype
order: 14
date: '2019-11-22'
answers:
  - 'TypeError // correct'
  - 'SyntaxError'
  - 'du ho'
  - 'undefined undefined'
---

Kết quả là gì?

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('du', 'ho');
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
```

<!-- explanation -->

Khi tìm hiểu về [prototype trong Javascript](https://duthaho.com/blogs/prototype-in-javascript), muốn thêm một function vào prototype và share cho tất cả các object dùng chung thì làm như sau:

```javascript
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
```
