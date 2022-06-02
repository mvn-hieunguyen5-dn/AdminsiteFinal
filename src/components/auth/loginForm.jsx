import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import useAuth from "../../hooks/useAuth";
export default function LoginForm() {
  const { login } = useAuth();
  const [msg, setMSG] = useState("");
  const onFinish = async (values) => {
    console.log("Success:", values);
    if (values.username === "admin" && values.password === "admin") {
      await login(values.username, values.password);
      window.location.reload();
      setMSG("Account is verified, good to see again");
    } else {
      setMSG("Wrong username or password !!");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <h1 className="my-5">Wellcome back </h1>
      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="text-2xl"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>{" "}
        <span className="text-red-500 text-right text-sm">{msg}</span>
      </Form>
    </>
  );
}
