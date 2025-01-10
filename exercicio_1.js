function calcDelta(a, b, c){
    return b**2 - 4*a*c;
}

function calcRoots(a, b, c){
    let delta = calcDelta(a, b, c);
    if (delta < 0){
        console.log("Essa equação não possui raízes reais");
        return
    } else if (delta == 0){
        let x1 = (-b + Math.sqrt(delta)) / 2*a;
        console.log(`x1 = x2 = ${x1}`);
    } else {
        let x1 = (-b + Math.sqrt(delta)) / 2*a;
        let x2 = (-b - Math.sqrt(delta)) / 2*a;
        console.log(`x1 = ${x1}, x2 = ${x2}`);
    }

}

let a = parseFloat(prompt("Digite o coeficiente a:"));
let b = parseFloat(prompt("Digite o coeficiente b:"));
let c = parseFloat(prompt("Digite o coeficiente c:"));

calcRoots(a, b, c);