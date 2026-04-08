export default function MyButton() {
  const handleClick = () => {
    alert("Button clicked");
  };
  return (
    <button
      style={{
        padding: "20px",
        color: "black",
        backgroundColor: "green",
      }}
      onClick={handleClick}
    >
      Click Me
    </button>
  );
}
