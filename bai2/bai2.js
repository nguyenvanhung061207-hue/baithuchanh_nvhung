// Lấy input từ hộp thoại prompt của trình duyệt
const s = prompt("Nhập chuỗi của bạn:"); 
let dem = 0;

if (s !== null) { // Đảm bảo người dùng không nhấn Cancel
    // Lặp qua từng ký tự
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        
        // Kiểm tra ký tự in hoa
        if (c >= 'A' && c <= 'Z') {
            dem++;
        }
    }

    // In ra kết quả
    if (dem > 0) {
        // Sử dụng alert() hoặc console.log() để hiển thị trong trình duyệt
        alert(dem); 
        console.log(dem);
    } else {
        alert("The Strings is not contain upper char");
        console.log("The Strings is not contain upper char");
    }
}