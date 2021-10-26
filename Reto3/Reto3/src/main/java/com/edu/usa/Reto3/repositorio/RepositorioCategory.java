package com.edu.usa.Reto3.repositorio;

import com.edu.usa.Reto3.Interface.interfaceCategory;
import com.edu.usa.Reto3.modelo.Category;
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
 * Creación del repositorio de categoria
 */
@Repository
public class RepositorioCategory {
    @Autowired
    private interfaceCategory crud2;
    
    public List<Category> getAll(){
        return(List<Category>) crud2.findAll();
    }
    public Optional <Category> getCategory(int id){
        return crud2.findById(id);   //No permite recibir nulos     
    } 
    
    public Category save(Category category){
        return crud2.save(category);
        
    }
      public void delete(Category category){
        crud2.delete(category);
    }
}
