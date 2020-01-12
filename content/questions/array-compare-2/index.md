---
title: Array Compare 2
tags:
  - array
  - comparison
  - type coercion
date: '2019-11-20'
answers:
  - 'true true true'
  - 'false false false'
  - 'true true false // correct'
  - 'false false true'
---

Kết quả là gì?

```javascript
var a = [9];
var b = [10];

console.log(a == 9);
console.log(b == 10);
console.log(a < b);
```

<!-- explanation -->

Khi so sánh Double Equals (`==`) giữa array và number, JavaScript sẽ chuyển đổi array sang number trước khi so sánh (`[9] -> 9` và `[10] -> 10`), vì thế `[9] == 9` và `[10] == 10` cho kết quả `true`.

Nhưng khi so sánh hai array với toán tử `<` hoặc `>`, lúc này array sẽ không được chuyển đổi sang number mà là sang string (`[9] -> "9"` và `[10] -> "10"`). Khi so sánh hai string thì sẽ so sánh theo alphabet với từng ký tự một, vì thế `"9" < "10"` cho kết quả là `false` vì `"9" < "1"` là sai.
