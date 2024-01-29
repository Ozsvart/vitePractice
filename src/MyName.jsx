export function MyName({ name, age, isProgrammer, children }) {
  console.log("Is Programmer", isProgrammer);
  return (
    <div>
      {name} {age} {children}
    </div>
  );
}
