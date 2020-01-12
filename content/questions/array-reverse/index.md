---
title: Arrays Reverse
tags:
  - array
  - reverse
date: '2019-10-08'
answers:
  - '[1, 3, 5, 7, 25]
[7, 5, 3, 25, 1]
[1, 25, 3, 5, 7]
[1, 25, 3, 5, 7]'
  - '[1, 25, 3, 5, 7]
[5,1,3,7,25]'
  - '[1, 25, 3, 5, 7]
[7, 5, 3, 25, 1]
[7, 5, 3, 25, 1]
[7, 5, 3, 25, 1] // correct'
  - 'An error is thrown'
---

Consider the following two arrays and operations on them. What gets logged as a result of script execution ?

```javascript
const ar = [5, 1, 3, 7, 25];
const ar1 = ar;
console.log(ar1.sort());
([5, 25].indexOf(ar[1]) != -1 &&
  console.log(ar.reverse())) ||
  (ar[3] == 25 && console.log(ar));
console.log(ar1);
```

<!-- explanation -->

`const ar1 = ar` có nghĩa `ar1` và `ar` cùng tham chiếu đến một array trong bộ nhớ. `ar1.sort()` sẽ sắp xếp chính nó và `ar1` cũng sẽ thay đổi theo.

Bạn nên nhớ hàm [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) của array sẽ chuyển đổi các phần tử sang string trước khi sắp xếp chúng theo alphabet, vậy dòng `console.log` đầu tiên là `[1, 25, 3, 5, 7]`.

Tiếp theo `[5, 25].indexOf(ar[1]) != -1` trả về `true` nên (`ar.reverse()`) sẽ được gọi. `ar.reverse()` sẽ sắp xếp arr theo chiều ngược lại, `ar` bây giờ sẽ là `[7, 5, 3, 25, 1]`, và được in ra ở `console.log` thứ hai.

`console.log` không trả về giá trị nào nên ta có thể viết lại như sau:

```javascript
undefined || (ar[3] == 25 && console.log(ar));
```

`undefined` là falsy, nên `ar[3] == 25` được gọi và kết quả là `true` vì phần tử thứ `3` của `ar` giờ là `25`, tiếp theo thì `console.log(ar)` thứ ba được in ra với kết quả là `[7, 5, 3, 25, 1]`.

Cuối cùng vì `ar1` và `ar` cùng tham chiếu đến một array nên dòng `console.log(ar1);` thứ tư cũng sẽ in ra (`[7, 5, 3, 25, 1]`).
