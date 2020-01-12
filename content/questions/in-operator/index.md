---
title: In Operator
tags:
  - in operator
date: '2020-01-12'
answers:
  - 'ReferenceError'
  - 'true // correct'
  - 'false'
---

Kết quả là gì?

```javascript
var myArr = ['foo', 'bar', 'baz'];
console.log('2' in myArr);
```

<!-- explanation -->

[`in operator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in) sẽ kiểm tra 1 thuộc tính có phải là của object đó hay không, một array cũng là một object và có các thuộc tính index (`myArray[2] === myArray['2']`), vậy kết quả là `true`.
