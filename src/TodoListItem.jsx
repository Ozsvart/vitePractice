export function TodoListItem({ children, isComplete }) {
  return (
    <div>
      <label>
        {children}
        <input type="checkbox" defaultChecked={isComplete} />
      </label>
    </div>
  );
}
