import {
    ChangeEventHandler,
    MouseEventHandler,
    useState
} from "react";

import { Button } from "./components/Button";
import { Input } from "./components/Input";

type FormState = {
    name: string,
    lastName: string
}

const initialValue: FormState = {
    name: "",
    lastName: ""
}

export const App = () => {
    const [form, setForm] = useState(initialValue);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const name = e.target.name as keyof FormState;

        setForm({ ...form, [name]: e.target.value });
    }

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();

        setForm(initialValue);
    }

    return (
        <div className="hero is-fullheight">
            <div className="hero-body is-flex is-justify-content-center is-align-items-center is-flex-direction-column">
                <Input
                    label="Name"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    handleChange={handleChange} />
                <Input
                    label="LastName"
                    name="lastName"
                    placeholder="LastName"
                    value={form.lastName}
                    handleChange={handleChange} />
                <Button handleClick={handleClick}>Example</Button>
            </div>
        </div>
    )
}