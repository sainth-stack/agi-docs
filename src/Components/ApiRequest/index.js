import { Component } from 'react'
import './index.css'

class ApiRequest extends Component {
    state = { active: '' }

    onclickActiveText = active => {
        this.setState({ activeText: active })
    }

    getModelCreationApi = () => (
        <div>
            <h2>Model Creation</h2>
            <p>
                This API is used to create a new AI model in your environment. You need to provide details like the
                model's name, API key, model type, and temperature for the configuration.
            </p>
            <ul>
                <li>
                    <strong>Required Input:</strong>
                    <ul>
                        <li><code>name</code>: Name of the model (e.g., "model_final").</li>
                        <li><code>api_key</code>: API key for authentication.</li>
                        <li><code>model</code>: Model type (e.g., "gpt-4o-mini").</li>
                        <li><code>temperature</code>: A floating value for temperature control (e.g., "0.5").</li>
                    </ul>
                </li>
            </ul>
            <div className='code-one-api-request'>
                <code>
                    <span>curl --location 'http://13.215.228.42:4001/api/environment/create' \</span><br/>
                    <span>--header 'Cookie: csrftoken=YOUR_CSRF_TOKEN' \</span><br/>
                    <span>--form 'name="model_final"' \</span><br/>
                    <span>--form 'api_key="YOUR_API_KEY"' \</span><br/>
                    <span>--form 'model="gpt-4o-mini"' \</span><br/>
                    <span>--form 'temperature="0.5"'</span>
                </code>
            </div>
        </div>
    )

    getAgentCreationApi = () => (
        <div>
            <h2>Agent Creation</h2>
            <p>
                This API creates a new agent for executing specific tasks. You need to provide details such as the
                agent's name, goal, description, and instructions.
            </p>
            <ul>
                <li>
                    <strong>Required Input:</strong>
                    <ul>
                        <li><code>agent_name</code>: The name of the agent (e.g., "Travel planner agent").</li>
                        <li><code>agent_goal</code>: The purpose or goal of the agent (e.g., "make travel plans 24/7").</li>
                        <li><code>agent_description</code>: A description of the agent's role (e.g., "expert in making travel plans").</li>
                        <li><code>agent_instruction</code>: Specific instructions for the agent (e.g., "Give straightforward answers").</li>
                    </ul>
                </li>
            </ul>
            <div className='code-one-api-request'>
                <code>
                    <span>curl --location 'http://13.215.228.42:4001/api/dyn_create-agent' \</span><br/>
                    <span>--header 'Cookie: csrftoken=YOUR_CSRF_TOKEN' \</span><br/>
                    <span>--form 'agent_name="Travel planner agent"' \</span><br/>
                    <span>--form 'agent_goal="make travel plans 24/7"' \</span><br/>
                    <span>--form 'agent_description="expert in making travel plans across the globe"' \</span><br/>
                    <span>--form 'agent_instruction="Give straightforward answers"'</span>
                </code>
            </div>
        </div>
    )

    getEmployeeCreationApi = () => (
        <div>
            <h2>Employee Creation</h2>
            <p>
                This API is used to create an employee agent with system instructions, tools, and environment configuration.
            </p>
            <ul>
                <li>
                    <strong>Required Input:</strong>
                    <ul>
                        <li><code>name</code>: The name of the employee agent (e.g., "GitAgent").</li>
                        <li><code>system_prompt</code>: Instructions for the agent (e.g., "System instructions for agent").</li>
                        <li><code>agent_description</code>: A brief description of the agent (e.g., "This is a test agent").</li>
                        <li><code>tools</code>: Tools assigned to the agent (e.g., "github").</li>
                        <li><code>upload_attachment</code>: Boolean indicating if the agent can upload attachments.</li>
                        <li><code>env_id</code>: The environment ID where the agent operates.</li>
                        <li><code>dynamic_agent_id</code>: The ID of the dynamic agent.</li>
                    </ul>
                </li>
            </ul>
            <div className='code-one-api-request'>
                <code>
                    <span>curl --location 'http://13.215.228.42:4001/api/agent/create' \</span><br/>
                    <span>--header 'Content-Type: application/json' \</span><br/>
                    <span>--header 'Cookie: csrftoken=YOUR_CSRF_TOKEN' \</span><br/>
                    <span>--data '{'{'}</span><br/>
                    <span>&nbsp;&nbsp;"name": "GitAgent",</span><br/>
                    <span>&nbsp;&nbsp;"system_prompt": "System instructions for agent",</span><br/>
                    <span>&nbsp;&nbsp;"agent_description": "This is a test agent",</span><br/>
                    <span>&nbsp;&nbsp;"tools": "github",</span><br/>
                    <span>&nbsp;&nbsp;"upload_attachment": false,</span><br/>
                    <span>&nbsp;&nbsp;"env_id": 1,</span><br/>
                    <span>&nbsp;&nbsp;"dynamic_agent_id": 3</span><br/>
                    <span>{'}'}</span>
                </code>
            </div>
        </div>
    )

    render() {
        const { activeText } = this.state
        return (
            <div className="main-container-platform">
                <div style={{ padding: '10px', width: '70%' }}>
                    <h2>API Requests Quickstart</h2>
                    <p>In this quickstart, you will learn how to make API calls for model, agent, and employee creation.</p>
                    <div id="modelCreation">
                        {this.getModelCreationApi()}
                    </div>
                    <div id="agentCreation">
                        {this.getAgentCreationApi()}
                    </div>
                    <div id="employeeCreation">
                        {this.getEmployeeCreationApi()}
                    </div>
                </div>
                <div className="section-3-platform">
                    <a className={activeText === "modelCreation" ? "anchor-platform active-text-platform" : "anchor-platform"} href='#modelCreation' onClick={() => { this.onclickActiveText("modelCreation") }}>Model Creation</a>
                    <a className={activeText === "agentCreation" ? "anchor-platform active-text-platform" : "anchor-platform"} href='#agentCreation' onClick={() => { this.onclickActiveText("agentCreation") }}>Agent Creation</a>
                    <a className={activeText === "employeeCreation" ? "anchor-platform active-text-platform" : "anchor-platform"} href='#employeeCreation' onClick={() => { this.onclickActiveText("employeeCreation") }}>Employee Creation</a>
                </div>
            </div>
        )
    }
}

export default ApiRequest
