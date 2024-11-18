export default function Duty(value){
    this.id = crypto.randomUUID();
    this.duty = value;
}