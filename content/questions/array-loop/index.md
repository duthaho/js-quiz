---
title: Array Loop
tags:
  - function
  - array
  - loop
date: '2019-11-21'
answers:
  - 'Yes'
  - 'No // correct'
---

Function dưới đây luôn luôn trả về phần tử lớn nhất trong array đúng không?

```javascript
function greatestNumberInArray(arr) {
  let greatest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (greatest < arr[i]) {
      greatest = arr[i];
    }
  }
  return greatest;
}
```

<!-- explanation -->

Coi chừng bị lừa nhé, function trên chỉ đúng trong trường hợp các phần tử của mảng lớn hơn `0` mà thôi, còn nhỏ hơn `0` thì chắc là sai rồi, vì biến `greatest` được gán mặc định bằng `0` mà.
