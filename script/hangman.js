window.onload = function () 
{
	
	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	
	// new dictionary that has only words of at least 6 letters (and no hyphens)
	let newdict = []
	for (let word of dictionary)
	{
		if ((word.length >= 6) && (word.indexOf("-") == -1))
		{
			newdict.push(word)
		}
	}
	
	let wordIndex = Math.floor(Math.random() * newdict.length);	//console.log(wordIndex);  
	var word 	  = newdict[wordIndex];  // Selected word
	var guess ;             		// Guess
	var guesses   = [ ];      		// Stored guesses
	var lives ;             		// Lives
	var counter ;           		// Count correct guesses
	var space;              		// Number of spaces in word '-'

	// Get elements
	var showLives = document.getElementById("mylives");

    // create alphabet ul
    var buttons = function () 
	{
		myButtons = document.getElementById('buttons');
		letters   = document.createElement('ul');

		for (var i = 0; i < alphabet.length; i++) 
		{
			
			letters.id = 'alphabet';
			list 	   = document.createElement('li');
			//list.id = 'letter';

			list.innerHTML = alphabet[i];
			check();
			myButtons.appendChild(letters);
			letters.appendChild(list);
			if(i == 12)
			{
				pEle = document.createElement('p');
				pEle.innerHTML = '&nbsp;'
				letters.appendChild(pEle);
			}
		}
	}

	// Create guesses ul
	result = function () {
		wordHolder = document.getElementById('hold');
		correct = document.createElement('ul');

		for (var i = 0; i < word.length; i++) 
		{
			correct.setAttribute('id', 'my-word');
			guess = document.createElement('li');
			guess.setAttribute('class', 'guess');
			if (word[i] === "-")
			{
				guess.innerHTML = "-";
				space = 1;
			} else 
			{
				guess.innerHTML = "_";
			}

			guesses.push(guess);
			wordHolder.appendChild(correct);
			correct.appendChild(guess);
		}
	}
  
	//Show lives
	comments = function () 
	{
		showLives.innerHTML = "You have " + lives + " lives";
		if (lives < 1) 
		{
		  showLives.innerHTML = "Game Over";
		}
		for (var i = 0; i < guesses.length; i++) 
		{
		  if (counter + space === guesses.length) 
		  {
			showLives.innerHTML = "You Win!";
		  }
		}
	}


  // OnClick Function
	check = function () {
		list.onclick = function () 
		{
			var geuss = (this.innerHTML);
			this.setAttribute('id', 'active');
			document.getElementById('active').style.backgroundColor="grey";
			this.removeAttribute('id');
			this.onclick = null;
			for (var i = 0; i < word.length; i++)
			{
				if (word[i] === geuss) 
				{
				  guesses[i].innerHTML = geuss;
				  counter += 1;
				} 
			}
			var j = (word.indexOf(geuss));
			if (j === -1) 
			{
				lives -= 1;
				comments();
				animate();
			} else 
			{
				comments();
			}
		}
	}
      
	// Play	
	buttons();
    guesses = [ ];
    lives 	= 10;
    counter = 0;
    space 	= 0;
    result();
    comments();
  
}