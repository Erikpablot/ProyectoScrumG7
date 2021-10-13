function actualizarmensaje(){
    console.log("ejecutando")
    let computador = {
        id: +$("#id").val(),
        messagetext: $("#messagetext").val(), 
        
    };

    console.log("voy a actualizar", computador);

    $.ajax({
        url: "https://ga721683ee363cb-client.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(computador),
        statusCode:{
            201:function(){
                alert('Se ha actualizado el computador');
            }
        },
    });
}

function consultarMensaje(){
    $.ajax({
        url: "https://ga721683ee363cb-client.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta.items);
            mostrarRespuestaMensaje(respuesta.items);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function mostrarRespuestaMensaje(items){
    var tabla1 = `<table border="1">
                <tr>
                    <th>ID</th>
                    <th>MESSAGETEXT</th>
                </tr>`;
    
    
    for (var i=0; i < items.length; i++) {
        tabla1 +=`<tr>
                   <td>${items[i].id}</td>
                   <td>${items[i].messagetext}</td>
                   <td>
                        <button onclick="eliminarmensaje(${items[i].id})">Eliminar</button>
                        <a href="detallemensaje.html?id=${items[i].id}">Editar</a>
                   </td> 
                </tr>`;
    }
    tabla1 +=`</table>`;

    $("#tabla1").html(tabla1);
}

function eliminarmensaje(identificador){
    console.log("ejecutando funcion para eliminar");

    let computador = {
        id: +identificador
    };

    console.log("voy a borrar", computador);

    $.ajax({
        url: "https://ga721683ee363cb-client.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(computador),
        statusCode:{
            201:function(){
                consultarMensaje();
                alert('Se ha borrado el registro');
            }
        },
    });
}

function guardarmensaje(){
    console.log("ejecutando")
    let mensaje = {
        id: +$("#idmensaje").val(),
        messagetext: $("#messagetext").val(),
    
    };

    console.log("voy a guardar", mensaje);
    
    $.ajax({
        url: "https://ga721683ee363cb-client.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'POST',
        data: mensaje,
        dataType: 'JSON',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(mensaje),
        statusCode:{
            201:function(){
                alert('Se ha registrado el mensaje');
            }
        },
    });
    consultarMensaje();
}