export default function EducationObject(name, degree, major, city, state, date, id=crypto.randomUUID() ){
        
        this.id = id;
        this.name = name;
        this.degree = degree;
        this.major = major;
        this.city = city;
        this.state  = state;
        const dateArray = date.split("-");
        console.log(dateArray[0])
        console.log(dateArray[1][1])
        const newDate = Date(Number(dateArray[0]), Number(dateArray[1][1]))
        console.log(newDate)
        const controlledDate = Date(2025, 11);
        console.log(controlledDate)

        this.date = date;
}