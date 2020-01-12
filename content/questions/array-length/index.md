---
title: Array Length
tags:
  - array length
date: '2020-01-12'
answers:
  - '1'
  - '2 // correct'
  - '3'
  - 'undefined'
---

Kết quả là gì?

```javascript
var arr = [];
arr[0]  = 'a';
arr[1]  = 'b';
arr.foo = 'c';
console.log(arr.length);
```

<!-- explanation -->

Trong JavaScript [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Relationship_between_length_and_numerical_properties), khi set một thuộc tính cho một array, nếu thuộc tính đó là một `valid array index` thì `length` của array đó sẽ được tính toán lại. Một thuộc tính `p` là `valid array index` khi và chỉ khi `ToString(ToUint32(p)) bằng p hoặc ToUint32(p)` và `p không bằng  2^32−1.`. Khi đó, `0` và `1` sẽ thỏa mãn điều kiện còn `foo` thì không, vậy kết quả là `2`.
