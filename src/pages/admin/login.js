import React, { useState } from "react";
import { Button, Checkbox, Form, Input, message, Spin } from "antd";
import Image from "next/image";
import { authService } from "@/services";
import Cookies from "js-cookie";
import { login } from "@/store/slices/userSlice";
import { LoadingOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

const antIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />;

const Login = () => {
  const { t } = useTranslation("common");
  const [loginForm] = Form.useForm();
  const dispatch = useDispatch();
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const handleLoginSubmit = async (values) => {
    setLoading(true);
    try {
      const res = await authService.login(values);
      const { tokens, ...others } = res?.payload?.user;
      Cookies.set("access_token", tokens.accessToken, { path: "/" });
      Cookies.set("refresh_token", tokens.refreshToken, { path: "/" });
      dispatch(login(others));
      messageApi.success(t("admin_panel_login.message_api"));
      loginForm.resetFields();
      setLoading(false);
      setTimeout(() => {
        router.push("/admin");
      }, 1000);
    } catch (err) {
      setLoading(false);
      messageApi.error(err.response?.data?.message);
      console.error(err);
    }
  };

  return (
    <>
      {contextHolder}
      <section className="vh-100">
        <div className="container-fluid vh-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <div className="d-flex justify-content-center">
                <Image
                  width={300}
                  height={120}
                  src="http://localhost:3000/assets/img/megacode-logo.png"
                  alt=""
                />
              </div>

              <Form
                form={loginForm}
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={handleLoginSubmit}
                autoComplete="off"
              >
                <Form.Item
                  label={t("admin_panel_login.e-mail")}
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: t("admin_panel_login.e-mail_message"),
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label={t("admin_panel_login.password")}
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: t("admin_panel_login.password_message"),
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button
                    className="mt-2 bg-primary text-white"
                    htmlType="submit"
                  >
                    {loading && (
                      <Spin className="text-white mr-2" indicator={antIcon} />
                    )}
                   {t("admin_panel_login.log_in_text")}
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  const { req, res } = context;
  const user = req?.cookies?.access_token;
  if (user) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default Login;
