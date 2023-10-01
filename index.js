function showEmoji(id) {
  const emojiElement = document.getElementById(id);
  if (emojiElement.innerHTML === "😀") {
    emojiElement.innerHTML = "";
    emojiElement.style.display = "none";
    emojiElement.style.fontSize = "0px";
  } else {
    emojiElement.innerHTML = "😀";
    emojiElement.style.display = "inline-block";
    emojiElement.style.fontSize = "80px";
  }
}
