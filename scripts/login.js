let form = document.forms.login;

form.addEventListener("submit", checkData);

function checkData (event) {
    event.preventDefault();
    let data = new FormData(form);
    console.log([...data.entries()]);
    let info = "";
    if (!fieldIsFilled(data.get("email"))) {
        info += "Введите адрес электронной почты</br>";
    }
    else if (!emailIsMatchFormat(data.get("email"))) {
        info += "Неверный формат email-адреса</br>";
    }
    if (!fieldIsFilled(data.get("password"))) {
        info += "Введите пароль";
    }

    if (info != "") {
        Swal.fire({
            icon: 'error',
            title: 'Проверьте данные!',
            html: info
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Поздравляем!',
            text: 'Вы успешно вошли в учетную запись'
        }).then(function (isConfirm) {
            if (isConfirm) {
                form.submit();
            }
        });
    }
}
