document.getElementById('prompt').innerHTML = "What is your name?";
document.getElementById('answer').innerHTML = "Answer:";


document.querySelector('#inputText').addEventListener('change', (e) => {  

  const message = e.target.value;  //User Input
//   const myClassInstance = new MyClass(message) //Calls MyClass and runs it with message(User Input)
//   const response = myClassInstance.answer()  //Runs myClassInstance with message as answer() as output
  var foo = message.split(",")

  var string = ""                                       
                                                         
    for(let i=0; i < foo.length; i++){
        string += new MyClass(foo[i]).answer() + "\n"
    }

  console.log(string);  //Records to console
  document.querySelector('#output').innerHTML += string; //Records output
});

class MyClass { //declares class
    name = "" //Instance Var
    constructor(name){  //Constructor
        this.name = name
    }
    answer() {             // Function
        return "Hello " + this.name + ", ";
    }
}



var theAnswer = [];

function addTo(singleName){
theAnswer.push(singleName);
return theAnswer;
}


//Change 1 line of code to apply 


//Done:
// 1. Ask user for name instead of input. Make output say "Hello [NAME]" 
// 2. Extract all useful logic into a separate method, and call that method from the code above. Outputs "Hello [name] ,
// 3. Put extracted method into a new class, and instantiate that class from here and call the method on that class

//To-Do:
// 4. (Bonus) Ask for a comma-separated list of names. Print "Hello [NAME]" for each name
