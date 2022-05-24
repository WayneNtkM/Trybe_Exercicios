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



function createDezCalendar (arr) {
  const daysDez = document.getElementById('days')
  
  for (let i = 0; i < arr.length; i += 1) {
    const days = arr[i]
    const dayListItem = document.createElement('li')
    dayListItem.className = 'day'
    dayListItem.innerHTML = days
    
    daysDez.appendChild(dayListItem)
  }  
}

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
createDezCalendar(dezDaysList)

const days = document.getElementById('days')

days.childNodes[6].classList.add('friday')
days.childNodes[6 + 7].classList.add('friday')
days.childNodes[6 + 14].classList.add('friday')
days.childNodes[6 + 21].classList.add('friday', 'holiday')
days.childNodes[6 + 20].classList.add('holiday')
days.childNodes[6 + 27].classList.add('holiday')


function createButtonHoliday (str) {
  const btnContainer = document.querySelector('.buttons-container')
  const holidayButton = document.createElement('button')
  holidayButton.innerHTML = str
  holidayButton.setAttribute('id', 'btn-holiday')

  btnContainer.appendChild(holidayButton)
}
createButtonHoliday('Feriados')

function holidayEvent () {
  let holidayBtn = document.querySelector('#btn-holiday');
  let holidays = document.querySelectorAll('.holiday')

  holidayBtn.addEventListener('click', function() {
    for (let index = 0; index < holidays.length; index += 1) {
      if (holidays[index].style.backgroundColor === 'rgb(70, 214, 70)') {
        holidays[index].style.backgroundColor = 'rgb(238, 238, 238)';
      } else {
        holidays[index].style.backgroundColor = 'rgb(70, 214, 70)';
      }
    }
  })
};

holidayEvent();

function createBtnFriday (str) {
  const btnContainer = document.querySelector('.buttons-container')
  const btnFriday = document.createElement('button')
  btnFriday.innerText = str
  btnFriday.setAttribute('id', 'btn-friday')
  btnContainer.appendChild(btnFriday)
}

createBtnFriday('SEXTOU!')

function itsFridayThen (fridays) {
  const fridayBtn = document.getElementById('btn-friday')
  const friday = document.querySelectorAll('.friday')

  fridayBtn.addEventListener('click', function () {
    for (let i = 0; i < friday.length; i += 1) {
      if (friday[i].innerHTML !== 'SEXTOU!') {
        friday[i].innerHTML = 'SEXTOU!'
      } else {
        friday[i].innerHTML = fridays[i]
      }
    }
  })
}

let fridays = [4, 11, 18, 25]
itsFridayThen(fridays)

