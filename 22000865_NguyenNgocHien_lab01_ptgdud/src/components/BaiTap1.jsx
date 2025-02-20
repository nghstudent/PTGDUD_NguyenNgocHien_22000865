import { useState } from "react";
import './BaiTap1.css'
export default function BaiTap1() {
    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sum, setSum] = useState(0);
    const [num3, setNum3] = useState(0);
    const [num4, setNum4] = useState(0);
    var [a, setA] = useState(0);
    var [b, setB] = useState(0);
    var [operator, setOperator] = useState('');
    var [result, setResult] = useState(0);

    function inText(e) {
        setText(e.target.value);
    }

    function Click() {
        setName(text);
    }

    function Num1(e) {
        setNum1(Number(e.target.value));
    }

    function Num2(e) {
        setNum2(Number(e.target.value));
    }

    function addToNumbers() {
        setSum(num1 + num2);
    }

    function Num3(e) {
        setNum3(Number(e.target.value));
    }

    function Num4(e) {
        setNum4(Number(e.target.value));
    }

    function HandleChangeA(e) {
        setA(e.target.value);
    }

    function HandleChangeB(e) {
        setB(e.target.value);
    }

    function handleClick(e) {
        if (operator === '+')
            setResult(parseInt(a) + parseInt(b));
        else if (operator === '-')
            setResult(parseInt(a) - parseInt(b));
        else if (operator === '*')
            setResult(parseInt(a) * parseInt(b));
        else if (operator === '/')
            setResult(parseInt(a) / parseInt(b));
    }

    function handleRadioChange(e) {
        setOperator(e.target.value);
    }


    return (
        <div>
            {/* Câu 1: Nhập tên và hiển thị */}
            <input onChange={inText} type="text" placeholder="Nhập tên" />
            <button onClick={Click}>Click</button>
            <br />
            <h5>Hello {name}</h5>
            <hr />
            {/* Câu 2: Cộng hai số */}
            <input type="number" onChange={Num1} placeholder="Nhập số thứ 1" />
            <input type="number" onChange={Num2} placeholder="Nhập số thứ 2" />
            <button onClick={addToNumbers}>Cộng</button>
            <br />
            <h5>Kết quả: {sum}</h5>
            <hr />
            {/* Câu 3: Cộng trừ nhân chia hai số */}
            <input onChange={HandleChangeA} placeholder="input a" type="text" />
            <br />
            <input onChange={HandleChangeB} placeholder="input b" type="text" />
            <br />
            <div className="radio-group">
                <label>
                    <input value="+" onChange={handleRadioChange} type="radio" name="group" />
                    <span>+</span>
                </label>
                <label>
                    <input value="-" onChange={handleRadioChange} type="radio" name="group" />
                    <span>-</span>
                </label>
                <label>
                    <input value="*" onChange={handleRadioChange} type="radio" name="group" />
                    <span>*</span>
                </label>
                <label>
                    <input value="/" onChange={handleRadioChange} type="radio" name="group" />
                    <span>/</span>
                </label>
            </div>
            <br />
            <button onClick={handleClick}>Tính toán</button>
            <br />
            <h5>Kết quả: {result}</h5>
        </div>
    );
}
