function Validation() {
    this.checkEmpty = function (value, message, spanID) {
      if (value.trim() != "") {
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
      }
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = "block";
      return false;
    };
  
    this.checkTrung = function (value, message, spanID, mangUser) {
      const isExist = false;
      isExist = mangUser.some(function (user) {
        return value == user.taiKhoan;
      });
      if (isExist) {
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
      }
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = "none";
      return true;
    }
  
    this.checkName = function (value, message, spanID) {
      const pattern= "^[A-Za-z]";
      const reg= new RegExp(pattern);
        if (reg.test(value)){
          document.getElementById(spanID).innerHTML = "";
          document.getElementById(spanID).style.display = "none";
          return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
  
    this.checkEmail = function (value, message, spanID) {
      const pattern= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value. match(pattern)){
          document.getElementById(spanID).innerHTML = "";
          document.getElementById(spanID).style.display = "none";
          return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    
    this.checkPass= function (value, message, spanID) {
        const pattern= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/;
        if (value.match(pattern)){
          document.getElementById(spanID).innerHTML = "";
          document.getElementById(spanID).style.display = "none";
          return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
  
    this.checkSelect = function (selectID, message, spanID) {
        console.log(document.getElementById(selectID));
        if (document.getElementById(selectID).selectedIndex != 0){
          document.getElementById(spanID).innerHTML = "";
          document.getElementById(spanID).style.display = "none";
          return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkMoTa = function (value, message, spanID) {
        const pattern = '[A-Za-z ,.]{0, 60}';//,. : chấp nhận kí tự với khoảng trống
        if (value.match(pattern)){
          document.getElementById(spanID).innerHTML = "";
          document.getElementById(spanID).style.display = "none";
          return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
}