let user = prompt("Enter Capital S, W or G");
let cpuI = Math.floor(Math.random() * 3);
// document.write(cpuI)
console.log(typeof (cpuI))
let cpu = ["S", "W", "G"][cpuI]
const match = (cpu, user) => {
    if (cpu === user) {
        return "This match is Tie"
    }
    else if (cpu === "S" && user === "W") {
        return "cpu"
    }
    else if (cpu === "G" && user === "S") {
        return "Cpu"
    }
    else if (cpu === "W" && user === "G") {
        return "Cpu"
    }
    else if (cpu === "W" && user === "S") {
        return "User"
    }
    else if (cpu === "G" && user === "W") {
        return "User"
    }
    else if (cpu === "S" && user === "G") {
        return "User"
    }
}
let result = match(cpu, user);
console.log("The Winner is ", result);
console.log("CPU  ", cpu);
console.log("User  ", user);
document.getElementById("com").innerHTML = "Computer :" + cpu;
document.getElementById("user").innerHTML = "User :" + user;
document.getElementById("win").innerHTML = "Winner :" + result;