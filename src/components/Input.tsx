import { ChangeEventHandler } from "react";

interface InputProps {
    placeholder: string,
    handleChange: ChangeEventHandler<HTMLInputElement>
}

export const Input = ({ placeholder, handleChange }: InputProps) => {
    return (
        <div className="field">
            <label className="label">Name</label>
            <div className="control">
                <input
                    className="input is-primary"
                    placeholder={placeholder}
                    onChange={handleChange} />
            </div>
        </div>
    )
}