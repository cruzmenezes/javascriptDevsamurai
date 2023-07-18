function name(name, lastName, age){
  
    console.log(`Ola, tudo bem, seja bem vindo!!! ${name} ${lastName} vc ainda esta com ${age} anos..`)
  }
  
  name("Edson", "menezes", 42);
  
  
  function sum(n1, n2){
    console.log(10 + 2)
  }
  
  sum();
    
  
  function sum2(n1,n2,n3,n4){
    console.log('A média do aluno é', (10 + 5 + 6 + 8) / 4)
    
  }  
  
  sum2();
  
  
  
  function sum3 (n1, n2){
    
    return (n1 * n2) / 2
    
  }
  
  console.log(`O resultado é: ${sum3(10, 3)}`);



  function sum4(){
    let res =0;

    for (const n of arguments){
      res += n
    }
    return res
  }

  console.log(`O resultado da soma entre os numeros são: ${sum4(10, 2, 10, 55)}`);


  function say (){
    let diga =0;

    for (let i of arguments){
      diga *= i 
    }
    return diga  

  }

  console.log(say(2, 2));
