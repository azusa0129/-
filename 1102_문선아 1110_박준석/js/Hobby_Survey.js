let name;

let currentStep = 0;
    const steps = document.querySelectorAll(".question-step");

    function showStep(index) {
      steps.forEach((step, i) => {
        step.style.display = i === index ? "block" : "none";
      });
    }

    function nextStep() {
      if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
      } else {
        recommendHobby();
      }
    }

    function recommendHobby() {
      const result = document.getElementById("result");
      const answers = [];

      for (let i = 1; i <= 10; i++) {
        const q = document.querySelector(`input[name="q${i}"]:checked`);
        if (!q) {
          result.innerText = "모든 질문에 응답해주세요!";
          document.getElementById("result-box").style.display = "block";
          return;
        }
        answers.push(q.value);
      }

      const recommendations = new Set();

      if (answers[0] === "예") {
        recommendations.add("축구");
        recommendations.add("농구");
        recommendations.add("야구");
        recommendations.add("배드민턴");
      }
      if (answers[1] === "예") {
        recommendations.add("축구");
        recommendations.add("농구");
        recommendations.add("야구");
      }
      if (answers[2] === "예") {
        recommendations.add("캠핑");
        recommendations.add("축구");
        recommendations.add("농구");
        recommendations.add("야구");
      }
      if (answers[3] === "예") {
        recommendations.add("독서");
        recommendations.add("요리");
        recommendations.add("연극감상");
      }
      if (answers[4] === "예") {
        recommendations.add("요리");
      }
      if (answers[5] === "예") {
        recommendations.add("독서");
        recommendations.add("연극감상");
      }
      if (answers[6] === "예") {
        recommendations.add("캠핑");
        recommendations.add("사진촬영");
      }
      if (answers[7] === "예") {
        recommendations.add("사진촬영");
      }
      if (answers[8] === "예") {
        recommendations.add("노래부르기");
        recommendations.add("연극감상");
      }
      if (answers[9] === "예") {
        recommendations.add("배드민턴");
        recommendations.add("축구");
        recommendations.add("농구");
        recommendations.add("야구");
      }

      if (recommendations.size > 0) {
        result.innerText = `${name}님께 어울리는 취미는 다음과 같습니다:\n- ` + Array.from(recommendations).join("\n- ");
      } else {
        result.innerText = "응답을 기반으로 적절한 취미를 찾지 못했어요. 다시 시도해볼까요?";
      }

      document.getElementById("result-box").style.display = "block";
    }

    document.addEventListener("DOMContentLoaded", () => {
      name = prompt("이름을 적어주세요.");
      alert(`${name}님 반갑습니다.`);
      showStep(0);
    });