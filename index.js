function destroyer(arr) {
	
	//Variables for separating arguments
	var destroyItems, fullArray;

	//All array items to test, first index of the argument obj
	//called below
	fullArray = arguments[0];

	//Add remaining arguments to an array for future testing
	function setArgs(args){
		var removalItems = [];
		for (var i = 1; i < args.length; i++) {
			removalItems.push(args[i]);
		}

		//Return the array for future use
		return removalItems;
	} //setArgs

	//Assign arguments to be removed to array and 
	//variable called destroyItems
	destroyItems = setArgs(arguments);

	//A function that removes the destroy items from the array
	function removeItems(args){
		var c = [];
		//Loop through all of the fullArray items for testing
		for (var i = 0; i < args.length; i++) {
			//Check that items are not set for removal with 
			//the indexOf parameter. indexOf allows us to filter non matched 
			//array loop items. If destroyItems do not match the 
			//fullArray loop items we push these clean accepted items to the
			//new array. Also negates having to use nested loops. 
			if (destroyItems.indexOf(args[i]) === -1)
			{
				//Push all non matched items to a new returned array
				c.push(args[i]);
			}  
		}
		return c;
	} //checkItems Ends

	return removeItems(fullArray);
}

destroyer([7, 3, 5, 5, 5, 1, 8, 8, 2, 2], 2, 3, 5);