const company = {
    namec: 'Rocketseat',
    color: 'Purple',
    focus: 'Development',
    address: {
        street: 'Rua Guilherme Gembala',
        number: 260
    }
} 

console.log(`The company ${company.namec} is located on ${company.address.street}, ${company.address.number}`)

const dev = {
    named: 'Renato Lucas',
    age: 29,
    specs: [
        {namet: 'Java', specialty:'Desktop/Web'},
        {namet: 'Arduino', specialty:'Embedded Systems'},
        {namet: 'JavaScript', specialty:'Web/Mobile'}
    ] 
}

console.log(`User ${dev.named} is ${dev.age} years old and uses ${dev.specs[0].namet} technology with expertise in ${dev.specs[0].specialty}`)