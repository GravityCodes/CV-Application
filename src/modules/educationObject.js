import {format} from 'date-fns'

export default function EducationObject(name, degree, major, city, state, date, id=crypto.randomUUID() ){
        
        this.id = id;
        this.name = name;
        this.degree = degree;
        this.major = major;
        this.city = city;
        this.state  = state;
        this.dateInput = date;
        const dateArray = this.dateInput.split("-");
        const newDate = format(new Date(Number(dateArray[0]), Number(dateArray[1][1])-1), 'MMMM yyyy')
        this.date = newDate;
        
}