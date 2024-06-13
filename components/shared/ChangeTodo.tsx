import Form from "../ui/Form";
import Button from "../ui/Button";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Input from "../ui/Input";
import { changeStatus } from "@/app/actions/todoActions";
import { todoType } from "@/types/todoType";

interface todoProps {
  todo: todoType;
}

const ChangeTodo = ({ todo }: todoProps) => {
  return (
    <Form action={changeStatus}>
      <Input name="inputId" value={todo.id} type="hidden" />
      <Button
        actionButton={true}
        type="submit"
        text={<AiOutlineCheckCircle />}
        style={{
          backgroundColor: todo.isCompleted ? "#4A7C59" : "",
          border: "none",
        }}
      />
    </Form>
  );
};

export default ChangeTodo;
