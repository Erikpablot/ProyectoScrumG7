function eliminar(identificador){
    console.log("ejecutando funcion para eliminar");

    let computador = {
        id: +identificador
    };

    console.log("voy a borrar", computador);

    $.ajax({
        url: "https://ga721683ee363cb-computer.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(computador),
        statusCode:{
            201:function(){
                alert('Se ha borrado el registro');
            }
        },
    });
    consultarComputador();
}