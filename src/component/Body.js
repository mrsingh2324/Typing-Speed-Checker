import React, { useEffect, useState } from "react";
import randomWords from "random-words";

const Body = () => {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);
  const [correctWords, setCorrectWords] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [incorrectWordIndex, setIncorrectWordIndex] = useState(-1);
  const [time, setTime] = useState(1);
  const [currentSpeed, setCurrentSpeed] = useState(0); // use currentSpeed instead of totalWordsTyped
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  const [speed, setSpeed] = useState(0);
  const [updatedSpeed, setUpdatedSpeed] = useState(0);
  const [takeInput, setTakeInput] = useState(true);
  const [finalSpeed, setFinalSpeed] = useState(" ");

  // Effect to handle countdown and calculate speed on timer completion
  useEffect(() => {
    if (time > 0 && isStarted) {
      const countdownIntervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
        setFinalSpeed(currentSpeed);
      }, 1000);

      return () => clearInterval(countdownIntervalId);
    } else if (time === 0 && isStarted) {
      // setEndTime(Date.now()); // Set end time
      // setIsStarted(false); // Stop the test
      calculateSpeed();
      setTakeInput(false);
    }
  }, [time, isStarted]);

  // Effect to calculate speed after timer completion
  useEffect(() => {
    if (endTime && !updatedSpeed) {
      calculateSpeed();
    }
  }, [endTime, updatedSpeed]);

  // Function to generate random words for typing test
  function generateRandomWords() {
    const randomWordsArray = randomWords({
      exactly: Math.round(time * 3),
      maxLength: 8,
    });

    setArray(randomWordsArray);
    setCorrectWords(0);
    setWordIndex(0);
    setInput("");
    setIncorrectWordIndex(-1);
    setCurrentSpeed(0); // set currentSpeed to 0 instead of totalWordsTyped
    setStartTime(null);
    setEndTime(null);
    setIsStarted(true);
    setUpdatedSpeed(0);
  }

  // Function to handle input change and calculate correct words
  // Function to handle input change and calculate correct words
  function handleInputChange(event) {
    setInput(event.target.value);
    const typedValue = event.target.value.trim();
    const currentWord = array[wordIndex];
    if (typedValue === currentWord && incorrectWordIndex === -1) {
      setCorrectWords((prevCorrectWords) => prevCorrectWords + 1);
      const timeElapsedInSeconds = (Date.now() - startTime) / 1000;
      setCurrentSpeed(
        Math.round(((wordIndex + 1) / timeElapsedInSeconds) * 60)
      ); // calculate current speed
    } else if (currentWord.startsWith(typedValue)) {
      setIncorrectWordIndex(-1);
    } else {
      setIncorrectWordIndex(wordIndex);
    }
  }

  // Function to handle key down events and move to next word on space bar press
  function handleKeyDown(event) {
    if (event.keyCode === 32) {
      // space bar pressed
      const currentWord = array[wordIndex];
      if (input.trim() === currentWord && input.trim().length > 0) {
        // increment correctWords only if spacebar is not pressed
        if (event.target.value.indexOf(" ") === -1) {
          setCorrectWords((prevCorrectWords) => prevCorrectWords + 1);
        }
        setIncorrectWordIndex(-1);
      }
      setInput("");
      setWordIndex((prevWordIndex) => prevWordIndex + 1);
      const timeElapsedInSeconds = (Date.now() - startTime) / 1000;
      setCurrentSpeed(
        Math.round(((wordIndex + 1) / timeElapsedInSeconds) * 60)
      ); // calculate current speed
      if (!startTime) {
        setStartTime(Date.now());
      }
      if (wordIndex === array.length - 1) {
        setEndTime(Date.now());
      }
    }
  }

  // Function to calculate speed and set it to state
  function calculateSpeed() {
    const timeInSeconds = time / 1000;
    const currentSpeed = Math.round((correctWords / timeInSeconds) * 60);
    setSpeed(currentSpeed);
    setCurrentSpeed(currentSpeed); // set currentSpeed to final speed after test completion
    setUpdatedSpeed(currentSpeed);
  }

  // Function to format time in MM:SS format
  function formatTime(seconds) {
    if (seconds <= 0) {
      return "00:00";
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const minutesStr = minutes.toString().padStart(2, "0");
    const secondsStr = remainingSeconds.toString().padStart(2, "0");
    return `${minutesStr}:${secondsStr}`;
  }

  // Function to handle time change from dropdown
  function handleTimeChange(event) {
    setTime(parseInt(event.target.value));
  }

  return (
    <div className="bg-gray-800 w-full h-full py-6 items-center flex flex-col gap-4 text-white">
      {!isStarted ? (
        <div className="mx-auto flex items-center flex-col gap-5">
          <div className="flex items-center justify-center gap-4">
            <label htmlFor="time-select">Select Time:</label>
            <select
              name="time-select"
              id="time-select"
              value={time}
              onChange={handleTimeChange}
              className="border border-gray-700 bg-transparent px-2 py-1 rounded-md"
            >
              <option value="15" className="bg-gray-700">
                Select
              </option>
              <option value="15" className="bg-gray-700">
                15 seconds
              </option>
              <option value="30" className="bg-gray-700">
                30 seconds
              </option>
              <option value="60" className="bg-gray-700">
                60 seconds
              </option>
              <option value="120" className="bg-gray-700">
                120 seconds
              </option>
            </select>
          </div>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={generateRandomWords}
          >
            Start Typing Test
          </button>
        </div>
      ) : (
        <div className="mx-auto w-full max-w-lg">
          <div className="flex justify-between items-center mb-4">
            <span>Time Remaining: {formatTime(time)}</span>
            {/* <span>Words Per Minute: {currentSpeed}</span> */}
          </div>
          <div className="bg-gray-900 p-6 rounded max-h-[100px] overflow-y-auto">
            {array.map((word, index) => (
              <span
                key={index}
                className={`${index === wordIndex ? "text-green-500" : ""} ${
                  index === incorrectWordIndex ? "text-red-500" : ""
                }`}
              >
                {word}{" "}
              </span>
            ))}
          </div>
          <input
            type="text"
            className={`bg-gray-900 w-full mt-4 py-2 px-4 text-xl text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            disabled={!takeInput}
            autoFocus
          />
          <div className="mt-4">
            {/* <span>Correct Words: {correctWords}</span> */}
            {/* <span className="ml-4">Total Words Typed: {wordIndex}</span> */}
          </div>
          {!takeInput ? (
            <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div class="bg-white text-black px-6 py-8 rounded-md shadow-md text-center">
                <h2 class="text-xl font-bold mb-4">Time's Up!</h2>
                <p class="text-lg ">Typing Speed : {finalSpeed}</p>
                {/* <button
                  className="bg-blue-600 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={window.location.reload()}
                >
                  Restart
                </button> */}
              </div>
            </div>
          ) : (
            " "
          )}
        </div>
      )}
    </div>
  );
};

export default Body;
