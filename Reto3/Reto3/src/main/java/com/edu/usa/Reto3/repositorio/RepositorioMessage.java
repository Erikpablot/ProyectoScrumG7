package com.edu.usa.Reto3.repositorio;


import com.edu.usa.Reto3.Interface.interfaceMessage;
import com.edu.usa.Reto3.modelo.Message;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Lucía Castro Ruiz
 */
@Repository
public class RepositorioMessage {
    @Autowired
    private interfaceMessage crud3;
    public List<Message> getAll(){
        return (List<Message>) crud3.findAll();
    }
    public Optional<Message> getMessage(int id){
        return crud3.findById(id);
    }

    public Message save(Message message){
        return crud3.save(message);
    }
    public void delete(Message message){
        crud3.delete(message);
    }
}
