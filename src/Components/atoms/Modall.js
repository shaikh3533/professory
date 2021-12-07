import React from 'react';
import { Modal } from 'antd';
import OtpInput from "react-otp-input";

const Modall = (props) => {
  return (
    <>
      <Modal title={"Enter the Code"} className="OptPopUp" visible={props.openModel} closable={props.closable} footer={null}  > {/* //width="80%" */}

        <p className="font10">Check your Email, 4-digit Code has been sent</p>
        <div className="mx-auto my-4" style={{width:"fit-content"}}>
          <OtpInput
            value={props.value}
            onChange={props.otpChange}
            numInputs={4}
            separator={<span>-</span>}
            shouldAutoFocus
          />
        </div>
        <p className="font13 text-center text-danger">{props.error}</p>
        <p className="font13 blue float-right mb-0" onClick={props.ResendCode}>Resend Code</p>
      </Modal>
    </>
  );
}

export default Modall;

// openModel
// handleCancel
// value
// otpChange
// error
// ResendCode
