package com.edu.usa.Reto3.repositorio;

import com.edu.usa.Reto3.Interface.interfaceClient;
import com.edu.usa.Reto3.modelo.Client;
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
 * Creación del repositorio de cliente
 */
@Repository
public class RepositorioClient {
       @Autowired
    private interfaceClient crud1;

    public List<Client> getAll(){
        return (List<Client>) crud1.findAll();
    }
    public Optional<Client> getClient(int id){
        return crud1.findById(id);
    }

    public Client save(Client client){
        return crud1.save(client);
    }
    public void delete(Client client){
        crud1.delete(client);
    }
    
}
