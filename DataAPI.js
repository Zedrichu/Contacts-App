import { response } from "express";
import React from "react";
import contacts from "../Lecture Work/contacts";

const processContact = contact => ({
    name: `${contact.name.first} ${contact.name.last}`,
    phone: contact.phone,
})

export const fetchUsers = async () => {
    // fetch('https://randomuser.me/api/?results=50&nat=us')
    //     .then(response => response.json())
    //     .then( ({results}) => this.setState({contacts:results}))
    const response = await fetch('https://randomuser.me/api/?results=50&nat=us')
    console.log(response)
    const {results} = await response.json()
    return results.map(processContact)
}

