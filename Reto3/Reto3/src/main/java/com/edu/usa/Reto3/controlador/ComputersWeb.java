package com.edu.usa.Reto3.controlador;

import com.edu.usa.Reto3.modelo.Computer;
import com.edu.usa.Reto3.servicios.ServiciosComputers;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Lucía Castro Ruiz
 */
/**
 *
 * Creación del controlador o web
 */
@RestController
@RequestMapping("/api/Computer")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class ComputersWeb {

    //@GetMapping("/holaMundo")
    //public String saludar() {
    //  return "Hola Mundo tutoria";
    @Autowired
    private ServiciosComputers servicios;

    @GetMapping("/all")
    public List<Computer> getComputers() {
        return servicios.getAll();
    }

    @GetMapping("/(id)")
    public Optional<Computer> getComputers(@PathVariable("id") int idComputers) {
        return servicios.getComputers(idComputers);

    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Computer save(@RequestBody Computer computers) {
        return servicios.save(computers);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Computer update(@RequestBody Computer computers) {
        return servicios.update(computers);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int Id) {
        return servicios.deleteComputers(Id);
    }
}

