// enums
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["USER"] = "user";
    UserRole["SUPER_ADMIN"] = "super_admin";
})(UserRole || (UserRole = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 200] = "SUCCESS";
    StatusCode["NOT_FOUND"] = "not found  status code 404";
    StatusCode["INTERNAL_ERROR"] = "abandoned status code 500";
})(StatusCode || (StatusCode = {}));
