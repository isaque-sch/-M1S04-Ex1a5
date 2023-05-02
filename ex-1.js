function functionScope() {
console.log("Estou no escopo de função;")
};

functionScope();

const globalScope = 'Estou no escopo global'

console.log(globalScope)

if (oi === 'oi' ) {
console.log('Estou no escopo de bloco')
}