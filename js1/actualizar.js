//http://127.0.0.1:8887/
function actualizar(){
    console.log("ejecutando")
    let computador = {
        id: +$("#idCompu").val(),
        brand: $("#Brand").val(), 
        model: +$("#Model").val(),
        category_id: +$("#Category_id").val(),
        name: $("#NameCompu").val()

    };

    console.log("voy a actualizar", computador);

    $.ajax({
        url: "https://ga721683ee363cb-computer.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer",
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