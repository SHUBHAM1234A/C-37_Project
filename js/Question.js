class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here...");
    this.input2 = createInput("Enter Correct Answer...");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("•Shubham's Quiz•");
    this.title.position(350, 0);

    this.question.html("Question:- What word is spelled incorrectly in every single dictionary?" );
    this.question.position(150, 80);
    this.option1.html("*Hint - Answer is in the question");
    this.option1.position(200, 120);
    this.option2.html("Answer on your own");
    this.option2.position(200, 140);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);


      /*if(contestantCount !== 2){
        fill("cyan");
        textSize(23);
        textFont("Times New Roman");
        text("Waiting for another player to responce",130,250);
      }*/
    
    });
  }
}
