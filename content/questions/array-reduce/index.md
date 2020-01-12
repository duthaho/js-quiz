---
title: Array Reduce
tags:
  - array
  - object
  - spread
  - reduce
date: '2019-09-29'
answers:
  - 'a'
  - 'b // correct'
---

Cả hai cách `a` và `b` đều tạo ra object cùng thuộc tính và giá trị. Theo bạn thì phương án nào tốt hơn?

```javascript
const arr = [1, 2, 3];

const a = arr.reduce(
  (acc, el, i) => ({ ...acc, [el]: i }),
  {}
);

const b = {};
for (let i = 0; i < arr.length; i++) {
  b[arr[i]] = i;
}
```

<!-- explanation -->

Nhiều bạn nghĩ rằng đây là thời đại của ES2015 rồi, dùng `reduce` sẽ gọn và tối ưu hơn. Nhưng hãy nhìn kỹ vào code, với phương án `b`, qua mỗi vòng lặp ta chỉ việc set một thuộc tính mới vào `b`, còn ở phương án `a`, với mỗi lần lặp, spread operator (`...`) sẽ tạo ra thêm một shallow copy của `acc` và sau đó mới set một thuộc tính mới, điều này rõ ràng làm tốn bộ nhớ và không tối ưu.
