const index = require("./index");
//teste soma
test("soma de dois numeros", ()=>{ expect(index.add(3,5)).toEqual(8);})
//teste sub
test("subtração de dois numeros", ()=>{ expect(index.sub(5,3)).toEqual(2);})
//teste multiplição
test("mutiplicação de dois numeros", ()=>{ expect(index.mut(3,5)).toEqual(15);})
//teste divisao
test("divisao de dois numeros", ()=>{ expect(index.divi(15,5)).toEqual(3);})
test("divisao de zero", ()=>{ })