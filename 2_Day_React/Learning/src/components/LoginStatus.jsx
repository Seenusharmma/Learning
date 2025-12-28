function LoginStatus (isLoggedIn){
    if(isLoggedIn) {
        return <h2>Welcome Back 👋</h2>
    }
    return(
        <div>
        <h2>Please Loggin</h2>
        </div>
    )
}

export default LoginStatus;