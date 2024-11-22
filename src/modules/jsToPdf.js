import {jsPDF} from "jspdf"

class Coordinates {
    constructor() {
        this.educationYValue = 32;
        this.skillsYValue = this.educationYValue + 23;
        this.skillsXValue = 100;
        this.skillCounter = 0;
        this.workYValue =  this.skillsYValue;
        this.taskWorkYValue = 0;
    }

    getEduYValue() {
        this.educationYValue += 10;
        this.skillsYValue += 10;
        return this.educationYValue
    }

    getSkillYValue() {
        if(this.skillCounter > 1){
            this.skillsYValue += 8;
            this.workYValue += 8;
            this.skillCounter = 0;
        }
        
        this.skillCounter++;

        return this.skillsYValue
    }

    getSkillXValue(){
        this.skillsXValue == 100 ? this.skillsXValue = 20 : this.skillsXValue = 100;

        return this.skillsXValue;
    }

    getWorkYValue() {
        this.workYValue += 33;
        this.taskWorkYValue = this.workYValue + 4;

        return this.workYValue;
    }

    getTaskWorkYValue() {
        this.taskWorkYValue += 5;
        return this.taskWorkYValue;
    }

}



function handleEducationInfo(doc, card, yValue){
    let yValueNum = yValue.getEduYValue();
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold")
    doc.text(`${card.name} | ${card.city}, ${card.state}`, 10, yValueNum , null, null, "left");
    doc.setFont("helvetica", "normal")
    doc.text(`${card.date}`, 200, yValueNum , null, null, "right");
    doc.setFont("helvetica", "italic");
    doc.setFontSize(11);
    doc.text(`${card.degree} in ${card.major}`, 10, yValueNum + 4, null, null, "left");

}

function handleSkillsInfo(doc, card, coords){
    doc.setFont("helvetica", "normal")
    let yValueNum = coords.getSkillYValue();
    let xValueNum = coords.getSkillXValue();

    doc.setFontSize(12);
    doc.circle(xValueNum - 3, yValueNum - 2 , .5, "F");
    doc.text(`${card.skillValue}`, xValueNum, yValueNum );

}

function handleWorkInfo(doc, card, coords) {
    let yValueNum = coords.getWorkYValue();
    

    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(`${card.name} | ${card.city}, ${card.state}`, 10, yValueNum , null, null, "left");
    doc.setFont("helvetica", "normal")
    doc.text(`${card.startDate} - ${card.endDate}`, 200, yValueNum , null, null, "right");
    doc.setFont("helvetica", "italic");
    doc.setFontSize(11);
    doc.text(`${card.jobTitle}`, 10, yValueNum + 4, null, null, "left");

    doc.setFont("helvetica", "normal")
    card.dutiesList.forEach(task => {
        let taskYValueNum = coords.getTaskWorkYValue();
        doc.circle(17, taskYValueNum -2, .5, "F");
        doc.text(task.duty, 20, taskYValueNum);
    })

}

export default function createPDF (generalInfo, addressInfo, educationInfo, skillsInfo, workInfo) {
    const doc = new jsPDF();
    let yValue = new Coordinates();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text(generalInfo.name, 105, 20,null,null, "center");

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`${addressInfo.city}, ${addressInfo.state} ${addressInfo.country} ${addressInfo.zip}   | ${generalInfo.phone} | ${generalInfo.email}`, 105, 26, null,null,"center")

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("EDUCATION", 10, 34);
    doc.line(10, 36, 200, 36);

    educationInfo.forEach((card) => handleEducationInfo(doc, card, yValue));
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    let yOffset = yValue.educationYValue + 15;

    doc.text("SKILLS", 10, yOffset);
    doc.line(10,yOffset + 3, 200, yOffset + 3);
    skillsInfo.forEach((card) => handleSkillsInfo(doc, card, yValue));


    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    yOffset = yValue.skillsYValue + 15;

    doc.text("WORK EXPERIENCE", 10, yOffset);
    doc.line(10,yOffset + 3, 200, yOffset + 3);

    workInfo.forEach((card) => handleWorkInfo(doc, card, yValue));

    doc.save("resume.pdf")
}   



