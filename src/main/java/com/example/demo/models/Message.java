package com.example.demo.models;

public class Message {

private String name;
private  String Contact;

    public Message(String name, String contact) {
        this.name = name;
        Contact = contact;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContact() {
        return Contact;
    }

    public void setContact(String contact) {
        Contact = contact;
    }
}

