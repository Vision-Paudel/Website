	// Javascript file by Vision Paudel (c) 2019 
	// If you use this work anywhere, please give credit.
		var numArray = createArray(9,9);
		var originalArray = createArray(9,9);
		var private = false;
		var solved = false;

	function incrementNumber(clicked_ID){
			if (solved==false){
				var num = document.getElementById(clicked_ID).innerHTML; 

				if (num == 0 || num!= originalArray[clicked_ID.charAt(0)][clicked_ID.charAt(1)]){

					document.getElementById(clicked_ID).innerHTML = ( ( parseInt( document.getElementById(clicked_ID).innerHTML ) + 1) % 10 );

					if(document.getElementById(clicked_ID).innerHTML == 0){
						document.getElementById(clicked_ID).style="background-color:pink";
					}else{
						document.getElementById(clicked_ID).style="background-color:Aquamarine";
					}
					
				}
			}
		
		}
		
		// Create new puzzle
		function newPuzzle(){
		
			var i = 0;
			var j = 0;
			while(i <= 8){					
				while(j <= 8){
					var id = "" + String(i) + String(j);
					numArray[i][j] = "0"; // Initializes the numArray with the values.		
					j++;				
				}
				i++;
				j=0;
			}
			
			
			var row = 0;
			var column = 0;
			var numIncrement = 1;
			for( var i = 0; i < 3; i++){
				
				for( var j = 0; j < 3; j++){
					row = Math.floor(Math.random() * 3);
					column = Math.floor(Math.random() * 3);
					var finalRow = i*3 + row;
					var finalColumn = j*3 + column;
					numArray[finalRow][finalColumn] = numIncrement++;
				}	
				
			}
			
			private = true;
			solve();
			
			for(var i = 0; i < 9; i++){
				originalArray[i] = Array.from(numArray[i]);
			}	
			
		}

		function displayNewPuzzle(){
			
			var i = 0;
			var j = 0;			
			while(i <= 8){					
				while(j <= 8){
					var id = "" + String(i) + String(j);
					var show = Math.floor(Math.random() * 2);
					if(show){
						document.getElementById(id).innerHTML = String(numArray[i][j]);		// display values in array (back into the buttons)
						document.getElementById(id).style="background-color:Aquamarine";						
					}else{
						document.getElementById(id).innerHTML = "0";		// display values in array (back into the buttons)
						numArray[i][j] = 0;
						document.getElementById(id).style="background-color:pink";
					}						
					j++;				
				}
				i++;
				j= 0;
			}
			solved = false;
			
		}


		function checkSolution(){
			
			var i = 0;
			var j = 0;
			while(i <= 8){					
				while(j <= 8){
					var id = "" + String(i) + String(j);
					numArray[i][j] = document.getElementById(id).innerHTML; // Initializes the numArray with the values.		
					j++;				
				}
				i++;
				j=0;
			}
			
			for (var i = 0; i < 9; i++) {
				for (var j = 0; j < 9; j++) {	
					if (numArray[i][j] == 0) {	// If number does not exist
						alert("Board has empty cells!");
						return false;	// Return false if the board is incomplete.
					}else{
					
						var checkConflict = noConflict(numArray, i, j,  numArray[i][j]);	
						if (!checkConflict)	{
							alert("Invalid Board. Check for number conflict!");
							return false;	// Return false if the number is in conflict
						}
					}

				}
			}
			i = 0;
			j = 0;			
			while(i <= 8){					
				while(j <= 8){
					var id = "" + String(i) + String(j);					
					document.getElementById(id).style="background-color:LightYellow";
					j++;				
				}
				i++;
				j= 0;
			}
			alert("Valid Solution!");
		}

		// Reset puzzle
		function resetToOriginal(){
			
			var i = 0;
			var j = 0;			
			while(i <= 8){					
				while(j <= 8){
					var id = "" + String(i) + String(j);
					if(originalArray[i][j]!="0"){
						document.getElementById(id).innerHTML = String(originalArray[i][j]);		// display values in array (back into the buttons)
						document.getElementById(id).style="background-color:Aquamarine";						
					}else{
						document.getElementById(id).innerHTML = "0";		// display values in array (back into the buttons)
						document.getElementById(id).style="background-color:pink";
					}						
					j++;				
				}
				i++;
				j= 0;
			}
			solved = false;
		}		

		// Reset puzzle
		function reset(){
			
			var i = 0;
			var j = 0;			
			while(i <= 8){					
				while(j <= 8){
					var id = "" + String(i) + String(j);
					document.getElementById(id).innerHTML = "0";	
					document.getElementById(id).style="background-color:pink";
					numArray[i][j] = 0;
					j++;				
				}
				i++;
				j= 0;
			}			
			solved = false;
			
			for(var i = 0; i < 9; i++){
				originalArray[i] = Array.from(numArray[i]);
			}	
			
		}
		
		function createArray(length) {
    			var arr = new Array(length || 0);
        		i = length;
    			if (arguments.length > 1) {				
        			var args = Array.prototype.slice.call(arguments, 1);				
        			while(i--) arr[length-1 - i] = createArray.apply(this, args);				
    			}
   				return arr;				
		}


		// Solve the puzzle using the values (innerHTML) from the buttons.
		function solve(){
				if(private == false){				
					var i = 0;
					var j = 0;
					while(i <= 8){					
						while(j <= 8){
							var id = "" + String(i) + String(j);
							numArray[i][j] = document.getElementById(id).innerHTML; // Initializes the numArray with the values.		
							j++;				
						}
						i++;
						j=0;
					}
				}
				
				for (var i = 0; i < 9; i++) {
					for (var j = 0; j < 9; j++) {	
						if (numArray[i][j] != 0) {	// If number already exists	

							var checkConflict = noConflict(numArray, i, j,  numArray[i][j]);	
							if (!checkConflict)	{
								alert("Invalid Board. Check for number conflict!");
								return false;	// Return false if the number is in conflict
							}

						}
					}
				}
			
			
			if (private==false){			
				var success = solveSudoku(numArray, 0, 0);	
				if(success){
					display(numArray);
					alert("Solution Found!");
				}
				else
					alert("Puzzle could not be solved!");
			}else{
				solveSudoku(numArray, 0, 0);	
				private = false;
				displayNewPuzzle();
			}
			
		}
			
		function noConflict(newSudokuPuzzle, row, col, num){			
				
				for (var i = 0; i < 9; i++) {					
					for (var j = 0; j < 9; j++) {
						
						if (i == row && j == col) {
							// Do nothing
						}else if (i == row && newSudokuPuzzle[i][j] == num) {			// Every row
								return false;
						}else if (j == col && newSudokuPuzzle[i][j] == num) {			// Every column
								return false;						
						}else if ((parseInt(i/3) == parseInt(row/3) && parseInt(j/3) == parseInt(col/3)) && (newSudokuPuzzle[i][j] == num)) {	// Every 3x3 Grid	
								return false;
						}
					}
				}
				return true;
		}
		
		  
		function solveSudoku(newSudokuPuzzle, row, col){
			
			if (row > 8)
				return true;															// Success if end of board. Base Case			
			else {																		// While squares exist...	
				
				if(newSudokuPuzzle[row][col] != 0) {									// If square already has a number.					
					if (col < 8)
						return solveSudoku(newSudokuPuzzle, row, col + 1);  			// column + 1 
					else
						return solveSudoku(newSudokuPuzzle, row + 1, 0);				// unless it is the last column, then column is 0 and row + 1
				}
				else {																	// If square does not already have a number.
					
					var success = false;
					var currFilled = false;
					
					if (col < 8) {
						
						for(var i = 1; i < 10; i++) {
							currFilled = false;
							
							if (noConflict(newSudokuPuzzle, row, col,  i)) {			// If no conflict		
								newSudokuPuzzle[row][col] = i;							// Assign the number
								currFilled = true;
							}
							
							if (currFilled)
								success = solveSudoku(newSudokuPuzzle, row, col + 1);  	// column + 1 		
							
							if (success)
								return success;													
						}
						newSudokuPuzzle[row][col] = 0;					
						return success;  	// return success
					}
					else {
						
						for(var i = 1; i < 10; i++) {
							currFilled = false;
							
							if (noConflict(newSudokuPuzzle, row, col,  i)) {			// If no conflict	
								newSudokuPuzzle[row][col] = i;							// Assign the number
								currFilled = true;
							}
							
							if (currFilled)
								success = solveSudoku(newSudokuPuzzle, row + 1, 0);		// last column, so column is 0 and row + 1
							
							if (success)
								return success;
						}
						newSudokuPuzzle[row][col] = 0;	
						return success;  	// return success				
					}					
				}
			}
			
		}
		  
		function display(numArray){
			
			var i = 0;
			var j = 0;			
			while(i <= 8){					
				while(j <= 8){
					var id = "" + String(i) + String(j);
					document.getElementById(id).innerHTML = String(numArray[i][j]);		// display values in array (back into the buttons)
					document.getElementById(id).style="background-color:LightYellow";
					j++;				
				}
				i++;
				j= 0;
			}
			solved = true;
			
		}