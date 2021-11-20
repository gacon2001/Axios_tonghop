var service = new UserService();
var validation = new Validation();

function getELE(id) {
  return document.getElementById(id);
}
function getListUser() {
  service
    .getListUserApi()
    .then(function (success) {
      console.log(success.data);
      renderData(success.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
getListUser();

function renderData(data) {
  var html = "";
  data.forEach(function (item) {
    html += `
        <tr>
        <td>${item.id}</td>
        <td>${item.taiKhoan}</td>
        <td>${item.matKhau}</td>
        <td>${item.hoTen}</td>
        <td>${item.email}</td>
        <td>${item.ngonNgu}</td>
        <td>${item.loaiND}</td>
        <td>${item.moTa}</td>
        <td>${item.hinhAnh}</td>
        <td>
        <button class="btn btn-danger" onclick="deleteUser(${item.id})">Delete</button>
        <button class="btn btn-success" onclick="editUser(${item.id})">Edit</button>
        </td>
        </tr>`;
  });
  getELE("tblDanhSachNguoiDung").innerHTML = html;
}

function deleteUser(id) {
  console.log(id);
  service
    .deleteUserApi(id)
    .then(function (success) {
      console.log(success);
      getListUser();
    })
    .catch(function (error) {
      console.log(error);
    });
}

function editUser(id) {
  console.log(id);
  getELE("btnThemNguoiDung").click();

  document.getElementsByClassName("modal-title")[0].innerHTML = "Edit User";

  document.getElementsByClassName(
    "modal-footer"
  )[0].innerHTML = `<button class="btn btn-success" onclick="updateUser(${id})">Update User</button>`;
}
function updateUser(id) {
  var taiKhoan = getELE("TaiKhoan").value;
  var hoTen = getELE("HoTen").value;
  var matKhau = getELE("MatKhau").value;
  var email = getELE("Email").value;
  var loaiND = getELE("loaiNguoiDung").value;
  var ngonNgu = getELE("loaiNgonNgu").value;
  var moTa = getELE("MoTa").value;
  var hinhAnh = getELE("HinhAnh").value;

  var isValid = true;

  isValid &=
    validation.checkEmpty(taiKhoan, "Không được để trống nhé!", "tbTK") &&
    validation.checkTrung(
      taiKhoan,
      "Tài khoản không được trùng nha!",
      "tbTK",
      service.mangUser
    );

  isValid &=
    validation.checkEmpty(hoTen, "Không được để trống nhé!", "tbTen") &&
    validation.checkName(hoTen, "Tên không chứa số và kí tự đặc biệt", "tbTen");

  isValid &=
    validation.checkEmpty(matKhau, "Không được để trống nhé!", "tbPass") &&
    validation.checkPass(matKhau, "Pass phải đúng định dạng", "tbPass");

  isValid &=
    validation.checkEmpty(email, "Không được để trống nhé!", "tbEmail") &&
    validation.checkEmail(email, "Email phải đúng định dạng", "tbEmail");

  isValid &= validation.checkEmpty(
    hinhAnh,
    "Không được để trống nhé!",
    "tbAnh"
  );

  isValid &= validation.checkSelect(
    "loaiNguoiDung",
    "Phải chọn loại người dùng",
    "tbND"
  );

  isValid &= validation.checkSelect(
    "loaiNgonNgu",
    "Phải chọn ngôn ngữ",
    "tbNN"
  );

  isValid &=
    validation.checkEmpty(moTa, "Không được để trống nhé!", "tbMoTa") &&
    validation.checkMoTa(moTa, "Không vượt quá 60 kí tự", "tbMoTa");

  console.log(isValid);

  if (isValid) {
    var user = new User(
      id,
      taiKhoan.trim(),
      hoTen,
      matKhau,
      email,
      loaiND,
      ngonNgu,
      moTa,
      hinhAnh
    );
    console.log(user);
  }

  service
    .updateUserApi(user)
    .then(function (success) {
      document.getElementsByClassName("close")[0].click();
      getListUser();
    })
    .catch(function (error) {
      console.log(error);
    });
}

//Thêm nút:
getELE("btnThemNguoiDung").addEventListener("click", function () {
  document.getElementsByClassName("modal-title")[0].innerHTML = "Add User";
``
  document.getElementsByClassName(
    "modal-footer"
  )[0].innerHTML = `<button class="btn btn-success" onclick="addUser()">Add User</button>`;
});
function addUser() {
  var taiKhoan = getELE("TaiKhoan").value;
  var hoTen = getELE("HoTen").value;
  var matKhau = getELE("MatKhau").value;
  var email = getELE("Email").value;
  var loaiND = getELE("loaiNguoiDung").value;
  var ngonNgu = getELE("loaiNgonNgu").value;
  var moTa = getELE("MoTa").value;
  var hinhAnh = getELE("HinhAnh").value;

  var isValid = true;

  isValid &=
    validation.checkEmpty(taiKhoan, "Không được để trống nhé!", "tbTK") &&
    validation.checkTrung(
      taiKhoan,
      "Tài khoản không được trùng nha!",
      "tbTK",
      service.mangUser
    );

  isValid &=
    validation.checkEmpty(hoTen, "Không được để trống nhé!", "tbTen") &&
    validation.checkName(hoTen, "Tên không chứa số và kí tự đặc biệt", "tbTen");

  isValid &=
    validation.checkEmpty(matKhau, "Không được để trống nhé!", "tbPass") &&
    validation.checkPass(matKhau, "Pass phải đúng định dạng", "tbPass");

  isValid &=
    validation.checkEmpty(email, "Không được để trống nhé!", "tbEmail") &&
    validation.checkEmail(email, "Email phải đúng định dạng", "tbEmail");

  isValid &= validation.checkEmpty(
    hinhAnh,
    "Không được để trống nhé!",
    "tbAnh"
  );

  isValid &= validation.checkSelect(
    "loaiNguoiDung",
    "Phải chọn loại người dùng",
    "tbND"
  );

  isValid &= validation.checkSelect(
    "loaiNgonNgu",
    "Phải chọn ngôn ngữ",
    "tbNN"
  );

  isValid &=
    validation.checkEmpty(moTa, "Không được để trống nhé!", "tbMoTa") &&
    validation.checkMoTa(moTa, "Không vượt quá 60 kí tự", "tbMoTa");

  console.log(isValid);

  if (isValid) {
    var user = new User(
      "",
      taiKhoan.trim(),
      hoTen,
      matKhau,
      email,
      loaiND,
      ngonNgu,
      moTa,
      hinhAnh
    );
  }

  service
    .addUserApi(user)
    .then(function (success) {
      getListUser();
    })
    .catch(function (error) {
      console.log(error);
    });
}


