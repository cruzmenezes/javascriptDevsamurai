# rascunho de dicas javascript
####  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map


## Tipos de Dados

#### Tipos de comentarios
- // - linha = eu sou um comentario de uma linha só

- /* - bloco = eu sou um comentario de múltiplas linhas


#### Tipos de dados
- String = tipo texto ("eu sou um texto")

- Number = tipo numero (123)

- Boolean = tipo true ou false

- Infinity = tipo numerico mais expressa infinitude ex. console.log (1 / 0)

-NaN = tipo not a number, numero não identificado.

-Null e Undefined = O Null e nulo / Undefined e indefinido

- Object = tipo objeto ex. console.log({
    nome: "João",
    idade: 23,
})

- Array = tipo de lista que armazena varios tipos de dados, numeros, textos.
ex. console.log([1, 2,"edson", "true"])

- date = tipo de data e hora
ex. console.log(new Date());

## variaveis

    #### nome com algum valor atribuido 
        var j = "javascript"

#### Declaração de variaveis

### var
    ex. var b = "javascript";

### let
    ex. let a = "nodejs"

##### observação 
    quando vc declara a variavel como var, vc pode consultar ela por todo o scopo do seu projeto, seja dentro de uma função ou não.
    Agora quando vc declara com let a variavel só pode se consultada dentro da função quela foi declarada.

### const 
    ex. const p = "python"

#### observação
    quando a variavel e declarada como const a mesma não pode se alterarda posteriormente e sempre uma const quem que se inicializada com um inicializador
    
### concatenação / interpolação

let name, age
name = "victor",
age = 42;

console.log("name", name)
console.log("age", age)


//concatenação antiga
console.log(name + "tem"+ age + "anos")

//interpolação

console.log(`${name} tem ${age} anos` )



### Object

const person ={
	name: 'victor',
	age: 41,
	address: {
	 street: 'cinco', 
	 num: 361,
	 city: 'Guarulhos',
},

}

console.log(`${JSON.stringify(person)}`)
console.log(person.name)

    
#### Função

            function sayhello(name, lastName) {
                console.log('ola ${name} e ${lastName}')
            }

            sayhello('edson', 'cruz')
            sayhello('vitor', 'santos')
            sayhello('menezes', 'silva')

#### Retorn

function sum(n1, n2){
    return n1 + n2
}

console.log(sun(1, 3))

##### Object arguments

function sum() {
    let res = 0 

    for (const n of arguments){
        res += n
    }

    return res
}

console.log(sum())
console.log(sum(1, 1, 3, 10))







