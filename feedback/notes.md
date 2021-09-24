# Feedback

_Right click on the file and click Open Preview or `ctrl/cmd + shift + v` to open preview_

## Goals

1.  Working Calculator:

    - Yes 100% working calculator which isn't reinventing maths.

2.  Practice using Git / Github Flow:

    - Yes, no branches 18 meaningful commits! Amazing, keep it up.

3.  Application of what you are learning

- 110%, It looks great and you are still using SCSS and BEM etc which is great.
- You want to keep your main.scss file in your styles folder

---

## Specification

1. PSEUDOCODE - not sure

   - I am not sure as you might have deleted it.
   - If you haven't you have got to try it out.

2. README - kinda done

   - Yes you have one but you want add some spiel about the project.
     - How you approached it
     - How you can you get set up with the project?

3. 15 commits - done

4. EVAL? - done

   - This commit "can't use eval, need new way"

5. CAN'T EXPLAIN IT, YOU CANT USE IT - done

   - All good in terms of your code it is very readable and logical. I think if you had to you would be able to talk through it line by line.

---

## Overall

A solid calculator in terms of functionality and UI. Good going mate, I can see piece of everything we have covered so far which is great. Your code reads well as well which is a bonus.

---

## To work on

This is just constructive so you do not have to implement it, its just to tie it up with bows and ribbons.

## Bugs

- If you do a calculation and then hit an operator it acts strange
- Multiple decimals eg 5.5.5.5.5
- / 0 will give you infinity

## House keeping

- Remove console.log()'s
- Keep your functions consistent either all `() => {}` or all `function() {}`

## Hint

If you do a calculation and then hit an operator it acts strange. You can avoid it by setting the result of your calculation to your displays and variables.

Your code

```js
equals.addEventListener("click", e => {
  display.innerText = calculate(result, displayInput1);
});
```

could be

```js
// lines 58 to 63
equals.addEventListener("click", e => {
  const calculation = calculate(result, displayInput1);
  display2.textContent = "";
  display.innerText = calculation;
  displayInput1 = calculation;
});
```

---
