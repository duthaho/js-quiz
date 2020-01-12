---
title: Array Type Conversion
tags:
  - array
  - implicit conversion
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

Trong JavaScript, các array (rỗng hoặc có phần tử) đều là `truthy`, tức là khi chúng ta kiểm tra với điều kiện `if ([]) { return true; }` sẽ cho kết quả là `true`. Nhưng xin hãy chú ý khi chúng ta so sánh Double Equals (`==`) giữa array với boolean, JavaScript sẽ chuyển đổi dữ liệu trước khi so sánh (`Type Conversion`), khi đó `arr.toString()` sẽ được gọi `[].toString() = ""`, vì thế `[] == false` cho kết quả `true`.
