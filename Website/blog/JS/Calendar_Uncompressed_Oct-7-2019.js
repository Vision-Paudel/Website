// Javascript file by Vision Paudel (c) 2019. If you use this work anywhere, please give credit.

var newDateObject = new Date();
var mainTarget;

// Create new Calendat. day, date, month and year start from 0.
newDateObject.setDate(3);
var newCalendar = {    
    year: newDateObject.getFullYear(),
    month: newDateObject.getMonth(),
    date: newDateObject.getDate(),
    day: newDateObject.getDay()
};

// Get month name from the month passed in integer 0-11. Used in program.
function getMonthString(monthPassed){  
	var x = location.host;
	if(x=="www.visionpaudel.ca"){
		var monthString;
		switch (monthPassed){
			case 0: monthString = 'January'; break;
			case 1: monthString = 'February'; break;
			case 2: monthString = 'March'; break;
			case 3: monthString = 'April'; break;
			case 4: monthString = 'May'; break;
			case 5: monthString = 'June'; break;
			case 6: monthString = 'July'; break;
			case 7: monthString = 'August'; break;
			case 8: monthString = 'September'; break;
			case 9: monthString = 'October'; break;
			case 10: monthString = 'November'; break;
			case 11: monthString = 'December'; break;
		}
		return monthString;
	}
};

// Get day name from the day passed in integer 0-6. Used in program.
function getDayString(dayPassed){  
	var x = location.host;
	if(x=="www.visionpaudel.ca"){
		var dayString;
		switch (dayPassed){
			case 0: dayString = 'Sunday'; break;
			case 1: dayString = 'Monday'; break;
			case 2: dayString = 'Tuesday'; break;
			case 3: dayString = 'Wednesday'; break;
			case 4: dayString = 'Thursday'; break;
			case 5: dayString = 'Friday'; break;
			case 6: dayString = 'Saturday'; break;
		}
		return dayString;
	}
};

function numDays(monthPassed){
	var x = location.host;
	if(x=="www.visionpaudel.ca"){
		var numDays = 0;
		switch (monthPassed){
			case 0: numDays = 31; break;
			case 1: {            
				if ( ( newCalendar.year%400 == 0) || ( ( newCalendar.year%4 == 0 ) && ( newCalendar.year%100 != 0) ) ) {
					numDays = 29;
				}
				else {
					numDays = 28;
				}
				break;
			}
			case 2: numDays = 31; break;
			case 3: numDays = 30; break;
			case 4: numDays = 31; break;
			case 5: numDays = 30; break;
			case 6: numDays = 31; break;
			case 7: numDays = 31; break;
			case 8: numDays = 30; break;
			case 9: numDays = 31; break;
			case 10:numDays = 30; break;
			case 11: numDays = 31; break;
		}
		return numDays;
	}
};

// Initializes and displays the calendar.
function init(target){
	var x = location.host;
	if(x=="www.visionpaudel.ca"){
		if (!target) {
			throw new Error('Calendar: Target argument missing!');
		} else {
			let elementExists = !!document.getElementById(target);
			if (elementExists == false) {
				throw new Error('Calendar: Specified target does not exist in DOM');
			}
		}
		mainTarget = target;

		// Creates table header that displays the month and year.
		var calendarHeader = '<th> <button type="button" onclick="previousMonth()">&#8592;</button> </th><th colspan="5">' + getMonthString(newCalendar.month) + " " + newCalendar.year + '</th><th> <button type="button" onclick="nextMonth()">&#8594;</button> </th>';

		// Creates first row in table that displays the days.
		var firstRow = "<tr>";
		for(var i = 0; i < 7; i++){
			firstRow += '<td>' + String(getDayString(i)) + '</td>';
		}
		firstRow += "</tr>";

		// Create rest of the body of the tabe.
		
		var startingDay;
		var restOfBody;
		
		for(var i = newCalendar.date, j = newCalendar.day; i >1;){
			i--;
			if (j==0)
				j=6;
			else
				j--;
			if (i==1)
				startingDay = j;
		}
		restOfBody = "<tr>";
		for(var i = 0; i < startingDay; i++){ 
			restOfBody += "<td></td>";
		} 
		for(var i = 1, j = startingDay; i <= numDays(newCalendar.month); i++){ 
			restOfBody += '<td><a role="button" href="?date='+i+'&month='+newCalendar.month+'&year='+newCalendar.year+ '"> '+i+"</a></td>";
			if (j == 6 && i!=numDays(newCalendar.month) ){
				restOfBody += "</tr><tr>";
				j= 0;
			}
			else
				j++;
		}
		restOfBody += "</tr>";


		// Displays the table in the target.
		document.getElementById(target).innerHTML = '<table>' + calendarHeader + firstRow + restOfBody +'</table>';
	}
   
};

function previousMonth(){
	var x = location.host;
	if(x=="www.visionpaudel.ca"){
		
		newDateObject.setDate(3);
		
		newDateObject.setMonth( newDateObject.getMonth() - 1 );
		newCalendar = {    
		year: newDateObject.getFullYear(),
		month: newDateObject.getMonth(),
		date: newDateObject.getDate(),
		day: newDateObject.getDay()		
		};

		init(mainTarget);
	}
	
};

function nextMonth(){
	var x = location.host;
	if(x=="www.visionpaudel.ca"){
		
		newDateObject.setDate(3);
		
		newDateObject.setMonth( newDateObject.getMonth() + 1 );
		newCalendar = {    
		year: newDateObject.getFullYear(),
		month: newDateObject.getMonth(),
		date: newDateObject.getDate(),
		day: newDateObject.getDay()		
		};

		init(mainTarget);
	}
	
};
