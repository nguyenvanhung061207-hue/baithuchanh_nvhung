// Hướng dẫn nhập số phần tử
console.log("Chương trình tính hiệu tổng số chẵn và tổng số lẻ trong mảng.");

let soPhanTu = Number(prompt("Nhập số phần tử n (n <= 20): "));

if (soPhanTu < 1 || soPhanTu > 20) {
    console.log("Lỗi: n phải từ 1 đến 20. Chương trình kết thúc.");
} else {

    // Nhập mảng
    let mangSo = [];
    console.log("Nhập " + soPhanTu + " số nguyên:");
    for (let i = 0; i < soPhanTu; i++) {
        let so = Number(prompt("Số thứ " + (i + 1) + ": "));
        mangSo.push(so);
    }

    // Hiển thị mảng
    console.log("\nMảng đã nhập:");
    hienThiMang(mangSo);

    // Tính toán và hiển thị kết quả
    console.log("\nKết quả:");
    tinhVaHienThiHieu(mangSo);
}


// Hàm hiển thị mảng
function hienThiMang(mang) {
    console.log("[" + mang.join(",") + "]");
}


// Hàm tính tổng chẵn, lẻ và hiển thị hiệu
function tinhVaHienThiHieu(mang) {
    let tongChan = 0;
    let tongLe = 0;
    let chuoiChan = "";
    let chuoiLe = "";

    for (let so of mang) {
        if (so % 2 === 0) {
            tongChan += so;
            chuoiChan += (chuoiChan ? "+" : "") + so;
        } else {
            tongLe += so;
            chuoiLe += (chuoiLe ? "+" : "") + so;
        }
    }

    console.log("Tổng số chẵn: " + tongChan);
    console.log("Tổng số lẻ: " + tongLe);
    console.log("Hiệu (Tổng chẵn - Tổng lẻ): " + (tongChan - tongLe));
    console.log("Chi tiết: (" + chuoiChan + ")-(" + chuoiLe + ") = " + (tongChan - tongLe));
}
