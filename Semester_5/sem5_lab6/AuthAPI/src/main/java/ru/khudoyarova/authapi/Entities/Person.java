package ru.khudoyarova.authapi.Entities;

import ru.khudoyarova.authapi.Entities.Message;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Person {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private String login;

    private String password;

    private Date CreatedAt;

    @OneToMany(mappedBy = "sender", cascade = CascadeType.ALL)
    private List<Message> sendedMessages = new ArrayList<>();

    @OneToMany(mappedBy = "recipient", cascade = CascadeType.ALL)
    private List<Message> recievedMessages = new ArrayList<>();

    public Person() {
    }

    public Person(String login, String name, String password, Date createdAt) {
        this.login = login;
        this.name = name;
        this.password = password;
        this.CreatedAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getCreatedAt() {
        return CreatedAt;
    }

    public void setCreatedAt(Date createdAt) {
        CreatedAt = createdAt;
    }


}
