    const headsImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT90KDeqZYi-T35v_OSzD0ni5BVptmf2zlZ8A&s';
    const tailsImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAJE3uq6nTkmcjHvoS49YPiN8egqZd6Aa7vg&s';

    const headsBtn = document.getElementById('heads-btn');
    const tailsBtn = document.getElementById('tails-btn');
    const resultDiv = document.getElementById('result');

    function flipCoin(side) {
        if (side === 1) {
          console.log("You chose heads");
        } else {
          console.log("You chose tails");
        }
      }

    function flipCoin(userChoice) {
      const randomNum = Math.floor(Math.random() * 2) + 1;
      console.log(`Random number: ${randomNum}`);

      if (userChoice === randomNum) {  
        resultDiv.innerHTML = `You chose Heads and won! <img src="${headsImg}" alt="Heads">`;
      } else {
        resultDiv.innerHTML = `You chose Tails and won! <img src="${tailsImg}" alt="Tails">`;
      }
    }