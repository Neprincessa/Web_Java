package ru.khudoyarova.authapi.Entities;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Date;

@Entity
public class Message {

    @Id
    @GeneratedValue
    private Long id;

    private String body;

    @JsonIgnore
    @ManyToOne
    private Person sender;

    public Message(String body, Person sender, Person recipient, Date sendedAt) {
        this.body = body;
        this.sender = sender;
        this.recipient = recipient;
        this.sendedAt = sendedAt;
    }

    public Message() {
    }

    @JsonIgnore
    @ManyToOne
    private Person recipient;

    @Override
    public String toString() {
        return "Message{" +
                "id=" + id +
                ", body='" + body + '\'' +
                ", sender=" + sender +
                ", recipient=" + recipient +
                ", sendedAt=" + sendedAt +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public Person getSender() {
        return sender;
    }

    public void setSender(Person sender) {
        this.sender = sender;
    }

    public Person getRecipient() {
        return recipient;
    }

    public void setRecipient(Person recipient) {
        this.recipient = recipient;
    }

    public Date getSendedAt() {
        return sendedAt;
    }

    public void setSendedAt(Date sendedAt) {
        this.sendedAt = sendedAt;
    }

    private Date sendedAt;

}
