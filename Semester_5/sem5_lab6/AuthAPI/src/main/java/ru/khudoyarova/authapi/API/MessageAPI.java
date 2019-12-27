package ru.khudoyarova.authapi.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import ru.khudoyarova.authapi.Entities.Message;
import ru.khudoyarova.authapi.Repository.MessageRepository;

import javax.validation.Valid;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageAPI {
    @Autowired
    MessageRepository messageRepository;

    @GetMapping
    public List<Message> getAll(){
        return (List<Message>) messageRepository.findAll();
    }

    @GetMapping("{id}")
    public Message getById(@PathVariable Long id){
        return messageRepository.findById(id).get();
    }

    @PostMapping
    public Message save(@RequestBody @Valid Message message){
        message.setSendedAt(new Date());
        return messageRepository.save(message);
    }

    @PutMapping("{id}")
    public Message update(@PathVariable Long id, @RequestBody Message message){
        if (message.getId() == null){
            message.setId(id);
        }
        if(message.getSendedAt() == null){
            message.setSendedAt(new Date());
        }
        return messageRepository.save(message);
    }

    @DeleteMapping("{id}")
    public void deleteById(@PathVariable Long id){
        messageRepository.deleteById(id);
    }
}
