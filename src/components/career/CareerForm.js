import { applicationService } from "@/services";
import { Form, Input, message, Upload } from "antd";
import React from "react";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
const { TextArea } = Input;

const CareerForm = ({ postId }) => {
  const { t } = useTranslation("common");
  const [resume, setResume] = useState();
  const [application] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [textMessage, setTextMessage] = useState(false);
  const beforeUpload = (file) => {
    setResume(file);
    message.success(`${file.name} başarıyla yüklendi`);
    return false;
  };

  const handleComplete = () => {
    application.resetFields();
    setTextMessage(true);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const formData = application.getFieldsValue();
      const data = new FormData();
      // Append form fields to FormData
      for (const key in formData) {
        if (formData[key]) data.append(key, formData[key]);
      }
      if (postId) data.append("post_id", postId);
      if (resume) data.append("resume", resume);
      await applicationService.createJobApplication(data);
      messageApi.success(t("career_form.project_complated"));

      setLoading(false);
      handleComplete();
    } catch (err) {
      setLoading(false);
      messageApi.error(err.response?.data?.message);
      console.error(err);
    }
  };
  return (
    <>
      {contextHolder}
      <section className="career-form section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form-numbers">
                <h2> {t("career_form.oppurtunity")} </h2>
                <div className="career-numbers mt-50">
                  <div className="row gx-5">
                    <div className="col-5">
                      <div className="mum-card">
                        <h3>
                          <span className="counter"> 320 </span>
                        </h3>
                        <small> {t("career_form.project_complated")} </small>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="mum-card">
                        <h3>
                          <span className="counter"> 3 </span>B+
                        </h3>
                        <small> {t("career_form.happy_users")}</small>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="mum-card">
                        <h3>
                          <span className="counter"> 8 </span>+
                        </h3>
                        <small> {t("career_form.experience")} </small>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="mum-card">
                        <h3>
                          <span className="counter"> 2 </span>
                        </h3>
                        <small> {t("career_form.countries")} </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {textMessage ? (
                <h4 className="h-100 d-flex align-items-center justify-content-center">
                  {t("career_form.succes_invitation_send")}
                </h4>
              ) : (
                <Form
                  id="application"
                  className="my-4 form"
                  form={application}
                  onFinish={handleSubmit}
                  labelCol={{
                    span: 5,
                  }}
                  wrapperCol={{
                    span: 20,
                  }}
                  autoComplete="off"
                >
                  <div className="row">
                    <Form.Item
                      name="first_name"
                      className="form-group mb-4"
                      rules={[
                        {
                          required: true,
                          message:t("career_form.enter_name"),
                        },
                      ]}
                    >
                      <Input
                        placeholder={t("career_form.place_holder_first")}
                        className="form-control"
                      />
                    </Form.Item>
                    <Form.Item
                      name="last_name"
                      className="form-group mb-4"
                      rules={[
                        {
                          required: true,
                          message: t("career_form.enter_lastname"),
                        },
                      ]}
                    >
                      <Input placeholder={t("career_form.place_holder_last")} className="form-control" />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      className="form-group mb-4"
                      rules={[
                        {
                          required: true,
                          message: t("career_form.enter_email"),
                        },
                      ]}
                    >
                      <Input placeholder={t("career_form.place_holder_email")} className="form-control" />
                    </Form.Item>
                    <Form.Item
                      name="phone"
                      className="form-group mb-4"
                      rules={[
                        {
                          required: true,
                          message: t("career_form.enter_num"),
                        },
                      ]}
                    >
                      <Input placeholder={t("career_form.place_holder_phone")} className="form-control" />
                    </Form.Item>
                    <Form.Item className="col-lg-8">
                      <Upload
                        className="upload_input text-white"
                        maxCount={1}
                        beforeUpload={beforeUpload}
                        accept=".pdf"
                        listType="picture-card"
                      >
                        <span id="upload_text">{t("career_form.upload_cv")}</span>
                      </Upload>
                    </Form.Item>
                    <Form.Item className="form-group" name="cover_letter">
                      <TextArea
                        placeholder={t("career_form.place_holder_cover")}
                        className="form-control w-100"
                        rows={4}
                      />
                    </Form.Item>
                  </div>
                  <button
                    form="application"
                    type="submit"
                    className="btn bg-white sm-butn mt-4 rounded-3"
                  >
                    <span className="text-dark">
                    {t("career_form.make_req")}
                      <i className="fal fa-long-arrow-right ms-2 color-blue5" />
                    </span>
                  </button>
                </Form>
              )}
            </div>
          </div>
        </div>
        <img src="/assets/img/careers/map.png" alt="" className="map_img" />
      </section>
    </>
  );
};

export default CareerForm;
