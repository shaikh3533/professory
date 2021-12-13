import React from 'react';
import { Modal } from 'antd';
import OtpInput from "react-otp-input";

const Modall = (props) => {
  return (
    <>
      <Modal title={"Enter the Code"} className="OptPopUp" visible={props.openModel} closable={props.closable} footer={null} onCancel={()=>props.handleChange(props.name, false)}  > {/* //width="80%" */}

        <p className="font10 text-center">4-digit Code has been sent to your {props.reciver}, Check inbox</p>
        <div className="mx-auto my-4" style={{width:"fit-content"}}>
          <OtpInput
            value={props.value}
            onChange={props.otpChange}
            numInputs={4}
            separator={<span>-</span>}
            shouldAutoFocus
            isInputNum
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
// closable
// value
// otpChange
// error
// ResendCode
