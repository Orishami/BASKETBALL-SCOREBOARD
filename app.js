'Use script'

let homeScore = 0;
    let guestScore = 0;

    function updateScore(team, points) {
      if (team === 'home') {
        homeScore += points;
        document.getElementById('homeScore').innerText = homeScore;
      } else if (team === 'guest') {
        guestScore += points;
        document.getElementById('guestScore').innerText = guestScore;
      }
    }

    function resetScores() {
      homeScore = 0;
      guestScore = 0;
      document.getElementById('homeScore').innerText = homeScore;
      document.getElementById('guestScore').innerText = guestScore;
    }