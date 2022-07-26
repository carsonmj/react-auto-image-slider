import { v4 as uuidv4 } from "uuid";

const generateKeys = (count: number = 1): Array<string> => {
  const result = [];

  for (let i = 1; i <= count; i++) {
    result.push(uuidv4());
  }

  return result;
};

const styles = {
  setTranslateEffect(target: HTMLElement, position: string, delay: number): void {
    target.style.transition = `all ${delay}ms ease`;
    target.style.transform = `translateX(${position})`;
  },

  setEndTransitionEffect(target: HTMLElement, delay: number): void {
    target.style.opacity = "0";
    target.style.transition = `opacity ${delay}ms ease`;
  },

  resetOpacityAndPosition(target: HTMLElement, position: string): void {
    target.style.transform = `translateX(${position})`;
    target.style.opacity = "1";
  },
};

export {
  generateKeys,
  styles
};