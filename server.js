require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3005;

// เปิดให้ทุกโดเมนสามารถเข้าถึง API
app.use(cors());
app.use(express.json());

// ข้อมูลจำลอง
const matches = [
    { id: 1, time: "19:00", home: "แมนยู", away: "ลิเวอร์พูล", league: "พรีเมียร์ลีก", prediction: "แมนยูชนะ" },
    { id: 2, time: "21:00", home: "เชลซี", away: "อาร์เซนอล", league: "พรีเมียร์ลีก", prediction: "เสมอ" }
];

// API Endpoint สำหรับดึงข้อมูลการแข่งขัน
app.get('/matches', (req, res) => {
    res.json(matches);
});

// Start Server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
