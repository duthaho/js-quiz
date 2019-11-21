---
title: Array Binding
tags:
  - array
  - map
  - bind
order: 7
date: '2019-11-21'
answers:
  - '1 2 3 // correct'
  - 'a b c'
  - 'An error is thrown'
  - 'Something else'
---

Kết quả là gì?

```javascript
const map = ['a', 'b', 'c'].map.bind([1, 2, 3]);
map(el => console.log(el));
```

<!-- explanation -->

Hàm `bind` (tương tự cho `apply` và `call`) trong Javascript cho phép chúng ta thay đổi ngữ cảnh của biến `this` ([this context](https://duthaho.com/blogs/js-this-context)). Trong trường hợp này, hàm `map` sau khi được `bind` sẽ có biến `this` là `[1, 2, 3]` chứ không phải là `['a', 'b', 'c']`.
