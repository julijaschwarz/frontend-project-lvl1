import toGame from '../engine.js';
import { minValue, maxValue, generateRandomNumber } from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (startProgression, stepProgression) => {
  const progressions = [];
  for (let i = 0; i < 10; i += 1) {
    const value = startProgression + stepProgression * i;
    progressions.push(value);
  }
  return progressions;
};

const getQuestionAnswer = () => {
  const minStep = 2;
  const maxStep = 10;
  const step = generateRandomNumber(minStep, maxStep);
  const start = generateRandomNumber(minValue, maxValue);
  const progression = getProgression(start, step);
  const minIndexOfHiddenNumber = 0;
  const maxIndexOfHiddenNumber = 9;
  const indexOfHiddenNumber = generateRandomNumber(minIndexOfHiddenNumber, maxIndexOfHiddenNumber);
  const answer = String(progression[indexOfHiddenNumber]);
  progression[indexOfHiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => toGame(description, getQuestionAnswer);
