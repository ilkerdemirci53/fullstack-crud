import Form from "../ui/Form";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { create } from "../../app/actions/todoActions";

const AddTodo = () => {
  return (
    <Form action={create}>
      <div className="flex items-center justify-center flex-col gap-4 md:flex-row md:gap-0">
        <Input name="input" type="text" placeholder="Add Todo..." />
        <Button text="Add Todo" type="submit" />
      </div>
    </Form>
  );
};

export default AddTodo;
