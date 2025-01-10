import {Link} from 'react-router-dom'
import ReactContext from '../../ReactContext'
import './index.css'

const Home = () =>(
    <ReactContext.Consumer>
        {value => {
            const {themeValue} = value
        return (
            <div className='home-main-container'>
            <div className='home-container-sec'>
                <div className='deploy-container-home'>
                    <h1 className={themeValue==='light'?'main-heading-home-cards':'main-heading-home-cards code-line-number-code-one'}>Deploy an AI Coworker</h1>
                    <p className={themeValue==='light'?'steps-card-home':'steps-card-home steps-card-home-one'}>Step 1: Create an access Key.</p>
                    <p className={themeValue==='light'?'steps-card-home':'steps-card-home steps-card-home-one'}>Step 2: Install the Wyge.</p>
                    <p className={themeValue==='light'?'steps-card-home':'steps-card-home steps-card-home-one'}>Step 3: Copy the code snippet to build and deploy an agent.</p>
                    <p className={themeValue==='light'?'steps-card-home':'steps-card-home steps-card-home-one'}>Next: Build a multi-agent system.</p>
                    <div className='python-image-container'>
                        <img src='https://docs.aixplain.com/assets/images/python2-9c57926214d11d269b25f8ea1c4a28a4.png' alt='python' className='python-image' />
                        <p className={themeValue==='light'?'steps-card-home':'steps-card-home steps-card-home-one'}>Follow our Python qucikstart for more.</p>
                    </div>
                </div>
                <div className='coding-container-main-home'>
                <div className={themeValue==='light'?'code-container-one-home':'code-container-one-home deploy-container-home-darkmode'}  style={{padding:'10px'}}>
                    <code className={themeValue==='light'?'code-line-number-code':'code-line-number-code code-line-number-code-one'}>pip install wyge</code>
                </div>
                <pre tabIndex='0' className={themeValue ==='light'? 'coding-element-home code-container-one-home':'coding-element-home code-container-one-home deploy-container-home-darkmode'}>
                    <code>
                        <span className='code-line-home'>
                            <span className={themeValue==='light'?'code-line-number':'code-line-number code-line-number-one'}></span>
                            <span className='code-line-number-comment'>## Create an Agent</span>
                        </span>
                        <span className='code-line-home'>
                            <span className={themeValue==='light'?'code-line-number':'code-line-number code-line-number-one'}></span>
                            <span className={themeValue==='light'?'code-line-number-code':'code-line-number-code code-line-number-code-one'}><span style={themeValue==='light'?{color:'blue'}:{color:'rgb(189, 147, 249)'}}>import </span> os </span>
                        </span>
                        <span className='code-line-home'>
                            <span className={themeValue==='light'?'code-line-number':'code-line-number code-line-number-one'}></span>
                            <span className={themeValue==='light'?'code-line-number-code':'code-line-number-code code-line-number-code-one'}>os.environ[<span style={themeValue==='light'?{color:'red'}:{color:'rgb(189, 147, 249)'}}>"API_KEY"</span>] = "{'<'}<span style={themeValue==='light'?{color:'red'}:{color:'#f411a4'}}>API_KEY</span>{'>'}"</span>
                        </span>
                        <span className='code-line-home'>
                            <span className={themeValue==='light'?'code-line-number':'code-line-number code-line-number-one'}></span>
                            <span className='code-line-number-code'></span>
                        </span>
                        <span className='code-line-home'>
                            <span className={themeValue==='light'?'code-line-number':'code-line-number code-line-number-one'}></span>
                            <span className={themeValue==='light'?'code-line-number-code':'code-line-number-code code-line-number-code-one'}><span  style={themeValue==='light'?{color:'blue'}:{color:'rgb(189, 147, 249)'}}>from</span> wyge.prebuilt_agents <span  style={themeValue==='light'?{color:'blue'}:{color:'rgb(189, 147, 249)'}}>import</span> Blog Agent</span>
                        </span>
                        <span className='code-line-home'>
                            <span className={themeValue==='light'?'code-line-number':'code-line-number code-line-number-one'}></span>
                            <span className={themeValue==='light'?'code-line-number-code':'code-line-number-code code-line-number-code-one'}><span  style={themeValue==='light'?{color:'blue'}:{color:'rgb(189, 147, 249)'}}>from </span>from wyge.models.openai <span  style={themeValue==='light'?{color:'blue'}:{color:'rgb(189, 147, 249)'}}>import</span> ChatOpenAI</span>
                        </span>
                        <span className='code-line-home'>
                            <span className={themeValue==='light'?'code-line-number':'code-line-number code-line-number-one'}></span>
                            <span className='code-line-number-code'></span>
                        </span>
                        <span className='code-line-home'>
                            <span className={themeValue==='light'?'code-line-number':'code-line-number code-line-number-one'}></span>
                            <span className={themeValue==='light'?'code-line-number-code':'code-line-number-code code-line-number-code-one'}>agent = AgentFactory.create(</span>
                        </span>
                        <span className='code-line-home'>
                            <span className={themeValue==='light'?'code-line-number':'code-line-number code-line-number-one'}></span>
                            <span className={themeValue==='light'?'code-line-number-code':'code-line-number-code code-line-number-code-one'}>name=<span style={themeValue==='light'?{color:'red'}:{color:'#f411a4'}}>"Google Search agent"</span>,</span>
                        </span>
                        <span className='code-line-home'>
                            <span className={themeValue==='light'?'code-line-number':'code-line-number code-line-number-one'}></span>
                            <span className={themeValue==='light'?'code-line-number-code':'code-line-number-code code-line-number-code-one'}>description="<span style={themeValue==='light'?{color:'red'}:{color:'#f411a4'}}>You are an agent that uses Google Search to answer queries.</span>",</span>
                        </span>
                        <span className='code-line-home'>
                            <span className={themeValue==='light'?'code-line-number':'code-line-number code-line-number-one'}></span>
                            <span className={themeValue==='light'?'code-line-number-code':'code-line-number-code code-line-number-code-one'}>   tools=[</span>
                        </span>
                        <span className='code-line-home'>
                            <span className={themeValue==='light'?'code-line-number':'code-line-number code-line-number-one'}></span>
                            <span className='code-line-number-comment'>        #Google Search</span>
                        </span>
                        <span className='code-line-home'>
                            <span className={themeValue==='light'?'code-line-number':'code-line-number code-line-number-one'}></span>
                            <span className={themeValue==='light'?'code-line-number-code':'code-line-number-code code-line-number-code-one'}>        ModelTool(model="<span style={themeValue==='light'?{color:'red'}:{color:'#f411a4'}}>65c51c556eb563350f6e1bb1</span>"),</span>
                        </span>
                        <span className='code-line-home'>
                            <span className={themeValue==='light'?'code-line-number':'code-line-number code-line-number-one'}></span>
                            <span className={themeValue==='light'?'code-line-number-code':'code-line-number-code code-line-number-code-one'}>   ],</span>
                        </span>
                        <span className='code-line-home'>
                            <span className={themeValue==='light'?'code-line-number':'code-line-number code-line-number-one'}></span>
                            <span className={themeValue==='light'?'code-line-number-code':'code-line-number-code code-line-number-code-one'}>)</span>
                        </span>
                        <span className='code-line-home'>
                            <span className={themeValue==='light'?'code-line-number':'code-line-number code-line-number-one'}></span>
                            <span className={themeValue==='light'?'code-line-number-code':'code-line-number-code code-line-number-code-one'}>agent_response = agent.run("<span style={themeValue==='light'?{color:'red'}:{color:'#f411a4'}}>What's an AI agent?</span>")</span>
                        </span>
                    </code>
                </pre>
            </div>
            </div>
            <div className='home-container-card'>
                <h1 className={themeValue==='light'?'main-heading-home-cards':'main-heading-home-cards code-line-number-code-one'}>Build</h1>
                <div className='home-card-container-sec'>
                <div className={themeValue==='light'?'card-container-home-two  card-home-build':'card-container-home-two  card-home-build darkmodecard'}>
                    <h1 className ={themeValue==='light'?'card-heading-home':'card-heading-home card-heading-home-one'}>Build a LLM Planner</h1>
                    <p className={themeValue==='light'?'card-desc-home':'card-desc-home card-desc-home-one'}>Create a LLM planner with access keys which can interact with the large language models.</p>
                </div>
                <div className={themeValue==='light'?'card-container-home-two  card-home-build':'card-container-home-two  card-home-build darkmodecard'}>
                    <h1  className={themeValue==='light'?'card-heading-home':'card-heading-home card-heading-home-one'}>Build an Agent</h1>
                    <p className={themeValue==='light'?'card-desc-home':'card-desc-home card-desc-home-one'}>Preparing an interactive Multi Agentic AI Agents with the help of LLM planners.</p>
                </div>
                <div className={themeValue==='light'?'card-container-home-two  card-home-build':'card-container-home-two  card-home-build darkmodecard'}>
                    <h1  className={themeValue==='light'?'card-heading-home':'card-heading-home card-heading-home-one'}>Build a Coworker</h1>
                    <p className={themeValue==='light'?'card-desc-home':'card-desc-home card-desc-home-one'}>Integrate any agents,LLM planners into your Coworker for better results and interactivity. </p>
                </div>
                </div>
            </div>
            <div className='home-container-card'>
    <h1 className={themeValue === 'light' ? 'main-heading-home-cards' : 'main-heading-home-cards code-line-number-code-one darkmodecard'}>Explore our Agents</h1>
    <div className='home-card-container-sec'>
        <div className={themeValue === 'light' ? 'card-container-home-two' : 'card-container-home-two code-line-number-code-one darkmodecard'}>
            <h1 className={themeValue === 'light' ? 'card-heading-home' : 'card-heading-home card-heading-home-one'}>Website Blog Generator</h1>
            <p className={themeValue === 'light' ? 'card-desc-home' : 'card-desc-home card-desc-home-one'}>Effortlessly create high-quality, SEO-friendly blogs by extracting meaningful insights from website content to engage your audience effectively.</p>
        </div>
        <div className={themeValue === 'light' ? 'card-container-home-two' : 'card-container-home-two darkmodecard'}>
            <h1 className={themeValue === 'light' ? 'card-heading-home' : 'card-heading-home card-heading-home-one'}>Youtube Blog Generator</h1>
            <p className={themeValue === 'light' ? 'card-desc-home' : 'card-desc-home card-desc-home-one'}>Convert YouTube videos into detailed, engaging blogs that capture the essence of video content.</p>
        </div>
        <div className={themeValue === 'light' ? 'card-container-home-two' : 'card-container-home-two darkmodecard'}>
            <h1 className={themeValue === 'light' ? 'card-heading-home' : 'card-heading-home card-heading-home-one'}>Audio Blog Generator</h1>
            <p className={themeValue === 'light' ? 'card-desc-home' : 'card-desc-home card-desc-home-one'}>Transform audio recordings into structured, reader-friendly blogs for seamless content consumption.</p>
        </div>
        <div className={themeValue === 'light' ? 'card-container-home-two' : 'card-container-home-two darkmodecard'}>
            <h1 className={themeValue === 'light' ? 'card-heading-home' : 'card-heading-home card-heading-home-one'}>Video Blog Generator</h1>
            <p className={themeValue === 'light' ? 'card-desc-home' : 'card-desc-home card-desc-home-one'}>Craft comprehensive blogs from video content to maximize outreach and engagement.</p>
        </div>
        <div className={themeValue === 'light' ? 'card-container-home-two' : 'card-container-home-two darkmodecard'}>
            <h1 className={themeValue === 'light' ? 'card-heading-home' : 'card-heading-home card-heading-home-one'}>Text to SQL Generator</h1>
            <p className={themeValue === 'light' ? 'card-desc-home' : 'card-desc-home card-desc-home-one'}>Easily translate plain language queries into accurate SQL statements for streamlined database interactions.</p>
        </div>
        <div className={themeValue === 'light' ? 'card-container-home-two' : 'card-container-home-two darkmodecard'}>
            <h1 className={themeValue === 'light' ? 'card-heading-home' : 'card-heading-home card-heading-home-one'}>Graph to SQL Generator</h1>
            <p className={themeValue === 'light' ? 'card-desc-home' : 'card-desc-home card-desc-home-one'}>Automatically generate SQL queries from graphical data for efficient data handling.</p>
        </div>
        <div className={themeValue === 'light' ? 'card-container-home-two' : 'card-container-home-two darkmodecard'}>
            <h1 className={themeValue === 'light' ? 'card-heading-home' : 'card-heading-home card-heading-home-one'}>Forecast to SQL Generator</h1>
            <p className={themeValue === 'light' ? 'card-desc-home' : 'card-desc-home card-desc-home-one'}>Simplify predictive analysis by generating SQL queries for forecasting tasks.</p>
        </div>
        <div className={themeValue === 'light' ? 'card-container-home-two' : 'card-container-home-two darkmodecard'}>
            <h1 className={themeValue === 'light' ? 'card-heading-home' : 'card-heading-home card-heading-home-one'}>New Synthetic Data Generator</h1>
            <p className={themeValue === 'light' ? 'card-desc-home' : 'card-desc-home card-desc-home-one'}>Create new, realistic synthetic datasets tailored to your modeling needs.</p>
        </div>
        <div className={themeValue === 'light' ? 'card-container-home-two' : 'card-container-home-two darkmodecard'}>
            <h1 className={themeValue === 'light' ? 'card-heading-home' : 'card-heading-home card-heading-home-one'}>Extended Synthetic Data Generator</h1>
            <p className={themeValue === 'light' ? 'card-desc-home' : 'card-desc-home card-desc-home-one'}>Generate extended datasets with diverse use cases to enhance your data models.</p>
        </div>
        <div className={themeValue === 'light' ? 'card-container-home-two' : 'card-container-home-two darkmodecard'}>
            <h1 className={themeValue === 'light' ? 'card-heading-home' : 'card-heading-home card-heading-home-one'}>Missing Synthetic Data Generator</h1>
            <p className={themeValue === 'light' ? 'card-desc-home' : 'card-desc-home card-desc-home-one'}>Fill data gaps with synthetic data, ensuring consistency and reliability in datasets.</p>
        </div>
        <div className={themeValue === 'light' ? 'card-container-home-two' : 'card-container-home-two darkmodecard'}>
            <h1 className={themeValue === 'light' ? 'card-heading-home' : 'card-heading-home card-heading-home-one'}>Chat to Doc Generator</h1>
            <p className={themeValue === 'light' ? 'card-desc-home' : 'card-desc-home card-desc-home-one'}>Seamlessly convert chat data into structured, professional-grade documents.</p>
        </div>
        <div className={themeValue === 'light' ? 'card-container-home-two' : 'card-container-home-two darkmodecard'}>
            <h1 className={themeValue === 'light' ? 'card-heading-home' : 'card-heading-home card-heading-home-one'}>Chat App Creator</h1>
            <p className={themeValue === 'light' ? 'card-desc-home' : 'card-desc-home card-desc-home-one'}>Design and build feature-rich chat applications integrated with AI capabilities.</p>
        </div>
    </div>
</div>
<div className='home-container-card'>
    <h1 className={themeValue === 'light' ? 'main-heading-home-cards' : 'main-heading-home-cards code-line-number-code-one darkmodecard'}>Explore our Marketplace</h1>
    <div className='home-card-container-sec'>
        <div className={themeValue === 'light' ? 'card-container-home-two' : 'card-container-home-two code-line-number-code-one darkmodecard'}>
            <h1 className={themeValue === 'light' ? 'card-heading-home' : 'card-heading-home card-heading-home-one'}>Blog Generation Agent</h1>
            <p className={themeValue === 'light' ? 'card-desc-home' : 'card-desc-home card-desc-home-one'}>Effortlessly create high-quality, SEO-friendly blogs using advanced AI models like GPT-4, Claude, and Llama 3.1, tailored for text generation.</p>
        </div>
        <div className={themeValue === 'light' ? 'card-container-home-two' : 'card-container-home-two darkmodecard'}>
            <h1 className={themeValue === 'light' ? 'card-heading-home' : 'card-heading-home card-heading-home-one'}>Text to SQL Agent</h1>
            <p className={themeValue === 'light' ? 'card-desc-home' : 'card-desc-home card-desc-home-one'}>Transform plain language queries into precise SQL statements using intelligent models for streamlined database interaction.</p>
        </div>
        <div className={themeValue === 'light' ? 'card-container-home-two' : 'card-container-home-two darkmodecard'}>
            <h1 className={themeValue === 'light' ? 'card-heading-home' : 'card-heading-home card-heading-home-one'}>Image to SQL Agent</h1>
            <p className={themeValue === 'light' ? 'card-desc-home' : 'card-desc-home card-desc-home-one'}>Convert image-based data into SQL queries, enabling seamless database management through cutting-edge AI technology.</p>
        </div>
        <div className={themeValue === 'light' ? 'card-container-home-two' : 'card-container-home-two darkmodecard'}>
            <h1 className={themeValue === 'light' ? 'card-heading-home' : 'card-heading-home card-heading-home-one'}>Forecasting Agent</h1>
            <p className={themeValue === 'light' ? 'card-desc-home' : 'card-desc-home card-desc-home-one'}>Leverage predictive models like GPT-4 and Llama 3.1 to forecast trends and make data-driven decisions efficiently.</p>
        </div>
        <div className={themeValue === 'light' ? 'card-container-home-two' : 'card-container-home-two darkmodecard'}>
            <h1 className={themeValue === 'light' ? 'card-heading-home' : 'card-heading-home card-heading-home-one'}>Customized New Synthetic Data Agent</h1>
            <p className={themeValue === 'light' ? 'card-desc-home' : 'card-desc-home card-desc-home-one'}>Generate realistic synthetic datasets tailored to your unique modeling requirements using state-of-the-art AI models.</p>
        </div>
        <div className={themeValue === 'light' ? 'card-container-home-two' : 'card-container-home-two darkmodecard'}>
            <h1 className={themeValue === 'light' ? 'card-heading-home' : 'card-heading-home card-heading-home-one'}>Extended Data Agent</h1>
            <p className={themeValue === 'light' ? 'card-desc-home' : 'card-desc-home card-desc-home-one'}>Expand and enhance datasets for diverse use cases with tools like AWS Transcribe, Whisper, and more.</p>
        </div>
        <div className={themeValue === 'light' ? 'card-container-home-two' : 'card-container-home-two darkmodecard'}>
            <h1 className={themeValue === 'light' ? 'card-heading-home' : 'card-heading-home card-heading-home-one'}>Filling the Missed Data Agent</h1>
            <p className={themeValue === 'light' ? 'card-desc-home' : 'card-desc-home card-desc-home-one'}>Fill missing data gaps efficiently using AI-driven models that ensure data consistency and reliability.</p>
        </div>
        <div className={themeValue === 'light' ? 'card-container-home-two' : 'card-container-home-two darkmodecard'}>
            <h1 className={themeValue === 'light' ? 'card-heading-home' : 'card-heading-home card-heading-home-one'}>Chat with Doc Agent</h1>
            <p className={themeValue === 'light' ? 'card-desc-home' : 'card-desc-home card-desc-home-one'}>Interact with documents through intelligent chat systems that enhance document processing and data extraction.</p>
        </div>
        <div className={themeValue === 'light' ? 'card-container-home-two' : 'card-container-home-two darkmodecard'}>
            <h1 className={themeValue === 'light' ? 'card-heading-home' : 'card-heading-home card-heading-home-one'}>Chat App Agent</h1>
            <p className={themeValue === 'light' ? 'card-desc-home' : 'card-desc-home card-desc-home-one'}>Build interactive chat applications integrated with AI models to summarize, translate, and analyze text effectively.</p>
        </div>
    </div>
</div>
            <div className='nxt-above-container'>
                <div className='nxt-container'>
                    <p className={themeValue==='light'?'next':'next card-desc-home-one'}>Next</p>
                    <Link to="/platform" className={themeValue==='light'?'platform-next':'platform-next platform-next-one'}>Platfrom overview{">>"}</Link>
                </div>
            </div>
            </div>
        )
    }
}
    </ReactContext.Consumer>
)


export default Home