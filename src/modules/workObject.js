import {format} from 'date-fns'

export default function Work(name,jobTitle,city,state,startDate,endDate, dutiesList=[], id=crypto.randomUUID()){
    
    this.id = id;
    this.name = name;
    this.jobTitle = jobTitle;
    this.city = city;
    this.state = state;

    this.startDateInput = startDate;
    const startDateArray = this.startDateInput.split("-");
    const newStartDate = format(new Date(Number(startDateArray[0]), Number(startDateArray[1][1])-1), 'MMMM yyyy');
    this.startDate = newStartDate;

    this.endDateInput = endDate;
    const endDateArray = this.endDateInput.split("-");
    const newEndDate = format(new Date(Number(endDateArray[0]), Number(endDateArray[1][1])-1), 'MMMM yyyy');
    this.endDate = newEndDate;

    this.dutiesList = dutiesList;

}