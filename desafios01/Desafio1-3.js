 const users = [
    { name: "Carlos",  technologies: ["HTML", "CSS"] },
    { name: "Jasmine", technologies: ["JavaScript", "CSS"] },
    { name: "Tuane", technologies: ["HTML", "Node.js"] }   
 ]

for (let i = 0;i < users.length;i++){
    console.log(`${users[i].name} works from ${users[i].technologies}`)
}

function checkUserUsesCSS(usuario) {
    let encontrou = false;
    for (let i = 0;i < usuario.technologies.length;i++){
        if(usuario.technologies[i] == 'CSS')
            encontrou = true;
    }
    return encontrou;
}

for (let i = 0; i < users.length; i++) {
  const userWorksFromCSS = checkUserUsesCSS(users[i]);

  if (userWorksFromCSS){
    console.log(`The user ${users[i].name} works with CSS`);
  }
}

const users = [
  {
    name: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    name: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    name: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];

function calculaSaldo(receitas, despesas){
  let receitaTotal = somaNumeros(receitas);
  let despesaTotal = somaNumeros(despesas);
  return receitaTotal - despesaTotal
}

function somaNumeros(numeros){
  let soma = 0;
  for (let i = 0; i < numeros.length; i++){
    soma = soma + numeros[i]; 
  }
  return soma;
}
let saldo = 0;
for (let i = 0;i < users.length;i++){
  saldo = calculaSaldo(users[i].receitas, users[i].despesas)
  if(saldo >= 0)
    console.log(`${users[i].name} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
  else
  console.log(`${users[i].name} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
  saldo = 0;

}
