import { MouseEventHandler } from "react";

import { Button } from "./components/Button";

export const App = () => {
    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        console.log("Example");
    }


    return (
        <div className="hero is-fullheight">
            <div className="hero-body is-flex is-justify-content-center is-align-items-center">
                <Button handleClick={handleClick}>Example</Button>
            </div>
        </div>
    )
}