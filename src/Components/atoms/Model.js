import React from 'react';
import { Modal } from 'antd';

const Model = (props) => {
    return (
        <>
            <Modal className="" visible={props.openModel} closable={props.closable} footer={null} onCancel={()=>props.handleChange(props.name, false)} > {/* //width="80%" */}
                {props.children}

            </Modal>
        </>
    );
}

export default Model;