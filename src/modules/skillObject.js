export default function Skill(skill) {
    this.skillValue = skill;
    this.id = crypto.randomUUID();
}