// รอให้หน้าเว็บโหลดเสร็จก่อน (เป็นวิธีปฏิบัติที่ดี)
document.addEventListener("DOMContentLoaded", function() {

    // 1. เลือกองค์ประกอบ (elements) ที่เราต้องการมาเก็บในตัวแปร
    const button = document.getElementById("myButton");
    const message = document.getElementById("message");

    // 2. เพิ่ม "Event Listener" (ตัวดักฟังเหตุการณ์)
    // สั่งให้มัน "ฟัง" เหตุการณ์ 'click' ที่ปุ่ม
    button.addEventListener("click", function() {
        
        // 3. นี่คือสิ่งที่จะทำ เมื่อปุ่มถูกคลิก
        message.textContent = "ยินดีด้วย! คุณคลิกปุ่มแล้ว!";
        message.style.color = "red"; // เปลี่ยนสีข้อความเป็นสีแดงด้วย
    });

});