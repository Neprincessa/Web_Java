package ru.khudoyarova.authapi.API;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.web.bind.annotation.*;
import ru.khudoyarova.authapi.Entities.Person;
import ru.khudoyarova.authapi.Repository.PersonRepository;

import javax.validation.Valid;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/persons")
public class PersonAPI {
    @Autowired
    PersonRepository personRepository;

    @GetMapping
    public List<Person> getAll(){
        return (List<Person>) personRepository.findAll();
    }

    @GetMapping("{id}")
    public Person getById(@PathVariable Long id){
        return personRepository.findById(id).get();
    }

    @PostMapping
    public Person save(@RequestBody @Valid Person user){
        user.setCreatedAt(new Date());
        user.setPassword(DigestUtils.sha256Hex(user.getPassword()));
        return personRepository.save(user);
    }

    @PutMapping("{id}")
    public Person update(@PathVariable Long id, @RequestBody Person user){
        if (user.getId() == null){
            user.setId(id);
        }
        if (user.getCreatedAt() == null){
            user.setCreatedAt(new Date());
        }
        if(user.getPassword() != null){
            user.setPassword(DigestUtils.sha256Hex(user.getPassword()));
        }
        return personRepository.save(user);
    }

    @DeleteMapping("{id}")
    public void deleteById(@PathVariable Long id){
        personRepository.deleteById(id);
    }
}
