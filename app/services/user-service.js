function UserService () {
    this.mangUser = [];
    
    this.getListUserApi = function () {
        return axios ({
            url : "https://6183caff91d76c00172d1b69.mockapi.io/quanlinguoidungBTBuoi23",
            method: "GET",
        })
    }

    this.deleteUserApi = function (id) {
        return axios ({
            url :`https://6183caff91d76c00172d1b69.mockapi.io/quanlinguoidungBTBuoi23/${id}`,
            method: "DELETE",
        })
    }

    this.addUserApi = function (user) {
        return axios ({
            url :"https://6183caff91d76c00172d1b69.mockapi.io/quanlinguoidungBTBuoi23",
            method: "POST",
            data: user,
        })
    }

    this.updateUserApi = function (user) {
        return axios ({
            url :`https://6183caff91d76c00172d1b69.mockapi.io/quanlinguoidungBTBuoi23/${user.id}`,
            method: "PUT",
            data: user,
        })
    }

    
}