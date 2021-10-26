package com.edu.usa.Reto3.servicios;

import com.edu.usa.Reto3.modelo.Category;
import com.edu.usa.Reto3.repositorio.RepositorioCategory;
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
 * Creación de servicio categoria
 */
@Service
public class ServiciosCategory {

    @Autowired
    private RepositorioCategory metodosCrud;

    public List<Category> getAll() {
        return metodosCrud.getAll();

    }

    public Optional<Category> getCategory(int idCategory) {
        return metodosCrud.getCategory(idCategory);
    }

    public Category save(Category category) {
        if (category.getId() == null) {
            return metodosCrud.save(category);
        } else {
            Optional<Category> evt = metodosCrud.getCategory(category.getId());
            if (evt.isEmpty()) {
                return metodosCrud.save(category);
            } else {
                return category;
            }

        }
    }
     public Category update(Category category){
        if(category.getId()!=null){
            Optional<Category>categConsultada=metodosCrud.getCategory(category.getId());
            if(!categConsultada.isEmpty()){
                if(category.getDescription()!=null){
                    categConsultada.get().setDescription(category.getDescription());
                }
                if(category.getName()!=null){
                    categConsultada.get().setName(category.getName());
                }
                return metodosCrud.save(categConsultada.get());
            }
        }
        return category;
    }
    public boolean deleteCategory(int IdCategory){
        Boolean del=getCategory(IdCategory).map(category -> {
            metodosCrud.delete(category);
            return true;
        }).orElse(false);
        return del;
    }
}
