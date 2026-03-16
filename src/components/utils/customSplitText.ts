
export class CustomSplitText {
  elements: HTMLElement[] = [];
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];

  constructor(target: string | string[] | HTMLElement | HTMLElement[] | NodeList, options: { type: string; linesClass?: string }) {
    if (typeof target === 'string') {
      this.elements = Array.from(document.querySelectorAll(target));
    } else if (Array.isArray(target) && typeof target[0] === 'string') {
      target.forEach(selector => {
        this.elements.push(...Array.from(document.querySelectorAll(selector as string) as NodeListOf<HTMLElement>));
      });
    } else if (target instanceof HTMLElement) {
      this.elements = [target];
    } else {
      this.elements = Array.from(target as any);
    }

    this.split(options);
  }

  private split(options: { type: string; linesClass?: string }) {
    const { type, linesClass } = options;
    const splitLines = type.includes('lines');
    const splitChars = type.includes('chars');

    this.elements.forEach(el => {
      const text = el.innerText;
      el.innerHTML = '';
      
      // Basic implementation: we'll wrap words and chars
      // Lines are harder without measuring, but we'll try a simple word-based wrap
      
      const words = text.split(/\s+/);
      words.forEach((word, wordIdx) => {
        const wordSpan = document.createElement('span');
        wordSpan.style.display = 'inline-block';
        wordSpan.style.whiteSpace = 'nowrap';
        wordSpan.className = 'split-word';
        
        if (splitChars) {
          word.split('').forEach(char => {
            const charSpan = document.createElement('span');
            charSpan.style.display = 'inline-block';
            charSpan.innerText = char;
            charSpan.className = 'split-char';
            wordSpan.appendChild(charSpan);
            this.chars.push(charSpan);
          });
        } else {
          wordSpan.innerText = word;
        }

        el.appendChild(wordSpan);
        this.words.push(wordSpan);

        if (wordIdx < words.length - 1) {
          el.appendChild(document.createTextNode(' '));
        }
      });

      if (splitLines) {
        // Simple line wrapping by grouping words
        // In a real implementation this requires layout measurement
        // For now, we'll just wrap the core content in a line class if specified
        if (linesClass) {
          const lineSpan = document.createElement('div');
          lineSpan.className = linesClass;
          while (el.firstChild) {
            lineSpan.appendChild(el.firstChild);
          }
          el.appendChild(lineSpan);
          this.lines.push(lineSpan);
        }
      }
    });
  }

  revert() {
    this.elements.forEach(el => {
      el.innerHTML = el.innerText;
    });
  }
}
