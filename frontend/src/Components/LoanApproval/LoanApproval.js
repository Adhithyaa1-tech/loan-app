import React from "react";
import "./LoanApproval.css";

const LoanApproval = () => {
  return (
    <>
      <form action="{{ url_for('predict')}}" method="post">
        <label for="gender">Enter Gender:</label>
        <input
          type="text"
          id="gender"
          name="gender"
          placeholder="Enter Gender"
          required="required"
        />
        <br></br>

        <label for="married">Enter Married:</label>
        <input
          type="text"
          id="married"
          name="married"
          placeholder="Enter Married"
          required="required"
        />
        <br></br>

        <label for="dependents">Enter Dependents:</label>
        <input
          type="text"
          id="dependents"
          name="dependents"
          placeholder="Enter Dependents"
          required="required"
        />
        <br></br>

        <label for="education">Enter Education:</label>
        <input
          type="text"
          id="education"
          name="education"
          placeholder="Enter Education"
          required="required"
        />
        <br></br>

        <label for="self_employed">Enter Self_Employed:</label>
        <input
          type="text"
          id="self_employed"
          name="self_employed"
          placeholder="Enter Self_Employed"
          required="required"
        />
        <br></br>

        <label for="applicant_income">Enter ApplicantIncome:</label>
        <input
          type="text"
          id="applicant_income"
          name="applicant_income"
          placeholder="Enter ApplicantIncome"
          required="required"
        />
        <br></br>

        <label for="coapplicant_income">Enter CoapplicantIncome:</label>
        <input
          type="text"
          id="coapplicant_income"
          name="coapplicant_income"
          placeholder="Enter CoapplicantIncome"
          required="required"
        />
        <br></br>

        <label for="loan_amount">Enter LoanAmount:</label>
        <input
          type="text"
          id="loan_amount"
          name="loan_amount"
          placeholder="Enter LoanAmount"
          required="required"
        />
        <br></br>

        <label for="loan_amount_term">Enter Loan_Amount_Term:</label>
        <input
          type="text"
          id="loan_amount_term"
          name="loan_amount_term"
          placeholder="Enter Loan_Amount_Term"
          required="required"
        />
        <br></br>

        <label for="property_area">Enter Property_Area:</label>
        <input
          type="text"
          id="property_area"
          name="property_area"
          placeholder="Enter Property_Area"
          required="required"
        />
        <br></br>

        <label for="credit_score">Enter Credit_Score:</label>
        <input
          type="text"
          id="credit_score"
          name="credit_score"
          placeholder="Enter Credit_Score"
          required="required"
        />
        <br></br>

        <button type="submit" class="btn btn-primary btn-block btn-large">
          Predict
        </button>
      </form>
      
      
    </>
  );
};

export default LoanApproval;
