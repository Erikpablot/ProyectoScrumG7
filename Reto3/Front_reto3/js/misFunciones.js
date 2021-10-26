function autoInicioCategoria(){
    console.log("Se esta ejecutando")
    $.ajax({
        url:"http://129.151.109.0:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            mostrarRespuesta(respuesta);
            let $select = $("#select-category");
            $.each(respuesta, function (id, name){
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select "+name.id);
                
            });
        }
    })
}

function mostrarRespuesta(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick='actualizarInformacionCategorias("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarCategoria("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarInformacionCategorias(){
    let var1 = {
        name:$("#Aname").val(),
        description:$("#Adescription").val()
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var1),
        
        url:"http://129.151.109.0:8080/api/Category/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
        }
        });

}

function actualizarInformacionCategorias(idElemento){
    let myData={
        id:idElemento,
        name:$("#Aname").val(),
        description:$("#Adescription").val()

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.109.0:8080/api/Category/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#Aname").val("");
            $("#Adescription").val("");
            autoInicioCategoria();
            alert("se ha Actualizado correctamente la categoria")
        }
    });

}

function borrarCategoria(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.109.0:8080/api/Category/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            autoInicioCategoria();
            alert("Se ha Eliminado.")
        }
    });

}


///////////////////Computers//////////////////////////////////////
function autoInicioComputer(){
    console.log("Se esta ejecutando")
    $.ajax({
        url:"http://129.151.109.0:8080/api/Computer/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            mostrarRespuestaComputer(respuesta);
            let $select = $("#select-computer");
            $.each(respuesta, function (id, name){
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select "+name.id);
                
            });
        }
    })
}

function mostrarRespuestaComputer(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].year+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td>"+respuesta[i].category.name+"</td>";
        myTable+="<td> <button onclick='actualizarInformacionComputer("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarComputer("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
}

function guardarInformacionComputer(){
    let var2 = {
        name:$("#Bname").val(),
        brand:$("#Bbrand").val(),
        year:$("#Byear").val(),
        description:$("#Bdescription").val(),
        category: {id:+$("#select-category").val()},
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://129.151.109.0:8080/api/Computer/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}

function actualizarInformacionComputer(idElemento){
    let myData={
        id:idElemento,
        name:$("#Bname").val(),
        brand:$("#Bbrand").val(),
        year:$("#Byear").val(),
        description:$("#Bdescription").val(),
        category: {id:+$("#select-category").val()},
        };

    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.109.0:8080/api/Computer/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#Bname").val(""),
            $("#Bbrand").val(""),
            $("#Byear").val(""),
            $("#Bdescription").val(""),
            $("#select-category").val(""),
            autoInicioComputer();
            alert("se ha Actualizado correctamente el Computador")
        }
    });

}

function borrarComputer(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.109.0:8080/api/Computer/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            autoInicioComputer();
            alert("Se ha Eliminado.")
        }
    });

}


//////////////////////Clientes//////////////////////////////////
function autoInicioClient(){
    console.log("Se esta ejecutando")
    $.ajax({
        url:"http://129.151.109.0:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            mostrarRespuestaClient(respuesta);
            let $select = $("#select-client");
            $.each(respuesta, function (id, name){
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select "+name.id);
                           
            });
        }
    })
}

function mostrarRespuestaClient(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="<td> <button onclick='actualizarInformacionClient("+respuesta[i].idClient+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarClient("+respuesta[i].idClient+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);
}

function guardarInformacionClient(){
    let var3 = {
        email:$("#Cemail").val(),
        password:$("#Cpassword").val(),
        name:$("#Cname").val(),
        age:$("#Cage").val(),
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),
        
        url:"http://129.151.109.0:8080/api/Client/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}

function actualizarInformacionClient(idElemento){
    let myData={
        idClient:idElemento,
        email:$("#Cemail").val(),
        password:$("#Cpassword").val(),
        name:$("#Cname").val(),
        age:$("#Cage").val(),
        };

    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.109.0:8080/api/Client/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idClient").val("");
            $("#Cemail").val("");
            $("#Cpassword").val(""),
            $("#Cname").val(""),
            $("#Cage").val(""),
            autoInicioClient();
            alert("se ha Actualizado correctamente el Cliente")
        }
    });

}

function borrarClient(idElemento){
    let myData={
        idClient:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.109.0:8080/api/Client/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            autoInicioClient();
            alert("Se ha Eliminado.")
        }
    });

}

//////////////////////Mensajes//////////////////////////////////
function autoInicioMessage(){
    console.log("Se esta ejecutando")
    $.ajax({
        url:"http://129.151.109.0:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            mostrarRespuestaMessage(respuesta);
            let $select = $("#select-Message");
            $.each(respuesta, function (id, name){
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select "+name.id);
                
            });
        }
    })
}

function mostrarRespuestaMessage(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="<td> <button onclick='actualizarInformacionMessage("+respuesta[i].idMessage+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarMessage("+respuesta[i].idMessage+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado4").html(myTable);
}

function guardarInformacionMessage(){
    let var5 = {
        messageText:$("#DmessageText").val(),

        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var5),
        
        url:"http://129.151.109.0:8080/api/Message/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}

function actualizarInformacionMessage(idElemento){
    let myData={
        idMessage:idElemento,
        messageText:$("#DmessageText").val(),

        };

    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.109.0:8080/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idMessage").val("");
            $("#DmessageText").val(""),
            autoInicioMessage();
            alert("se ha Actualizado correctamente la reservación")
        }
    });

}

function borrarMessage(idElemento){
    let myData={
        idMessage:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.109.0:8080/api/Message/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            autoInicioMessage();
            alert("Se ha Eliminado.")
        }
    });

}

//////////////////////Reservaciones//////////////////////////////////
function autoInicioReservation(){
    console.log("Se esta ejecutando")
    $.ajax({
        url:"http://129.151.109.0:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            mostrarRespuestaReservation(respuesta);
            let $select = $("#select-reservation");
            $.each(respuesta, function (id, name){
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select "+name.id);
                
            });
        }
    })
}

function mostrarRespuestaReservation(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td>"+respuesta[i].status+"</td>";
        myTable+="<td> <button onclick='actualizarInformacionReservation("+respuesta[i].idReservation+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarReservation("+respuesta[i].idReservation+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado5").html(myTable);
}

function guardarInformacionReservation(){
    let var5 = {
        startDate:$("#EstartDate").val(),
        devolutionDate:$("#EdevolutionDate").val(),
        status:$("#Estatus").val(),
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var5),
        
        url:"http://129.151.109.0:8080/api/Reservation/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}

function actualizarInformacionReservation(idElemento){
    let myData={
        idReservation:idElemento,
        startDate:$("#EstartDate").val(),
        devolutionDate:$("#EdevolutionDate").val(),
        status:$("#Estatus").val(),
        };

    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.109.0:8080/api/Reservation/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idReservation").val("");
            $("#EstartDate").val(""),
            $("#EdevolutionDate").val(""),
            $("#Estatus").val(""),
            autoInicioReservation();
            alert("se ha Actualizado correctamente la reservación")
        }
    });

}

function borrarReservation(idElemento){
    let myData={
        idReservation:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.109.0:8080/api/Reservation/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            autoInicioReservation();
            alert("Se ha Eliminado.")
        }
    });

}
