---
title: String Constructor
tags:
  - string constructor
date: '2020-01-12'
answers:
  - 'true'
  - 'false // correct'
  - 'TypeError'
---

Kết quả là gì?

```javascript
console.log(new String('hello') === String('hello'));
```

<!-- explanation -->

Khi gọi String [constructor function](https://duthaho.com/prototype-in-javascript-2/) với từ khóa `new` sẽ cho kết quả là một object, trong khi đó, không có từ khóa `new` kết quả sẽ là một primitive string, so sánh `===` giữa 2 kiểu dữ liệu khác nhau sẽ cho kết quả là `false`.
