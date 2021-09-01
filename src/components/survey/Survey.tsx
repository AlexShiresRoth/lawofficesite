import React, { useState, useEffect } from "react";
import { surveyContent } from "./surveyContent";
import surveyStyle from "./Survey.module.scss";
import CheckBox from "./CheckBox";

import { clearCheckBoxes } from "../../actions/survey";
import { connect } from "react-redux";
import axios from "axios";
import Alert from "../reusable/Alert";
import { handleConfirmationEmail } from "../../actions/email";

interface SurveyProps {
  survey?: any;
  clearCheckBoxes: () => void;
  handleConfirmationEmail: (val: any) => any;
}

const Survey = ({
  survey: { checkboxes },
  clearCheckBoxes,
  handleConfirmationEmail,
}: SurveyProps) => {
  const [current, setCurrent] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [messageStatus, setStatus] = useState({
    message: <p></p>,
    loading: false,
    success: false,
    error: false,
  });

  const { message, loading, success, error } = messageStatus;

  const onChange = (e: React.FormEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });

  const handleCurrentChange = (key: number) => setCurrent(key);

  const { name, email } = formData;

  const surveySubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const surveyTitle = surveyContent[current].title;

    setStatus({
      message: <p></p>,
      loading: true,
      success: false,
      error: false,
    });

    await axios({
      method: "POST",
      url: `https://asrserver.herokuapp.com/api/lawoffice/send-email/surveysubmit`,
      data: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "http://localhost:3000/",
        },
        checkboxes,
        ...formData,
        surveyTitle,
      },
    })
      .then((res) => {
        setStatus({
          message: <p>{res.data.msg}</p>,
          loading: false,
          success: true,
          error: false,
        });
        //send confirmation email only if success
        handleConfirmationEmail(formData);
      })
      .catch((error) => {
        console.log(error.response.data.msg.map((err: any) => err.msg));
        setStatus({
          message: error.response.data.msg.map((err: any) => <p>{err.msg}</p>),
          loading: false,
          success: false,
          error: true,
        });
      });
  };

  useEffect(() => {
    setStatus({
      message: <p></p>,
      loading: false,
      success: false,
      error: false,
    });
    clearCheckBoxes();

    return () => clearInterval();
  }, [current, clearCheckBoxes]);

  useEffect(() => {
    setTimeout(() => {
      setStatus({
        message: <p></p>,
        loading: false,
        success: false,
        error: false,
      });
      setFormData({
        name: "",
        email: "",
      });
      clearCheckBoxes();
    }, 5000);

    return () => clearInterval();
  }, [success, clearCheckBoxes]);

  return (
    <section className={surveyStyle.section}>
      <div className={surveyStyle.container}>
        <div className={surveyStyle.heading}>
          <h2>
            Please fill out one of these quick questionnaires to help us
            understand your needs and make the process as quick and easy as
            possible for you.
          </h2>
        </div>
        <div className={surveyStyle.content_grid}>
          {surveyContent.map((item, i) => {
            return (
              <button
                className={current === i ? surveyStyle.current : ""}
                key={i}
                onClick={() => {
                  handleCurrentChange(i);
                  // handleSurveySelect(item.questions);
                }}
              >
                {item.title}
              </button>
            );
          })}
        </div>
        <div className={surveyStyle.survey}>
          {surveyContent
            .filter((item, i) => {
              return current === i;
            })
            .map((survey, i) => {
              return (
                <form onSubmit={(e) => surveySubmit(e)}>
                  {survey.questions.map((question, i) => {
                    return (
                      <div className={surveyStyle.question_row}>
                        <label>
                          <span>{i + 1}.</span> {question}
                        </label>
                        <input type="checkbox" checked={true}></input>
                        <CheckBox
                          question={question}
                          index={i}
                          current={current}
                          success={success}
                        />
                      </div>
                    );
                  })}

                  <div className={surveyStyle.container}>
                    {loading || error || success ? (
                      <Alert
                        loading={loading}
                        success={success}
                        error={error}
                        message={message}
                      />
                    ) : null}
                    <div className={surveyStyle.row}>
                      <div className={surveyStyle.col}>
                        <label>Email *</label>
                        <input
                          type="email"
                          value={email}
                          name="email"
                          required
                          onChange={(e) => onChange(e)}
                          placeholder="Enter Email"
                        />
                      </div>
                      <div className={surveyStyle.col}>
                        <label>Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={name}
                          onChange={(e) => onChange(e)}
                          placeholder="Enter Name"
                        />
                      </div>
                      <button onClick={(e) => surveySubmit(e)}>Submit</button>
                    </div>
                  </div>
                </form>
              );
            })}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return {
    survey: state.survey,
  };
};

export default connect(mapStateToProps, {
  clearCheckBoxes,
  handleConfirmationEmail,
})(Survey);
