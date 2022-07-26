# react-bootstrap-table
บทฝึกหัดนี้เป็นการสร้างตารางข้อมูล โดยใช้ react-bootstrap เฟรมเวิร์ค

# Table.js
จะรีเทิร์นค่าตารางออกมาตาม props ที่เรากำหนด
- header = อาร์เรย์ชื่อคอลัมน์ส่วนหัวตาราง
- data = อาร์เรย์ข้อมูลที่นำมาแสดงในตาราง
```jsx
    <Table data={data} header={["column1", "column2", "...columN"]}>
```

# App.js
- กำหนด {data} ด้วยการดึงข้อมูลจำลองมาจาก https://fakestoreapi.com
