// Javascript file by Vision Paudel (c) 2019 
// If you use this work anywhere, please give credit.

	var solution = 9; // For initial problem of 2 x 4 + 1.
	var s;
	var type = 0;
	var numProblemsSolved = 0;
	var numNoviceSolved = 0;
	var	numIntermediateSolved = 0;
	var numChecked = 0;
	var alreadyChecked = 0;
	
	function newProblem(){	
		alreadyChecked = 0;
		document.getElementById("Stats").innerHTML = String( "Number Of Problems Solved: " + numProblemsSolved + "<br>" + " Novice Problems Solved: " +  numNoviceSolved + " Intermediate Problems Solved: " + numIntermediateSolved + "<br>" + " Number Of Times Checked: " + numChecked ).fontsize(1);
		var form = document.getElementById("difficultySelection") ;
		var name = document.getElementById("difficulty") ;
			
		var val;
		
    	// get list of radio buttons with specified name
    	var radios = form.elements
    	// loop through list of radio buttons
    	for (var i=0, len=2; i<len; i++) {
        	if ( radios[i].checked ) { // radio checked?
           		val = radios[i].value; // if so, hold its value in val
            	break; // and break out of for loop
        	}
    	}
    			
		if (val=="novice"){
			newNoviceProblem();
			type = 0;
		}else{
			newIntermediateProblem();	
			type = 1;
		}
	}


	function newNoviceProblem(){			
		
		// In ax + b format ( a * x or a / x) + or - b
		// Simple problem.
		var a, x, b;
		
		x = Math.floor((Math.random() * 10) + 1);
		
		
		var operand1 = Math.floor((Math.random() * 2) + 1);
		var operand2 = Math.floor((Math.random() * 2) + 1);
		
		b = Math.floor((Math.random() * 10) + 1);
		
		if(operand1 == 1){
			a = Math.floor((Math.random() * 10) + 1);
			s = "" + a + " x " + x;
			solution = a * x;
		}else{
			a = Math.floor((Math.random() * 10) + 1);
			a = a * x;
			s = "" + a + " / " + x;
			solution = a / x;
		}
		
		if(operand2 == 1){
			s += "" + " + " + b;
			solution += b;			
		}else{
			s += "" + " - " + b;
			solution -= b;					
		}
		document.getElementById("mental_math_text_problem").value = "";
		document.getElementById("problem").innerHTML = s;
	}

	function newIntermediateProblem(){			
		
		// Slightly Complicated problem.
		var a, x, b;
		
		
		x = Math.floor((Math.random() * 10) + 1);
		
		
		var operand1 = Math.floor((Math.random() * 2) + 1);
		var operand2 = Math.floor((Math.random() * 2) + 1);
		
		b = Math.floor((Math.random() * 100) + 1);
		
		if(operand1 == 1){
			a = Math.floor((Math.random() * 10) + 1);
			s = "( " + a + " x " + x;
			solution = a * x;
		}else{
			a = Math.floor((Math.random() * 10) + 1);
			a = a * x;
			s = "( " + a + " / " + x;
			solution = a / x;
		}
		
		if(operand2 == 1){
			s += "" + " + " + b + " )";
			solution += b;			
		}else{
			s += "" + " - " + b + " )";
			solution -= b;					
		}
		
		var newTermSolution;
		x = Math.floor((Math.random() * 10) + 1);
				
		operand1 = Math.floor((Math.random() * 2) + 1);
		operand2 = Math.floor((Math.random() * 2) + 1);
		
		b = Math.floor((Math.random() * 100) + 1);
		
		if(operand1 == 1){
			a = Math.floor((Math.random() * 10) + 1);
			s += " + ( " + a + " x " + x;
			newTermSolution = a * x;
		}else{
			a = Math.floor((Math.random() * 10) + 1);
			a = a * x;
			s += " + ( " + a + " / " + x;
			newTermSolution = a / x;
		}
		
		if(operand2 == 1){
			s += "" + " + " + b + " )";
			newTermSolution += b;			
		}else{
			s += "" + " - " + b + " )";
			newTermSolution -= b;					
		}
		
		solution = solution +  newTermSolution;
		
		document.getElementById("mental_math_text_problem").value = "";
		document.getElementById("problem").innerHTML = s;
		 
	}
		
	function checkSolution(){
		if (alreadyChecked == 0){
			document.getElementById("mental_math_text_problem").value = solution;
			numChecked++;
		}
		else{
			document.getElementById("mental_math_text_problem").value = solution;
		}
		alreadyChecked = 1;
	}

	function solve(){

		if( document.getElementById("mental_math_text_problem").value == String(solution) ){
			alert("Correct Solution!");
			if (type == 0){
				numNoviceSolved++;
				numProblemsSolved++;
			}else{
				numIntermediateSolved++;
				numProblemsSolved++;
			}
			newProblem();			
		}else{
			alert("Incorrect Solution!");
		}
		
	}