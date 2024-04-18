function isLeapYear(year){
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}

function days_in_feb(year){
    return isLeapYear(year)? 29 : 28;
}
const date =new Date();
let month_name = date.getMonth();
let year = date.getFullYear();

const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months=['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];
let days_of_month=[31,days_in_feb(year),31,30,31,30,31,31,30,31,30,31];



const day=document.getElementById('day-title');
day.innerHTML=days[date.getDay()];

const current_date=document.getElementById('date-title');
current_date.innerHTML=date.getDate();

const month=document.getElementById('month-title');
month.innerHTML=months[date.getMonth()];
totalDays();
function prev(){

   var title= document.getElementById('title');
   if (month_name == 0){
    month_name=11;
    year--;
   }
   else{
    month_name--;
   }
   title.innerHTML=`${months[month_name]} ${year}`;
   totalDays();
}

function next(){
    var title= document.getElementById('title');
    if(month_name ==11){
     month_name=0;
     year++;
    }
    else{
     month_name++;
    }
    title.innerHTML=`${months[month_name]} ${year}`;
    totalDays();
 }
function totalDays(){
    var dateColor = true;
    if(month_name==1){
        days_of_month[1]=days_in_feb(year);
    }
    var firstday=new Date(year,month_name,1);
    var lastday=new Date(year,month_name+1,0);
    var element = document.getElementById("dates");
    element.innerHTML = ""; 

    console.log(`month name: ${month_name}`);
    console.log(`current month: ${date.getMonth()}`);
    console.log(`year name: ${year}`);
    console.log(`current year: ${date.getFullYear()}`);

    if(month_name != date.getMonth() || year!=date.getFullYear()){
        dateColor=false;
    }
    console.log(dateColor);
    for(let i=1;i<=firstday.getDay();i++){
        let day=document.createElement('div');
        day.innerHTML="";
        document.getElementById('dates').appendChild(day);

    }
    for(let i=1;i<=days_of_month[month_name];i++){
        let day=document.createElement('div');
        day.innerHTML=i;
        day.setAttribute('data-date', `${months[month_name]} ${i}, ${year}`); // Set data-date attribute
    day.addEventListener('click', function() {
        addReminder(`${months[month_name]} ${i}, ${year}`); // Call addReminder function when clicked
    });
        if(dateColor && i== date.getDate()){
            day.id="today-date";
        }
        document.getElementById('dates').appendChild(day);

    }
}


