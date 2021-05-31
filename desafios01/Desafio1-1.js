//Imc Calculation
const name1 = 'Carlos'
const weight = 120;
const height = 1.88;

const imc = weight / (height * height)

if(imc >= 30)
    console.log(`${name1} are you overweight.`)
else if(imc < 29.9)
    console.log(`${name1} you are not overweight.`)

//Retirement Calculation
const name2 = 'Silvana'
const gender = 'M'
const age = 59
const contributionTime = 34

if(gender == 'F' && contributionTime >= 30){
    if(age + contributionTime >= 85){
        console.log(`${name2}, you can retire!`)
    }else
        console.log(`${name2}, you can't retire! ${85 - (age+contributionTime)} left.`)
} else if(age == 'F' && contributionTime <= 30){
    console.log(`${name2}, you can't retire! Minimum time not completed.`)

}else if(gender == 'M' && contributionTime >= 35){
    if(age + contributionTime >= 95)
        console.log(`${name2},  you can retire!!`)
    else
        console.log(`${name2}, you can't retire! ${95 - (age+contributionTime)} left`)
}else
    console.log(`${name2}, you can't retire! Minimum time not completed.`)