// 1. Hàm kiểm tra số nguyên tố
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Lấy input từ prompt
const input = prompt("Nhập mảng (ví dụ: [1, 5, 2, 7, 10]):"); 
const primes = [];

if (input) {
    // Bỏ dấu [ và ]
    let cleanInput = input.replace(/\[|\]/g, "").trim();

    // Tách chuỗi thành mảng các chuỗi số
    const parts = cleanInput.split(",");

    // 2. Lọc số nguyên tố
    for (const p of parts) {
        const num = parseInt(p.trim(), 10);
        
        if (!isNaN(num) && isPrime(num)) {
            primes.push(num);
        }
    }

    // 3. Sắp xếp tăng dần
    primes.sort((a, b) => a - b); 

    console.log(primes);
    alert("Các số nguyên tố đã sắp xếp: " + primes.toString());
} else {
    console.log("Không có input.");
}