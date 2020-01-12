---
title: Function Precedence
tags:
  - function precedence
date: '2020-01-12'
answers:
  - 'f,o,o // correct'
  - '["f", "o", "o"]'
  - 'TypeError'
  - '[][]["f", "o", "o"]'
---

Kết quả là gì?

```javascript
console.log([] + [] + 'foo'.split(''));
```

<!-- explanation -->

Theo [operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence), các lời gọi function sẽ có độ ưu tiên cao hơn operator `+`, vì vậy `'foo'.split('')` sẽ thực hiện trước, ta có thể viết lại như sau `[] + [] + ['f', 'o', 'o']`, JavaScript sẽ chuyển đổi array sang string trước khi `+` nên ta có kết quả là `'f,o,o'`.
