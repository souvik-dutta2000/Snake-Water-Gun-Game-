function playGame(userChoice) {
    const choices = ['snake', 'water', 'gun'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    const userImg = document.querySelector(`img[alt='${userChoice}']`);
    const choicesContainer = document.querySelector('.choices');

    
    
    // Remove all images before clash effect
    choicesContainer.innerHTML = '';
    
    // Create new user and computer images
    const newUserImg = document.createElement('img');
    newUserImg.src = `img/${userChoice}.png`;
    newUserImg.alt = userChoice;
    newUserImg.classList.add('clash-img');
    newUserImg.style.position = 'absolute';
    newUserImg.style.left = '20%';
    newUserImg.style.transition = 'left 1s ease-in-out';
    
    const computerImg = document.createElement('img');
    computerImg.src = `img/${computerChoice}.png`;
    computerImg.alt = computerChoice;
    computerImg.classList.add('clash-img');
    computerImg.style.position = 'absolute';
    computerImg.style.right = '20%';
    computerImg.style.transition = 'right 1s ease-in-out';
    
    // Append images for clash effect
    choicesContainer.appendChild(newUserImg);
    choicesContainer.appendChild(computerImg);
    
    setTimeout(() => {
        newUserImg.style.left = '45%';
        computerImg.style.right = '45%';
    }, 100);
    
    // Determine result after the clash
    setTimeout(() => {
        if (userChoice === computerChoice) {
            result = "It's a Tie!";
        } else if (
            (userChoice === 'snake' && computerChoice === 'water') ||
            (userChoice === 'water' && computerChoice === 'gun') ||
            (userChoice === 'gun' && computerChoice === 'snake')
        ) {
            result = 'You Win!';
        } else {
            result = 'You Lose!';
        }
        
        // Show result in the result box instead of an alert
        document.getElementById('result').innerText = `You chose ${userChoice}, Computer chose ${computerChoice}. ${result}`;
        
        // Reset game after result
        setTimeout(() => location.reload(), 3000);
    }, 1500);
}
