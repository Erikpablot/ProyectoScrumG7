package com.edu.usa.Reto3.Interface;

import com.edu.usa.Reto3.modelo.Reservation;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author Lucía Castro Ruiz
 */
public interface intefaceReservation extends CrudRepository<Reservation,Integer> {
    
}
