"use client";
import { remove } from "@/app/actions/todoActions";
import Button from "../ui/Button";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { todoType } from "@/types/todoType";
import { BiTrash } from "react-icons/bi";

const DeleteTodo = ({ todo }: todoType) => {
  return (
    <Form action={remove}>
      <Input type="hidden" name="inputId" value={todo.id} />
      <Button
        style={{ background: "#181818" }}
        actionButton
        text={<BiTrash />}
        type="submit"
      />
    </Form>
  );
};

export default DeleteTodo;
