package ru.khudoyarova.authapi.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.khudoyarova.authapi.Entities.Message;

@Repository
public interface MessageRepository extends CrudRepository<Message, Long> {

}