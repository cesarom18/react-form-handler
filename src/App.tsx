import { UserForm } from "./components/UserForm";

export const App = () => {
    return (
        <div className="hero is-fullheight">
            <div className="hero-body is-flex is-justify-content-center is-align-items-center is-flex-direction-column">
                <UserForm handleSubmit={user => console.log("Example")} />
            </div>
        </div>
    )
}