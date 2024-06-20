import ChangeTodo from "./ChangeTodo";
import { todoType } from "@/types/todoType";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";

const Todo = ({ todo }: { todo: todoType }) => {
  return (
    <div className="md:w-full flex items-center justify-between bg-[#616467] py-6 px-20 rounded-md text-white tracking-widest">
      <span className="text-center font-bold uppercase">{todo.title}</span>

      <div className="flex justify-center items-center">
        <div className="flex items-center gap-5">
          <ChangeTodo todo={todo} />

          <div className="flex items-center justify-center gap-2">
            <EditTodo todo={todo} />
            <DeleteTodo todo={todo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
