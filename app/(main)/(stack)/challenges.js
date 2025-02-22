import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const questions = [
  {
    question: "What is the meaning of hello ?",
    options: ["مرحبا", "أهلا", "جيدة", "بخير"],
    correctAnswer: "مرحبا",
  },
  {
    question: "What is the meaning of goodbye ?",
    options: ["وداعا", "فتاة", "اهلا", "تفاحة"],
    correctAnswer: "وداعا",
  },
  {
    question: "What is the meaning of a girl ?",
    options: ["امرأة", "قمر", "فتاة", "ولد"],
    correctAnswer: "فتاة",
  },
  {
    question: "What is the meaning of home ?",
    options: ["سيارة", "منزل", "غرفة", "طيارة"],
    correctAnswer: "منزل",
  },
  {
    question: "What is the meaning of رجل ?",
    options: ["a boy", "a man", "a car", "an apple"],
    correctAnswer: "a man",
  },

  // Add more questions as needed
];

const QuizScreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    // Check if the selected answer is correct
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    // Store the answer and correct answer
    setAnsweredQuestions([
      ...answeredQuestions,
      {
        question: questions[currentQuestionIndex].question,
        selectedAnswer,
        correctAnswer: questions[currentQuestionIndex].correctAnswer,
      },
    ]);

    // Move to the next question or finish quiz
    setSelectedAnswer(null);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // Quiz finished, handle the result
      alert(`Quiz finished! Your score is ${score + 1}/${questions.length}`);
      // Reset for a new quiz
      // setCurrentQuestionIndex(0);
      // setScore(0);
      // setAnsweredQuestions([]);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      {currentQuestionIndex <= questions.length - 1 ? (
        <>
          <Text style={styles.question}>{currentQuestion.question}</Text>
          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleAnswerSelection(option)}
              style={[
                styles.answerButton,
                selectedAnswer === option && styles.selectedAnswer,
                selectedAnswer !== option && styles.unselectedAnswer,
              ]}
            >
              <Text style={styles.answerText}>{option}</Text>
            </TouchableOpacity>
          ))}
          <Text style={styles.counter}>
            {currentQuestionIndex + 1} / {questions.length}
          </Text>
          <TouchableOpacity
            style={[
              styles.nextButton,
              !selectedAnswer && styles.disabledButton,
            ]}
            onPress={handleNextQuestion}
            disabled={!selectedAnswer}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View>
          <Text style={styles.finalScore}>
            Your final score is {score}/{questions.length}
          </Text>
          {answeredQuestions.map((answeredQuestion, index) => (
            <View key={index} style={styles.questionResult}>
              <Text style={styles.questionResultText}>
                {answeredQuestion.question}
              </Text>
              <Text
                style={[
                  styles.answerText,
                  answeredQuestion.selectedAnswer ===
                  answeredQuestion.correctAnswer
                    ? styles.correctAnswer
                    : styles.incorrectAnswer,
                ]}
              >
                Your Answer: {answeredQuestion.selectedAnswer}
              </Text>
              <Text style={styles.correctAnswerText}>
                Correct Answer: {answeredQuestion.correctAnswer}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  question: {
    fontSize: 20,
    marginBottom: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  answerButton: {
    width: "90%",
    padding: 15,
    marginVertical: 8,
    backgroundColor: "#D3D3D3", // Default background color
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  selectedAnswer: {
    backgroundColor: "#bdc3c7", // red for selected
  },
  unselectedAnswer: {
    backgroundColor: "#f0f0f0", // Light gray for unselected
  },
  answerText: {
    fontSize: 18,
    color: "#333",
  },
  counter: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "center",
  },
  nextButton: {
    backgroundColor: "#CF3E3E", // Grey button
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 20,
  },
  disabledButton: {
    backgroundColor: "#D3D3D3", // Light gray when disabled
  },
  nextButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  finalScore: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  questionResult: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#D3D3D3",
    paddingBottom: 10,
  },
  questionResultText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  correctAnswerText: {
    fontSize: 16,
    color: "#4CAF50",
  },
  incorrectAnswerText: {
    fontSize: 16,
    color: "#F44336",
  },
  correctAnswer: {
    color: "#4CAF50",
  },
  incorrectAnswer: {
    color: "#F44336",
  },
});

export default QuizScreen;
