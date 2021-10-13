//https://ga721683ee363cb-computer.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer

function consultar(){

    $.ajax({
        url: "https://ga721683ee363cb-computer.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer",
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
                <th>BRAND</th>
                <th>MODEL</th>
                <th>CATEGORY_ID</th>
                <th>NAME</th>
                <th>ACCIONES</th>
                </tr>`;
                
    
    for (var i=0; i < items.length; i++) {
        tabla +=`<tr>
                <td>${items[i].id}</td>
                <td>${items[i].brand}</td>
                <td>${items[i].model}</td>
                <td>${items[i].category_id}</td>
                <td>${items[i].name}</td>

                <td>
                <button onclick="eliminar(${items[i].id})">Eliminar</button>
                <a href="detalle1.html?id=${items[i].id}">Editar</a>
                </td> 
                </tr>`;
    }
    tabla +=`</table>`;

    $("#tabla").html(tabla);
}


