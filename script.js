function addUser()
{
player1uid = document.getElementById("player1_uid_input").value;
player2uid = document.getElementById("player2_uid_input").value;
localStorage.setItem("Player1's session ID", player1uid);
localStorage.setItem("Player2's session ID", player2uid);
window.location ="game_page.html" 
}
