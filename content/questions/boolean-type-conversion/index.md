---
title: Boolean Type Conversion
tags:
  - boolean
  - type conversion
date: '2020-01-12'
answers:
  - 'true'
  - 'false // correct'
  - 'TypeError'
  - 'NaN'
---

Kết quả là gì?

```javascript
console.log(true + false > 2 + true);
```

<!-- explanation -->

Operator `+` sẽ có độ ưu tiên cao hơn operator `>` vì thế `+` sẽ được thực hiện trước. Khi `+` number với boolean hoặc 2 boolean với nhau, JavaScript sẽ chuyển đổi boolean về number, `true -> 1` và `false -> 0`, vì vậy ta có thể viết thành `1 + 0 > 2 + 1`, kết quả `1 > 3` là `false`.
