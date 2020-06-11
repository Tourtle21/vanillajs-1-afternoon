console.log('The house always wins!');

const setCard = () => {
    const cardId = document.getElementById("cardId").value;
    const cardStyle = document.getElementById("style").value;
    const card = document.getElementById(cardId);
    card.style.color = cardStyle;
    document.getElementById('cardId').value = "";
    document.getElementById('style').value = "";
};








const reset = () => {
    document.getElementById("spades").style.color = "grey";
    document.getElementById("clubs").style.color = "grey";
    document.getElementById("diamonds").style.color = "grey";
    document.getElementById("hearts").style.color = "grey";
};