// 1) can this be accessible for screen reader?
// 2) container fixed area as to not move surrounding elements?
import { useState } from 'preact/hooks';

export default function Greeting({ messages }) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <p>{greeting}</p>
      <button
        onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}
