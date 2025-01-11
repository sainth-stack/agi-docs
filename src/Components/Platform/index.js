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
                                    Platform Overview
                                </h1>
                                <p>Hello! Welcome to WygeAI, an agentic AI platform. We offer a multi-agent marketplace of standardized AI models and provide tools to help customers create GenAI solutions tailored to their needs. WygeAI simplifies the AI adoption process by offering a seamless integration of tools, models, and agents.
                                    WygeAI operates through the following core components:</p>
                                <ul>
                                    <li className="list-one-platform">Studio - Your workspace for designing AI models and agents.</li>
                                    <li className="list-one-platform">Agents - Intelligent AI assistants that execute user tasks.</li>
                                    <li className="list-one-platform">Marketplace - A collection of AI solutions ready for deployment.</li>
                                    <li className="list-one-platform">Tools - Connectors to enhance agent-user interaction.</li>
                                </ul>
                                <h1 className={themeValue === 'light' ? "heading-platform" : 'heading-platform code-line-number-code-one'} id="whatIsAixplain">What is WygeAI?</h1>
                                <p>WygeAI is a cutting-edge platform that fosters collaboration between agents and simplifies AI tools by combining data, models, and metrics into a cohesive ecosystem. With WygeAI, users can seamlessly select, intertwine, combine, integrate, deploy, and evaluate their AI solutions using an agentic approach. The platform empowers users to create dynamic and adaptable AI workflows.</p>
                                <h1 className="heading-platform" id="studio">Studio</h1>
                                <p>The WygeAI Studio offers an intuitive user interface that facilitates communication and interaction with the platform. Here are the steps involved:</p>
                                <ul>
                                    <li className="manager-platform">LLM Planner - Design and organize various AI models relevant to your application.</li>
                                    <li className="manager-platform">Create Agent - Define agent goals and instructions to align with your tasks.</li>
                                    <li className="manager-platform">Create AI Coworker - Integrate models, agents, and tools into cohesive solutions.</li>
                                </ul>
                                <p>The Studio also includes advanced features for monitoring and evaluating AI performance. See the Studio tour to learn more!</p>
                                <br />
                                <h1 className="heading-platform" id="belEsprit">Agents</h1>
                                <p>WygeAI agents are designed to operate on natural language instructions, enabling seamless interaction with users. These agents can select models from the LLM Planner, integrate them into deployable solutions, and provide user-related explanations. They offer scalability and adaptability for various applications, making them indispensable for modern AI workflows.</p>
                                <ul>
                                    <li>Agents automate repetitive tasks efficiently.</li>
                                    <li>They provide detailed insights and actionable recommendations.</li>
                                </ul>
                                <br />
                                <div className="info-container-platform">
                                    <h1 className="heading-platform heading-platform-info"><PiWarningCircleLight className="info-icon" /> INFO</h1>
                                    <p className="para-info-platform">Bel Esprit is currently integrated into Studio but will soon be available as a standalone application, offering enhanced functionality and accessibility for broader use cases.</p>
                                </div>
                                <p>See our page on Agents to learn more!</p>
                                <br />
                                <h1 className="heading-platform" id="belEsprit">Marketplace</h1>
                                <p>The Marketplace is a curated collection of AI digital employees that combine agents and models to deliver optimal solutions. Users can customize these digital employees based on specific requirements. The Marketplace simplifies the process of acquiring and deploying AI-driven solutions.</p>
                                <ul>
                                    <li>Access a wide range of pre-configured AI solutions.</li>
                                    <li>Customize digital employees to meet unique business needs.</li>
                                </ul>
                                <br />
                                <div className="info-container-platform">
                                    <h1 className="heading-platform heading-platform-info"><PiWarningCircleLight className="info-icon" /> INFO</h1>
                                    <p className="para-info-platform">Bel Esprit is currently integrated into Studio but will soon be available as a standalone application, ensuring broader flexibility for deployment scenarios.</p>
                                </div>
                                <p>See our page on Marketplace to learn more!</p>
                                <br />
                                <h1 className="heading-platform" id="belEsprit">Tools</h1>
                                <p>Tools serve as external entities that facilitate communication between agents and users. These tools enhance connectivity and are integral to creating efficient AI solutions. With WygeAI tools, users can streamline workflows and achieve higher levels of automation.</p>
                                <ul>
                                    <li>Integrate tools easily into AI solutions.</li>
                                    <li>Enhance the interaction between agents and users.</li>
                                </ul>
                                <br />
                                <div className="info-container-platform">
                                    <h1 className="heading-platform heading-platform-info"><PiWarningCircleLight className="info-icon" /> INFO</h1>
                                    <p className="para-info-platform">Bel Esprit is currently integrated into Studio but will soon be available as a standalone application, providing a more modular approach to AI development.</p>
                                </div>
                                <p>See our page on Tools to learn more!</p>
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