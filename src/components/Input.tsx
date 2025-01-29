import { ChangeEventHandler } from "react";

interface InputProps {
    label: string,
    name: string,
    placeholder: string,
    value: string,
    handleChange: ChangeEventHandler<HTMLInputElement>
}

export const Input = ({ label, name, placeholder, value, handleChange }: InputProps) => {
    return (
        <div className="field">
            <label className="label">{label}</label>
            <div className="control">
                <input
                    className="input is-primary"
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange} />
            </div>
        </div>
    )
}