# table-with-react-bootstrap
บทฝึกหัดนี้เป็นการสร้างตารางข้อมูล โดยใช้ react-bootstrap เฟรมเวิร์ค

<img src="https://github.com/Komsan74/react-bootstrap-table/blob/main/assets/react-bootstrap-table.PNG" width="600px"/>

# [Table.js](https://github.com/Komsan74/react-bootstrap-table/blob/main/src/component/Table.js)
กำหนดแม่แบบตาราง โดยศึกษารูปแบบจาก [react-bootstrap](https://react-bootstrap.github.io/components/table/) 
แล้วให้รีเทิร์นค่าออกมาตาม props ที่เรากำหนด
- header = อาร์เรย์ชื่อส่วนหัวตาราง (column header)
- data = อาร์เรย์ข้อมูลที่นำมาแสดงในตาราง
```jsx
    <Table data={data} header={["column1", "column2", "...columN"]} />
```

# App.js
- กำหนด {data} ด้วยการดึงข้อมูลจำลองมาจาก https://fakestoreapi.com

Get all products
```jsx
    fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>console.log(json))
```

## [See demo in codesandbox.io](https://codesandbox.io/s/github/Komsan74/react-bootstrap-table)
