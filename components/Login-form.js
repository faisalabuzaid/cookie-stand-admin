export default function LoginForm({submitLogin}) {
    function handleLogin(e) {
        e.preventDefault()
        const userData = {
            'username': e.target.username.value,
            'password':e.target.password.value
        }
        submitLogin(userData)
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                <fieldset>
                    <input type="text" id="username" placeholder="Enter your ysername" name="username" required/>
                    <input type="password" id="password" placeholder="Enter your password" name="password" required/>
                    <button type="submit">Log in</button>
                </fieldset>
            </form>
        </div>
    )
}