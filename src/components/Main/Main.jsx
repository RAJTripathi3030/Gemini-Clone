import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets.js";
import { Context } from '../../Context/Context.jsx';

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <div className="right-content">
                    <div className="gemini-advanced">
                        <img src={assets.star_icon} alt="" />
                        <p>Try Gemini Advanced</p>
                    </div>
                    <img className='apps-img' src={assets.apps_icon} alt="" />
                    <img src={assets.user_icon} alt="" />
                </div>
            </div>
            <div className="main-container">
                {!showResult ?
                    <>
                        <div className="greet">
                            <p><span>Hello, Developer</span></p>
                            <p>How can I help you today ?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest a beautiful place to visit during holidays</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Suggest a beautiful place to visit during holidays</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Suggest a beautiful place to visit during holidays</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Suggest a beautiful place to visit during holidays</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>

                    </> :
                    <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading ? <div className="loader">
                                <hr />
                                <hr />
                                <hr />
                            </div> : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>}

                        </div>
                    </div>}

                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter your text here" />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ? <img className="send-button" onClick={() => onSent()} src={assets.send_icon} alt="" /> : null }
                        </div>
                    </div>
                    <p>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps</p>
                </div>
            </div>
        </div>
    )
}

export default Main;