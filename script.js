console.log("active");
const miscData = ["black", "purple", "gold"];
// let info =miscData.forEach((item, index)=>{
// 	document.write(index, item)
// })

let addToDB = () => {
    if (document.querySelector(".add").value == ""){
        document.querySelector("#results").innerHTML ="null entry detected"
    }else{
    miscData.push(document.querySelector(".add").value);
    document.querySelector("#results").innerHTML =
    document.querySelector(".add").value + " ";
    console.log("add=true");    
}
};
let searchDB = () => {
    if (miscData.includes(document.querySelector(".find").value) == "" || miscData.includes(document.querySelector(".find").value) == false) {
    
        document.querySelector("#results").innerHTML ="null search"
    }
    
  else {
    document.querySelector("#results").innerHTML =
      document.querySelector(".find").value;
  } 
  console.log("search=true");
};

let removeAllEntries = () => {
  console.log("in progress");
  document.querySelector("#results").innerHTML = null;
  console.log("clean");
};

let display = () => {

  miscData.forEach((color) => {
    document.querySelector("#results").innerHTML += `
        <li>${color}</li>`;
  });

};
