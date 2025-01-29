import {
    ChangeEventHandler,
    MouseEventHandler,
    useState
} from "react";

import { Button } from "./Button";
import { Input } from "./Input";

export type UserFormState = {
    name: string,
    username: string
}

const initialValue: UserFormState = {
    name: "",
    username: ""
}

interface UserFormProps {
    handleSubmit: (user: UserFormState) => void
}

export const UserForm = ({ handleSubmit }: UserFormProps) => {
    const [form, setForm] = useState(initialValue);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const name = e.target.name as keyof UserFormState;

        setForm({ ...form, [name]: e.target.value });
    }

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();

        handleSubmit(form);
        setForm(initialValue);
    }

    return (
        <>
            <Input
                label="Name"
                name="name"
                placeholder="Name"
                value={form.name}
                handleChange={handleChange} />
            <Input
                label="Username"
                name="username"
                placeholder="Username"
                value={form.username}
                handleChange={handleChange} />
            <Button handleClick={handleClick}>Add</Button>
        </>
    )
}