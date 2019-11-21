---
title: Array Compare
tags:
  - array
  - comparison
order: 3
date: '2019-11-20'
answers:
  - 'true, true, false // correct'
  - 'true, true, true'
  - 'true, false, false'
  - 'false, false false'
---

Kết quả là gì?

```javascript
var a = [1, 2, 3];
var b = [1, 2, 3];
var c = '1,2,3';

console.log(a == c);
console.log(b == c);
console.log(a == b);
```

<!-- explanation -->

Khi so sánh Double Equals (`==`) giữa array và string, cụ thể là `a` hoặc `b` với `c`, Javascript sẽ tự động gọi `arr.toString()` để chuyển đổi array sang string trước khi so sánh, hai mảng `a` và `b` convert sang string sẽ là `'1,2,3'`, vì thế `a == c` và `b == c` cho kết quả `true`.

Khi so sánh Double Equals (`==`) hay Triple Equals (`===`) giữa các đối tượng là kiểu dữ liệu tham chiếu (`Reference Type`), như object, array, function, chúng ta không quan tâm đến giá trị mà đối tượng đang chứa, mà chỉ quan tâm đến chúng có cùng trỏ đến một địa chỉ ô nhớ hay không mà thôi. Trong trường hợp này, `a` và `b` là hai array trỏ đến hai ô nhớ khác nhau, vì thế `a == b` cho kết quả `false`.
