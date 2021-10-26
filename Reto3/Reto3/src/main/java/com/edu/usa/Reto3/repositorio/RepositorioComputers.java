package com.edu.usa.Reto3.repositorio;

import com.edu.usa.Reto3.Interface.interfaceComputer;
import com.edu.usa.Reto3.modelo.Computer;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Lucía Castro Ruiz
 */
/**
 *
 * Creación del repositorio
 */
@Repository
public class RepositorioComputers {
    @Autowired
    private interfaceComputer crud;
    
    public List<Computer> getAll(){
        return(List<Computer>) crud.findAll();
    }
    public Optional <Computer> getComputers(int id){
        return crud.findById(id);   //No permite recibir nulos     
    } 
    /*Estamos creando una varialbe, instanciar el método Computer a computers porque el 
  return no puede traer el modelo completo sino un tipo de dato Computer que es la
  variable computers*/

    public Computer save(Computer computers){
        return crud.save(computers);
        
    }
     public void delete(Computer computers){
        crud.delete(computers);
    }
     
}
