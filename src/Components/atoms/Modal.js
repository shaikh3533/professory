import React from 'react';
import { Modal } from 'antd';

const Modal = (props) => {
    return (
        <>
            <Modal className="OptPopUp" visible={props.openModel} closable={props.closable} footer={null}  > {/* //width="80%" */}
                <p>Become Voluntier</p>

            </Modal>
        </>
    );
}

export default Modal;