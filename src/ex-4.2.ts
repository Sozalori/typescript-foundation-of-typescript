function processData(data: unknown): string {
  if (typeof data === "string") {
    return data.toUpperCase();
  }
  if (typeof data === "number") {
    return "Not a string";
  }

  return "Not a string";
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

/*Error ที่เจอคือ เมื่อ Compile โค้ดเดิมจะเกิด Error: 'data' is of type 'unknown'.
เพราะพารามิเตอร์ data ถูกกำหนดชนิดเป็น unknown ทำให้ TypeScript ไม่อนุญาตให้เรียกใช้ method 
อย่าง .toUpperCase() โดยตรง จนกว่าจะตรวจสอบชนิดข้อมูลก่อน */
