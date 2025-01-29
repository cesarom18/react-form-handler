import { ChangeEventHandler, MouseEventHandler } from "react";

import { Button } from "./components/Button";
import { Input } from "./components/Input";

export const App = () => {
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.value);
    }

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        console.log("Example");
    }

    return (
        <div className="hero is-fullheight">
            <div className="hero-body is-flex is-justify-content-center is-align-items-center is-flex-direction-column">
                <Input
                    placeholder="Name"
                    handleChange={handleChange} />
                <Button handleClick={handleClick}>Example</Button>
            </div>
        </div>
    )
}