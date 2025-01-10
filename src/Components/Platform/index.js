import { Component } from 'react'
import ReactContext from '../../ReactContext';
import { PiWarningCircleLight } from "react-icons/pi";
import './index.css'

class Platfrom extends Component {
    state = { activeText: '' }

    onclickActiveText = active => {
        this.setState({ activeText: active })
    }


    render() {
        const { activeText } = this.state
        return (
            <ReactContext.Consumer>
                {value => {
                    const { themeValue } = value
                    return (
                        <div className="main-container-platform">
                            <div className="container-one-platform">
                                <h1 className={themeValue === 'light' ? "heading-platform" : 'heading-platform code-line-number-code-one'}>
                                    Platform overview
                                </h1>
                                <p>Hello! Welcome to WygeAI,an agentic  AI platform .We offer a multiagent and market place of standardised AI models and provides tools to help customers to create Genai solutions.
                                    WygeAI works in the following ways:</p>
                                <ul>
                                    <li className="list-one-platform">Studio,</li>
                                    <li className="list-one-platform">Agents,</li>
                                    <li className="list-one-platform">Marketplace,</li>
                                    <li className="list-one-platform">Tools.</li>
                                </ul>
                                <h1 className={themeValue === 'light' ? "heading-platform" : 'heading-platform code-line-number-code-one'} id="whatIsAixplain">What is WygeAI?</h1>
                                <p>WygeAI is a platform that makes agents interact with each other and simplifies AI tools bringing together the data,model and metrics.They can be selected,interwined,combined,integrated,deployed and evaluated through our agentic AI approach in(tools,agents,marketplace).
                                </p>
                                <h1 className="heading-platform" id="studio">Studio</h1>
                                <p>The WygeAI studio provides user interface to communicate and display with WygeAI.The following are the steps:</p>
                                <ul>
                                    <li className="manager-platform">LLM Planner- Create Various Models relevant to the application.</li>
                                    <li className="manager-platform">Create Agent- Agents provide with Agent goal and instructions.</li>
                                    <li className="manager-platform">Create AI Coworker-Integrate model,agents/MultiAgents and tools</li>

                                </ul>
                                <p>See the Studio tour to learn more!</p>
                                <br />
                                <h1 className="heading-platform" id="belEsprit">Agents</h1>
                                <p >WygeAI is well designed with AI agents which works based on  natural language instructions. It selects  models from LLM planner, integrates them into deployable solutions, and offers user-related explanations.</p>
                                <br />
                                <div className="info-container-platform">
                                    <h1 className="heading-platform heading-platform-info"><PiWarningCircleLight className="info-icon" /> INFO</h1>
                                    <p className="para-info-platform">Bel Esprit is currently integrated into Studio but will soon be available as a standalone application.</p>
                                </div>
                                <p>See our page on Agents to learn more!</p>
                                <br />
                                <h1 className="heading-platform" id="belEsprit">Marketplace</h1>
                                <p >Marketplace can be defined as the collection of the AI digital employees with  the combination of AI agents and models. The employees can be prepared based on the user requirement with the help of agents and tools, and offers better results for the user query.</p>
                                <br />
                                <div className="info-container-platform">
                                    <h1 className="heading-platform heading-platform-info"><PiWarningCircleLight className="info-icon" /> INFO</h1>
                                    <p className="para-info-platform">Bel Esprit is currently integrated into Studio but will soon be available as a standalone application.</p>
                                </div>
                                <p>See our page on Marketplace to learn more!</p>
                                <br />
                                <br />
                                <h1 className="heading-platform" id="belEsprit">Tools</h1>
                                <p >Tools are the external entities for the communication between the agent and the user.These enhances the connectivity and can be integrated through the agents.</p>
                                <br />
                                <div className="info-container-platform">
                                    <h1 className="heading-platform heading-platform-info"><PiWarningCircleLight className="info-icon" /> INFO</h1>
                                    <p className="para-info-platform">Bel Esprit is currently integrated into Studio but will soon be available as a standalone application.</p>
                                </div>
                                <p>See our page on Tools to learn more!</p>
                                <br />
                                <h1 className="heading-platform" id="featuresComparison">Feartures Comparison</h1>
                                <table>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th style={{ textAlign: "center" }}>Platform</th>
                                            <th style={{ textAlign: "center" }}>SDK (Python)</th>
                                            <th style={{ textAlign: "center" }}>SDK (Swift)</th>
                                            <th>Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="tr">
                                            <td>Build and run agents</td>
                                            <td style={{ textAlign: "center" }}>❌</td>
                                            <td style={{ textAlign: "center" }}>✅</td>
                                            <td style={{ textAlign: "center" }}>❌</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Run models, pipelines &amp; metrics with <strong>single input</strong></td>
                                            <td style={{ textAlign: "center" }}>✅</td>
                                            <td style={{ textAlign: "center" }}>✅</td>
                                            <td style={{ textAlign: "center" }}>✅</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Run models, pipelines &amp; metrics in <strong>batch mode</strong></td>
                                            <td style={{ textAlign: "center" }}>❌</td>
                                            <td style={{ textAlign: "center" }}>✅</td>
                                            <td style={{ textAlign: "center" }}>✅</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Run models, pipelines &amp; metrics on <strong>datasets</strong></td>
                                            <td style={{ textAlign: "center" }}>❌</td>
                                            <td style={{ textAlign: "center" }}>✅</td>
                                            <td style={{ textAlign: "center" }}>❌</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Search assets</td>
                                            <td style={{ textAlign: "center" }}>✅</td>
                                            <td style={{ textAlign: "center" }}>✅</td>
                                            <td style={{ textAlign: "center" }}>❌</td>
                                            <td>Search parameters differ between Studio and SDK</td>
                                        </tr>
                                        <tr>
                                            <td>Build pipelines</td>
                                            <td style={{ textAlign: "center" }}>✅</td>
                                            <td style={{ textAlign: "center" }}>❌</td>
                                            <td style={{ textAlign: "center" }}>❌</td>
                                            <td>Coming soon to the Python SDK</td>
                                        </tr>
                                        <tr>
                                            <td>Onboard models (custom &amp; Hugging Face)</td>
                                            <td style={{ textAlign: "center" }}>❌</td>
                                            <td style={{ textAlign: "center" }}>✅</td>
                                            <td style={{ textAlign: "center" }}>❌</td>
                                            <td></td>
                                        </tr><tr><td>Onboard datasets</td>
                                            <td style={{ textAlign: "center" }}>✅</td>
                                            <td style={{ textAlign: "center" }}>✅</td>
                                            <td style={{ textAlign: "center" }}>❌</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Benchmark</td>
                                            <td style={{ textAlign: "center" }}>✅</td>
                                            <td style={{ textAlign: "center" }}>✅</td>
                                            <td style={{ textAlign: "center" }}>❌</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>FineTune</td>
                                            <td style={{ textAlign: "center" }}>✅</td>
                                            <td style={{ textAlign: "center" }}>✅</td>
                                            <td style={{ textAlign: "center" }}>❌</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>AutoMode</td>
                                            <td style={{ textAlign: "center" }}>❌</td>
                                            <td style={{ textAlign: "center" }}>❌</td>
                                            <td style={{ textAlign: "center" }}>❌</td>
                                            <td>Currently disabled</td>
                                        </tr>
                                        <tr>
                                            <td>Build agents</td>
                                            <td style={{ textAlign: "center" }}>❌</td>
                                            <td style={{ textAlign: "center" }}>❌</td>
                                            <td style={{ textAlign: "center" }}>❌</td>
                                            <td>Coming soon! ✨</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <br />

                                <div className="container-last-platform">
                                    <div className="nxt-container">
                                        <h3 className='next'>Previous</h3>
                                        <a href="/" className='platform-next' onClick={this.onclickHomenext}>Home{">>"}</a>
                                    </div>
                                    <div className="nxt-container">
                                        <h3 className='next'>Next</h3>
                                        <a href='/python' className='platform-next'>Python{">>"}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="section-3-platform">
                                <a className={activeText === "whatIsAixplain" ? "anchor-platform active-text-platform" : "anchor-platform"} href='#whatIsAixplain' onClick={() => { this.onclickActiveText("whatIsAixplain") }}>What is WYGE AI?</a>
                                <a href="#sdk" className={activeText === "sdk" ? "anchor-platform active-text-platform" : "anchor-platform"} onClick={() => { this.onclickActiveText("sdk") }}>SDK</a>
                                <a href="#studio" className={activeText === "studio" ? "anchor-platform active-text-platform" : "anchor-platform"} onClick={() => { this.onclickActiveText("studio") }}>Studio</a>
                                <a href="#sdkArchitecture" className={activeText === "sdkArchitecture" ? "anchor-platform active-text-platform" : "anchor-platform"} onClick={() => { this.onclickActiveText("sdkArchitecture") }}>Bel Esprit</a>
                                <a href="#featuresComparison" className={activeText === "featuresComparison" ? "anchor-platform active-text-platform" : "anchor-platform"} onClick={() => { this.onclickActiveText("featuresComparison") }}>Features Comparison</a>
                                <a href="#feedback" className={activeText === "feedback" ? "anchor-platform active-text-platform" : "anchor-platform"} onClick={() => { this.onclickActiveText("feedback") }}>Feedback</a>
                            </div>
                        </div>
                    )
                }}
            </ReactContext.Consumer>
        )
    }
}
export default Platfrom