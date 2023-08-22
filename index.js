const items = document.querySelectorAll(".question");
const que = document.querySelectorAll(".question span");

function openCloseAnswer() {
  const answerId = this.id.replace("que", "ans");

  if (document.getElementById(answerId).style.display === "block") {
    document.getElementById(answerId).style.display = "none";
    //화살표 모양 아래로
    document.getElementById(this.id + "-toggle").style.transform =
      "rotate(0deg)";
    //질문 굵기 보통
    document.getElementById(this.id).style.fontWeight = "normal";
    document.getElementById(this.id).style.color = "gray";
  } else {
    document.getElementById(answerId).style.display = "block";
    //화살표 모양 위로
    document.getElementById(this.id + "-toggle").style.transform =
      "rotate(180deg)";
    //질문 굵기 굵게
    document.getElementById(this.id).style.fontWeight = "bold";
    document.getElementById(this.id).style.color = "black";
  }
}

items.forEach((item) => item.addEventListener("click", openCloseAnswer));
