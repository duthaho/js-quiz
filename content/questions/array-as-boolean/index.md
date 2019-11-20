---
title: Array as boolean
tags:
  - array
  - implicit conversion
  - boolean
  - if statement
order: 2
date: '2019-11-20'
answers:
  - '[true, true]'
  - '[true, false]'
  - '[false, true] // correct'
  - '[false, false]'
---

Kết quả là gì?

```javascript
function ArrayBoolean() {
  if ([] == true && [1] == true) return [true, true];
  else if ([] == true && [1] == false) return [true, false];
  else if ([] == false && [1] == true) return [false, true];
  else return [false, false];
}
ArrayBoolean();
```

<!-- explanation -->

Trong Javascript, các array (rỗng hoặc có phần tử) đều là `truthy`, tức là khi chúng ta kiểm tra với điều kiện `if ([]) { return true; }` sẽ cho kết quả là `true`. Nhưng xin hãy chú ý khi chúng ta so sánh Double Equal (==) giữa array với boolean, Javascript sẽ chuyển đổi dữ liệu trước khi so sánh (Type conversion), khi đó `arr.toString()` sẽ được gọi `[].toString() = ""`, vì thế `[] == false` cho kết quả `true`.
