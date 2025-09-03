function Alert({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

export default function App() {
  return (
    <div>
      <Alert text="Click me" onClick={() => alert("Hello!")} />
    </div>
  );
}
