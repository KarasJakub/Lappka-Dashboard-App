import Button from "components/global/Button/ButtonComponent";

const Login = () => {
  return (
    <>
      <Button size="Medium" arrow variant="primary">
        Primary
      </Button>
      <Button size="Large" variant="secondary">
        Secondary
      </Button>
      <Button variant="toggle" />
    </>
  );
};

export default Login;
