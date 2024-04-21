export default function InputComponent({ onInsert, onDelete }) {
  return (
    <div className="in-screen">
      <div className="button" onClick={onInsert}>
        Insert
      </div>
      <div className="button" onClick={onDelete}>
        Delete
      </div>
    </div>
  );
}
