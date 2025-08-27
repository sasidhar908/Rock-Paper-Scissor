 const score = JSON.parse(localStorage.getItem('score')) ||
        {
            Wins: 0,
            Losses: 0,
            Tie: 0,
        };

        document.querySelector('.js-score').innerHTML = `Wins = ${score.Wins}, Losses = ${score.Losses}, Tie = ${score.Tie}`;

        function playerGame(playerMove) {
            let result = '';
            const computerMove = pickcomputerMove();
            if (playerMove === 'scissor') {

                if (computerMove === 'rock') {
                    result = 'You Lose';
                }
                else if (computerMove === 'paper') {
                    result = 'You Win';
                }
                else if (computerMove === 'scissor') {
                    result = 'Tie';
                }
            }
            else if (playerMove === 'paper') {

                if (computerMove === 'rock') {
                    result = 'You Win';
                }
                else if (computerMove === 'paper') {
                    result = 'Tie';
                }
                else if (computerMove === 'scissor') {
                    result = 'You Lose';
                }
            }
            else if (playerMove === 'rock') {

                if (computerMove === 'rock') {
                    result = 'Tie';
                }
                else if (computerMove === 'paper') {
                    result = 'You Lose';
                }
                else if (computerMove === 'scissor') {
                    result = 'You Win';
                }

            }
            document.querySelector('.result').innerHTML = result;
            if (result === 'You Win') {
                score.Wins = score.Wins + 1;
            } else if (result === 'You Lose') {
                score.Losses = score.Losses + 1;
            } else if (result === 'Tie') {
                score.Tie = score.Tie + 1
            }
            localStorage.setItem('score', JSON.stringify(score))

            updateScoreElement();
            document.querySelector('.moves').innerHTML = `You <img src="${playerMove}-emoji.png" class="icon"> <img src="${computerMove}-emoji.png" class="icon">computer`;

        }
        function updateScoreElement() {
            document.querySelector('.js-score').innerHTML = `Wins = ${score.Wins}, Losses = ${score.Losses}, Tie = ${score.Tie}`;
        }
        function pickcomputerMove() {
            let computerMove = '';
            let number = Math.random();
            if (number >= 0 && number < 1 / 3) {
                computerMove = 'rock'
            }
            else if (number >= 1 / 3 && number < 2 / 3) {
                computerMove = 'paper';
            }
            else if (number >= 2 / 3 && number < 1) {
                computerMove = 'scissor';
            }
            return computerMove;
        }
