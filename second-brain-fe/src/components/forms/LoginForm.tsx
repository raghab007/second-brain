function LoginForm() {
  return (
    <div>
      <div>
        <div>
          <div>
            <input type="text" placeholder="enter email" />
          </div>
          <div>
            <input type="password" placeholder="enter password" />
          </div>
          <div>
            <button>Login</button>
          </div>
          <div>
            <p>
              Dont have an account ?{" "}
              <span>
                <a>Sign up</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
