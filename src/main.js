/* Adapted from Solid Sierpinski Triangle Demo - The MIT License - Ryan Carniato */
import { h, observable } from 'sinuous';
import { subscribe } from 'sinuous/observable';

const TARGET = 25;

const dePrioritize = signal => {
  let i, t;
  const delayed = observable(signal());
  const box = { current: null };
  const method = () => {
    cancelIdleCallback(i);
    clearTimeout(t);
    t = null;
    delayed(box.current);
  };

  subscribe(() => {
    box.current = signal();
    cancelIdleCallback(i);
    if (!t) t = setTimeout(method, ~~(Math.random() * 4 + 1) * 100);
    i = requestIdleCallback(method);
  });

  return delayed;
};

const TriangleDemo = () => {
  const elapsed = observable(0);
  const seconds = observable(0);
  const scale = () => {
    const e = elapsed() / 1000 % 10;
    return  1 + (e > 5 ? 10 - e : e) / 10;
  };
  const start = Date.now();

  setInterval(() => seconds((seconds() % 10) + 1), 1000);

  const update = () => {
    elapsed(Date.now() - start);
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);

  const style = () => ({
    transform: 'scaleX(' + scale() / 2.1 + ') scaleY(0.7) translateZ(0.1px)'
  });

  return html`
    <div class=container style=${style}>
      <${Triangle} x=${0} y=${0} s=${1000} seconds=${seconds} />
    </div>`;
};

const Triangle = ({ x, y, s, seconds }) => {
  if (s <= TARGET) {
    return html`
      <${Dot} x=${x - TARGET / 2} y=${y - TARGET / 2} s=${TARGET} text=${seconds} />
    `;
  }
  s = s / 2;

  if (s === 125) seconds = dePrioritize(seconds);

  // var slowDown = true;
  // if (slowDown) {
  //   var e = performance.now() + 0.8;
  //   while (performance.now() < e) {
  //     // Artificially long execution time.
  //   }
  // }

  return html`
    <${Triangle} x=${x} y=${y - s / 2} s=${s} seconds=${seconds} />
    <${Triangle} x=${x - s} y=${y + s / 2} s=${s} seconds=${seconds} />
    <${Triangle} x=${x + s} y=${y + s / 2} s=${s} seconds=${seconds} />
  `;
};

const Dot = ({x, y, s, text}) => {
  const hover = observable(false);
  const onEnter = () => hover(true);
  const onExit = () => hover(false);

  s = s * 1.3;

  const style = () => ({
    width: s + 'px',
    height: s + 'px',
    left: x + 'px',
    top: y + 'px',
    'border-radius': s / 2 + 'px',
    'line-height': s + 'px',
    background: hover() ? '#ff0' : '#61dafb'
  });

  return html`<div class=dot style=${style} onmouseenter=${onEnter} onmouseleave=${onExit}>
    ${() => hover() ? '**' + text() + '**' : text()}
  </div>`;
};

document.body.appendChild(TriangleDemo());
