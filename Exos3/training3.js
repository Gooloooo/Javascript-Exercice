var age = parseInt(prompt("Entre ton âge ?"));

tcheck();

function tcheck() {

    if (age >= 18) {
        alert("vous êtes mâjeur");

    } else if (age < 18) {
        alert("Désolé, vous ne pouvez pas rentrer");
        age = parseInt(prompt("Entre ton âge ?"));
        tcheck();
    }
}