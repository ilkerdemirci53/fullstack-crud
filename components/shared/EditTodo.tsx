"use client";
import { edit } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useState } from "react";
import { todoType } from "@/types/todoType";
import { BiEdit } from "react-icons/bi";
import { BiSave } from "react-icons/bi";

const EditTodo = ({ todo }: { todo: todoType }) => {
  const [editTodo, setEditTodo] = useState(false);

  const handleEdit = () => {
    if (todo.isCompleted) {
      return;
    }
    setEditTodo(!editTodo);
  };

  const handleSubmit = () => {
    setEditTodo(false);
  };
  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        disabled={todo.isCompleted}
        actionButton
        style={{
          background: todo.isCompleted ? "gray" : "#181818",
          border: "none",
        }}
        text={<BiEdit />}
        onClick={handleEdit}
      />

      {editTodo && (
        <Form action={edit} onSubmit={handleSubmit}>
          <div className="flex items-center justify-center">
            <Input name="inputId" value={todo.id} type="hidden" />
            <Input type="text" name="newTitle" placeholder="Edit Todo..." />
            <Button
              actionButton
              style={{ background: "#181818", border: "none" }}
              text={<BiSave />}
              type="submit"
            />
          </div>
        </Form>
      )}
    </div>
  );
};

export default EditTodo;
