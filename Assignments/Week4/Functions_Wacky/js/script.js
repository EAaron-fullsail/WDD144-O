	(function(){ // anon function

		var weasels = [];

		weasels[0]={"n": "Bob", "hungry": "yes"}
		weasels[1]={"n": "Steve", "hungry": "yes"}
		weasels[2]={"n": "Danny", "hungry": "no"}

		var a = 0;
		//a function with three params

		function countTheWeasels(a, w){

			for(var i = 0; i<weasels.length; i++){
				weasels[i].hungry === "yes" ? console.log(weasels[i].n + " the weasel is Hungry") : console.log(weasels[i].n + " weasel is is Napping") ;	//A ternary 

				if(weasels[i].hungry == "yes"){	//one logical operator
					a++;
		
				}else if(weasels[i].hungry == "no"){	// else if
					a--;
			
				}

			}

			console.log("You have "+ a + " hungry weasel(s)!");
			var totalPercHungry = "You have " + Math.round(a / weasels.length * 100) + "% of you weasels who are hungry";
			console.log(totalPercHungry);

		}
		//Expression with two arithmetic operators

		countTheWeasels(a, weasels);



	})();