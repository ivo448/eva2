//telefono debe tener exactamente 8 digitos, no es obligatoria
//contrasenia debe tener mas de 5 caracteres, es obligatoria

let datos = []

function validar(){
    let eTelefono = document.getElementById("telefono")
    let ePwd = document.getElementById("password")

    let vTelefono = eTelefono.value
    let vPwd = ePwd.value

    let soloNumeros = /^\d{8}$/
    let soloAlfanumerico = /^[a-zA-Z0-9]+$/

    if (soloNumeros.test(vTelefono) && vPwd.length > 5 && soloAlfanumerico.test(vPwd)){
        console.log("Telefono y contraseña valido")

        let dato = {
            telefono:vTelefono,
            pwd:vPwd
        }

        datos.push(dato)

        eTelefono.value = ""
        ePwd.value = ""

        cargarDatos()
    }else{
        console.log("Telefono o contraseña no valido")
        alert("El teléfono debe tener exactamente 8 dígitos numéricos y la contraseña debe tener más de 5 caracteres, solo letras y números.")
    }
}

function cargarDatos(){
    console.log("Cargando datos...")

    let eCuerpoTabla = document.getElementById("cuerpoTabla")

    let datosMap = datos.map((dato,index) => {
        return "<tr><td>"+dato.telefono+"</td><td>"+dato.pwd+"</td>"+
        "<td><button onclick='eliminar("+index+")'>Eliminar</button>"+
        "<button onclick='actualizarForm("+index+")'>Actualizar</button></td></tr>"
    })
    datosStr = datosMap.join("")
    eCuerpoTabla.innerHTML = datosStr
}

function actualizarForm(indice){
    console.log("Actualizando formulario")

    let eTelefono = document.getElementById("telefono1")
    let ePwd = document.getElementById("password1")

    let dato = datos.filter((d,index)=>{
        if(index == indice){
            return d
        }
    })

    eTelefono.value = dato[0].telefono
    ePwd.value = dato[0].pwd

    let eBtnActualizar = document.getElementById("btnActualizar")
    eBtnActualizar.value = indice

    document.getElementById("myModal").style.display = "block";
}

function actualizar(){
    console.log("Actualizando registro")

    let eTelefono = document.getElementById("telefono1")
    let ePwd = document.getElementById("password1")

    let vTelefono = eTelefono.value
    let vPwd = ePwd.value

    let eBtnActualizar = document.getElementById("btnActualizar")
    let indice = eBtnActualizar.value

    let soloNumeros = /^\d{8}$/
    let soloAlfanumerico = /^[a-zA-Z0-9]+$/

    if (soloNumeros.test(vTelefono) && vPwd.length > 5 && soloAlfanumerico.test(vPwd)) {
        datos = datos.map((d,index)=>{
            if(index == indice){
                return  {
                    telefono : vTelefono,
                    pwd : vPwd
                }
            }else{
                return d
            }
        })
        cargarDatos()
        document.getElementById("myModal").style.display = "none";
    } else {
        alert("El teléfono debe tener exactamente 8 dígitos numéricos y la contraseña debe tener más de 5 caracteres, solo letras y números.")
    }
}

function eliminar(indice){
    console.log("Eliminando registro")

    if (confirm("¿Estás seguro de que deseas eliminar este registro?")) {
        datos = datos.filter((dato,index) => {
            if (index != indice){
                return dato
            }
        })
    }

    cargarDatos()
}

var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}