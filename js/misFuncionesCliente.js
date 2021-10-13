function actualizarCliente(){
    console.log("ejecutando")
    let cliente = {
        id: +$("#idCliente").val(),
        name: $("#NameCliente").val(), 
        email: $("#Email").val(),
        age: +$("#Age").val()

    };

    console.log("voy a actualizar", cliente);

    $.ajax({
        url: "https://ga721683ee363cb-client.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(cliente),
        statusCode:{
            201:function(){
                alert('Se ha actualizado el cliente');
            }
        },
    });
}

function consultarCliente(){

    $.ajax({
        url: "https://ga721683ee363cb-client.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta.items);
            mostrarRespuesta(respuesta.items);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
        complete: function (xhr, status) {
            //console.log(status);
        }
        
    });

}
function mostrarRespuesta(items){
    var tabla = `<table border="1">
                <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>AGE</th>
                <th>ACCIONES</th>
                </tr>`;
                
    
    for (var i=0; i < items.length; i++) {
        tabla +=`<tr>
                <td>${items[i].id}</td>
                <td>${items[i].name}</td>
                <td>${items[i].email}</td>
                <td>${items[i].age}</td>
                

                <td>
                <button onclick="eliminarCliente(${items[i].id})">Eliminar</button>
                <a href="detalle.html?id=${items[i].id}">Editar</a>
                
                </td> 
                </tr>`;
    }
    tabla +=`</table>`;

    $("#tabla").html(tabla);
}

function eliminarCliente(identificador){
    console.log("ejecutando funcion para eliminar");

    let cliente = {
        id: +identificador
    };

    console.log("voy a borrar", cliente);

    $.ajax({
        url: "https://ga721683ee363cb-client.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(cliente),
        statusCode:{
            201:function(){
                alert('Se ha borrado el registro');
            }
        },
        
    });
    consultarCliente();
}

function guardarCliente(){
    console.log("ejecutando")
    let cliente = {
        id: +$("#idCliente").val(),
        name: $("#NameCliente").val(), 
        email: $("#Email").val(),
        age: +$("#Age").val()

    };

    console.log("voy a guardar", cliente);

    $.ajax({
        url: "https://ga721683ee363cb-client.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(cliente),
        statusCode:{
            201:function(){
                consultarCliente();
                alert('Se ha registrado el cliente');
            }
        },
    });
}

