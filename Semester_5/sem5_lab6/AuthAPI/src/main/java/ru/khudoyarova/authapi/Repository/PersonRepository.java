package ru.khudoyarova.authapi.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.khudoyarova.authapi.Entities.Person;

@Repository
public interface PersonRepository extends CrudRepository<Person, Long> {

}
