let inputDate = document.querySelector("#input-date");
let inputNumber = document.querySelector('#input-number');
let inputText = document.querySelector('#input-text');
let AddBtn = document.querySelector('button');
let createList = document.querySelector('#transactionList')
  const msg = document.getElementById("msg");


AddBtn.addEventListener('click', function(){
   
   
 if (inputDate.value === "" || inputNumber.value === "" || inputText.value === "") {
      msg.textContent = "❌ Please fill all fields!";
      msg.style.color = "red";
    } else {
      let li = document.createElement('li');
      li.textContent = `Date: ${inputDate.value}     Description: ${inputText.value}        Amount: ${inputNumber.value}`

      createList.appendChild(li);

      inputDate.value = "";
      inputText.value = "";
      inputNumber.value = "";
    }
  });

   
