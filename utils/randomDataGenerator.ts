import {faker} from '@faker-js/faker';

export class RandomDataUtil{
static getFirstName(){
    return faker.person.firstName();
} 

static getLatName(){
    return faker.person.lastName();
} 

static getFullName(){
    return faker.person.fullName();
} 
static getEmail(){
    return faker.internet.email();
} 
static getMobileNumber(){
    return faker.phone.number();
} 
}