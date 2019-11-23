---
title: Date Constructor
tags:
  - date
  - constructor
order: 23
date: '2019-11-23'
answers:
  - '1/1/2019 2/1/2019 // correct'
  - '1/1/2019 1/1/2019'
---

Kết quả là gì?

```javascript
let a = new Date('2019,1,1').toLocaleDateString();
let b = new Date(2019, 1, 1).toLocaleDateString();
console.log(a, b);
```

<!-- explanation -->

Date Constructor `new Date()` trong Javascript được dùng để tạo một date object, dựa vào tham số đầu vào mà sẽ cho các kết quả khác nhau. Nếu tham số là một string, Javascript sẽ tự động parse chuỗi string thành ngày tương ứng, trong trường hợp này `"2019,1,1"` được parse thành ngày `1/1/2019`, nếu tham số là ba numbers thì ố thứ nhất là năm, số thứ hai là tháng, số thứ ba là ngày, tuy nhiên cần chú ý, tháng ở đây được bắt đầu từ `0`, vậy truyền vào `1` có nghĩa là tháng `2`.
