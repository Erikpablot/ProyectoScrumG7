package com.edu.usa.Reto3.modelo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author Lucía Castro Ruiz
 */
@Entity
@Table(name="computer")
public class Computer implements Serializable {
    /**
 *
 * Creación de tabla
 */ 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
     /**
 *
 * Creación de atributo de id
 */
    private Integer id;
        /**
 *
 * Creación de atributo de nombre
 */
    private String name;
        /**
 *
 * Creación de atributo de marca
 */
    private String brand;
        /**
 *
 * Creación de atributo de año
 */
    private Integer year;
        /**
 *
 * Creación de atributo de descripción
 */
    private String description;
   
   /**
 *
 * Creación de relación de Many to one
 */
    @ManyToOne
    @JoinColumn(name ="category")
    @JsonIgnoreProperties("computers")
    private Category category;
    /**
 *
 * Creación de relación de one to Many
 */
    
    @OneToMany(cascade = {CascadeType.PERSIST}, mappedBy = "computer")
    @JsonIgnoreProperties({"computer","client"})
    private List<Message> messages;
   /**
 *
 * Creación de relación de one to Many
 */
    @OneToMany(cascade = {CascadeType.PERSIST}, mappedBy = "computer")
    @JsonIgnoreProperties({"computer","client"})
    public List<Reservation> reservations;

      /**
     *
     * Creación de Setter y Getter
     * @return 
     */
    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public List<Message> getMessages() {
        return messages;
    }

    public void setMessages(List<Message> messages) {
        this.messages = messages;
    }

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }
      
    
    


    
}

