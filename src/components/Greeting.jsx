import { useState } from 'preact/hooks';

export default function Greeting({ messages }) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <p>
      <h3 style="text-wrap:balance">{greeting}</h3>
      <button
        onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </p>
  );
}
