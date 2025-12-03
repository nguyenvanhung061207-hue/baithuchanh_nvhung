// --- ĐỊNH NGHĨA LỚP PHONE ---
class Phone {
    constructor(maDienThoai, ten, hangSanXuat, gia) {
        this._maDienThoai = maDienThoai;
        this._ten = ten;
        this._hangSanXuat = hangSanXuat;
        this._gia = gia;
    }

    // Getters & Setters
    get maDienThoai() { return this._maDienThoai; }
    set maDienThoai(val) { this._maDienThoai = val; }
    
    get ten() { return this._ten; }
    set ten(val) { this._ten = val; }

    get hangSanXuat() { return this._hangSanXuat; }
    set hangSanXuat(val) { this._hangSanXuat = val; }

    get gia() { return this._gia; }
    set gia(val) { 
        if (typeof val === 'number' && val >= 0) {
            this._gia = val;
        }
    }

    // Phương thức toString()
    toString() {
        const formattedGia = this._gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        return `Mã: ${this._maDienThoai} | Tên: ${this._ten} | Hãng: ${this._hangSanXuat} | Giá: ${formattedGia}`;
    }
}

// --- DỮ LIỆU VÀ CHỨC NĂNG QUẢN LÝ ---
let phoneList = [
    new Phone("IP15", "iPhone 15", "Apple", 22000000),
    new Phone("SS23", "Samsung Galaxy S23", "Samsung", 18500000),
    new Phone("IP14", "iPhone 14", "Apple", 19000000),
    new Phone("HWP30", "Huawei P30 Pro", "Huawei", 15000000)
];

// Hàm hiển thị danh sách điện thoại (Yêu cầu 1)
function displaySortedList() {
    const listElement = document.getElementById("phoneList");
    listElement.innerHTML = ""; // Xóa nội dung cũ

    // Sắp xếp danh sách theo Tên (Alphabet)
    const sortedList = [...phoneList].sort((a, b) => a.ten.localeCompare(b.ten));

    if (sortedList.length === 0) {
        listElement.textContent = "Danh sách rỗng.";
        return;
    }

    // Hiển thị từng phần tử
    sortedList.forEach((phone) => {
        const item = document.createElement('div');
        item.className = 'phone-item';
        item.textContent = phone.toString();
        listElement.appendChild(item);
    });
}

// Hàm thêm mới điện thoại (Yêu cầu 2)
function addNewPhone() {
    const maDienThoai = document.getElementById("maDienThoai").value.trim();
    const ten = document.getElementById("ten").value.trim();
    const hangSanXuat = document.getElementById("hangSanXuat").value.trim();
    const giaStr = document.getElementById("gia").value.trim();
    const gia = parseFloat(giaStr);

    // Kiểm tra dữ liệu nhập vào
    if (!maDienThoai || !ten || !hangSanXuat || isNaN(gia) || gia < 0) {
        alert("Vui lòng nhập đầy đủ và chính xác (Giá phải là số không âm).");
        return;
    }

    // Tạo đối tượng mới
    const newPhone = new Phone(maDienThoai, ten, hangSanXuat, gia);
    
    // Thêm vào danh sách
    phoneList.push(newPhone);
    
    // Hiển thị lại danh sách mới
    displaySortedList();
    
    // Xóa form sau khi thêm thành công
    document.getElementById("maDienThoai").value = '';
    document.getElementById("ten").value = '';
    document.getElementById("hangSanXuat").value = '';
    document.getElementById("gia").value = '';

    alert(`✅ Đã thêm thành công: ${newPhone.ten}`);
}

// Gọi hàm hiển thị lần đầu khi trang tải xong
window.onload = displaySortedList;