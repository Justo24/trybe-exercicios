function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (const day of dezDaysList) {
      let createTagLi = document.createElement("li")
      createTagLi.innerText = day;
      createTagLi.classList.add("day");
      document.querySelector("#days").appendChild(createTagLi);

      if (day == "24" || day == "25" || day == "31") {
          createTagLi.classList.add("holiday");
      }

      if (day == "4" || day == "11" || day == "18" || day == "25") {
          createTagLi.classList.add("friday")
      }
  }

  // Exercicio 2

  function buttonFeriados (textButton) {

    let createButton = document.createElement("button");
    createButton.setAttribute("id", "btn-holiday");
    createButton.innerText = textButton;
    document.querySelector(".buttons-container").appendChild(createButton);

  }
  buttonFeriados("Feriados")

  // Exercicio 3

  function showHolidays () {
      let holidaysButton = document.querySelector("#btn-holiday");
      let holidays = document.querySelectorAll(".holiday");

      holidaysButton.addEventListener("click", function() {
          for (let index in holidays) {
              if (holidays[index].style.backgroundColor == "green") {
                  holidays[index].style.backgroundColor = "rgb(238,238,238)";
                  holidays[index].style.color = '#777';
              } else {
                  holidays[index].style.backgroundColor = "green";
                  holidays[index].style.color = "white";
              }
          }
      })
  }

  showHolidays();

  // Exercicio 4

  function showFriday (textButton) {
      let createTagButton = document.createElement("button");
      createTagButton.setAttribute("id", "btn-friday");
      createTagButton.innerText = textButton;
      document.querySelector(".buttons-container").appendChild(createTagButton);
  }
  showFriday("Sexta-Feira");

  // Exercicio 5

  let arrayFriday = [4, 11, 18, 25];

  function fridayButtonTextChange (arrayFriday) {
      let getFriday = document.querySelectorAll(".friday");
      let fridayButton = document.querySelector("#btn-friday");

      fridayButton.addEventListener("click", function(){
          for (const index in getFriday) {
              if (getFriday[index].innerHTML !== "SEXTOU!"){
                  getFriday[index].innerHTML = "SEXTOU!"
              } else {
                  getFriday[index].innerHTML = arrayFriday[index]
              }
          }
      })
  }
  fridayButtonTextChange(arrayFriday)

  //Exercicio 6

  function dayMouseOver () {
      let days = document.querySelector("#days");

      days.addEventListener("mouseover", function(event) {
          event.target.style.fontSize = "30px";
          event.target.style.fontWeight = "600";
      })
  }
  dayMouseOver();

  function dayMouseOut() {
      let days = document.querySelector("#days");

      days.addEventListener("mouseout", function(event){
          event.target.style.fontSize = "20px";
          event.target.style.fontWeight = "300";
      })
  }
  dayMouseOut();