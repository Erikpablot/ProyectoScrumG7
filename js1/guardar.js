function guardar(){
    console.log("ejecutando")
    let computador = {
        id: +$("#idCompu").val(),
        brand: $("#Brand").val(), 
        model: +$("#Model").val(),
        category_id: +$("#Category_id").val(),
        name: $("#NameCompu").val()

    };

    console.log("voy a guardar", computador);

    $.ajax({
        url: "https://ga721683ee363cb-computer.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(computador),
        statusCode:{
            201:function(){
                alert('Se ha registrado el computador');
            }
        },
    });
}



