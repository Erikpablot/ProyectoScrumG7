function consultarComputador(){
    $.ajax({
        url: "https://ga721683ee363cb-computer.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta.items);
            mostrarRespuestaComputador(respuesta.items);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function mostrarRespuestaComputador(items){
    var tabla2 = `<table border="1">
                  <tr>
                    <th>ID</th>
                    <th>BRAND</th>
	                <th>MODEL</th>
                    <th>CATEGORY_ID</th>
                    <th>NAME</th>
                  </tr>`;
                  
    
    for (var i=0; i < items.length; i++) {
        tabla2 +=`<tr>
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
    tabla2 +=`</table>`;

    $("#tabla2").html(tabla2);
}