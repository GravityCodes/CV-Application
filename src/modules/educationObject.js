export default function EducationObject(name, degree, major, city, state ){
        
        this.id = crypto.randomUUID();
        this.name = name;
        this.degree = degree;
        this.major = major;
        this.city = city;
        this.state  = state;
}