---
title: Object Destructuring
tags:
  - array
  - destructuring
date: '2019-11-20'
answers:
  - '"quiz"'
  - '"duthaho"'
  - '"com" // correct'
  - 'undefined'
  - 'An error is thrown'
---

Kết quả là gì?

```javascript
const url = 'quiz.duthaho.com';
const { length: ln, [ln - 1]: domain = 'quiz' } = url
  .split('.')
  .filter(Boolean);
console.log(domain);
```

<!-- explanation -->

Đấu tiên gán `quiz.duthaho.com` cho biến `url`.

```javascript
const url = 'quiz.duthaho.com';
```

Với toán tử `=` (assignment) thì chúng ta quan tâm toán hạng bên phải trước (right side assignment):

```javascript
url.split('.').filter(Boolean);
```

`url.split('.')` sẽ cắt chuỗi `url` thành một array bởi dấu `.`: `['quiz', 'duthaho', 'com']`, sau đó array này sẽ gọi `filter(Boolean)`, đây là cách viết gọn từ: `filter(el => Boolean(el))`, bởi vì các phần tử trong array đều là string, chúng là `truthy` nên `Boolean(el)` luôn cho kết quả `true`, điều đó cũng có nghĩa sau khi `filter`, các phần tử trong array đều được giữ lại.

Đến đây thì ta có thể viết lại như sau:

```javascript
const { length: ln, [ln - 1]: domain = 'quiz' } = [
  'quiz',
  'duthaho',
  'com'
];
```

Đây rõ ràng là cú pháp của `Object Destructing` trong `ES2015` vì array cũng là một object, chúng ta có thể truy cập các thuộc tính index và length từ array (`arr["0"], arr["length"]`).

Trong trường hợp này, chúng ta dùng _aliasing_ để gán thuộc tính `length` cho một biến mới là `ln`. Tiếp theo ta lại gán thuộc tính index thứ `ln - 1` cho biến có tên là `domain` với giá trị mặc định là `'quiz'`, có nghĩa là `domain` sẽ có giá trị là `'quiz'` nếu array không có thuộc tính index thứ `ln - 1` nào.

Ở đây, `length`, được gán cho `ln`, có giá trị là `3`, suy ra `ln - 1` là `2`, và phần tử ở vị trí số `2` trong array là `com`. Vì vậy, câu trả lời là `com`.
