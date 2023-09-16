const data = [
    { name: "ShreeKrishna", age: 22, profession: "frontend developer" },
    { name: "ShreeRam", age: 26, profession: "Project manager" },
  ];

  //print developer
  function printDeveloper() {
    console.log(data);
  }
  printDeveloper();
  


//1. concatenated array

function concatenateArray(){
let array1=[1, 2 , 3, 4];
let array2=[5, 6, 7, 8 ];
let concatenatedArray= array1.concat(array2);
console.log("concanated array", concatenatedArray);
}

// 2. Age Check
function checkAgeAbove25() {
    const isAbove25 = data.some(person =>person.age>25);
    if(isAbove25){
      console.log("At least one person is above age of 25.");
    }
    else{
      console.log("No person is above the age of 25");
    }
  }

  
 //3.add data 
  function addData() {
    //Collect data from user through prompt
    const name = prompt("Enter the name");
    const age = parseInt(prompt("Enter the age"));
    const profession = prompt("Enter the profession");
    // Now we will check whether user provided valid input or not
    if(name && !isNaN(age) && profession){
      //Create a new data object object with the collected data
      const newData={name,age,profession};
      //Add the new data object to the data Array
      data.push(newData);
      //Log a message to confirm addition
      console.log("Data added",newData);
  
    }
    else{
      console.log("Invalid Input.Data not added.")
    }
  
  }

  // 4. Average Age
function averageAge() {
    let totalAge =0;
    for(let i =0;i<data.length;i++){
      totalAge+=data[i].age;
  
    }
    const averageAge = totalAge/data.length;
    console.log("Average age",averageAge);
  }
  averageAge();


  // 5. Unique Professions
function uniqueProfessions() {
    //create an empty object to store unique profession
    const uniqueProfessions ={}
    for(let i =0;i<data.length;i++){
  const profession = data[i].profession;
  uniqueProfessions[profession] = true;
    }
    const uniqueProfessionsArray=Object.keys(uniqueProfessions);
    console.log("Unique Profession",uniqueProfessionsArray);
  }

  // 6. Sort by Age
function sortByAge() {
    data.sort((a,b) =>a.age - b.age);
    console.log("Sorted by Age Ascending",data);
  }

  
  // 7. Update Profession
function updateJohnsProfession() {
  //Loop through the data array to find John professin and update his profession
  for(let i =0;i<data.length;i++){
    if(data[i].name ==="shreeKrishna"){
      data[i].profession ="shreeRam";
      break;
    }
  }
  console.log("Shreemannarayan, Updated Profession",data);
}

// 8. Profession Count
function getTotalProfessions() {
    //getTotalProfessions
    let developerCount =0;
    let adminCount =0;
    for(let i =0;i<data.length;i++){
      const profession = data[i].profession;
      if(profession ==="developer"){
        developerCount++;
      }
      else if(profession ==="admin"){
        adminCount++;
      }
    }
    console.log("Total Developers",developerCount);
    console.log("Total Admins",adminCount);
  }