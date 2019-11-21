---
title: Array Sort
tags:
  - array
  - sort
order: 10
date: '2019-11-21'
answers:
  - true true true
  - true true false // correct
  - false false false
  - true false true
---

Kết quả là gì?

```javascript
const arr1 = ['a', 'b', 'c'];
const arr2 = ['b', 'c', 'a'];

console.log(
  arr1.sort() === arr1,
  arr2.sort() == arr2,
  arr1.sort() === arr2.sort()
);
```

<!-- explanation -->

Hàm `sort` sẽ sắp xếp lại array và đồng thời trả về chính tham chiếu đến array đó. Vì vậy `arr1.sort()` và `arr1` tham chiếu đến cùng một object trong bộ nhớ, điều này cũng đúng cho `arr2.sort()` và `arr2`.

Với `arr1.sort()` và `arr2.sort()` thì rõ ràng chúng tham chiếu đến hai object khác nhau trong bộ nhớ.
