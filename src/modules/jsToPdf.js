import {jsPDF} from "jspdf"

export default function createPDF (generalInfo, addressInfo) {
    const doc = new jsPDF();
    const addressInfoArray = Object.values(addressInfo);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text(generalInfo.name, 105, 20,null,null, "center");

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`${addressInfoArray} | ${generalInfo.phone} | ${generalInfo.email}`, 105, 26, null,null,"center")

    doc.save("resume.pdf")
}


