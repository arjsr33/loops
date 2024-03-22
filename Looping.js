// Ternary Operator

let x=4;
console.log(x<16 ? "True":"Failed");

// Loops

// For Loops

for(let i=1;i<=5;i++)
{
    console.log(i);
}

let fruit=["Apples","Mango","Grape","Oranges","Bananas"];
for (let index = 0; index < fruit.length; index++) {
    const element = fruit[index];
    console.log(element);
}

// For of

for(x of fruit)
{
    console.log(x);
}

fruit.forEach(other => {
    console.log(other);
});

// For in

let person = {
    name: "Tiya",
    Age: 10,
    Place:"Ekm"

};

for (x in person)
{
    console.log(person[x]);

}

const p = {
    name: 'John',
    age: 30,
    gender: 'male'
  };
  
  for (let key in p) {
    console.log(key + ': ' + p[key]);
  }

// While => Entry controlled

let j=0;
while(j<5)
{
    console.log(j);
    j++;
}

j=0
while(j<(fruit.length))
{
    console.log(fruit[j]);
    j++;
}

// Do While => Exit Controlled

j=0
do {
    console.log(j);
    j++;
} while (j<=5);

