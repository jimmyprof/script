let votes = {
    "Candidate 1": 0,
    "Candidate 2": 0,
    "Candidate 3": 0
};

document.getElementById("vote-btn").addEventListener("click", function(event){
    event.preventDefault();
    let candidate = document.getElementById("candidate").value;
    if (candidate !== "") {
        votes[candidate]++;
        displayResults();
    } else {
        alert("Please select a candidate.");
    }
});

function displayResults() {
    let resultsHtml = "";
    for (let candidate in votes) {
        resultsHtml += `${candidate}: ${votes[candidate]} votes<br>`;
    }
    document.getElementById("results").innerHTML = resultsHtml;
}


const votingResultsDiv = document.getElementById('voting-results');
const candidate1VotesSpan = document.getElementById('candidate-1-votes');
const candidate2VotesSpan = document.getElementById('candidate-2-votes');
const candidate3VotesSpan = document.getElementById('candidate-3-votes');

// Update the display of voting results in real-time
function updateVotingResults(votes) {
    candidate1VotesSpan.textContent = votes.candidate1;
    candidate2VotesSpan.textContent = votes.candidate2;
    candidate3VotesSpan.textContent = votes.candidate3;
  }