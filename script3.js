//telefono debe tener exactamente 8 digitos, no es obligatoria
//contrasenia debe tener mas de 5 caracteres, es obligatoria

let datos = []

function validar(){
    let eTelefono = document.getElementById("telefono")
    let ePwd = document.getElementById("password")

    let vTelefono = eTelefono.value
    let vPwd = ePwd.value

    if (vTelefono.length == 8 && vPwd.length > 5){
        console.log("Telefono y contraseña valido")

        let listadatos = {
            telefono:vTelefono,
            pwd:vPwd
        }

        let datosMap = listadatos.map((dato,index) => {
            return "<tr><th>"+dato.telefono+"</th><th>"+datos.pwd+"</th><tr>"
        })

        datosStr = datos.join("")
        return True
    }else{
        console.log("Telefono o contraseña no valido")
        return False
    }
}

function actualizar(indice){
    let eTelefono = document.getElementById("telefono")
    let ePwd = document.getElementById("password")

    let datos = datos.filter((dato,index) => {
        if (index == indice){
            return "<tr><th>"
        }
    })
}

function eliminar(indice){

    let datos = datos.filter((dato,index) => {
        if (index == indice){
            return True
        }
    })
}
