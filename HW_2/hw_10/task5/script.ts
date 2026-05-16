let sessionsList = JSON.parse(String(localStorage.getItem('sessionsList'))) || [];

sessionsList.push(new Date());

localStorage.setItem('sessionsList', JSON.stringify(sessionsList));