---
title: Floating-Point
tags:
  - floating-point
  - decimal
  - rounding
date: '2019-11-23'
answers:
  - 'true'
  - 'false // correct'
---

Kết quả là gì?

```javascript
const a = 0.1;
const b = 0.2;
const c = 0.3;

console.log(a + b === c);
```

<!-- explanation -->

Như chúng ta đã biết trong hệ thập phân, chúng ta không thể biểu diễn chính xác `1/3` dưới dạng dấu phẩy động (`floating-point`). Kết quả của `0.333 + 0.333 + 0.333` không thể nào bằng `1` được.

Tương tự, trong máy tính các số được biểu diễn dưới dạng nhị phân. Đôi khi chúng chỉ biểu diễn được gần đúng số thực tế chứ không thể biểu diễn một các chính xác được, ví dụ như `0.1`, `0.2` hay `0.3`. Điều này dẫn đến các kết quả không mong muốn, trong trường hợp `0.1 + 0.2`, kết quả ta nhận được là `0.30000000000000004`.
