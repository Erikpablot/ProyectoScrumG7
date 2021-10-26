package com.edu.usa.Reto3.servicios;


import com.edu.usa.Reto3.modelo.Computer;
import com.edu.usa.Reto3.repositorio.RepositorioComputers;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Lucía Castro Ruiz
 */
/**
 *
 * Creación de los servicios
 */
@Service
public class ServiciosComputers {
    
    @Autowired
    private RepositorioComputers metodosCrud;
    
    public List<Computer> getAll(){
        return metodosCrud.getAll();
        
    }
    public Optional<Computer> getComputers(int id){
        return metodosCrud.getComputers(id);
    }
    public Computer save(Computer computers){
        if(computers.getId()==null){
            return metodosCrud.save(computers);
        }else{
            Optional<Computer> evt=metodosCrud.getComputers(computers.getId());
            if(evt.isEmpty()){
                return metodosCrud.save(computers);
            }else{
                return computers;
            }
            
        }
    }
    
    public Computer update(Computer computers){
        if(computers.getId()!=null){
            Optional<Computer> e=metodosCrud.getComputers(computers.getId());
            if(!e.isEmpty()){
                if(computers.getName()!=null){
                    e.get().setName(computers.getName());
                }
                if(computers.getBrand()!=null){
                    e.get().setBrand(computers.getBrand());
                }
                if(computers.getYear()!=null){
                    e.get().setYear(computers.getYear());
                }
                if(computers.getDescription()!=null){
                    e.get().setDescription(computers.getDescription());
                }
                if(computers.getCategory()!=null){
                    e.get().setCategory(computers.getCategory());
                }
                metodosCrud.save(e.get());
                return e.get();
            }else{
                return computers;
            }
        }else{
            return computers;
        }
    }


    public boolean deleteComputers(int computersId) {
        Boolean aBoolean = getComputers(computersId).map(computers -> {
            metodosCrud.delete(computers);
            return true;
        }).orElse(false);
        return aBoolean;
    }
    
    
    
}
