type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  if (user.age === undefined) {
    return false;
  }
  return user.age >= 18;
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false

/*Error ที่เจอในโค้ดเดิมคือ: 'user.age' is possibly 'undefined'.
เพราะ age? ใส่เครื่องหมาย ? แปลว่าอาจไม่มีค่า (เป็น undefined)
เลยเอาไปเทียบ >= 18 ตรงๆ ไม่ได้ ต้องใช้ if เช็กก่อนว่าไม่เป็น undefined*/
