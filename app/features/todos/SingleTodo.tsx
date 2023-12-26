interface SingleTodoProps {
  text: string;
  onDelete: () => void;
}

const SingleTodo = ({ text, onDelete }: SingleTodoProps) => {
  return (
    <div className="bg-gray-100 p-4 my-2 rounded-md flex justify-between items-center border border-gray-300">
      <p className="text-gray-700">{text}</p>
      <button
        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors duration-300"
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default SingleTodo;
