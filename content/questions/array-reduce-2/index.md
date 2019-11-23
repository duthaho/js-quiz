---
title: Array Reduce 2
tags:
  - reduce
  - array
order: 34
date: '2019-11-23'
answers:
  - '1'
  - '60'
  - '100'
  - '120 // correct'
---

Kết quả là gì?

```javascript
const arr = [
  x => x * 1,
  x => x * 2,
  x => x * 3,
  x => x * 4
];

console.log(arr.reduce((agg, el) => agg + el(agg), 1));
```

<!-- explanation -->

Hàm `reduce` của array cho phép chúng ta truyền vào một giá trị ban đầu ở tham số thứ hai, trong trường hợp này là `1` và ta có các bước tính toán sau:

1 + 1 \* 1 = 2<br />
2 + 2 \* 2 = 6<br />
6 + 6 \* 3 = 24<br />
24 + 24 \* 4 = 120
