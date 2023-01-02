import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        // props.showAlert('Converted to Uppercase','success');
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
    const handleDownClick = () =>{
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }
    const handleClear = () =>{
        setText("");
        setCountVow(0);
        setCountCon(0);
    }

    let [countVow, setCountVow] = useState(0);
    let [countCon, setCountCon] = useState(0);
    let countVowels = 0;
    let countConso = 0;

    const vowels = () =>{
        for( countVow=0 ; countVow < text.length ; countVow++)
        {
            if(text.charAt(countVow).match(/[aeiouAEIOU]/))
            {
                countVowels++;
                setCountVow(countVowels);
            }
        }
    }
    const consonants = () =>{
        for( countCon=0 ; countCon < text.length ; countCon++)
        {
            if(text.charAt(countCon).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/))
            {
                countConso++;
                setCountCon(countConso);
            }
        }
    }

    const [text, setText] = useState('');
    
    const handleCopy = () => {
        let copyText = document.getElementById('myBox');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        window.alert("Text Copied !");
    }
    

    return (
        <>
            <div className="container" style={{color: props.mode==='black'?'white':'black'}}>
                <h1 style={{textAlign:'center'}}>{props.heading} </h1>
                <div className="my-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary m-2" onClick={handleDownClick}>Convert to Lowercase</button>
                <button className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary m-2" onClick={vowels}>Count Vowels</button>
                <button className="btn btn-primary" onClick={consonants}>Count Consonants</button>
                <button className="btn btn-primary m-2" onClick={handleClear}>Clear Text</button>
            </div>

            <div className="container my-3" style={{color: props.mode==='black'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>Characters - {text.trim().length }</p>
                <p>Words - {text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length}</p>
                <p>No. of vowels - {countVow}</p>
                <p>No. of consonants - {countCon} </p>
                <p>It will take around {0.008*text.split(" ").length} minutes to read.</p>
                <h1 style={{margin:'30px 0px'}}>Preview</h1>
                <p>{text}</p>
            </div>
        </>

    )
}

TextForm.propTypes = {
    heading: PropTypes.string
}