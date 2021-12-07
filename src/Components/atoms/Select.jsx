import React from 'react';
import Select from 'antd'

const Select = (props) => {
    return (
        <>

            <div className="form-group">

                <Select
                    suffixIcon={<CaretDownFilled style={{ width: "0.5rem", color: "Black" }} />}
                    showSearch
                    className="form-control mx-auto"
                    id={props.name}
                    value={props.value}
                    optionFilterProp="children"
                    onChange={(e) => props.onChange(e, props.name)}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    filterSort={(optionA, optionB) =>
                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                    }
                >
                    {props.list.map(item => {
                        return <Option value={item[props.name]} key={item[props.name]}>{item[props.objName]}</Option>
                    })}
                </Select>
                <label className={` ${props.name !== "Select"+props.label ? "Valued" : "d-none"}`} htmlFor={props.name}>{props.label}</label>
                {props.Error ? <div style={{ color: "red", fontSize: "10px" }}>{props.label} is Required</div> : null}
            </div>
        </>
    );
}

export default Select;

// name
// value
// function
// list
// objName
// label
// Error