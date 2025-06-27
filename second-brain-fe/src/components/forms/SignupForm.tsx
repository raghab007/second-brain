export default function SignupForm() {
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
            <button>Signup</button>
          </div>
          <div>
            <p>
              Already have an account ?
              <span>
                <a>Login</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
