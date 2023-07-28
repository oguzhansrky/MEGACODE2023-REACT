import { applicationService } from "@/services";
import { Form, Input, message, Upload } from "antd";
import React from "react";
import { useState } from "react";
const { TextArea } = Input;

const CareerForm = () => {
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

      if (resume) data.append("resume", resume);
      await applicationService.createJobApplication(data);
      messageApi.success("Başvurunuz başarıyla oluşturuldu.");
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
                <h2> Looking For Oppertunity </h2>
                <div className="career-numbers mt-50">
                  <div className="row gx-5">
                    <div className="col-5">
                      <div className="mum-card">
                        <h3>
                          <span className="counter"> 320 </span>
                        </h3>
                        <small> Project Completed </small>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="mum-card">
                        <h3>
                          <span className="counter"> 3 </span>B+
                        </h3>
                        <small> Happy Users</small>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="mum-card">
                        <h3>
                          <span className="counter"> 8 </span>+
                        </h3>
                        <small> Years of experience </small>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="mum-card">
                        <h3>
                          <span className="counter"> 2 </span>
                        </h3>
                        <small> Countries </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {textMessage ? (
                <h4 className="h-100 d-flex align-items-center justify-content-center">
                  Başvurunuz başarıyla gönderildi!
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
                          message: "Lütfen isim giriniz!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="First Name"
                        className="form-control"
                      />
                    </Form.Item>
                    <Form.Item
                      name="last_name"
                      className="form-group mb-4"
                      rules={[
                        {
                          required: true,
                          message: "Lütfen soyisim giriniz!",
                        },
                      ]}
                    >
                      <Input placeholder="Last Name" className="form-control" />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      className="form-group mb-4"
                      rules={[
                        {
                          required: true,
                          message: "Lütfen email giriniz!",
                        },
                      ]}
                    >
                      <Input placeholder="Email" className="form-control" />
                    </Form.Item>
                    <Form.Item
                      name="phone"
                      className="form-group mb-4"
                      rules={[
                        {
                          required: true,
                          message: "Lütfen telefon numarası giriniz!",
                        },
                      ]}
                    >
                      <Input placeholder="Phone" className="form-control" />
                    </Form.Item>
                    <Form.Item className="col-lg-8">
                      <Upload
                        className="upload_input text-white"
                        maxCount={1}
                        beforeUpload={beforeUpload}
                        accept=".pdf"
                        listType="picture-card"
                      >
                        <span id="upload_text">Upload CV</span>
                      </Upload>
                    </Form.Item>
                    <Form.Item className="form-group" name="cover_letter">
                      <TextArea
                        placeholder="Cover letter"
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
                      Make Request
                      <i className="fal fa-long-arrow-right ms-2 color-blue5" />
                    </span>
                  </button>
                </Form>
              )}
            </div>
          </div>
        </div>
        <img src="assets/img/careers/map.png" alt="" className="map_img" />
      </section>
    </>
  );
};

export default CareerForm;
