const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}

function createTransaction(transaction){
    user.transactions.push(transaction)

    if(transaction.type == 'credit'){
        user.balance = user.balance + transaction.value
    }else{
        user.balance = user.balance - transaction.value
    }
}

function getHigherTransactionByType(type){

    let higherTransaction = {
        type: type,
        value: 0
    }

    for(let transaction of user.transactions){
        if(transaction.type == type && transaction.value > higherTransaction.value)
            higherTransaction.value = transaction.value
    }
    return higherTransaction
}

function getTransactionsCount(){
    let count = { 
        credit: 0,
        debit: 0
    }

    for(let transaction of user.transactions){
        if(transaction.type == 'credit')
            count.credit++
        else
            count.debit++
    }
    return count
}

function getAverageTransactionValue(){
    let sum = 0;
    for(let transaction of user.transactions){
        sum = sum + transaction.value
    }
    if(sum > 0)
        return sum / user.transactions.length
    else
        return sum
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: 'debit', value: 80 });
createTransaction({ type: 'debit', value: 30 });

console.log(user.balance); // 60
console.log(getHigherTransactionByType('credit')); // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType('debit')); // { type: 'debit', value: 80 }
console.log(getAverageTransactionValue()); // 70
console.log(getTransactionsCount()); // { credit: 2, debit: 2 }