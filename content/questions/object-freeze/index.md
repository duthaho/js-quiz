---
title: Object Freeze
tags:
  - object
  - freeze
date: '2019-11-23'
answers:
  - 'shiba // correct'
  - 'vang'
  - 'An error is thrown'
---

Kết quả là gì?

```javascript
const user = {
  name: 'lao Hac',
  age: 69,
  pet: {
    type: 'cho',
    name: 'vang'
  }
};

Object.freeze(user);

user.pet.name = 'shiba';

console.log(user.pet.name);
```

<!-- explanation -->

Để tránh bất kỳ sự thay đổi nào trên các thuộc tính của một object, ta có thể dùng hàm `Object.freeze`, tuy nhiên hàm này chỉ có thể thực hiện `shallow freeze` trên object đó mà thôi, điều đó có nghĩa bất kỳ sự thay đổi nào trên các thuộc tính của object con đều được cho phép. Trong ví dụ này, chúng ta không thể thay đổi `user.age`, nhưng không có vấn đề gì khi thay đổi `user.pet.name`. Nếu chúng ta không muốn thay đổi bất kỳ thuộc tính nào của object, có thể dùng đệ quy `Object.freeze` cho các thuộc tính con hoặc dùng các chức năng `deep freeze` của các thư viện có sẵn.
