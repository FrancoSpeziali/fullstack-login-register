import styles from "./index.module.css";

export default function ResetPassword() {
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input name="user_name" type="text" required={true} />
        </label>
        <label>
          New Password
          <input name="password" type="password" required={true} />
        </label>
        <button disabled="disabled">Update Password</button>
      </form>
    </div>
  );
}
