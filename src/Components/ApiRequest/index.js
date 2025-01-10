import { Component } from 'react'
import './index.css'

class ApiRequest extends Component {
    state = {active:'',showResOne:false,showResTwo:false,showResThree:false, showResFour:false}
    
    onClickShowResposeOne = () =>{
        this.setState(prevState=>({showResOne:!prevState.showResOne}))
    }

    onclickActiveText = active => {
        this.setState({activeText:active})
    }

    onClickShowResposeTwo = () =>{
        this.setState(prevState=>({showResTwo:!prevState.showResTwo}))
    }

    onClickShowResposeThree = () =>{
        this.setState(prevState=>({showResThree:!prevState.showResThree}))
    }

    onClickShowResposeFour = () =>{
        this.setState(prevState=>({showResFour:!prevState.showResFour}))
    }

    getHiddenOutputExModelPost = () =>{
        const {showResOne} = this.state
        return (
            <div>
                {showResOne ?
                <div  style={{width:'55%' ,padding:'10px',backgroundColor:'#f6f8fa',overflow:'auto'}}>
                <code>
                    <span>{'{'}</span><br/>
                    <span>"completed":false,</span><br/>
                    <span>"data": "https://models.aixplain.com/api/v1/data/{'<requestedId>'}",</span><br/>
                    <span>"requestedId":"{'<requestId>'}"</span><br/>
                    <span>{'}'}</span><br/>
                </code>
                </div>
                :null
                }
            </div>
        )
    }

    getModelsApi = () =>(
        <div>
            <h2>Models</h2>
            <h3 id="modelExecute">1. Execute a Model (POST Request)</h3>
            <div className='code-one-api-request'>
                <code>
                    <span>curl -X POST 'https://models.aixplain.com/api/v1/execute/{'<model_id>'}'\</span><br/>
                    <span>-H 'x-api-key: TEAM_API_KEY' \</span><br/>
                    <span>-H 'Content-Type:application/json' \</span><br/>
                    <span>-d '{'{'} "data": "Your input data"{'}'}'</span>
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
                onClick={this.onClickShowResposeOne}
            >
            Show output
            </button>
            {this.getHiddenOutputExModelPost()}
            <ul>
                <li>Replace <code className='code-element-middle'>TEAM_API_KEY</code> with your actual API key.</li>
                <li>The <code className='code-element-middle'>-d</code> 
                option sends the input data to the model. if the model accepts multiple inputs, then provide them as 
                a dictionary. For example, to provide <code className='code-element-middle'>text</code> and 
                <code className='code-element-middle'>max_tokens</code> to an LLM use 
                <code className='code-element-middle'>-d '{'{'}"text": "Your input text", "max_tokens": 500{'}'}'</code>
                </li>
            </ul>
        </div>
    )

    getHiddenOutputRetrieveResult = () =>{
        const {showResTwo} = this.state
        return (
            <div>
                {showResTwo ?
                <div  style={{width:'55%' ,padding:'20px',backgroundColor:'#f6f8fa',color:'#666767',overflow:'auto'}}>
                <code>
                    <span>{'{'}</span><br/>
                    <span>      "completed":True,</span><br/>
                    <span>      "data": "The output data from the model",</span><br/>
                    <span>      "usedCredits":0.00006,</span><br/>
                    <span>      "runTime": 1.456,</span>
                    <span>      "details": {'{'}</span><br/>
                         <span>                   "modelSpecificField1": "Value1",</span>
                    <span>                      "modelSpecificField2": "Value2"</span>
                    <span>                      {'//'}Additional fields as required by the specific model</span>
                    <span>          {'}'}</span><br/>
                    <span>{'}'}</span><br/>
                </code>
                </div>
                :null
                }
            </div>
        )
    }

    getRetriveResult = () =>(
            <div>
            <h3>2. Retrieve the Result (GET Request)</h3>
            <div className='code-one-api-request'>
                <code>
                    <span>curl -X GET 'https://models.aixplain.com/api/v1/execute/{'<request_id>'}'\</span><br/>
                    <span>-H 'x-api-key: TEAM_API_KEY' \</span><br/>
                    <span>-H 'Content-Type:application/json'</span><br/>
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
                onClick={this.onClickShowResposeTwo}
            >
            Show output
            </button>
            {this.getHiddenOutputRetrieveResult()}
            </div>
    )

    getHiddenOutputExecutePipeline = () =>{
        const {showResThree} = this.state
        return (
            <div>
                {showResThree ?
                <div  style={{width:'55%' ,padding:'10px',backgroundColor:'#f6f8fa',overflow:'auto'}}>
                <code>
                    <span>{'{'}</span><br/>
                    <span>"url": "https://platform-api.aixplain.com/assets/pipeline/execution/check/{'<requestId>'}"</span><br/>
                    <span>"status": "IN_PROGRESS",</span><br/>
                    <span>"batchMode":true</span><br/>
                    <span>{'}'}</span><br/>
                </code>
                </div>
                :null
                }
            </div>
        )
    }

    getHiddenOutputRetrivePipeline = () =>{
        const {showResFour} = this.state
        return (
            <div>
                {showResFour ?
                <div  style={{width:'55%' ,padding:'10px',backgroundColor:'#f6f8fa',overflow:'auto'}}>
                <code>
                    <span>{'{'}</span><br/>
                    <span>"status": "SUCCESS",</span><br/>
                    <span>"data": {'[{'}"node_id":2,"label":"OUTPUT(ID=2)","path":{'{['}"node_id":0,"type":"INPUT"{'}'},{'{'}"node_id":1,"type":"ASSET","function":"text-generation"{'}'},{'{'}"node_id":2,"type":"OUTPUT"{'}]'},,</span><br/>
                    <span>"segments": {'[{'}"index":0 , "success":true,"response":"Your generatedoutput","is_url":true,"input_type":"text","output_type":"text","details":{'{}'},"length":1644,"language":"en","input_segment_info":{'[{'}"start":0,"end":15,"length":15,"is_url":false,"type":"text","segment":"Your input data","language":"en"{'}]}]'},"is_segmented":false{'}]'},</span><br/>
                    <span>"completed":true,</span>
                    <span>"numofsegments":1,</span>
                    <span>"progress":"100%",</span>
                    <span>"elapsed_time": 7.821672677993774,</span>
                    <span>"used_credits":0.00012299999999999998</span>
                    <span>{'}'}</span><br/>
                </code>
                </div>
                :null
                }
            </div>
        )
    }

    getPipelines = () =>(
        <div>
            <div>
            <h2>Pipelines</h2>
            <h3 id="executeResulsts">1.Execute a Pipeline</h3>
            <div className='code-one-api-request'>
                <code>
                    <span>curl -X POST 'https://models.aixplain.com/api/v1/execute/{'<pipeline_id>'}'\</span><br/>
                    <span>-H 'x-api-key: TEAM_API_KEY' \</span><br/>
                    <span>-H 'Content-Type:application/json' \</span><br/>
                    <span>-d '{'{'} "data": "Your input data"{'}'}'</span>
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
                onClick={this.onClickShowResposeThree}
            >
            Show output
            </button>
            {this.getHiddenOutputExecutePipeline()}
            </div>
            <div>
            <h3 id="retrieveResults">2.Retrieve the Result (GET Request)</h3>
            <div className='code-one-api-request'>
                <code>
                    <span>curl -X GET 'https://models.aixplain.com/api/v1/execute/{'<pipeline_id>'}'\</span><br/>
                    <span>-H 'x-api-key: TEAM_API_KEY' \</span><br/>
                    <span>-H 'Content-Type:application/json' \</span><br/>
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
                onClick={this.onClickShowResposeFour}
            >
            Show output
            </button>
            {this.getHiddenOutputRetrivePipeline()}
            </div>
        </div>
    )

    getConvertCurlCommand = () =>(
        <div id="convertCurl">
            <h2>Convert Curl Commands to Any Language</h2>
            <p>you can use a Curl converter tool to convert Curl commands into the programming language of your choice. Simply enter your Curl command in the tool, select your desired language, and copy the generated code.</p>
            <p>https://curlconverter.com/</p>
            <img src="https://docs.aixplain.com/img/getting_started/curl_converter.png" className='curl-image' alt='...'/>
        </div>
    )

    render(){
        const {activeText} = this.state
    return (
        <div className="main-container-platform">
        <div style={{padding:'10px' , width:'70%'}}>
            <h2>API requests quickstart</h2>
            <p>In this quickstart, you will learn how to call models and pipelines using API requests.</p>
            <div id="createApi">
            <h3>Create an API key</h3>
            <p>Create an API key on the Integrations page on Studio.</p>
            </div>
            <div id="models">
                {this.getModelsApi()}
            </div>
            <div id="retrieveGet">
            {this.getRetriveResult()}
            </div>
            <div id="pipelines">
            {this.getPipelines()}
            </div>
            {this.getConvertCurlCommand()}
            <div className="container-last-platform">
            <div className="nxt-container">
                <h3 className='next'>Previous</h3>
                <a href="/python" className='platform-next'>python{">>"}</a>
            </div>
            <div className="nxt-container">
                <h3 className='next'>Next</h3>
                <a href='/tutorials' className='platform-next'>Tutorials{">>"}</a>
            </div>
        </div>
        </div>
        <div className="section-3-platform">
           <a className={activeText==="createApi" ? "anchor-platform active-text-platform": "anchor-platform"} href='#createApi' onClick={()=>{this.onclickActiveText("createApi")}}>Create an API Key</a>
           <a href="#models" className={activeText==="models" ? "anchor-platform active-text-platform": "anchor-platform"} onClick={()=>{this.onclickActiveText("models")}}>Models</a>
           <a href="#modelExecute" className={activeText==="modelExecute" ?  "anchor-platform active-text-platform":"anchor-platform"} onClick={()=>{this.onclickActiveText("modelExecute")}}>1. Execute a Model (POST Request)</a>
           <a href="#retrieveGet" className={activeText==="retrieveGet" ? "anchor-platform active-text-platform":"anchor-platform"} onClick={()=>{this.onclickActiveText("retrieveGet")}}>2. Retrieve the Result (GET Request)</a>
           <a href="#pipelines" className={activeText==="pipelines" ? "anchor-platform active-text-platform": "anchor-platform"} onClick={()=>{this.onclickActiveText("pipelines")}}>Pipelines</a>
           <a href="#executeResulsts" className={activeText==="executeResulsts" ? "anchor-platform active-text-platform": "anchor-platform"} onClick={()=>{this.onclickActiveText("executeResulsts")}}>1.Execute a Pipeline (POST Request)</a>
           <a href="#retrieveResults" className={activeText==="retrieveResults" ? "anchor-platform active-text-platform": "anchor-platform"} onClick={()=>{this.onclickActiveText("retrieveResults")}}>2.Retrieve the Result (GET Request)</a>
           <a href="#convertCurl" className={activeText==="convertCurl" ? "anchor-platform active-text-platform": "anchor-platform"} onClick={()=>{this.onclickActiveText("convertCurl")}}>Convert Curl Commands to Any Language</a>
       </div>
        </div>
)
}
}
export default ApiRequest