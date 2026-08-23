# Player

**A seven-step click-through story about how I got into QA.**

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/vanilla%20JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

**[▶ Open the demo](https://pablizho.github.io/Player/)** · no dependencies, no build, three files

---

## What it is

A CV is a list. This is the same information as a sequence: seven stages, each an image and a paragraph, advanced by one button, ending on a link to the full portfolio. It is deliberately small — the point was to see whether a career reads better as a walk-through than as a table.

## How it works

Three files at the root and nothing else.

All content lives in one module-scope array:

```js
const stages = [
  { img: '…', text: '…' },
  // 7 entries
];
```

State is a single `let current = 0`. `showStage(index)` swaps the image and the caption **and** relabels the button — the same function that moves the story forward decides whether the call to action reads "Далее" or "Открыть портфолио", so there is exactly one place where a stage transition is expressed. One click listener increments the index; running past the end navigates away.

Captions are written with `textContent` rather than `innerHTML` — the data is static, but it costs nothing to be right about it.

## Known issues

- **Most of `style.css` is dead.** The file is ~345 lines, of which roughly 30 are used. It carries full rules for `header nav ul li a`, `#about`, `#skills .skills-list`, `.job-entry`, `.project-card`, `#contact` and three media queries — none of those selectors exist in `index.html`. It is a copy-paste from another site and should be cut to the live rules.
- **Every image is hotlinked to a third-party CDN.** Six Unsplash URLs and one municipal site. They can 404 or be blocked at any time, and there is no `onerror` fallback — the page then shows a broken-image icon.
- `alt=""` is hardcoded and never populated from the stage data, so the images are invisible to screen readers. Ironically the stylesheet does ship a `.visually-hidden` helper and proper `:focus` styles; neither is used.
- No back button, no progress indicator, no keyboard or swipe support. You cannot re-read stage 3.
- No preloading, so each click blanks the frame while the next remote image downloads.
- Russian only. No README until this one, no license.

---

<details>
<summary><b>🇷🇺 По-русски</b></summary>

<br>

**История о том, как я пришёл в QA, в семь кликов.** [▶ Открыть демо](https://pablizho.github.io/Player/)

Резюме — это список. Здесь та же информация подана как последовательность: семь стадий, у каждой картинка и абзац, перелистываются одной кнопкой, в конце ссылка на полное портфолио. Сделано намеренно маленьким — хотелось проверить, читается ли карьера лучше как проход, чем как таблица.

Три файла, ноль зависимостей, ноль сборки. Всё содержимое — один массив `stages`, всё состояние — одна переменная `current`. Функция `showStage` и меняет содержимое, и переименовывает кнопку, поэтому переход между стадиями описан ровно в одном месте.

**Что не так:** около 90% `style.css` — мёртвые правила, скопированные с другого сайта; все картинки взяты по прямым ссылкам с чужих CDN и могут отвалиться в любой момент, фолбэка нет; `alt` пустой и не заполняется; нельзя вернуться назад; нет предзагрузки, поэтому при каждом клике кадр пустеет, пока грузится следующая картинка.

</details>
