import { Component } from 'react'
import './index.css'

class Python extends Component{
    state = {
        secWindow:'macrLinux',
        thWindow:'osModule',
        FWindow:'llm',
        model:'LLM',
        activeText:'',
        showLLmOutput:false,
        showRunOutput:false,
        showAgentMemoryOutputOne:false,
        showAgentMemoryOutputTwo:false,
    }
    
    onclickActiveText = active => {
        this.setState({activeText:active})
    }
    
    onClickTab = tab =>{
        this.setState({secWindow:tab})
    }

    onClickTabTwo = tab =>{
        this.setState({thWindow:tab})
    }

    onClickTabth = tab =>{
        this.setState({FWindow:tab})
    }

    onClickModel = tab =>{
        this.setState({model:tab})
    }

    onclickShowDeployAgentOutput = () =>{
        this.setState(prevState=>({showRunOutput:!prevState.showRunOutput}))
    }

    onClickAgentMemory = () =>{
        this.setState(prevState=>({showAgentMemoryOutputOne:!prevState.showAgentMemoryOutputOne}))
    }

    onClickAgentMemoryTwo = () =>{
        this.setState(prevState=>({showAgentMemoryOutputTwo:!prevState.showAgentMemoryOutputTwo}))
    }

    getCreateAExportKey = () =>{
        const {secWindow , thWindow} = this.state
        return(
        <div id="createAndExport">
               <h3>Access an API Key</h3>
                <p>Include an  API key for the creation of the LLM planner.</p>
                <ul>
                    <li className='list-python-one'> You can export it as an environment variable in your terminal or</li>
                    <li className='list-python-one'> You will set it directly in your Python project - you can use the <code style={{backgroundColor:'#f6f7f8' , padding:'2px' , borderRadius:'5px' , border:'1px solid rgb(211, 211, 211)'}}>os</code> module or the <code style={{backgroundColor:'#f6f7f8' , padding:'2px' , borderRadius:'5px' , border:'1px solid rgb(211, 211, 211)'}}>python-dotenv</code> package & <code style={{backgroundColor:'#f6f7f8' , padding:'2px' , borderRadius:'5px' , border:'1px solid rgb(211, 211, 211)'}}>.env</code> file.</li>
                </ul>
                <div className='python-tab-container-one'>
                    <button 
                        type="button" 
                        className={
                            secWindow === 'macrLinux'? 
                            'tab-button-python-one active-tab-python':
                            'tab-button-python-one'
                        } 
                        onClick={
                            ()=>{
                                this.onClickTab("macrLinux")}
                            } 
                        id="macrLinux">
                            MacOS/Linux
                    </button>
                    <button 
                        type="button" 
                        className={
                            secWindow === 'windows'? 
                            'tab-button-python-one active-tab-python':
                            'tab-button-python-one'
                        } 
                        onClick={
                            ()=>{
                                this.onClickTab("windows")}
                        } 
                        id="windows">
                            windows
                    </button>
                </div>
                <div className='code-container-one-home'  style={{padding:'10px' , width:'50%'}}>
                    {secWindow === 'macrLinux' ?
                        <code>API_KEY = "your_api_key_here"</code>
                        :<code>API_KEY = "your_api_key_here"</code>
                    }
                </div>
                <div>
                <button 
                        type="button" 
                        className={
                            thWindow === 'osModule'? 
                            'tab-button-python-one active-tab-python':
                            'tab-button-python-one'
                        } 
                        onClick={
                            ()=>{
                                this.onClickTabTwo("osModule")}
                            } 
                        id="osModule">
                            os module
                    </button>
                    <button 
                        type="button" 
                        className={
                            thWindow === 'python-dotenv'? 
                            'tab-button-python-one active-tab-python':
                            'tab-button-python-one'
                        } 
                        onClick={
                            ()=>{
                                this.onClickTabTwo("python-dotenv")}
                        } 
                        id="python-dotenv">
                            python-dotenv package &.env file
                    </button>
                </div>        
                <pre tabIndex='0' style={{display:'flex', flexDirection:'column' ,  width:'50%' , height:'10vh', justifyContent:'center' , lineHeight:'2.5rem' , paddingRight:'10px', paddingTop:'10px' , paddingBottom:'10px'}} className='coding-element-home new-one-python-container code-container-one-home'>
                    {thWindow === 'osModule'? 
                    <code>
                        <span className='code-line-home new-one-python'>
                            <span className='code-line-number code-line-number-python-one'></span>
                            <span className='code-line-number-code-python-one'><span style={{color:'blue'}}>import</span> os</span>
                        </span>
                        <span className='code-line-home new-one-python'>
                            <span className='code-line-number code-line-number-python-one'></span>
                            <span className='code-line-number-code-python-one'>os.env[<span style={{color:"red"}}>"API_KEY"</span>] = "YOUR_API_KEY_HERE"</span>
                        </span>
                    </code>
                    : 
                    <code>
                        <span className='code-line-home new-one-python'>
                            <span className='code-line-number code-line-number-python-one'></span>
                            <span className='code-line-number-code-python-one'>from dotenv<span style={{color:'blue'}}> import</span> find_dotenv, load_dotenv<span className='code-line-comment'>  # pip install python-dotenv</span></span>
                        </span>
                        <span className='code-line-home new-one-python'>
                            <span className='code-line-number code-line-number-python-one'></span>
                            <span className='code-line-number-code-python-one'>load_dotenv(find_dotenv()) <span className='code-line-comment'># Load environment variables from .env file</span></span>
                        </span>
                    </code>
                    }
                </pre>
        </div>
    )
    }

    getInstallSDK = () =>(
        <div id="InstallSdk">
            <h2>Install the Wyge</h2>
                <p>To get started, install the WygeAI package using pip:</p>
                <div className='code-container-one-home'  style={{padding:'10px' , width:'50%'}}>
                    <code>pip install wyge</code>
                </div>
        </div>
    )

    getCreateAgent = () =>(
        <div id='createAgent'>
            <h2>1. Create a Basic ReACt Agent</h2>
                <p>With the wyge installed, run the code below for the creation of the basic ReAct agent.</p>
                <pre tabIndex='0' style={{  width:'50%' , boxSizing:"border-box",height:'20vh' }} className='coding-element-home code-container-one-home'>
                    <code>
                        <span className='code-line-home'>
                            <span className='code-line-number '></span>
                            <span className='code-line-number-code'><span style={{color:'blue'}}>from </span> wyge.agents.react <span style={{color:'blue'}}>import </span>Agent </span>
                        </span>
                        <span className='code-line-home '>
                            <span className='code-line-number '></span>
                            <span className='code-line-number-code'><span style={{color:'blue'}}>from </span> wyge.models.openai <span style={{color:'blue'}}>import </span>ChatOpenAI </span>
                        </span>
                        <span className='code-line-home '>
                            <span className='code-line-number '></span>
                            <span className='code-line-number-code'></span>
                        </span>
                        <span className='code-line-home'>
                            <span className='code-line-number '></span>
                            <span className='code-line-number-code'>llm = ChatOpenAI(</span>
                        </span>
                        <span className='code-line-home '>
                            <span className='code-line-number '></span>
                            <span className='code-line-number-code'>    memory=<span style={{color:'red'}}>True)</span></span>
                        </span>
                        <span className='code-line-home'>
                            <span className='code-line-number '></span>
                            <span className='code-line-number-code'>agent = Agent(llm)</span>
                        </span>
                        <span className='code-line-home '>
                            <span className='code-line-number '></span>
                            <span className='code-line-number-code'>agent("How to do my homework?")</span>
                        </span>
                    </code>
                    
                    
                </pre>
        </div>
    )

    getLlm = () =>(
        <code className="codeBlockLines_p187">
            <span class="plain" style={{color: "rgb(57, 58, 52)"}}><span  style={{color: "rgb(0, 0, 159)"}}>from</span><span > aixplain</span><span  style={{color:" rgb(57, 58, 52);"}}>.</span><span className="token plain">factories </span><span className="token keyword" style={{color: "rgb(0, 0, 159)"}}>import</span><span className="token plain">ModelFactory</span>
            <br/>
            </span>
            <span className="plain" style={{color: 'rgb(57, 58, 52)'}}><span className="token plain"></span><span className="token keyword" style={{color: "rgb(0, 0, 159)"}}>from</span><span > aixplain</span><span style={{color: "rgb(57, 58, 52)"}}>.</span><span className="token plain">enums </span><span className="token keyword" style={{color: "rgb(0, 0, 159)"}}>import</span><span > Function</span>
                <br/>
                    </span>
                    <span  style={{color: "rgb(57, 58, 52)"}}>
                        <span  style={{display: "inline-block"}}></span>
                        <br/>
                    </span>
                    <span  style={{color: "rgb(57, 58, 52)"}}>
                        <span >model_list </span>
                        <span  style={{color: "rgb(57, 58, 52)"}}>=</span>
                        <span > ModelFactory</span>
                        <span  style={{color: "rgb(57, 58, 52)"}}>.</span>
                        <span >list</span>
                        <span  style={{color: "rgb(57, 58, 52)"}}>(</span>
                        <span >function</span>
                        <span  style={{color: "rgb(57, 58, 52)"}}>=</span>
                        <span >Function</span>
                        <span  style={{color: "rgb(57, 58, 52)"}}>.</span>
                        <span >TEXT_GENERATION</span>
                        <span  style={{color: "rgb(57, 58, 52)"}}>,</span>
                        <span > page_size</span>
                        <span  style={{color: "rgb(57, 58, 52)"}}>=</span>
                        <span  style={{color: "rgb(54, 172, 170)"}}>50</span>
                        <span  style={{color: "rgb(57, 58, 52)"}}>)</span>
                        <span  style={{color: "rgb(57, 58, 52)"}}>[</span>
                        <span  style={{color: "rgb(227, 17, 108)"}}>"results"</span>
                        <span  style={{color: "rgb(57, 58, 52)"}}>]</span>
                        <span ></span>
                        <br/>
                    </span>
                    <span class="token-line" style={{color: "rgb(57, 58, 52)"}}>
                        <span class="token plain" style={{display: "inline-block"}}></span>
                        <br/>
                    </span>
                    <span class="token-line" style={{color: "rgb(57, 58, 52)"}}>
                            <span ></span>
                            <span  style={{color: "rgb(0, 0, 159)"}}>for</span>
                            <span > model </span>
                            <span  style={{color: "rgb(0, 0, 159)"}}>in</span>
                            <span > model_list</span>
                            <span  style={{color: "rgb(57, 58, 52)"}}>:</span>
                            <span ></span>
                            <br/>
                        </span>
                        <span class="token-line" style={{color: "rgb(57, 58, 52)"}}>
                                <span>    </span>
                                <span style={{color: "rgb(0, 0, 159)"}}>print</span>
                                <span  style={{color: "rgb(57, 58, 52)"}}>(</span>
                                <span >model</span>
                                <span  style={{color: "rgb(57, 58, 52)"}}>.</span>
                                <span >id</span>
                                <span  style={{color: "rgb(57, 58, 52)"}}>,</span>
                                <span > model</span>
                                <span  style={{color: "rgb(57, 58, 52)"}}>.</span>
                                <span >name</span>
                                <span  style={{color: "rgb(57, 58, 52)"}}>,</span>
                                <span > model</span>
                                <span  style={{color: "rgb(57, 58, 52)"}}>.</span>
                                <span >supplier</span>
                                <span  style={{color: "rgb(57, 58, 52)"}}>)</span>
                                <br/>
                            </span>
        </code>
    )

    getModels = () =>(
        <code class="codeBlockLines_p187">
                    <span class="plain" style={{color: "rgb(57, 58, 52)"}}>
                        <span class="token keyword" style={{color: "rgb(0, 0, 159)"}}>from</span>
                        <span class="token plain"> aixplain</span>
                        <span class="token punctuation" style={{color:" rgb(57, 58, 52);"}}>.</span>
                        <span class="token plain">factories </span>
                        <span class="token keyword" style={{color: "rgb(0, 0, 159)"}}>import</span>
                        <span class="token plain"> ModelFactory</span>
                        <br/>
                    </span>
                    <span class="plain" style={{color: 'rgb(57, 58, 52)'}}>
                        <span class="token plain"></span>
                        <span class="token keyword" style={{color: "rgb(0, 0, 159)"}}>from</span>
                        <span class="token plain"> aixplain</span>
                        <span class="token punctuation" style={{color: "rgb(57, 58, 52)"}}>.</span>
                        <span class="token plain">enums </span>
                        <span class="token keyword" style={{color: "rgb(0, 0, 159)"}}>import</span>
                        <span class="token plain"> Function</span>
                        <br/>
                    </span>
                    <span class="token-line" style={{color: "rgb(57, 58, 52)"}}>
                        <span class="token plain" style={{display: "inline-block"}}></span>
                        <br/>
                    </span>
                    <span class="plain" style={{color: "rgb(57, 58, 52)"}}>
                        <span class="">model_list </span>
                        <span class="" style={{color: "rgb(57, 58, 52)"}}>=</span>
                        <span class=""> ModelFactory</span>
                        <span class="" style={{color: "rgb(57, 58, 52)"}}>.</span>
                        <span class="">list</span>
                        <span class="" style={{color: "rgb(57, 58, 52)"}}>(</span>
                        <span class="">function</span>
                        <span class="" style={{color: "rgb(57, 58, 52)"}}>=</span>
                        <span class="">Function</span>
                        <span class="" style={{color: "rgb(57, 58, 52)"}}>.</span>
                        <span class="">SPEECH_SYNTHESIS</span>
                        <span class="" style={{color: "rgb(57, 58, 52)"}}>,</span>
                        <span class=""> page_size</span>
                        <span class="" style={{color: "rgb(57, 58, 52)"}}>=</span>
                        <span class="" style={{color: "rgb(54, 172, 170)"}}>50</span>
                        <span class="" style={{color: "rgb(57, 58, 52)"}}>)</span>
                        <span class="" style={{color: "rgb(57, 58, 52)"}}>[</span>
                        <span class="" style={{color: "rgb(227, 17, 108)"}}>"results"</span>
                        <span class="" style={{color: "rgb(57, 58, 52)"}}>]</span>
                        <span class=""></span>
                        <br/>
                    </span>
                    <span class="token-line" style={{color: "rgb(57, 58, 52)"}}>
                        <span class="token plain" style={{display: "inline-block"}}></span>
                        <br/>
                    </span>
                    <span class="" style={{color: "rgb(57, 58, 52)"}}>
                            <span class=""></span>
                            <span class="" style={{color: "rgb(0, 0, 159)"}}>for</span>
                            <span class=""> model </span>
                            <span class="" style={{color: "rgb(0, 0, 159)"}}>in</span>
                            <span class=""> model_list</span>
                            <span class="" style={{color: "rgb(57, 58, 52)"}}>:</span>
                            <span class=""></span>
                            <br/>
                        </span>
                        <span class="token-line" style={{color: "rgb(57, 58, 52)"}}>
                                <span class="">    </span>
                                <span class="" style={{color: "rgb(0, 0, 159)"}}>print</span>
                                <span class="" style={{color: "rgb(57, 58, 52)"}}>(</span>
                                <span class="">model</span>
                                <span class="" style={{color: "rgb(57, 58, 52)"}}>.</span>
                                <span class="">id</span>
                                <span class="" style={{color: "rgb(57, 58, 52)"}}>,</span>
                                <span class=""> model</span>
                                <span class="" style={{color: "rgb(57, 58, 52)"}}>.</span>
                                <span class="">name</span>
                                <span class="" style={{color: "rgb(57, 58, 52)"}}>,</span>
                                <span class=""> model</span>
                                <span class="" style={{color: "rgb(57, 58, 52)"}}>.</span>
                                <span class="">supplier</span>
                                <span class="" style={{color: "rgb(57, 58, 52)"}}>)</span>
                                <br/>
                            </span>
                        </code>
    )

    getUtilites = () =>(
        <code className="codeBlockLines_p187">
        <span class="plain" style={{color: "rgb(57, 58, 52)"}}>
            <span class="token keyword" style={{color: "rgb(0, 0, 159)"}}>from</span>
            <span class="token plain"> aixplain</span>
            <span class="token punctuation" style={{color:" rgb(57, 58, 52);"}}>.</span>
            <span class="token plain">factories </span>
            <span class="token keyword" style={{color: "rgb(0, 0, 159)"}}>import</span>
            <span class="token plain"> ModelFactory</span>
        </span>
        <br/>
        <span class="plain" style={{color: 'rgb(57, 58, 52)'}}>
            <span class="token plain"></span>
            <span class="token keyword" style={{color: "rgb(0, 0, 159)"}}>from</span>
            <span class="token plain"> aixplain</span>
            <span class="token punctuation" style={{color: "rgb(57, 58, 52)"}}>.</span>
            <span class="token plain">enums </span>
            <span class="token keyword" style={{color: "rgb(0, 0, 159)"}}>import</span>
            <span class="token plain"> Function</span>
            <br/>
        </span>
        <span class="plain" style={{color: "rgb(57, 58, 52)"}}>
            <span class="token plain" style={{display: "inline-block"}}></span>
        </span>
        <br/>
        <span class="plain" style={{color: "rgb(57, 58, 52)"}}>
            <span class="token plain">model_list </span>
            <span class="token operator" style={{color: "rgb(57, 58, 52)"}}>=</span>
            <span class="token plain"> ModelFactory</span>
            <span class="token punctuation" style={{color: "rgb(57, 58, 52)"}}>.</span>
            <span class="token builtin">list</span>
            <span class="token punctuation" style={{color: "rgb(57, 58, 52)"}}>(</span>
            <span class="token plain">function</span>
            <span class="token operator" style={{color: "rgb(57, 58, 52)"}}>=</span>
            <span class="token plain">Function</span>
            <span class="token punctuation" style={{color: "rgb(57, 58, 52)"}}>.</span>
            <span class="token plain">UTILITIES</span>
            <span class="token punctuation" style={{color: "rgb(57, 58, 52)"}}>,</span>
            <span class="token plain"> page_size</span>
            <span class="token operator" style={{color: "rgb(57, 58, 52)"}}>=</span>
            <span class="token number" style={{color: "rgb(54, 172, 170)"}}>50</span>
            <span class="token punctuation" style={{color: "rgb(57, 58, 52)"}}>)</span>
            <span class="token punctuation" style={{color: "rgb(57, 58, 52)"}}>[</span>
            <span class="token string" style={{color: "rgb(227, 17, 108)"}}>"results"</span>
            <span class="token punctuation" style={{color: "rgb(57, 58, 52)"}}>]</span>
            <span class="token plain"></span>
            <br/>
        </span>
        <span class="token-line" style={{color: "rgb(57, 58, 52)"}}>
            <span class="token plain" style={{display: "inline-block"}}></span>
            <br/>
        </span>
        <span class="plain" style={{color: "rgb(57, 58, 52)"}}>
                <span class="token plain"></span>
                <span class="token keyword" style={{color: "rgb(0, 0, 159)"}}>for</span>
                <span class="token plain"> model </span>
                <span class="token keyword" style={{color: "rgb(0, 0, 159)"}}>in</span>
                <span class="token plain"> model_list</span>
                <span class="token punctuation" style={{color: "rgb(57, 58, 52)"}}>:</span>
                <span class="token plain"></span>
                <br/>
            </span>
            <span class="plain" style={{color: "rgb(57, 58, 52)"}}>
                    <span class="token plain">    </span>
                    <span class="token keyword" style={{color: "rgb(0, 0, 159)"}}>print</span>
                    <span class="token punctuation" style={{color: "rgb(57, 58, 52)"}}>(</span>
                    <span class="token plain">model</span>
                    <span class="token punctuation" style={{color: "rgb(57, 58, 52)"}}>.</span>
                    <span class="token builtin">id</span>
                    <span class="token punctuation" style={{color: "rgb(57, 58, 52)"}}>,</span>
                    <span class="token plain"> model</span>
                    <span class="token punctuation" style={{color: "rgb(57, 58, 52)"}}>.</span>
                    <span class="token plain">name</span>
                    <span class="token punctuation" style={{color: "rgb(57, 58, 52)"}}>,</span>
                    <span class="token plain"> model</span>
                    <span class="token punctuation" style={{color: "rgb(57, 58, 52)"}}>.</span>
                    <span class="token plain">supplier</span>
                    <span class="token punctuation" style={{color: "rgb(57, 58, 52)"}}>)</span>
                    <br/>
                </span>
            </code>
    )

    getPipelines = () =>(
        <code style={{fontSize:'12px'}}>
                        <span>
                            <span style={{color:'black'}}><span style={{color:'blue'}}>from</span> aixplain.factories <span style={{color:'blue'}}>import</span> PipelineFactory</span>
                        </span>
                        <br/>
                        <br/>
                        <span>
                            <span style={{color:'black'}}>pipeline_list = pipelineFacotry.list()[<span style={{color:'red'}}>"results"</span>]</span>
                            <br/>
                            <br/>
                            <span style={{color:'black'}}>for pipeline in_list:</span><br/>
                            <span style={{color:'black'}}>    <span style={{color:'blue'}}>print</span>(pipeline.<span style={{color:'blue'}}>__dict__</span>)</span>
                        </span>
                    </code>
    )

    getBrowseLLms = () =>{
        const {FWindow} = this.state
        return (
            <div id="BrowseLLMsTools">
                <h2>2.1 Browse for LLMs and tools</h2>
                <p>There are two ways to browse the assets available on marketplace:</p>
                <ul>
                    <li>Browse in Discover. Learn more here.</li>
                    <li>List in the SDK</li>
                </ul>
                <p>Here are examples of how you can search for assets in the SDK.</p>
                <div className='python-tab-container-one'>
                    <button 
                        type="button" 
                        className={
                            FWindow === 'llm'? 
                            'tab-button-python-one active-tab-python':
                            'tab-button-python-one'
                        } 
                        onClick={
                            ()=>{
                                this.onClickTabth("llm")}
                            } 
                        id="llm">
                            LLM
                    </button>
                    <button 
                        type="button" 
                        className={
                            FWindow === 'Models'? 
                            'tab-button-python-one active-tab-python':
                            'tab-button-python-one'
                        } 
                        onClick={
                            ()=>{
                                this.onClickTabth("Models")}
                        } 
                        id="Models">
                            Models
                    </button>
                    <button 
                        type="button" 
                        className={
                            FWindow === 'utilities'? 
                            'tab-button-python-one active-tab-python':
                            'tab-button-python-one'
                        } 
                        onClick={
                            ()=>{
                                this.onClickTabth("utilities")}
                        } 
                        id="utilities">
                            Utilities
                    </button>
                    <button 
                        type="button" 
                        className={
                            FWindow === 'pipelines'? 
                            'tab-button-python-one active-tab-python':
                            'tab-button-python-one'
                        } 
                        onClick={
                            ()=>{
                                this.onClickTabth("pipelines")}
                        } 
                        id="pipelines">
                            Pipelines
                    </button>
                </div>
                <pre tabIndex='0' style={{display:'flex', flexDirection:'column' ,  width:'60%',padding:'10px' , justifyContent:'center' }} className='new-one-python-container code-container-one-home'>
                    {FWindow === 'llm'? 
                    this.getLlm()
                    : null}
                    {FWindow === 'Models'?
                    this.getModels()
                    :null
                    }
                    {FWindow === 'utilities'?
                       this.getUtilites()
                        :
                    null   
                }
                {FWindow === 'pipelines'?
                    this.getPipelines() 
                    : null
                }
                </pre>
            </div>
        )
    }

    getLLmOutput = () =>{
        this.setState(prevState=>({showLLmOutput:!prevState.showLLmOutput}))
    }

    getLLMmodel = () =>(
        <div>
        <div> 
        <p style={{paddingLeft:'15px'}}>In this example, we will use the GPT-4.o Mini model.</p>
        <div className='new-one-python-container code-container-one-home' style={{padding:'20px', width:'57%'}}>
            <code style={{fontSize:'12px'}} >
                    <span>
                        <span style={{color:'black'}}>model = ChatOpenAI(<span style={{color:"red"}}>memory=True</span>)</span>
                    </span>
                    <br/>
                    <br/>
                    <span>
                        <span style={{color:'black'}}>response = model.run(<span style={{color:'red'}}>"What is the capital of Germany?"</span></span>
                        <br/>
                        <span style={{color:'black'}}>response</span><br/>
                    </span>
            </code>
        </div>
        </div>
        <button 
            style={{
                fontSize:'12px' ,
                marginLeft:"12px",
                color:'grey',
                border:'none',
                ouline:'none',
                backgroundColor:'transparent'
            }}
            onClick={this.getLLmOutput}
        >
        Show output
        </button>
        {this.getHiddenOutput()} 
       </div>
      )
    
    getHiddenOutputIGeneration = () =>{
        const  {showLLmOutput} = this.state
        return(
            <div>
                {
                showLLmOutput ? 
                <div style={{padding:'20px' , fontSize:'12px',width:'45%',overflow:'auto'}} className=' code-container-one-home'>
                    <code>
                        <span>{'{'}'status': 'SUCCESS',</span><br/>
                        <span>'completed':True,</span><br/>
                        <span className="token plain"> 
                            'data': 
                            <span className='span-element-link'>{'https://aixplain-modelserving-data.s3.amazonaws.com/c4720afd-b7c0-4a59-b024-7db44d567325.png?AWSAccessKeyId=ASIAXZSG5AU6TBU7PRAG&amp;Expires=1732163060&amp;Signature=Zw1lFJYoD8tcgg%2BTuDown11FjJ4%3D&amp;x-amz-security-token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIB5DxtQl90C6Q2TDZTmRr1iwEgkgIPWqKzvB%2F%2FQNzUTDAiEArww%2F%2BOqapDHsIMM9NifQKbW5hWqv2eSBouc7nUZs6ZoqtAUIUxADGgw1MzU5NDU4NzI3MDEiDDSKFoG2h7DYARs0LiqRBaRsHRVKUc%2BQxa9jy08lthVQWnW51%2B5uekZfEwL8HSLl2p605%2B2sKzyDe9c%2B5A%2FVc%2FG%2BWZFG6M4IW%2FKD3mqpfxTs2wGHPtPJFZXFdzE78I4V1l5LuRVdzzawpFqwlxnwAoXixr%2B31NjIRmyWbrM05eMTsUfQ5%2FQj0xJDUMZzFLfVPqHTPq77xkNE%2BtH041Xu00rcIJ3ruIgLEFx4GwucEzYW9vfLI3rYDAzSq3XBVuheHpv4jQ%2BP2bl%2BHPNS3aY8cBi0zUpgS%2FxY5pbMU8mP3WVCd8fjwKn2FaYE8uhSVS2MpAKqQrUAGixf2hIHl4R7Z4cZECzQiHq4qpD3jfg9eTPHkoH2FYDudE%2F1w%2FLzGUFv0Ery4tuSecGTD5Rry%2BuoBZm5jbEjLLjrBdAbntOlnSRnK9doCuhY9D%2B9SF1%2FHei5xj4YOYEgE09YjAuwVbu6zbvM2F9zizdbQlcYo7xKB8rdNi1n4QWipeaXN28Gs6HLb1OluJ9hmvdsWMv7egXHB40YOGr2rfmwpcSkC2MusAvCSakT%2BrQ6nD9VaKtCk9GthvgbTYF7kM7JJlJQaD5TVP9ugIyzmWAvQHDlRSWCQdSLjjcrjL%2FMVyv473CAw995RflH4NI1pUgz%2BwbWMOaiMySMBVfSK1lJ052lNwRYzEKTkBM6GBKAMcc%2BEyKQxTqz1CJhSpiyUTlrxoowQIzM8puxIqgJxr6vUJTKsngGQe8LTpRJE7PwP4ygF05jzmb3XipbUssEjbgd1PK2ibgfKD9eW3xSx67ggVgm72sI3sT19OgqODQucXzLUHnNmR9Qsd42e0X2jU6xSuSGr%2FttC6zhIbqt7TWMLG9piGOE%2FiDAwqliLnSAxoVlo%2Bx6Wl14MDCBweq5BjqxAQVMa2p1iVKKDeyIl9Qw02GrS%2B01mdnEY0aF2JqJO14apNH75hLBZhaGCtbKFtlDXf9L7r9Yg%2FYEk96yaCCdrVVfHTnmIU072DYc2FAmwLvSmwQYzDQzWTWcefLYtoJ9t1hdy%2FICcYA4RlEf7NPC8OpkMLCEaWPyK%2F%2FrF9P7HCPvmYq42D2VHKyxRBFb3ihtOk67Nco9JmfDcMIaRonXmV9JUECy8EOy24fM5hALHdBUFA%3D%3D'},</span></span>                     
                        <span>'runtime': 07.17,</span><br/>
                        <span>'usedCredits': 0.04,</span><br/>
                        <span>{'}'}</span>
                    </code>
                </div>
                :null
            }
            </div>
    )
    }

    getHiddenOutputSpeech = () =>{
        const  {showLLmOutput} = this.state
        return(
            <div>
                {
                showLLmOutput ? 
                <div style={{padding:'20px' , fontSize:'12px',width:'45%',overflow:'auto'}} className=' code-container-one-home'>
                    <code>
                        <span>{'{'}'status': 'SUCCESS',</span><br/>
                        <span>'completed':True,</span><br/>
                        <span className="token plain"> 
                            'data': 
                            <span className='span-element-link'>{'https://aixplain-modelserving-data.s3.amazonaws.com/ca084220-2191-4cd5-9966-25bc3e8690b8.mp3?AWSAccessKeyId=ASIAXZSG5AU67ERIKZT6&Expires=1732163605&Signature=qnqnI99%2Bi9eug9Z2FUYm7vIfDkk%3D&x-amz-security-token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCdKm3CqW9RvDhnt%2Fu%2FR0PRx%2BM%2Fi%2FYCDn8eHKCX0Yz9EQIgc7ubj55G2Bq6RKyuTqYdIXnjtXm081VkWVtc%2Ftno940qtQUIVBADGgw1MzU5NDU4NzI3MDEiDFzyoPeF%2B3oU7OMPdCqSBWwQhpeisndjX94GgF%2BvgkMpTXiM%2BHEnTDLjyvnHS8dn5rl85oIRoZ5IqP8AMH3VN%2Fi5RvJok7cFSu7M1u8RkE1yK2dCkDHNVVWNIaX56wESLK3MNbII6h1jCSD6D2I8mMOnp7ptOixt33NIcp9S2SkBfWkr83RPr3uRlixnZMW61xmKppxwvFbFzr3ICjipnTpPaSEOwdIERxAkOwNQ5SE4nTE%2FvcyBTY5PaRiPpPCBUQhh8m4p66xqd3grKdx3uy2yrmtJ3POUUvW0fA9MGSEnvxIfBNGTAatEZy0unkAxQoKtwmQ30JlYdJlu17nyFNS%2BuA0ZpW34dB9pCfSkWZZkhXz1hAa1Dbcca7IbIlA8p3ULJRq%2BmXrpGrNvnQuGRfEgA%2FJOzHHSUYdf%2F4asRmnAozXmkSlgLeSKr%2B0eU05w3Cf1pcLI%2FnwYMe1VLTzTojFXXtoocU1cUTc5Z4YxbAMb3wj7Kv0GFWNdZgO6iW54lJim7jbsalA2GGuMU%2FbZhvNmvBiIfK%2F4CM5vLOD6yq0W4RETrTlVgJbt8fCHzNbV9LOqi3NZZKidH7mgGpI2LEqM9kyJcoUZNyaE5RFlZS1poOKDjCyxFuk7I1MBvHTBr0VUTHsPKwdXykgQ5jg%2FX5cm0FBFfxkRGkFbc2t%2FQPHOCLhVyUVd%2BSrUtIJRtIfQgy0MAQmwnxxaAy%2BxptwPs6mlcpQnqQaJIFAZTcSeG9%2B%2Fs8WHJzNlCZOC7dISyTPavPUZOM7LBsmOA5HL3o1AC%2Fj%2FmXT2UL4ikZXXMQOLwVl6vAvGOClgcM4%2Ft2pZnjqG0TVAKo93ixr8bx%2FtiCFavw9L%2BqW0o8kzPwZQEOTdTkh5qzCyPMJzeQ8O99pmjce1%2BRUwzszquQY6sQEJMZ3fRfmHBYhsq98rsyPmuUW724XGGKSzhJDg6AZf37Liks%2Fay3cAyM%2FHsMSxzXZb%2B20K%2FvCsweH2HCiTOATrX5mmIKKMMmN%2FyGjwlGOLf3mbdSYHZ2P%2FG5Ce0APJhs0VesN66ktKndQZYlfN%2FJ5W2j%2FFo0%2BhZB%2Fh8ObbdyvJ8%2Bz%2FwQNGlmABc%2FOeBH1iVIplFOLUT8JPEfczzKuHu8XaXAEOBYbiVEgfY%2FFFmvqHr5Q%3D'},</span></span>                     
                        <span>'runtime': 0.244,</span><br/>
                        <span>'usedCredits': 0.000608,</span><br/>
                        <span>{'}'}</span>
                    </code>
                </div>
                :null
            }
            </div>
    )
    }

    getIgenerationmodel = () =>(
        <div>
        <div> 
        <p style={{paddingLeft:'15px'}}>In this example, we will use the DALLE-2 - Standard (1024x1024) model.</p>
        <div className='new-one-python-container code-container-one-home' style={{padding:'20px', width:'57%'}}>
    <code style={{fontSize:'12px'}}>
        <span>
            <span style={{color:'black'}}>
                <span style={{color:'blue'}}>from</span> wyge.models.openai 
                <span style={{color:'blue'}}> import</span> ChatOpenAI
            </span>
        </span>
        <br />
        <span>
            <span style={{color:'black'}}>
                <span style={{color:'blue'}}>from</span> wyge.tools.prebuilt_tools 
                <span style={{color:'blue'}}> import</span> generate_image_openai
            </span>
        </span>
        <br /><br />
        <span>
            <span style={{color:'black'}}>img_tool = generate_image_openai()</span>
        </span>
        <br /><br />
        <span>
            <span style={{color:'black'}}>llm = ChatOpenAI(tools=[img_tool])</span>
        </span>
        <br /><br />
        <span>
            <span style={{color:'black'}}>
                <span style={{color:'black'}}>response = llm.run(
                    <span style={{color:'red'}}>'Draw a image of a dog'</span>
                )
                </span>
            </span>
        </span>
        <br />
        <span>
            <span style={{color:'black'}}>response</span>
        </span>
    </code>
</div>

        </div>
        <button 
            style={{
                fontSize:'12px' ,
                marginLeft:"12px",
                color:'grey',
                border:'none',
                ouline:'none',
                backgroundColor:'transparent'
            }}
            onClick={this.getLLmOutput}
        >
        Show output
        </button>
        {this.getHiddenOutputIGeneration()} 
       </div>
    )

    getSpeechmodel = () =>(
        <div>
        <div> 
        <p style={{paddingLeft:'15px'}}>In this example, we will use the text-davinci model</p>
        <div className='new-one-python-container code-container-one-home' style={{padding:'20px', width:'57%'}}>
            <code style={{fontSize:'12px'}} >
                    <span>
                        <span style={{color:'black'}}>model = ChatOpenAI(<span style={{color:"red"}}>memory=True</span>)</span>
                    </span>
                    <br/>
                    <br/>
                    <span>
                        <span style={{color:'black'}}>response = model.run(<span style={{color:'red'}}>"Hello! Hope you're getting a joyful day!."</span>)</span>
                        <br/>
                        <span style={{color:'black'}}>response</span><br/>
                    </span>
            </code>
        </div>
        </div>
        <button 
            style={{
                fontSize:'12px' ,
                marginLeft:"12px",
                color:'grey',
                border:'none',
                ouline:'none',
                backgroundColor:'transparent'
            }}
            onClick={this.getLLmOutput}
        >
        Show output
        </button>
        {this.getHiddenOutputSpeech()} 
       </div>
    )

    getHiddenOutputGoogleSearch = () =>{
            const  {showLLmOutput} = this.state
            return(
                <div>
                    {
                    showLLmOutput ? 
                    <div style={{padding:'20px' , fontSize:'13px',width:'45%',overflow:'auto',flexWrap:'nowrap',display:'flex',boxSizing:'border-box',lineHeight:'1.5rem'}} className=' code-container-one-home'>
                        <code style={{width:'100%'}}>
                            <span >{'{'}'details': [{'{'}'score': 0, 'document': {'}'},</span><br/>
                            <span >{'{'}'score':1,</span>
                            <span className='plain'> 
                                'data': 'An agent is a person who is empowered to act on behalf of another. Read about different agent types, such as real estate, insurance, and business agents.',
                            </span>
                            <span style={{overflow:'auto'}}>'document': 'https://www.investopedia.com/terms/a/agent.asp'
                                {'}'},</span><br/>
                            <span >{'{'}  'score' : 2,</span><br/>
                            <span style={{display:'flex',flexDirection:'row',flexWrap:'nowrap'}}>  'data':'1.  One that acts or exerts power. 2. a : something that produces or is capable of producing an effect : an active or efficient cause.',</span>
                            <span >  'document': 'https://www.merriam-webster.com/dictionary/agent'{'}'},</span><br/>

                            <span >{'{'}'score': 3,<br/>
                                    'data': 'An agent is a representative who handles customer inquiries, provides assistance, and resolves issues through various communication channels, such as phone, ...',<br/>
                                    'document': 'https://www.speedcommerce.com/what-is/agent/'{'}'},</span><br/>
                            <span> {'{'}'score': 4,<br/>
                                    'data': 'An agent is a person or business that acts on behalf of another person or business. An agent typically performs certain duties, such as brokerage of goods and ...',<br/>
                                    'document': 'https://upmetrics.co/business-terms/agent'{'}'},
                                    </span><br/>
                            <span>{'{'}'score': 5,<br/>
                                    'data': 'An agent is a person or entity authorized to act on behalf of another individual or organization, often to negotiate, represent, or transact business activities ...',<br/>
                                    'document': 'https://www.zenbusiness.com/agent-definition/'{'}'},
                            </span><br/>
                            <span>{'{'}'score': 6,<br/>
                                    'data': 'a person who acts for or represents another: Please contact our agent in Spain for further information. a person who represents an actor, artist, or writer.',<br/>
                                    'document': 'https://dictionary.cambridge.org/us/dictionary/english/agent'{'}'},</span><br/>
                            <span>{'{'}'score': 7,<br/>
                                'data': 'An agent is a person who is authorized to act on behalf of a principal. Agents can bind a principal to legal obligations and can create liability for a ...',<br/>
                                'document': 'https://www.nwcorporatelaw.com/startup-law-glossary/agent/'{'}'},</span><br/>
                            <span>{'{'}'score': 8,<br/>
                                    'data': 'An agent is a person authorized to act on behalf of another person. The party an agent is authorized to act for is known as the principal. A principal-agent ...',<br/>
                                    'document': 'https://www.law.cornell.edu/wex/agent'{'}'},</span><br/>
                            <span>{'{'}'score': 9,<br/>
                                    'data': 'A person who is recognised at law as having the power to create or alter legal rights, duties or relationships of another person, the principal. The agent ...',<br/>
                                    'document': 'https://uk.practicallaw.thomsonreuters.com/w-005-7364?transitionType=Default&contextData=(sc.Default)'{'}'},</span><br/>
                            <span>
                            {'{'}'score': 10,<br/>
                                'data': 'a person who acts in an official capacity for a government or private agency as a guard, detective, or spy: an FBI agent; the secret agents of a foreign power.',<br/>
                                'document': 'https://www.dictionary.com/browse/agent'{'}'}],<br/>
                            </span>
                            <span>
                                'status': 'SUCCESS',<br/>
                                'completed': True,<br/>
                                'data': 'An agent is a person who is empowered to act on behalf of another. Read about different agent types, such as real estate, insurance, and business agents.',<br/>
                                'runTime': 0.824,<br/>
                                'usedCredits': 0.00075{'}'}<br/>
                            </span>
                        </code>
                    </div>
                    :null
                }
                </div>
        )
    }

    getGSearchmodel = () =>(
        <div>
        <div> 
        <p style={{paddingLeft:'15px'}}>In this example, we will use the Google Search model.</p>
        <pre className='new-one-python-container code-container-one-home' style={{padding:'20px', width:'57%'}}>
            <code style={{fontSize:'12px'}} >
                    <span>
                        <span style={{color:'black'}}>model = ChatOpenAI(<span style={{color:"red"}}>memory=True</span>)</span>
                    </span>
                    <br/>
                    <br/>
                    <span>
                        <span style={{color:'black'}}>response = model.run(<span style={{color:'red'}}>"What is an AI?"</span>)</span>
                        <br/>
                        <span style={{color:'black'}}>response</span><br/>
                    </span>
            </code>
        </pre>
        </div>
        <button 
            style={{
                fontSize:'12px' ,
                marginLeft:"12px",
                color:'grey',
                border:'none',
                ouline:'none',
                backgroundColor:'transparent'
            }}
            onClick={this.getLLmOutput}
        >
        Show output
        </button>
        {this.getHiddenOutputGoogleSearch()} 
       </div>
    )

    getHiddenOutput = () =>{
        const  {showLLmOutput} = this.state
        return(
            <div>
        {
            showLLmOutput ? 
            <div style={{padding:'20px' , width:'45%'}} className=' code-container-one-home'>
                <code>
                    <span>{'{'}'status': 'SUCCESS',</span><br/>
                    <span>'completed':True,</span>
                    <span>'data':'The capital of France is Paris.',</span><br/>
                    <span>'runtime': 0.539,</span><br/>
                    <span>'usedCredits': 6.299999999999999e-06,</span><br/>
                    <span>'usage': {'{'}'prompt_tokens': 14, 'completion_tokens': 7, 'total_tokens': 21 <br/> {'}}'}</span>
                </code>
            </div>
            :null
        }
        </div>
    )
    }

    getModel = () =>{
        const {model} = this.state
        return(
          <div id="TryAModel">
            <h2>2.2 Try a model</h2>
                <p>After browsing, you can asset using the examples shown below.</p>
                <div>
                <button 
                        type="button" 
                        className={
                            model === 'LLM'? 
                            'tab-button-python-one active-tab-python':
                            'tab-button-python-one'
                        } 
                        onClick={
                            ()=>{
                                this.onClickModel("LLM")}
                            } 
                        id="llm">
                            LLM
                    </button>
                    <button 
                        type="button" 
                        className={
                            model === 'IGeneration'? 
                            'tab-button-python-one active-tab-python':
                            'tab-button-python-one'
                        } 
                        onClick={
                            ()=>{
                                this.onClickModel("IGeneration")}
                            } 
                        id="IGeneration">
                            Image Generation
                    </button>
                    <button 
                        type="button" 
                        className={
                            model === 'Speech'? 
                            'tab-button-python-one active-tab-python':
                            'tab-button-python-one'
                        } 
                        onClick={
                            ()=>{
                                this.onClickModel("Speech")}
                            } 
                        id="Speech">
                            Speech Synthesis
                    </button>
                    <button 
                        type="button" 
                        className={
                            model === 'Gsearch'? 
                            'tab-button-python-one active-tab-python':
                            'tab-button-python-one'
                        } 
                        onClick={
                            ()=>{
                                this.onClickModel("Gsearch")}
                            } 
                        id="Gsearch">
                            Google Search
                    </button>
                </div>
                {model==='LLM' ?
                <div>
                    {this.getLLMmodel()}
                </div>
                : null
                }
                {model==='IGeneration'?
                    <div>
                        {this.getIgenerationmodel()}
                    </div>
                    : null
                }
                {model==='Speech'?
                    <div>
                        {this.getSpeechmodel()}
                    </div>
                    : null
                }
                {model==='Gsearch'?
                    <div>
                        {this.getGSearchmodel()}
                    </div>
                    : null
                }
                <p style={{paddingLeft:'5px'}}>then combine your LLMs and tools to build an agent!</p>
                <pre tabIndex='0' style={{width:'60%',height:'30vh'}} className='coding-element-home code-container-one-home'>
                <code>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>from wyge.agents.react_agent import Agent</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>from wyge.models.openai <span style={{color:'blue'}}>import </span> ChatOpenAI</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>from wyge.tools.prebuilt_tools <span style={{color:'blue'}}>import </span>wikipedia_search</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'></span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>llm = ChatOpenAI(</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>     memory=<span style={{color:'red'}}>True,tools=[wiki_tool]</span>)</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>     agent = <span style={{color:'red'}}>Agent(llm)</span></span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'></span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>response=<span style={{color:'red'}}>agent("Plan a trip from Hyderabad to Goa")</span ><span className="code-line-number-comment"></span></span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>print(response)</span>
                    </span>
                </code>
                </pre>
          </div>
        )
    }

    getHiddenOutputDeployAgent = () =>{
        const {showRunOutput} = this.state

        return (
            <div>
                {showRunOutput ? 
                <div style={{padding:'20px' , width:'50%' , overflow:'auto'}} className=' code-container-one-home'>
                    <code>
                        <span style={{display:'flex',flexDirection:'row'}}>{'{'}'completed': True,<br/> 
                        'status': 'SUCCESS', <br/> 
                        'data': {'{'}<br/>
                        'input': "What's an agent?",<br/> 
                        'output': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.', <br/>
                        'session_id': '122ce984-e52e-49d2-b66f-0d6098bdb27d', 'intermediate_steps': [{'{'}<br/>
                            'agent': 'Agent1', <br/>
                            'input': "What's an agent?",<br/> 
                            'output': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.', <br/>
                        'tool_steps': [{'{'}<br/>
                            'tool': 'speech-synthesis', <br/>
                            'input': "{'{'}<br/>
                                'query': {'{'} <br/>
                                'text': 'An agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program. Agents can be simple scripts or complex systems that use artificial intelligence and machine learning to make decisions and take actions.'{'}}'}",<br/>
                                 'output': "The output of the function 'speech-synthesis' to the input '{'{'}<br/>
                                    'text': 'An agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program. Agents can be simple scripts or complex systems that use artificial intelligence and machine learning to make decisions and take actions.'{'}'}' <br/>
                                    is: https://aixplain-modelserving-data.s3.amazonaws.com/da1f03e2-6998-4553-825e-1c750f9e2580.mp3?AWSAccessKeyId=ASIAXZSG5AU6TBU7PRAG&Expires=1732164266&Signature=SzVQL8ryBaVndd9mjMC64ZbX6KA%3D&x-amz-security-token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIB5DxtQl90C6Q2TDZTmRr1iwEgkgIPWqKzvB%2F%2FQNzUTDAiEArww%2F%2BOqapDHsIMM9NifQKbW5hWqv2eSBouc7nUZs6ZoqtAUIUxADGgw1MzU5NDU4NzI3MDEiDDSKFoG2h7DYARs0LiqRBaRsHRVKUc%2BQxa9jy08lthVQWnW51%2B5uekZfEwL8HSLl2p605%2B2sKzyDe9c%2B5A%2FVc%2FG%2BWZFG6M4IW%2FKD3mqpfxTs2wGHPtPJFZXFdzE78I4V1l5LuRVdzzawpFqwlxnwAoXixr%2B31NjIRmyWbrM05eMTsUfQ5%2FQj0xJDUMZzFLfVPqHTPq77xkNE%2BtH041Xu00rcIJ3ruIgLEFx4GwucEzYW9vfLI3rYDAzSq3XBVuheHpv4jQ%2BP2bl%2BHPNS3aY8cBi0zUpgS%2FxY5pbMU8mP3WVCd8fjwKn2FaYE8uhSVS2MpAKqQrUAGixf2hIHl4R7Z4cZECzQiHq4qpD3jfg9eTPHkoH2FYDudE%2F1w%2FLzGUFv0Ery4tuSecGTD5Rry%2BuoBZm5jbEjLLjrBdAbntOlnSRnK9doCuhY9D%2B9SF1%2FHei5xj4YOYEgE09YjAuwVbu6zbvM2F9zizdbQlcYo7xKB8rdNi1n4QWipeaXN28Gs6HLb1OluJ9hmvdsWMv7egXHB40YOGr2rfmwpcSkC2MusAvCSakT%2BrQ6nD9VaKtCk9GthvgbTYF7kM7JJlJQaD5TVP9ugIyzmWAvQHDlRSWCQdSLjjcrjL%2FMVyv473CAw995RflH4NI1pUgz%2BwbWMOaiMySMBVfSK1lJ052lNwRYzEKTkBM6GBKAMcc%2BEyKQxTqz1CJhSpiyUTlrxoowQIzM8puxIqgJxr6vUJTKsngGQe8LTpRJE7PwP4ygF05jzmb3XipbUssEjbgd1PK2ibgfKD9eW3xSx67ggVgm72sI3sT19OgqODQucXzLUHnNmR9Qsd42e0X2jU6xSuSGr%2FttC6zhIbqt7TWMLG9piGOE%2FiDAwqliLnSAxoVlo%2Bx6Wl14MDCBweq5BjqxAQVMa2p1iVKKDeyIl9Qw02GrS%2B01mdnEY0aF2JqJO14apNH75hLBZhaGCtbKFtlDXf9L7r9Yg%2FYEk96yaCCdrVVfHTnmIU072DYc2FAmwLvSmwQYzDQzWTWcefLYtoJ9t1hdy%2FICcYA4RlEf7NPC8OpkMLCEaWPyK%2F%2FrF9P7HCPvmYq42D2VHKyxRBFb3ihtOk67Nco9JmfDcMIaRonXmV9JUECy8EOy24fM5hALHdBUFA%3D%3D", <br/>
                                    'runTime': None, <br/>
                                    'usedCredits': None{'}'}, <br/>
                                    {'{'}'tool': 'speech-synthesis', <br/>
                                    'input': "{'{'}<br/>
                                        'query': {'{'}<br/>
                                            'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}}'}", <br/>
                                            'output': "The output of the function 'speech-synthesis' to the input '{'{'}<br/>
                                            'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}'}' <br/>
                                            is: https://aixplain-modelserving-data.s3.amazonaws.com/4600948c-f706-46e5-b777-a215715e0f87.mp3?AWSAccessKeyId=ASIAXZSG5AU67ERIKZT6&Expires=1732164268&Signature=qvp6oRT8jovsSB7xkzy5kIqF7N8%3D&x-amz-security-token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCdKm3CqW9RvDhnt%2Fu%2FR0PRx%2BM%2Fi%2FYCDn8eHKCX0Yz9EQIgc7ubj55G2Bq6RKyuTqYdIXnjtXm081VkWVtc%2Ftno940qtQUIVBADGgw1MzU5NDU4NzI3MDEiDFzyoPeF%2B3oU7OMPdCqSBWwQhpeisndjX94GgF%2BvgkMpTXiM%2BHEnTDLjyvnHS8dn5rl85oIRoZ5IqP8AMH3VN%2Fi5RvJok7cFSu7M1u8RkE1yK2dCkDHNVVWNIaX56wESLK3MNbII6h1jCSD6D2I8mMOnp7ptOixt33NIcp9S2SkBfWkr83RPr3uRlixnZMW61xmKppxwvFbFzr3ICjipnTpPaSEOwdIERxAkOwNQ5SE4nTE%2FvcyBTY5PaRiPpPCBUQhh8m4p66xqd3grKdx3uy2yrmtJ3POUUvW0fA9MGSEnvxIfBNGTAatEZy0unkAxQoKtwmQ30JlYdJlu17nyFNS%2BuA0ZpW34dB9pCfSkWZZkhXz1hAa1Dbcca7IbIlA8p3ULJRq%2BmXrpGrNvnQuGRfEgA%2FJOzHHSUYdf%2F4asRmnAozXmkSlgLeSKr%2B0eU05w3Cf1pcLI%2FnwYMe1VLTzTojFXXtoocU1cUTc5Z4YxbAMb3wj7Kv0GFWNdZgO6iW54lJim7jbsalA2GGuMU%2FbZhvNmvBiIfK%2F4CM5vLOD6yq0W4RETrTlVgJbt8fCHzNbV9LOqi3NZZKidH7mgGpI2LEqM9kyJcoUZNyaE5RFlZS1poOKDjCyxFuk7I1MBvHTBr0VUTHsPKwdXykgQ5jg%2FX5cm0FBFfxkRGkFbc2t%2FQPHOCLhVyUVd%2BSrUtIJRtIfQgy0MAQmwnxxaAy%2BxptwPs6mlcpQnqQaJIFAZTcSeG9%2B%2Fs8WHJzNlCZOC7dISyTPavPUZOM7LBsmOA5HL3o1AC%2Fj%2FmXT2UL4ikZXXMQOLwVl6vAvGOClgcM4%2Ft2pZnjqG0TVAKo93ixr8bx%2FtiCFavw9L%2BqW0o8kzPwZQEOTdTkh5qzCyPMJzeQ8O99pmjce1%2BRUwzszquQY6sQEJMZ3fRfmHBYhsq98rsyPmuUW724XGGKSzhJDg6AZf37Liks%2Fay3cAyM%2FHsMSxzXZb%2B20K%2FvCsweH2HCiTOATrX5mmIKKMMmN%2FyGjwlGOLf3mbdSYHZ2P%2FG5Ce0APJhs0VesN66ktKndQZYlfN%2FJ5W2j%2FFo0%2BhZB%2Fh8ObbdyvJ8%2Bz%2FwQNGlmABc%2FOeBH1iVIplFOLUT8JPEfczzKuHu8XaXAEOBYbiVEgfY%2FFFmvqHr5Q%3D", <br/>
                                            'runTime': None,<br/>
                                            'usedCredits': None{'}'}, <br/>
                                            {'{'}<br/>
                                                'tool': 'speech-synthesis', <br/>
                                                'input': "{'{'}<br/>
                                                    'query': {'{'}<br/>
                                                        'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}}'}", <br/>
                                                        'output': "The output of the function 'speech-synthesis' to the input <br/>
                                                        '{'{'}<br/>
                                                            'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}'}' <br/>
                                                            is: https://aixplain-modelserving-data.s3.amazonaws.com/3bedc3d1-29e3-4673-8760-8acb6cc2e5c1.mp3?AWSAccessKeyId=ASIAXZSG5AU67ERIKZT6&Expires=1732164270&Signature=fjkKfiN1V7Acr8cZZo7SjHOJmJs%3D&x-amz-security-token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCdKm3CqW9RvDhnt%2Fu%2FR0PRx%2BM%2Fi%2FYCDn8eHKCX0Yz9EQIgc7ubj55G2Bq6RKyuTqYdIXnjtXm081VkWVtc%2Ftno940qtQUIVBADGgw1MzU5NDU4NzI3MDEiDFzyoPeF%2B3oU7OMPdCqSBWwQhpeisndjX94GgF%2BvgkMpTXiM%2BHEnTDLjyvnHS8dn5rl85oIRoZ5IqP8AMH3VN%2Fi5RvJok7cFSu7M1u8RkE1yK2dCkDHNVVWNIaX56wESLK3MNbII6h1jCSD6D2I8mMOnp7ptOixt33NIcp9S2SkBfWkr83RPr3uRlixnZMW61xmKppxwvFbFzr3ICjipnTpPaSEOwdIERxAkOwNQ5SE4nTE%2FvcyBTY5PaRiPpPCBUQhh8m4p66xqd3grKdx3uy2yrmtJ3POUUvW0fA9MGSEnvxIfBNGTAatEZy0unkAxQoKtwmQ30JlYdJlu17nyFNS%2BuA0ZpW34dB9pCfSkWZZkhXz1hAa1Dbcca7IbIlA8p3ULJRq%2BmXrpGrNvnQuGRfEgA%2FJOzHHSUYdf%2F4asRmnAozXmkSlgLeSKr%2B0eU05w3Cf1pcLI%2FnwYMe1VLTzTojFXXtoocU1cUTc5Z4YxbAMb3wj7Kv0GFWNdZgO6iW54lJim7jbsalA2GGuMU%2FbZhvNmvBiIfK%2F4CM5vLOD6yq0W4RETrTlVgJbt8fCHzNbV9LOqi3NZZKidH7mgGpI2LEqM9kyJcoUZNyaE5RFlZS1poOKDjCyxFuk7I1MBvHTBr0VUTHsPKwdXykgQ5jg%2FX5cm0FBFfxkRGkFbc2t%2FQPHOCLhVyUVd%2BSrUtIJRtIfQgy0MAQmwnxxaAy%2BxptwPs6mlcpQnqQaJIFAZTcSeG9%2B%2Fs8WHJzNlCZOC7dISyTPavPUZOM7LBsmOA5HL3o1AC%2Fj%2FmXT2UL4ikZXXMQOLwVl6vAvGOClgcM4%2Ft2pZnjqG0TVAKo93ixr8bx%2FtiCFavw9L%2BqW0o8kzPwZQEOTdTkh5qzCyPMJzeQ8O99pmjce1%2BRUwzszquQY6sQEJMZ3fRfmHBYhsq98rsyPmuUW724XGGKSzhJDg6AZf37Liks%2Fay3cAyM%2FHsMSxzXZb%2B20K%2FvCsweH2HCiTOATrX5mmIKKMMmN%2FyGjwlGOLf3mbdSYHZ2P%2FG5Ce0APJhs0VesN66ktKndQZYlfN%2FJ5W2j%2FFo0%2BhZB%2Fh8ObbdyvJ8%2Bz%2FwQNGlmABc%2FOeBH1iVIplFOLUT8JPEfczzKuHu8XaXAEOBYbiVEgfY%2FFFmvqHr5Q%3D", <br/>
                                                            'runTime': None, <br/>
                                                            'usedCredits': None<br/>
                                                            {'}'}, <br/>
                                                            {'{'}<br/>
                                                            'tool': 'speech-synthesis', <br/>
                                                            'input': "{'{'}<br/>
                                                            'query': {'{'}<br/>
                                                                'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}}'}", <br/>
                                                                'output': "The output of the function 'speech-synthesis' to the input<br/> 
                                                                '{'{'}<br/>
                                                                    'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}'}' <br/>
                                                                    is: https://aixplain-modelserving-data.s3.amazonaws.com/6ec87b5c-e554-4872-994c-e63c1cdcac7c.mp3?AWSAccessKeyId=ASIAXZSG5AU6TBU7PRAG&Expires=1732164272&Signature=i4xKS4rzQk%2Fyo4nb6sEJlJKcbbw%3D&x-amz-security-token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIB5DxtQl90C6Q2TDZTmRr1iwEgkgIPWqKzvB%2F%2FQNzUTDAiEArww%2F%2BOqapDHsIMM9NifQKbW5hWqv2eSBouc7nUZs6ZoqtAUIUxADGgw1MzU5NDU4NzI3MDEiDDSKFoG2h7DYARs0LiqRBaRsHRVKUc%2BQxa9jy08lthVQWnW51%2B5uekZfEwL8HSLl2p605%2B2sKzyDe9c%2B5A%2FVc%2FG%2BWZFG6M4IW%2FKD3mqpfxTs2wGHPtPJFZXFdzE78I4V1l5LuRVdzzawpFqwlxnwAoXixr%2B31NjIRmyWbrM05eMTsUfQ5%2FQj0xJDUMZzFLfVPqHTPq77xkNE%2BtH041Xu00rcIJ3ruIgLEFx4GwucEzYW9vfLI3rYDAzSq3XBVuheHpv4jQ%2BP2bl%2BHPNS3aY8cBi0zUpgS%2FxY5pbMU8mP3WVCd8fjwKn2FaYE8uhSVS2MpAKqQrUAGixf2hIHl4R7Z4cZECzQiHq4qpD3jfg9eTPHkoH2FYDudE%2F1w%2FLzGUFv0Ery4tuSecGTD5Rry%2BuoBZm5jbEjLLjrBdAbntOlnSRnK9doCuhY9D%2B9SF1%2FHei5xj4YOYEgE09YjAuwVbu6zbvM2F9zizdbQlcYo7xKB8rdNi1n4QWipeaXN28Gs6HLb1OluJ9hmvdsWMv7egXHB40YOGr2rfmwpcSkC2MusAvCSakT%2BrQ6nD9VaKtCk9GthvgbTYF7kM7JJlJQaD5TVP9ugIyzmWAvQHDlRSWCQdSLjjcrjL%2FMVyv473CAw995RflH4NI1pUgz%2BwbWMOaiMySMBVfSK1lJ052lNwRYzEKTkBM6GBKAMcc%2BEyKQxTqz1CJhSpiyUTlrxoowQIzM8puxIqgJxr6vUJTKsngGQe8LTpRJE7PwP4ygF05jzmb3XipbUssEjbgd1PK2ibgfKD9eW3xSx67ggVgm72sI3sT19OgqODQucXzLUHnNmR9Qsd42e0X2jU6xSuSGr%2FttC6zhIbqt7TWMLG9piGOE%2FiDAwqliLnSAxoVlo%2Bx6Wl14MDCBweq5BjqxAQVMa2p1iVKKDeyIl9Qw02GrS%2B01mdnEY0aF2JqJO14apNH75hLBZhaGCtbKFtlDXf9L7r9Yg%2FYEk96yaCCdrVVfHTnmIU072DYc2FAmwLvSmwQYzDQzWTWcefLYtoJ9t1hdy%2FICcYA4RlEf7NPC8OpkMLCEaWPyK%2F%2FrF9P7HCPvmYq42D2VHKyxRBFb3ihtOk67Nco9JmfDcMIaRonXmV9JUECy8EOy24fM5hALHdBUFA%3D%3D",<br/> 
                                                                    'runTime': None, <br/>
                                                                    'usedCredits': None
                                                                    {'}'}<br/>
                                                                    {'{'}
                                                                        'tool': 'speech-synthesis', 
                                                                        'input': "{'{'}
                                                                            'query': {'{'}
                                                                                'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}}'}", 
                                                                                'output': "The output of the function 'speech-synthesis' to the input 
                                                                                '{'{'}
                                                                                    'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}'}' 
                                                                                    is: https://aixplain-modelserving-data.s3.amazonaws.com/0bc5b53d-9fc2-4b8e-9c12-0ef74aff3f84.mp3?AWSAccessKeyId=ASIAXZSG5AU6TBU7PRAG&Expires=1732164275&Signature=LBoyutSKoV%2Fl9cl%2B99Eh3a44W%2Fo%3D&x-amz-security-token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIB5DxtQl90C6Q2TDZTmRr1iwEgkgIPWqKzvB%2F%2FQNzUTDAiEArww%2F%2BOqapDHsIMM9NifQKbW5hWqv2eSBouc7nUZs6ZoqtAUIUxADGgw1MzU5NDU4NzI3MDEiDDSKFoG2h7DYARs0LiqRBaRsHRVKUc%2BQxa9jy08lthVQWnW51%2B5uekZfEwL8HSLl2p605%2B2sKzyDe9c%2B5A%2FVc%2FG%2BWZFG6M4IW%2FKD3mqpfxTs2wGHPtPJFZXFdzE78I4V1l5LuRVdzzawpFqwlxnwAoXixr%2B31NjIRmyWbrM05eMTsUfQ5%2FQj0xJDUMZzFLfVPqHTPq77xkNE%2BtH041Xu00rcIJ3ruIgLEFx4GwucEzYW9vfLI3rYDAzSq3XBVuheHpv4jQ%2BP2bl%2BHPNS3aY8cBi0zUpgS%2FxY5pbMU8mP3WVCd8fjwKn2FaYE8uhSVS2MpAKqQrUAGixf2hIHl4R7Z4cZECzQiHq4qpD3jfg9eTPHkoH2FYDudE%2F1w%2FLzGUFv0Ery4tuSecGTD5Rry%2BuoBZm5jbEjLLjrBdAbntOlnSRnK9doCuhY9D%2B9SF1%2FHei5xj4YOYEgE09YjAuwVbu6zbvM2F9zizdbQlcYo7xKB8rdNi1n4QWipeaXN28Gs6HLb1OluJ9hmvdsWMv7egXHB40YOGr2rfmwpcSkC2MusAvCSakT%2BrQ6nD9VaKtCk9GthvgbTYF7kM7JJlJQaD5TVP9ugIyzmWAvQHDlRSWCQdSLjjcrjL%2FMVyv473CAw995RflH4NI1pUgz%2BwbWMOaiMySMBVfSK1lJ052lNwRYzEKTkBM6GBKAMcc%2BEyKQxTqz1CJhSpiyUTlrxoowQIzM8puxIqgJxr6vUJTKsngGQe8LTpRJE7PwP4ygF05jzmb3XipbUssEjbgd1PK2ibgfKD9eW3xSx67ggVgm72sI3sT19OgqODQucXzLUHnNmR9Qsd42e0X2jU6xSuSGr%2FttC6zhIbqt7TWMLG9piGOE%2FiDAwqliLnSAxoVlo%2Bx6Wl14MDCBweq5BjqxAQVMa2p1iVKKDeyIl9Qw02GrS%2B01mdnEY0aF2JqJO14apNH75hLBZhaGCtbKFtlDXf9L7r9Yg%2FYEk96yaCCdrVVfHTnmIU072DYc2FAmwLvSmwQYzDQzWTWcefLYtoJ9t1hdy%2FICcYA4RlEf7NPC8OpkMLCEaWPyK%2F%2FrF9P7HCPvmYq42D2VHKyxRBFb3ihtOk67Nco9JmfDcMIaRonXmV9JUECy8EOy24fM5hALHdBUFA%3D%3D", 
                                                                                    'runTime': None, 
                                                                                    'usedCredits': None
                                                                                    {'{'}, 
                                                                                    {'{'}
                                                                                        'tool': 'speech-synthesis', 
                                                                                        'input': "{'{'}
                                                                                            'query': {'{'}
                                                                                                'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}}'}", 
                                                                                                'output': "The output of the function 'speech-synthesis' to the input 
                                                                                                '{'{'}'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'{'}' 
                                                                                                is: https://aixplain-modelserving-data.s3.amazonaws.com/3266dd1a-5c95-477b-ab21-39a5534815fd.mp3?AWSAccessKeyId=ASIAXZSG5AU67ERIKZT6&Expires=1732164277&Signature=zapyN7V1V7EQpVbSFnSpc5jBiRE%3D&x-amz-security-token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCdKm3CqW9RvDhnt%2Fu%2FR0PRx%2BM%2Fi%2FYCDn8eHKCX0Yz9EQIgc7ubj55G2Bq6RKyuTqYdIXnjtXm081VkWVtc%2Ftno940qtQUIVBADGgw1MzU5NDU4NzI3MDEiDFzyoPeF%2B3oU7OMPdCqSBWwQhpeisndjX94GgF%2BvgkMpTXiM%2BHEnTDLjyvnHS8dn5rl85oIRoZ5IqP8AMH3VN%2Fi5RvJok7cFSu7M1u8RkE1yK2dCkDHNVVWNIaX56wESLK3MNbII6h1jCSD6D2I8mMOnp7ptOixt33NIcp9S2SkBfWkr83RPr3uRlixnZMW61xmKppxwvFbFzr3ICjipnTpPaSEOwdIERxAkOwNQ5SE4nTE%2FvcyBTY5PaRiPpPCBUQhh8m4p66xqd3grKdx3uy2yrmtJ3POUUvW0fA9MGSEnvxIfBNGTAatEZy0unkAxQoKtwmQ30JlYdJlu17nyFNS%2BuA0ZpW34dB9pCfSkWZZkhXz1hAa1Dbcca7IbIlA8p3ULJRq%2BmXrpGrNvnQuGRfEgA%2FJOzHHSUYdf%2F4asRmnAozXmkSlgLeSKr%2B0eU05w3Cf1pcLI%2FnwYMe1VLTzTojFXXtoocU1cUTc5Z4YxbAMb3wj7Kv0GFWNdZgO6iW54lJim7jbsalA2GGuMU%2FbZhvNmvBiIfK%2F4CM5vLOD6yq0W4RETrTlVgJbt8fCHzNbV9LOqi3NZZKidH7mgGpI2LEqM9kyJcoUZNyaE5RFlZS1poOKDjCyxFuk7I1MBvHTBr0VUTHsPKwdXykgQ5jg%2FX5cm0FBFfxkRGkFbc2t%2FQPHOCLhVyUVd%2BSrUtIJRtIfQgy0MAQmwnxxaAy%2BxptwPs6mlcpQnqQaJIFAZTcSeG9%2B%2Fs8WHJzNlCZOC7dISyTPavPUZOM7LBsmOA5HL3o1AC%2Fj%2FmXT2UL4ikZXXMQOLwVl6vAvGOClgcM4%2Ft2pZnjqG0TVAKo93ixr8bx%2FtiCFavw9L%2BqW0o8kzPwZQEOTdTkh5qzCyPMJzeQ8O99pmjce1%2BRUwzszquQY6sQEJMZ3fRfmHBYhsq98rsyPmuUW724XGGKSzhJDg6AZf37Liks%2Fay3cAyM%2FHsMSxzXZb%2B20K%2FvCsweH2HCiTOATrX5mmIKKMMmN%2FyGjwlGOLf3mbdSYHZ2P%2FG5Ce0APJhs0VesN66ktKndQZYlfN%2FJ5W2j%2FFo0%2BhZB%2Fh8ObbdyvJ8%2Bz%2FwQNGlmABc%2FOeBH1iVIplFOLUT8JPEfczzKuHu8XaXAEOBYbiVEgfY%2FFFmvqHr5Q%3D", 
                                                                                                'runTime': None, 
                                                                                                'usedCredits': None{'{'}, 
                                                                                                {'{'}'tool': 'speech-synthesis', 
                                                                                                'input': "{'{'}
                                                                                                'query': {'{'}
                                                                                                    'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}}'}", 
                                                                                                    'output': "The output of the function 'speech-synthesis' to the input 
                                                                                                    '{'{'}'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}'}'
                                                                                                    "is: https://aixplain-modelserving-data.s3.amazonaws.com/3d96c887-5e6b-454c-8821-f43678488e19.mp3?AWSAccessKeyId=ASIAXZSG5AU6TBU7PRAG&Expires=1732164280&Signature=h4kYUCQgYe53rcdj83Oy2xnv8Jo%3D&x-amz-security-token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIB5DxtQl90C6Q2TDZTmRr1iwEgkgIPWqKzvB%2F%2FQNzUTDAiEArww%2F%2BOqapDHsIMM9NifQKbW5hWqv2eSBouc7nUZs6ZoqtAUIUxADGgw1MzU5NDU4NzI3MDEiDDSKFoG2h7DYARs0LiqRBaRsHRVKUc%2BQxa9jy08lthVQWnW51%2B5uekZfEwL8HSLl2p605%2B2sKzyDe9c%2B5A%2FVc%2FG%2BWZFG6M4IW%2FKD3mqpfxTs2wGHPtPJFZXFdzE78I4V1l5LuRVdzzawpFqwlxnwAoXixr%2B31NjIRmyWbrM05eMTsUfQ5%2FQj0xJDUMZzFLfVPqHTPq77xkNE%2BtH041Xu00rcIJ3ruIgLEFx4GwucEzYW9vfLI3rYDAzSq3XBVuheHpv4jQ%2BP2bl%2BHPNS3aY8cBi0zUpgS%2FxY5pbMU8mP3WVCd8fjwKn2FaYE8uhSVS2MpAKqQrUAGixf2hIHl4R7Z4cZECzQiHq4qpD3jfg9eTPHkoH2FYDudE%2F1w%2FLzGUFv0Ery4tuSecGTD5Rry%2BuoBZm5jbEjLLjrBdAbntOlnSRnK9doCuhY9D%2B9SF1%2FHei5xj4YOYEgE09YjAuwVbu6zbvM2F9zizdbQlcYo7xKB8rdNi1n4QWipeaXN28Gs6HLb1OluJ9hmvdsWMv7egXHB40YOGr2rfmwpcSkC2MusAvCSakT%2BrQ6nD9VaKtCk9GthvgbTYF7kM7JJlJQaD5TVP9ugIyzmWAvQHDlRSWCQdSLjjcrjL%2FMVyv473CAw995RflH4NI1pUgz%2BwbWMOaiMySMBVfSK1lJ052lNwRYzEKTkBM6GBKAMcc%2BEyKQxTqz1CJhSpiyUTlrxoowQIzM8puxIqgJxr6vUJTKsngGQe8LTpRJE7PwP4ygF05jzmb3XipbUssEjbgd1PK2ibgfKD9eW3xSx67ggVgm72sI3sT19OgqODQucXzLUHnNmR9Qsd42e0X2jU6xSuSGr%2FttC6zhIbqt7TWMLG9piGOE%2FiDAwqliLnSAxoVlo%2Bx6Wl14MDCBweq5BjqxAQVMa2p1iVKKDeyIl9Qw02GrS%2B01mdnEY0aF2JqJO14apNH75hLBZhaGCtbKFtlDXf9L7r9Yg%2FYEk96yaCCdrVVfHTnmIU072DYc2FAmwLvSmwQYzDQzWTWcefLYtoJ9t1hdy%2FICcYA4RlEf7NPC8OpkMLCEaWPyK%2F%2FrF9P7HCPvmYq42D2VHKyxRBFb3ihtOk67Nco9JmfDcMIaRonXmV9JUECy8EOy24fM5hALHdBUFA%3D%3D", 
                                                                                                    'runTime': None, 'usedCredits': None
                                                                                                    {'}'}, 
                                                                                                    {'{'}
                                                                                                        'tool': 'speech-synthesis', 
                                                                                                        'input': {'{'}
                                                                                                            'query': 
                                                                                                                {'{'}'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}}'}", 
                                                                                                                'output': "The output of the function 'speech-synthesis' to the input 
                                                                                                                {'{'}
                                                                                                                    'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}'}' 
                                                                                                                    is: https://aixplain-modelserving-data.s3.amazonaws.com/753008b2-6498-4231-be9c-86396fbd89b0.mp3?AWSAccessKeyId=ASIAXZSG5AU67ERIKZT6&Expires=1732164283&Signature=2W3CNpvPxl4CVR7vsRkAH4%2FifHA%3D&x-amz-security-token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCdKm3CqW9RvDhnt%2Fu%2FR0PRx%2BM%2Fi%2FYCDn8eHKCX0Yz9EQIgc7ubj55G2Bq6RKyuTqYdIXnjtXm081VkWVtc%2Ftno940qtQUIVBADGgw1MzU5NDU4NzI3MDEiDFzyoPeF%2B3oU7OMPdCqSBWwQhpeisndjX94GgF%2BvgkMpTXiM%2BHEnTDLjyvnHS8dn5rl85oIRoZ5IqP8AMH3VN%2Fi5RvJok7cFSu7M1u8RkE1yK2dCkDHNVVWNIaX56wESLK3MNbII6h1jCSD6D2I8mMOnp7ptOixt33NIcp9S2SkBfWkr83RPr3uRlixnZMW61xmKppxwvFbFzr3ICjipnTpPaSEOwdIERxAkOwNQ5SE4nTE%2FvcyBTY5PaRiPpPCBUQhh8m4p66xqd3grKdx3uy2yrmtJ3POUUvW0fA9MGSEnvxIfBNGTAatEZy0unkAxQoKtwmQ30JlYdJlu17nyFNS%2BuA0ZpW34dB9pCfSkWZZkhXz1hAa1Dbcca7IbIlA8p3ULJRq%2BmXrpGrNvnQuGRfEgA%2FJOzHHSUYdf%2F4asRmnAozXmkSlgLeSKr%2B0eU05w3Cf1pcLI%2FnwYMe1VLTzTojFXXtoocU1cUTc5Z4YxbAMb3wj7Kv0GFWNdZgO6iW54lJim7jbsalA2GGuMU%2FbZhvNmvBiIfK%2F4CM5vLOD6yq0W4RETrTlVgJbt8fCHzNbV9LOqi3NZZKidH7mgGpI2LEqM9kyJcoUZNyaE5RFlZS1poOKDjCyxFuk7I1MBvHTBr0VUTHsPKwdXykgQ5jg%2FX5cm0FBFfxkRGkFbc2t%2FQPHOCLhVyUVd%2BSrUtIJRtIfQgy0MAQmwnxxaAy%2BxptwPs6mlcpQnqQaJIFAZTcSeG9%2B%2Fs8WHJzNlCZOC7dISyTPavPUZOM7LBsmOA5HL3o1AC%2Fj%2FmXT2UL4ikZXXMQOLwVl6vAvGOClgcM4%2Ft2pZnjqG0TVAKo93ixr8bx%2FtiCFavw9L%2BqW0o8kzPwZQEOTdTkh5qzCyPMJzeQ8O99pmjce1%2BRUwzszquQY6sQEJMZ3fRfmHBYhsq98rsyPmuUW724XGGKSzhJDg6AZf37Liks%2Fay3cAyM%2FHsMSxzXZb%2B20K%2FvCsweH2HCiTOATrX5mmIKKMMmN%2FyGjwlGOLf3mbdSYHZ2P%2FG5Ce0APJhs0VesN66ktKndQZYlfN%2FJ5W2j%2FFo0%2BhZB%2Fh8ObbdyvJ8%2Bz%2FwQNGlmABc%2FOeBH1iVIplFOLUT8JPEfczzKuHu8XaXAEOBYbiVEgfY%2FFFmvqHr5Q%3D", 
                                                                                                                    'runTime': None, 
                                                                                                                    'usedCredits': None
                                                                                                                {'}'}, 
                                                                                                                {'{'}
                                                                                                                'tool': 'speech-synthesis', 
                                                                                                                'input': {'{'}
                                                                                                                    'query': {'{'}
                                                                                                                        'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}}'}", 
                                                                                                                        'output': "The output of the function 'speech-synthesis' to the input 
                                                                                                                        {'{'}'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}'}' 
                                                                                                                                is: 'https://aixplain-modelserving-data.s3.amazonaws.com/46e58587-3a90-420e-b4c7-dbb07efddc6e.mp3?AWSAccessKeyId=ASIAXZSG5AU67ERIKZT6&Expires=1732164287&Signature=zqvAXBtnTlwQbB9FNdB79HHcBmA%3D&x-amz-security-token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCdKm3CqW9RvDhnt%2Fu%2FR0PRx%2BM%2Fi%2FYCDn8eHKCX0Yz9EQIgc7ubj55G2Bq6RKyuTqYdIXnjtXm081VkWVtc%2Ftno940qtQUIVBADGgw1MzU5NDU4NzI3MDEiDFzyoPeF%2B3oU7OMPdCqSBWwQhpeisndjX94GgF%2BvgkMpTXiM%2BHEnTDLjyvnHS8dn5rl85oIRoZ5IqP8AMH3VN%2Fi5RvJok7cFSu7M1u8RkE1yK2dCkDHNVVWNIaX56wESLK3MNbII6h1jCSD6D2I8mMOnp7ptOixt33NIcp9S2SkBfWkr83RPr3uRlixnZMW61xmKppxwvFbFzr3ICjipnTpPaSEOwdIERxAkOwNQ5SE4nTE%2FvcyBTY5PaRiPpPCBUQhh8m4p66xqd3grKdx3uy2yrmtJ3POUUvW0fA9MGSEnvxIfBNGTAatEZy0unkAxQoKtwmQ30JlYdJlu17nyFNS%2BuA0ZpW34dB9pCfSkWZZkhXz1hAa1Dbcca7IbIlA8p3ULJRq%2BmXrpGrNvnQuGRfEgA%2FJOzHHSUYdf%2F4asRmnAozXmkSlgLeSKr%2B0eU05w3Cf1pcLI%2FnwYMe1VLTzTojFXXtoocU1cUTc5Z4YxbAMb3wj7Kv0GFWNdZgO6iW54lJim7jbsalA2GGuMU%2FbZhvNmvBiIfK%2F4CM5vLOD6yq0W4RETrTlVgJbt8fCHzNbV9LOqi3NZZKidH7mgGpI2LEqM9kyJcoUZNyaE5RFlZS1poOKDjCyxFuk7I1MBvHTBr0VUTHsPKwdXykgQ5jg%2FX5cm0FBFfxkRGkFbc2t%2FQPHOCLhVyUVd%2BSrUtIJRt
                                                                                                                                IfQgy0MAQmwnxxaAy%2BxptwPs6mlcpQnqQaJIFAZTcSeG9%2B%2Fs8WHJzNlCZOC7dISyTPavPUZOM7LBsmOA5HL3o1AC%2Fj%2FmXT2UL4ikZXXMQOLwVl6vAvGOClgcM4%2Ft2pZnjqG0TVAKo93ixr8bx%2FtiCFavw9L%2BqW0o8kzPwZQEOTdTkh5qzCyPMJzeQ8O99pmjce1%2BRUwzszquQY6sQEJMZ3fRfmHBYhsq98rsyPmuUW724XGGKSzhJDg6AZf37Liks%2Fay3cAyM%2FHsMSxzXZb%2B20K%2FvCsweH2HCiTOATrX5mmIKKMMmN%2FyGjwlGOLf3mbdSYHZ2P%2FG5Ce0APJhs0VesN66ktKndQZYlfN%2FJ5W2j%2FFo0%2BhZB%2Fh8ObbdyvJ8%2Bz%2FwQNGlmABc%2FOeBH1iVIplFOLUT8JPEfczzKuHu8XaXAEOBYbiVEgfY%2FFFmvqHr5Q%3D', 
                                                                                                                                'runTime': None, 
                                                                                                                                'usedCredits': None
                                                                                                                        {'}'}, 
                                                                                                                        {'}'}
                                                                                                                        'tool': 'speech-synthesis', 
                                                                                                                        'input': {'{'}
                                                                                                                        'query': {'{'}
                                                                                                                        'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}}'}", 
                                                                                                                        'output': "The output of the function 'speech-synthesis' to the input 
                                                                                                                        '{'{'}'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}'}' '
                                                                                                                        is: https://aixplain-modelserving-data.s3.amazonaws.com/32a4c0d3-6752-455d-be10-df60fc43ef14.mp3?AWSAccessKeyId=ASIAXZSG5AU6TBU7PRAG&Expires=1732164290&Signature=GnOIA7lGtUUqgoNoJ2lkkCqEVpA%3D&x-amz-security-token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIB5DxtQl90C6Q2TDZTmRr1iwEgkgIPWqKzvB%2F%2FQNzUTDAiEArww%2F%2BOqapDHsIMM9NifQKbW5hWqv2eSBouc7nUZs6ZoqtAUIUxADGgw1MzU5NDU4NzI3MDEiDDSKFoG2h7DYARs0LiqRBaRsHRVKUc%2BQxa9jy08lthVQWnW51%2B5uekZfEwL8HSLl2p605%2B2sKzyDe9c%2B5A%2FVc%2FG%2BWZFG6M4IW%2FKD3mqpfxTs2wGHPtPJFZXFdzE78I4V1l5LuRVdzzawpFqwlxnwAoXixr%2B31NjIRmyWbrM05eMTsUfQ5%2FQj0xJDUMZzFLfVPqHTPq77xkNE%2BtH041Xu00rcIJ3ruIgLEFx4GwucEzYW9vfLI3rYDAzSq3XBVuheHpv4jQ%2BP2bl%2BHPNS3aY8cBi0zUpgS%2FxY5pbMU8mP3WVCd8fjwKn2FaYE8uhSVS2MpAKqQrUAGixf2hIHl4R7Z4cZECzQiHq4qpD3jfg9eTPHkoH2FYDudE%2F1w%2FLzGUFv0Ery4tuSecGTD5Rry%2BuoBZm5jbEjLLjrBdAbntOlnSRnK9doCuhY9D%2B9SF1%2FHei5xj4YOYEgE09YjAuwVbu6zbvM2F9zizdbQlcYo7xKB8rdNi1n4QWipeaXN28Gs6HLb1OluJ9hmvdsWMv7egXHB40YOGr2rfmwpcSkC2MusAvCSakT%2BrQ6nD9VaKtCk9GthvgbTYF7kM7JJlJQaD5TVP9ugIyzmWAvQHDlRSWCQdSLjjcrjL%2FMVyv473CAw995RflH4NI1pUgz%2BwbWMOaiMySMBVfSK1lJ052lNwRYzEKTkBM6GBKAMcc%2BEyKQxTqz1CJhSpiyUTlrxoowQIzM8puxIqgJxr6vUJTKsngGQe8LTpRJE7PwP4ygF05jzmb3XipbUssEjbgd1PK2ibgfKD9eW3xSx67ggVgm72sI3sT19OgqODQucXzLUHnNmR9Qsd42e0X2jU6xSuSGr%2FttC6zhIbqt7TWMLG9piGOE%2FiDAwqliLnSAxoVlo%2Bx6Wl14MDCBweq5BjqxAQVMa2p1iVKKDeyIl9Qw02GrS%2B01mdnEY0aF2JqJO14apNH75hLBZhaGCtbKFtlDXf9L7r9Yg%2FYEk96yaCCdrVVfHTnmIU072DYc2FAmwLvSmwQYzDQzWTWcefLYtoJ9t1hdy%2FICcYA4RlEf7NPC8OpkMLCEaWPyK%2F%2FrF9P7HCPvmYq42D2VHKyxRBFb3ihtOk67Nco9JmfDcMIaRonXmV9JUECy8EOy24fM5hALHdBUFA%3D%3D", 
                                                                                                                        'runTime': None, 'usedCredits': None
                                                                                                                        {'}'}, 
                                                                                                                        '{'{'}
                                                                                                                        'tool': 'speech-synthesis', 
                                                                                                                        'input': "{'{'}
                                                                                                                        'query': {'{'}
                                                                                                                            'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.
                                                                                                                            '{'}}'}", 
                                                                                                                            'output': "The output of the function 'speech-synthesis' to the input 
                                                                                                                            '{'{'}'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'}' is: https://aixplain-modelserving-data.s3.amazonaws.com/c9661fd6-2a5a-475e-ad8b-cb2a2cd2fed5.mp3?AWSAccessKeyId=ASIAXZSG5AU6TBU7PRAG&Expires=1732164294&Signature=KHPmEaW45Owz%2FYt%2B%2Bn6gzFOGAlk%3D&x-amz-security-token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIB5DxtQl90C6Q2TDZTmRr1iwEgkgIPWqKzvB%2F%2FQNzUTDAiEArww%2F%2BOqapDHsIMM9NifQKbW5hWqv2eSBouc7nUZs6ZoqtAUIUxADGgw1MzU5NDU4NzI3MDEiDDSKFoG2h7DYARs0LiqRBaRsHRVKUc%2BQxa9jy08lthVQWnW51%2B5uekZfEwL8HSLl2p605%2B2sKzyDe9c%2B5A%2FVc%2FG%2BWZFG6M4IW%2FKD3mqpfxTs2wGHPtPJFZXFdzE78I4V1l5LuRVdzzawpFqwlxnwAoXixr%2B31NjIRmyWbrM05eMTsUfQ5%2FQj0xJDUMZzFLfVPqHTPq77xkNE%2BtH041Xu00rcIJ3ruIgLEFx4GwucEzYW9vfLI3rYDAzSq3XBVuheHpv4jQ%2BP2bl%2BHPNS3aY8cBi0zUpgS%2FxY5pbMU8mP3WVCd8fjwKn2FaYE8uhSVS2MpAKqQrUAGixf2hIHl4R7Z4cZECzQiHq4qpD3jfg9eTPHkoH2FYDudE%2F1w%2FLzGUFv0Ery4tuSecGTD5Rry%2BuoBZm5jbEjLLjrBdAbntOlnSRnK9doCuhY9D%2B9SF1%2FHei5xj4YOYEgE09YjAuwVbu6zbvM2F9zizdbQlcYo7xKB8rdNi1n4QWipeaXN28Gs6HLb1OluJ9hmvdsWMv7egXHB40YOGr2rfmwpcSkC2MusAvCSakT%2BrQ6nD9VaKtCk9GthvgbTYF7kM7JJlJQaD5TVP9ugIyzmWAvQHDlRSWCQdSLjjcrjL%2FMVyv473CAw995RflH4NI1pUgz%2BwbWMOaiMySMBVfSK1lJ052lNwRYzEKTkBM6GBKAMcc%2BEyKQxTqz1CJhSpiyUTlrxoowQIzM8puxIqgJxr6vUJTKsngGQe8LTpRJE7PwP4ygF05jzmb3XipbUssEjbgd1PK2ibgfKD9eW3xSx67ggVgm72sI3sT19OgqODQucXzLUHnNmR9Qsd42e0X2jU6xSuSGr%2FttC6zhIbqt7TWMLG9piGOE%2FiDAwqliLnSAxoVlo%2Bx6Wl14MDCBweq5BjqxAQVMa2p1iVKKDeyIl9Qw02GrS%2B01mdnEY0aF2JqJO14apNH75hLBZhaGCtbKFtlDXf9L7r9Yg%2FYEk96yaCCdrVVfHTnmIU072DYc2FAmwLvSmwQYzDQzWTWcefLYtoJ9t1hdy%2FICcYA4RlEf7NPC8OpkMLCEaWPyK%2F%2FrF9P7HCPvmYq42D2VHKyxRBFb3ihtOk67Nco9JmfDcMIaRonXmV9JUECy8EOy24fM5hALHdBUFA%3D%3D", 
                                                                                                                                'runTime': None, 
                                                                                                                                'usedCredits': None
                                                                                                                            {'}'}, 
                                                                                                                            {'{'}'tool': 'speech-synthesis', 
                                                                                                                            'input': "{'{'}
                                                                                                                            'query': {'{'}'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}}'}", 
                                                                                                                            'output': "The output of the function 'speech-synthesis' to the input 
                                                                                                                            '{'{'}'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.
                                                                                                                            '{'}'}' 
                                                                                                                            is: https://aixplain-modelserving-data.s3.amazonaws.com/4908d85b-578c-4288-b04f-a6c8a9c013cc.mp3?AWSAccessKeyId=ASIAXZSG5AU6TBU7PRAG&Expires=1732164298&Signature=bIK%2FQ2M%2BYJi%2Fwyi0ckpFYeaN6rc%3D&x-amz-security-token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIB5DxtQl90C6Q2TDZTmRr1iwEgkgIPWqKzvB%2F%2FQNzUTDAiEArww%2F%2BOqapDHsIMM9NifQKbW5hWqv2eSBouc7nUZs6ZoqtAUIUxADGgw1MzU5NDU4NzI3MDEiDDSKFoG2h7DYARs0LiqRBaRsHRVKUc%2BQxa9jy08lthVQWnW51%2B5uekZfEwL8HSLl2p605%2B2sKzyDe9c%2B5A%2FVc%2FG%2BWZFG6M4IW%2FKD3mqpfxTs2wGHPtPJFZXFdzE78I4V1l5LuRVdzzawpFqwlxnwAoXixr%2B31NjIRmyWbrM05eMTsUfQ5%2FQj0xJDUMZzFLfVPqHTPq77xkNE%2BtH041Xu00rcIJ3ruIgLEFx4GwucEzYW9vfLI3rYDAzSq3XBVuheHpv4jQ%2BP2bl%2BHPNS3aY8cBi0zUpgS%2FxY5pbMU8mP3WVCd8fjwKn2FaYE8uhSVS2MpAKqQrUAGixf2hIHl4R7Z4cZECzQiHq4qpD3jfg9eTPHkoH2FYDudE%2F1w%2FLzGUFv0Ery4tuSecGTD5Rry%2BuoBZm5jbEjLLjrBdAbntOlnSRnK9doCuhY9D%2B9SF1%2FHei5xj4YOYEgE09YjAuwVbu6zbvM2F9zizdbQlcYo7xKB8rdNi1n4QWipeaXN28Gs6HLb1OluJ9hmvdsWMv7egXHB40YOGr2rfmwpcSkC2MusAvCSakT%2BrQ6nD9VaKtCk9GthvgbTYF7kM7JJlJQaD5TVP9ugIyzmWAvQHDlRSWCQdSLjjcrjL%2FMVyv473CAw995RflH4NI1pUgz%2BwbWMOaiMySMBVfSK1lJ052lNwRYzEKTkBM6GBKAMcc%2BEyKQxTqz1CJhSpiyUTlrxoowQIzM8puxIqgJxr6vUJTKsngGQe8LTpRJE7PwP4ygF05jzmb3XipbUssEjbgd1PK2ibgfKD9eW3xSx67ggVgm72sI3sT19OgqODQucXzLUHnNmR9Qsd42e0X2jU6xSuSGr%2FttC6zhIbqt7TWMLG9piGOE%2FiDAwqliLnSAxoVlo%2Bx6Wl14MDCBweq5BjqxAQVMa2p1iVKKDeyIl9Qw02GrS%2B01mdnEY0aF2JqJO14apNH75hLBZhaGCtbKFtlDXf9L7r9Yg%2FYEk96yaCCdrVVfHTnmIU072DYc2FAmwLvSmwQYzDQzWTWcefLYtoJ9t1hdy%2FICcYA4RlEf7NPC8OpkMLCEaWPyK%2F%2FrF9P7HCPvmYq42D2VHKyxRBFb3ihtOk67Nco9JmfDcMIaRonXmV9JUECy8EOy24fM5hALHdBUFA%3D%3D", 
                                                                                                                            'runTime': None, 
                                                                                                                            'usedCredits': None
                                                                                                                            {'}'}], 
                                                                                                                            'thought': None, 
                                                                                                                            'runTime': 38.065, 
                                                                                                                            'usedCredits': 0.00013737312000000002
                        {'}]}}'}</span>
                    </code>
                </div>
                :null}
            </div>
        )
    }

    getrunADeployAgent = () =>(
        <div id="RunAndDeploy">
          <div>
            <h2>3. Run and deploy an Agent </h2>
            <p style={{paddingLeft:'15px'}}>Run and deploy an agent to see its response inaction.</p>
            <div className='new-one-python-container code-container-one-home' style={{padding:'20px', width:'57%'}}>
                <code style={{fontSize:'12px'}} >
                        <span>
                            <span style={{color:'black'}}>agent_response = model.run(<span style={{color:"red"}}>"What's an agent?"</span>)</span>
                        </span>
                        <br/>
                        <span>
                            <span style={{color:'black'}}><span style={{color:'blue'}}>print</span>(agent_response)</span>
                            <br/>
                        </span>
                </code>
            </div>
            </div>
            <button 
                style={{
                    fontSize:'12px' ,
                    marginLeft:"12px",
                    color:'grey',
                    border:'none',
                    ouline:'none',
                    backgroundColor:'transparent'
                }}
                onClick={this.onclickShowDeployAgentOutput}
            >
            Show output
            </button>
            {this.getHiddenOutputDeployAgent()} 
       </div>
    )

    getHiddenOutputAgentMemory = () =>{
        const  {showAgentMemoryOutputOne} = this.state
        return(
        <div>
            {
            showAgentMemoryOutputOne ? 
            <div style={{padding:'20px' , width:'57%' }} className=' code-container-one-home'>
                <code>
                    <span>Session id: 2bfcbdfb-5b70-4634-81c0-d28366514fe7</span>
                </code>
            </div>
            :null
        }
        </div>
        )
    }

    getHiddenOutputAgentMemoryTwo = () =>{
        const  {showAgentMemoryOutputTwo} = this.state
        return(
        <div>
            {
            showAgentMemoryOutputTwo ? 
            <div style={{padding:'20px' , width:'50%' , overflow:'auto' }} className=' code-container-one-home'>
                <pre tabindex="0" class="prism-code language-{} codeBlock_qGQc thin-scrollbar" style={{color: "rgb(57, 58, 52)", backgroundColor: "rgb(246, 248, 250)"}}><code className="codeBlockLines_p187">
                <span  style={{color:" rgb(57, 58, 52)"}}>
                <span >{'{'}'completed': True,</span><br/>
                </span><span style={{color:" rgb(57, 58, 52)"}}><span > 'status': 'SUCCESS',</span><br/>
                </span><span style={{color:" rgb(57, 58, 52)"}}><span > 'data': {'{'}<br/>
                    'input': 'What makes this text interesting?',</span><br/>
                </span><span style={{color:" rgb(57, 58, 52)"}}>
                <span >  'output': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.',</span><br/>
                </span><span style={{color:" rgb(57, 58, 52)"}}><span >  'session_id': '2bfcbdfb-5b70-4634-81c0-d28366514fe7',</span><br/>
                </span><span style={{color:" rgb(57, 58, 52)"}}><span >  'intermediate_steps': [{'{'}'agent': 'Agent',</span><br/></span>
                <span style={{color:" rgb(57, 58, 52)"}}><span >    'input': 'What makes this text interesting?',</span><br/></span>
                <span style={{color:" rgb(57, 58, 52)"}}><span >    'output': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.',</span><br/></span>
                <span style={{color:" rgb(57, 58, 52)"}}><span >    'tool_steps': [{'{'}'tool': 'speech-synthesis',</span><br/></span>
                <span style={{color:" rgb(57, 58, 52)"}}><span >      'input': "{'{'}'query': {'{'}'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}}'}",</span><br/></span>
                <span style={{color:" rgb(57, 58, 52)"}}><span >      'output': "The output of the function 'speech-synthesis' to the input '{'{'}'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}'}' 
                is: https://aixplain-modelserving-data.s3.amazonaws.com/1633114b-69d7-43e2-83ad-05a177d384c5.mp3?AWSAccessKeyId=ASIAXZSG5AU6ZXNS4DVX&amp;Expires=1732099780&amp;Signature=iMyWgFO941v3E%2BGu3K7Pk89b4jE%3D&amp;x-amz-security-token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCYXLnt7efeTnAnA%2FZVbN804j7RZE6cvs8Iktpv4EWBaAIhALhRVmxzQVVmawEw3fIa%2FuSOgRjAJ%2BAijSGtegvNvMLQKrUFCEIQAxoMNTM1OTQ1ODcyNzAxIgzOMA%2BAX%2BWSC9MBR6YqkgV6%2FhoQpN7G%2FSmYL2sKBL5aLxbU%2BMTXUSz7I8vl1oVga335ApA%2B4%2B92nyE788zvEgHfqbucRnpUDqwoZa8p8iLtE%2FMf95UJGx367x6Z%2Bn%2Fy2y51lHtPcvhzjslHDKtt1ObLWN5SW9l4vcCivXU0t%2Fo%2BQdM7G2huS1YDsVBwZZ0kP%2FHtVwapdmk5dU60CWRC3jSCnAKkidC67527ubquHxYWpGEIaNmgrHN%2BwNWkk6M5rK3Je6LwF9Zfk4A7QcRfbGFOdcoPEEEvLTm%2B%2FczH%2FMs88QVWsg6vCOXqSV5noAOKqnUZAssAQdkAg12lAqO69QdurFlYRN6UK%2FwVzlhw923sS8d2t4RTFYxybvuKEvgf78ol9SvZPHJDqHfjcPk%2BlNbwhZRxsl0gDrC2l59URd0wDemdBOkjWDoqr1zXzxOtc2wakmPiykTWbkFXmTOENue7AsZRn4dD9h3hi6Q0OPIVh%2BpFAnW%2F0lLnWPXQvv34gy03ogvnZl%2BENITCRXaTC3W5m20yebb%2F%2B%2BLw2bahYhtGEfHwhr0W8jpFP6ncEPZX4E0DAbpmA5mN6xcJUedj25ZGaUKq%2BDN810dxQteT8E0NOzPHjQaXcwN862e2ZJBB42kYbRPEmFPE3b8XcWCmuWwLd1seYRY8p71BoPVRO1FrgsFbBM%2BW5CIZbWlmNrOXdGOxE1C1RWRbc%2BS8QkqhTAOqshhBSkRA%2Fsi65yRi%2B9sRY8kH7T5T%2Bk3l%2FZnTEwzLgLaaOY8Nk1i6BTv8FLvR7A0cj9BfINhd%2BYuX88DKewbEXOLAQQrhquP7Akf%2BBZeZxjskXF%2F3cqurtRQkPOLtn6P0AmbCozQbEdaISGB%2FCEuUpI4lyrih3kHqDJ6jyPw0E0nfMJTq5rkGOrABh%2Bh163%2BQ0HCaUBq3sikdWkqOOK79bH%2BYybq6shwtVEI9OqkR0cKOYW6kj%2BPjacZoBcGV4GO7KOlfqP1f5OHSz0LpyGOfAEGC0CzpQa3DoHqCOTvE7nBRwJpP%2Bd%2BUihT%2B1uFNCib%2BVM0H%2FL4qjIBa5i62fM7X4qqULNh5ImgdtpcFRUCVIHONanKbMDWbMIE1zMw5zcn6NE5kWTbcyvFcGEMyK7ZKXc2JT9m2LKMWfxM%3D",</span><br/></span>
                <span style={{color:" rgb(57, 58, 52)"}}><span >      'runTime': None,</span><br/></span><span  style={{color:" rgb(57, 58, 52)"}}><span >      'usedCredits': None{'}'},</span><br/></span>
                <span style={{color:" rgb(57, 58, 52)"}}><span >     {'{'}'tool': 'speech-synthesis',</span><br/></span>
                <span style={{color:" rgb(57, 58, 52)"}}><span >      'input': "{'{'}'query': {'{'}'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}}'},</span><br/>
                </span><span style={{color:" rgb(57, 58, 52)"}}><span>      'output': "The output of the function 'speech-synthesis' to the input '{'{'}'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}'}' 
                is: https://aixplain-modelserving-data.s3.amazonaws.com/2b786d20-13d4-4cca-917d-af16b340c61c.mp3?AWSAccessKeyId=ASIAXZSG5AU66R5DD4RS&amp;Expires=1732099782&amp;Signature=UAkCwchH%2B%2BYeX1RGZTCRZI9d63k%3D&amp;x-amz-security-token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIHKgdT464WsqQYbFzWeqzZh2csalAut%2BP%2BKa4hAGH1RZAiEAudgEayopIRqo5Oibirs7jMddrp3Bsn68NRWKczHZ2yYqtAUIQRADGgw1MzU5NDU4NzI3MDEiDMug9Bv6rtlPIi9UjyqRBRup83JsArT9pEwfDCVLAgZ%2FVWFQhWMmap3M5JZ9Oo%2FDWZTH9OBab69GmQmQmn7AAljexBGqJw1BIC8%2BTcI3yWkITXFnr2UmCw8YGnVOB79eEBaJal1nIfW9YCXb2gKYbubtLwp3sak0InbPaiOIVfbYjwVwT5PWCzh1p1dtSBO63Ov0R08BHP1CiQBejPnQVaPwAmGjcFrISOr%2F%2FKXCTjS%2FLGkb0Eo06z%2BITsEgbcXYXCWUIz85XUiEay3ij39SF38G8oIaRPbPVglOC1k5VmIaS1bOloDAe9fb5%2BVtYz29nomAIcXK8ZfFFVZAJXJ9aXynqVvMcLmOYMgISmRW037kG29jRMOY1Vp3KauRC5q%2FqKXvdocD8imhBO6EJMakSaDILjyebrzLQTd04kbm%2B1R%2FI3mTJpU70NJtEI%2BuD4FibTMlkWrcWmksCCklAAHfafbkGSkEND7jO%2B%2BYTmRVDTd9xECcOGBEQYw3ouU3OG%2B7YWpuet5KBthS5bVdRTOx9Hx8SUEC%2FfmLukoXReM55Bman8ly8XS2UA92kiAZJLaC%2B4fSWdq9WAB%2FRM%2BNO9A%2FhS0wQdCK%2FgCtZiuI5Tz%2F%2BCy1wlOyLzhqlSakqQCGpgVS0i3t2ww5SuW9CUzNHVPncH4aWWvQT9ovRVH0dJ79rhyUl0esUpNfJpRHqEgQgWEsvgmIGYHkwsWWnsbi9dckJJXRqqcvKG9OjtbSPQbZvlqhcMEON5GSIdT0prA9nLhZ6Mh8kbflHMoOYWtVx4JQipJMimJTxanmmes1l4E0k9Yjk2JbgLbsNiZq79mPONCPVvo2OI1nIsT%2FDuMfZzc%2BLK4nYxFAhPXvhdI80XV9S5PTBWZpuyusEabiO8HBrENP2jCny%2Ba5BjqxAT%2BhVAD69GMc4LOKAw%2F7BV8zTsai4Tp3SEPGlVu60RiD%2FX8Jpn03bY2DSNNGn36IHqP8OrFun9hG%2F7jpemT%2BdyTDi6xUDaiVrxPdqKOGIRxNqlruhsUIkFuwGBKApxro9m094s21eN9e31RcelXndklsgjovzXMG%2BxNqJNiUs41qf3kCwqb8j7yfxKry3znnLTqxda98iJu%2F5tS2Cajd81FDwaOzfLqAR5DSQaULTmUhyA%3D%3D",
                </span><br/></span>
                <span style={{color:" rgb(57, 58, 52)"}}><span >      'runTime': None,</span><br/></span>
                <span style={{color:" rgb(57, 58, 52)"}}><span >      'usedCredits': None{'}'},</span><br/></span>
                <span style={{color:" rgb(57, 58, 52)"}}><span >     {'{'}'tool': 'speech-synthesis',</span><br/>
                </span><span style={{color:" rgb(57, 58, 52)"}}><span >      'input': "{'{'}'query': {'{'}'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}}'}",</span><br/>
                </span><span style={{color:" rgb(57, 58, 52)"}}><span >      'output': "The output of the function 'speech-synthesis' to the input '{'{'}'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}'}' 
                is: https://aixplain-modelserving-data.s3.amazonaws.com/99fc7357-f0f7-4510-ac85-efe15f965541.mp3?AWSAccessKeyId=ASIAXZSG5AU66R5DD4RS&amp;Expires=1732099784&amp;Signature=xqkrdafPT2smhWLk6sUy7FtU3wI%3D&amp;x-amz-security-token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIHKgdT464WsqQYbFzWeqzZh2csalAut%2BP%2BKa4hAGH1RZAiEAudgEayopIRqo5Oibirs7jMddrp3Bsn68NRWKczHZ2yYqtAUIQRADGgw1MzU5NDU4NzI3MDEiDMug9Bv6rtlPIi9UjyqRBRup83JsArT9pEwfDCVLAgZ%2FVWFQhWMmap3M5JZ9Oo%2FDWZTH9OBab69GmQmQmn7AAljexBGqJw1BIC8%2BTcI3yWkITXFnr2UmCw8YGnVOB79eEBaJal1nIfW9YCXb2gKYbubtLwp3sak0InbPaiOIVfbYjwVwT5PWCzh1p1dtSBO63Ov0R08BHP1CiQBejPnQVaPwAmGjcFrISOr%2F%2FKXCTjS%2FLGkb0Eo06z%2BITsEgbcXYXCWUIz85XUiEay3ij39SF38G8oIaRPbPVglOC1k5VmIaS1bOloDAe9fb5%2BVtYz29nomAIcXK8ZfFFVZAJXJ9aXynqVvMcLmOYMgISmRW037kG29jRMOY1Vp3KauRC5q%2FqKXvdocD8imhBO6EJMakSaDILjyebrzLQTd04kbm%2B1R%2FI3mTJpU70NJtEI%2BuD4FibTMlkWrcWmksCCklAAHfafbkGSkEND7jO%2B%2BYTmRVDTd9xECcOGBEQYw3ouU3OG%2B7YWpuet5KBthS5bVdRTOx9Hx8SUEC%2FfmLukoXReM55Bman8ly8XS2UA92kiAZJLaC%2B4fSWdq9WAB%2FRM%2BNO9A%2FhS0wQdCK%2FgCtZiuI5Tz%2F%2BCy1wlOyLzhqlSakqQCGpgVS0i3t2ww5SuW9CUzNHVPncH4aWWvQT9ovRVH0dJ79rhyUl0esUpNfJpRHqEgQgWEsvgmIGYHkwsWWnsbi9dckJJXRqqcvKG9OjtbSPQbZvlqhcMEON5GSIdT0prA9nLhZ6Mh8kbflHMoOYWtVx4JQipJMimJTxanmmes1l4E0k9Yjk2JbgLbsNiZq79mPONCPVvo2OI1nIsT%2FDuMfZzc%2BLK4nYxFAhPXvhdI80XV9S5PTBWZpuyusEabiO8HBrENP2jCny%2Ba5BjqxAT%2BhVAD69GMc4LOKAw%2F7BV8zTsai4Tp3SEPGlVu60RiD%2FX8Jpn03bY2DSNNGn36IHqP8OrFun9hG%2F7jpemT%2BdyTDi6xUDaiVrxPdqKOGIRxNqlruhsUIkFuwGBKApxro9m094s21eN9e31RcelXndklsgjovzXMG%2BxNqJNiUs41qf3kCwqb8j7yfxKry3znnLTqxda98iJu%2F5tS2Cajd81FDwaOzfLqAR5DSQaULTmUhyA%3D%3D",
                </span><br/></span><span style={{color:" rgb(57, 58, 52)"}}><span >      'runTime': None,</span><br/></span>
                <span style={{color:" rgb(57, 58, 52)"}}><span >      'usedCredits': None{'}'},</span><br/></span>
                <span style={{color:" rgb(57, 58, 52)"}}><span >     {'{'}'tool': 'speech-synthesis',</span><br/></span>
                <span style={{color:" rgb(57, 58, 52)"}}><span >      'input': "{'{'}'query': {'{'}'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}}'},</span><br/>
                </span><span style={{color:" rgb(57, 58, 52)"}}><span >      'output': "The output of the function 'speech-synthesis' to the input '{'{'}'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}'}' 
                is: "https://aixplain-modelserving-data.s3.amazonaws.com/c47f31a1-7161-47ca-a84e-40747fd59ac9.mp3?AWSAccessKeyId=ASIAXZSG5AU6ZXNS4DVX&amp;Expires=1732099786&amp;Signature=n%2BrqtBKVCgT54fFiSvqh2kqtARM%3D&amp;x-amz-security-token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCYXLnt7efeTnAnA%2FZVbN804j7RZE6cvs8Iktpv4EWBaAIhALhRVmxzQVVmawEw3fIa%2FuSOgRjAJ%2BAijSGtegvNvMLQKrUFCEIQAxoMNTM1OTQ1ODcyNzAxIgzOMA%2BAX%2BWSC9MBR6YqkgV6%2FhoQpN7G%2FSmYL2sKBL5aLxbU%2BMTXUSz7I8vl1oVga335ApA%2B4%2B92nyE788zvEgHfqbucRnpUDqwoZa8p8iLtE%2FMf95UJGx367x6Z%2Bn%2Fy2y51lHtPcvhzjslHDKtt1ObLWN5SW9l4vcCivXU0t%2Fo%2BQdM7G2huS1YDsVBwZZ0kP%2FHtVwapdmk5dU60CWRC3jSCnAKkidC67527ubquHxYWpGEIaNmgrHN%2BwNWkk6M5rK3Je6LwF9Zfk4A7QcRfbGFOdcoPEEEvLTm%2B%2FczH%2FMs88QVWsg6vCOXqSV5noAOKqnUZAssAQdkAg12lAqO69QdurFlYRN6UK%2FwVzlhw923sS8d2t4RTFYxybvuKEvgf78ol9SvZPHJDqHfjcPk%2BlNbwhZRxsl0gDrC2l59URd0wDemdBOkjWDoqr1zXzxOtc2wakmPiykTWbkFXmTOENue7AsZRn4dD9h3hi6Q0OPIVh%2BpFAnW%2F0lLnWPXQvv34gy03ogvnZl%2BENITCRXaTC3W5m20yebb%2F%2B%2BLw2bahYhtGEfHwhr0W8jpFP6ncEPZX4E0DAbpmA5mN6xcJUedj25ZGaUKq%2BDN810dxQteT8E0NOzPHjQaXcwN862e2ZJBB42kYbRPEmFPE3b8XcWCmuWwLd1seYRY8p71BoPVRO1FrgsFbBM%2BW5CIZbWlmNrOXdGOxE1C1RWRbc%2BS8QkqhTAOqshhBSkRA%2Fsi65yRi%2B9sRY8kH7T5T%2Bk3l%2FZnTEwzLgLaaOY8Nk1i6BTv8FLvR7A0cj9BfINhd%2BYuX88DKewbEXOLAQQrhquP7Akf%2BBZeZxjskXF%2F3cqurtRQkPOLtn6P0AmbCozQbEdaISGB%2FCEuUpI4lyrih3kHqDJ6jyPw0E0nfMJTq5rkGOrABh%2Bh163%2BQ0HCaUBq3sikdWkqOOK79bH%2BYybq6shwtVEI9OqkR0cKOYW6kj%2BPjacZoBcGV4GO7KOlfqP1f5OHSz0LpyGOfAEGC0CzpQa3DoHqCOTvE7nBRwJpP%2Bd%2BUihT%2B1uFNCib%2BVM0H%2FL4qjIBa5i62fM7X4qqULNh5ImgdtpcFRUCVIHONanKbMDWbMIE1zMw5zcn6NE5kWTbcyvFcGEMyK7ZKXc2JT9m2LKMWfxM%3D",
                </span><br/></span><span style={{color:" rgb(57, 58, 52)"}}><span >      'runTime': None,</span><br/></span><span style={{color:" rgb(57, 58, 52)"}}><span >      'usedCredits': None{'}'},</span><br/></span>
                <span style={{color:" rgb(57, 58, 52)"}}><span >     {'{'}'tool': 'speech-synthesis',</span><br/></span>
                <span style={{color:" rgb(57, 58, 52)"}}><span >      'input': "{'{'}'query': {'{'}'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}}'}",</span><br/></span>
                <span style={{color:" rgb(57, 58, 52)"}}><span >      'output': "The output of the function 'speech-synthesis' to the input '{'{'}'text': 'The response to your last comment is that an agent is a computer program that is designed to perform a specific task or set of tasks on behalf of a user or another program.'{'}'}' 
                is: https://aixplain-modelserving-data.s3.amazonaws.com/cc07c587-c6a5-4d6d-b9a5-32c23eca2147.mp3?AWSAccessKeyId=ASIAXZSG5AU66R5DD4RS&amp;Expires=1732099788&amp;Signature=h5y3FvWSCqPzJeAfJDpRh%2BYyDXc%3D&amp;x-amz-security-token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIHKgdT464WsqQYbFzWeqzZh2csalAut%2BP%2BKa4hAGH1RZAiEAudgEayopIRqo5Oibirs7jMddrp3Bsn68NRWKczHZ2yYqtAUIQRADGgw1MzU5NDU4NzI3MDEiDMug9Bv6rtlPIi9UjyqRBRup83JsArT9pEwfDCVLAgZ%2FVWFQhWMmap3M5JZ9Oo%2FDWZTH9OBab69GmQmQmn7AAljexBGqJw1BIC8%2BTcI3yWkITXFnr2UmCw8YGnVOB79eEBaJal1nIfW9YCXb2gKYbubtLwp3sak0InbPaiOIVfbYjwVwT5PWCzh1p1dtSBO63Ov0R08BHP1CiQBejPnQVaPwAmGjcFrISOr%2F%2FKXCTjS%2FLGkb0Eo06z%2BITsEgbcXYXCWUIz85XUiEay3ij39SF38G8oIaRPbPVglOC1k5VmIaS1bOloDAe9fb5%2BVtYz29nomAIcXK8ZfFFVZAJXJ9aXynqVvMcLmOYMgISmRW037kG29jRMOY1Vp3KauRC5q%2FqKXvdocD8imhBO6EJMakSaDILjyebrzLQTd04kbm%2B1R%2FI3mTJpU70NJtEI%2BuD4FibTMlkWrcWmksCCklAAHfafbkGSkEND7jO%2B%2BYTmRVDTd9xECcOGBEQYw3ouU3OG%2B7YWpuet5KBthS5bVdRTOx9Hx8SUEC%2FfmLukoXReM55Bman8ly8XS2UA92kiAZJLaC%2B4fSWdq9WAB%2FRM%2BNO9A%2FhS0wQdCK%2FgCtZiuI5Tz%2F%2BCy1wlOyLzhqlSakqQCGpgVS0i3t2ww5SuW9CUzNHVPncH4aWWvQT9ovRVH0dJ79rhyUl0esUpNfJpRHqEgQgWEsvgmIGYHkwsWWnsbi9dckJJXRqqcvKG9OjtbSPQbZvlqhcMEON5GSIdT0prA9nLhZ6Mh8kbflHMoOYWtVx4JQipJMimJTxanmmes1l4E0k9Yjk2JbgLbsNiZq79mPONCPVvo2OI1nIsT%2FDuMfZzc%2BLK4nYxFAhPXvhdI80XV9S5PTBWZpuyusEabiO8HBrENP2jCny%2Ba5BjqxAT%2BhVAD69GMc4LOKAw%2F7BV8zTsai4Tp3SEPGlVu60RiD%2FX8Jpn03bY2DSNNGn36IHqP8OrFun9hG%2F7jpemT%2BdyTDi6xUDaiVrxPdqKOGIRxNqlruhsUIkFuwGBKApxro9m094s21eN9e31RcelXndklsgjovzXMG%2BxNqJNiUs41qf3kCwqb8j7yfxKry3znnLTqxda98iJu%2F5tS2Cajd81FDwaOzfLqAR5DSQaULTmUhyA%3D%3D",
                </span><br/></span><span style={{color:" rgb(57, 58, 52)"}}><span >      'runTime': None,</span><br/></span><span style={{color:" rgb(57, 58, 52)"}}><span >      'usedCredits': None{'}'}],</span><br/></span>
                <span style={{color:" rgb(57, 58, 52)"}}><span >    'thought': None,</span><br/></span><span style={{color:" rgb(57, 58, 52)"}}><span >    'runTime': 12.468,</span><br/></span><span style={{color:" rgb(57, 58, 52)"}}><span >    'usedCredits': 2.9017689999999998e-05{'}]}}'}</span><br/></span>
                </code>
            </pre>
            </div>
            :null
        }
        </div>
        )
    }

    getUseAgentMemory = () =>{
        return (
        <div id="UseAgentMemory">
            <h2>4.Memory Support</h2>
            <p>Enable memory to keep context between interactions with the model.</p>
            <div className='new-one-python-container code-container-one-home' style={{padding:'20px', width:'57%'}}>
            <code style={{fontSize:'12px' , color:'black'}}>
                <span>session_id = response[<span style={{color:'red'}}>"data"</span>][<span style={{color:'red'}}>"session_id"</span>]</span><br/>
                <span><span style={{color:'blue'}}>print</span><span style={{color:'red'}}>f"Session id:</span>{'{'}session_id{'}'}<span style={{color:'red'}}>")</span></span>
            </code>
            </div>
            <button 
                style={{
                    fontSize:'12px' ,
                    marginLeft:"12px",
                    color:'grey',
                    border:'none',
                    ouline:'none',
                    backgroundColor:'transparent'
                }}
                onClick={this.onClickAgentMemory}
            >
            Show output
            </button>
            {this.getHiddenOutputAgentMemory()}
            <div>
            <div className='new-one-python-container code-container-one-home' style={{padding:'20px', width:'57%'}}>
            <code style={{fontSize:'12px' , color:'black'}}>
                <span>agent_response = agent.run(memory=True)</span><br/>
                <span><span style={{color:'red'}}></span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>display(agent_response)</span>
            </code>
            </div>
            <button 
                style={{
                    fontSize:'12px' ,
                    marginLeft:"12px",
                    color:'grey',
                    border:'none',
                    ouline:'none',
                    backgroundColor:'transparent'
                }}
                onClick={this.onClickAgentMemoryTwo}
            >
            Show output
            </button>
            {this.getHiddenOutputAgentMemoryTwo()}
            </div>
        </div>
        )
    }

    render(){   
        const {activeText} = this.state
        return(
            <div className="main-container-platform">
            <div className='main-container-python' style={{lineHeight:'1.5rem', width:'70%'}}>
                <div style={{display:'flex' , flexDirection:'row',alignItems:'center'}}>
                    <img src="https://docs.aixplain.com/img/python2.png" className='python-image' alt="..." />
                    <h1>Python quickstart</h1>
                </div>
                <p>This guide will walk you through creating and deploying your first AI agent using the WygeAI. You'll learn how to specify a Model, equip the agent with  the tools, and integrate the agent into your application.</p>
                {this.getCreateAExportKey()}
                {this.getInstallSDK()}
                {this.getCreateAgent()}
                <div id="ChooseLLms">
                    <h2>2. Getting LLMs and tools</h2>
                    <p>Goto the Wyge LLM planner to create a LLM model, which can include API key, Description and model name. Here,you can have a single LLM to integrate into your agent use case.</p>
                </div>
                {this.getBrowseLLms()}
                {this.getModel()}
                {this.getrunADeployAgent()}
                {this.getUseAgentMemory()}
                <div className="container-last-platform">
            <div className="nxt-container">
                <h3 className='next'>Previous</h3>
                <a href="//platform" className='platform-next'>platform overview{">>"}</a>
            </div>
            <div className="nxt-container">
                <h3 className='next'>Next</h3>
                <a href='/api-request' className='platform-next'>API-Request{">>"}</a>
            </div>
        </div>
          </div>
           <div className="section-3-python">
           <a className={activeText==="whatIsAixplain" ? "anchor-platform active-text-platform": "anchor-platform"} href='#createAndExport' onClick={()=>{this.onclickActiveText("whatIsAixplain")}}>Create and export an API Key</a>
           <a href="#InstallSdk" className={activeText==="sdk" ? "anchor-platform active-text-platform": "anchor-platform"} onClick={()=>{this.onclickActiveText("sdk")}}>Install the WYGE SDK</a>
           <a href="#createAgent" className={activeText==="studio" ?  "anchor-platform active-text-platform":"anchor-platform"} onClick={()=>{this.onclickActiveText("studio")}}>1.Create an Agent</a>
           <a href="#ChooseLLms" className={activeText==="sdkArchitecture" ? "anchor-platform active-text-platform":"anchor-platform"} onClick={()=>{this.onclickActiveText("sdkArchitecture")}}>2.Choose LLMs and tools</a>
           <a href="#BrowseLLMsTools" className={activeText==="featuresComparison" ? "anchor-platform active-text-platform": "anchor-platform"} onClick={()=>{this.onclickActiveText("featuresComparison")}}>2.1 Browse for LLMs and tools</a>
           <a href="#TryAModel" className={activeText==="model" ? "anchor-platform active-text-platform": "anchor-platform"} onClick={()=>{this.onclickActiveText("model")}}>2.2 Try a model</a>
           <a href="#RunAndDeploy" className={activeText==="runDeploy" ? "anchor-platform active-text-platform": "anchor-platform"} onClick={()=>{this.onclickActiveText("runDeploy")}}>3. Run and deploy an Agent</a>
           <a href="#UseAgentMemory" className={activeText==="memory" ? "anchor-platform active-text-platform": "anchor-platform"} onClick={()=>{this.onclickActiveText("memory")}}>4. Use Agent Momeory</a>
           <a href="#CreateTeamAgent" className={activeText==="agent" ? "anchor-platform active-text-platform": "anchor-platform"} onClick={()=>{this.onclickActiveText("agent")}}>Next - Create a Team Agent</a>
       </div>
       </div>
        )
    }
}
export default Python