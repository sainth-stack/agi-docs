import {Component} from 'react'
import './index.css'

const obj = [{page:'home'}]

class Guides extends Component{
    state = {page: obj[0].page ,showOutput:false, showsetUpOutput:false,showReactoutput:false}

    getHometab = tab =>{
        this.setState({page:tab})
    }

    getLLmOutput = () =>{
        this.setState(prevState=>({showOutput:!prevState.showOutput}))
    }

    getsetupOutput = () =>{
        this.setState(prevState=>({showsetUpOutput:!prevState.showsetUpOutput}))
    }

    componentDidMount(){
        this.renderResponsivePage()
    }

    getHiddenOutput = () =>{
        const {showOutput} = this.state
        return (
            <div>
            {
                showOutput ? 
                <div style={{padding:'20px' , width:'45%',overflow:'auto'}} className=' code-container-one-home'>
                    <code>
                        <span>Choice(finish_reason='tool_calls', index=0, logprobs=NOne, message=ChatCompletionMessage(content=None, role='assistant', function_call=None, tool_calls=[ChatCompletionMessageToolCall(id='call_8LDtRXEXxPjvOcZGCVUb2RaX', function=Function(arguments='{'{'}"length":10,"width":5{'}'}', name='calculate_area'), type='function')], refusal=None))</span><br/>
                        <span>[ChatCompletionMessageToolCall(id='call_8LDtRXEXxPjvOcZGCVUb2RaX', function=Function(arguments='{'{'}"length":10,"width":5{'}'}', name='calculate_area'), type='function')]</span>
                        <span>[50]</span><br/>
                        <span>[50]</span><br/>
                        <span>Choice(finish_reason='stop', index=0, logprobs=None, message=ChatCompletionMessage(content='The area of the rectangle with a length of 10 and a width of 5 is 50 square units.', role='assistant', function_call=None, tool_calls=None, refusal=None))</span><br/>
                        <span>[50]</span>
                    </code>
                </div>
                :null
            }
            </div>
        )
    }

    getReactOutput = () =>{
        this.setState(prevState=>({showReactoutput:!prevState.showReactoutput}))
    }

    getCustomTools = () =>(
        <div style={{padding:'20px' , width:'70%',lineHeight:'1.5rem'}}>
        <button type='button' style={{color:'#2da4c6' , textDecoration:'underline' , border:'none',backgroundColor:'transparent',outline:'none'}} onClick={()=>{this.getHometab('home')}}>back</button>
        <h2 style={{paddingLeft:'10px'}}>Using Custom Tools</h2>
        <p style={{paddingLeft:'10px'}}>VyzeAI allows you to define custom tools and integrate them with the OpenAI model. This guide will walk you through creating a custom tool and using it with VyzeAI.</p>
        <h3 style={{paddingLeft:'10px'}}>Step 1: Define the Function</h3>
        <p style={{paddingLeft:'10px'}}>Start by defining a python function that you want to use as a tool. For example, let's create a function to calculate the area of a rectangle.</p>
        <div style={{fontSize:'14px',padding:'20px' ,overflow:'auto'}} className='code-container-one-home'>
            <code>
                <span><span style={{color:"blue"}}>def </span> calculate_area(length: float, width:float)-{'>'}float:</span><br/>
                <span style={{color:'red',paddingLeft:'20px'}}>    """Calculate the area of a rectangle."""</span><br/>
                <span><span style={{color:"orangered" , paddingLeft:'20px'}}> return</span> length * width</span>
            </code>
        </div>
        <h3 style={{paddingLeft:'10px'}}>Step 2: Create a Pydantic Model</h3>
        <p style={{paddingLeft:'10px'}}>Next, Createa aPydantic model to validate the input parameters of the function.</p>
        <div className='code-container-one-home'>
        <pre tabIndex='0' className='code-container-one-home'>
            <code>
                <span className='code-line-home'>
                    <span className='code-line-number'></span>
                    <span className='code-line-number-code'><span style={{color:'bule'}}>from</span> pydantic <span style={{color:'bule'}}> import</span> BaseMOdel, Field</span>
                </span>
                <span className='code-line-home'>
                    <span className='code-line-number'></span>
                    <span className='code-line-number-code'></span>
                </span>
                <span className='code-line-home'>
                    <span className='code-line-number'></span>
                    <span className='code-line-number-code'><span style={{color:'bule'}}>from</span> wyge.tools.base_tool <span style={{color:'bule'}}> import</span> add_function</span>
                </span>
                <span className='code-line-home'>
                    <span className='code-line-number'></span>
                    <span className='code-line-number-code'></span>
                </span>
                <span className='code-line-home'>
                    <span className='code-line-number'></span>
                    <span className='code-line-number-code'>@add_function(calculate_area)</span>
                </span>
                <span className='code-line-home'>
                    <span className='code-line-number'></span>
                    <span className='code-line-number-code'>calss AreaParams(BaseModel):</span>
                </span>
                <span className='code-line-home'>
                    <span className='code-line-number'></span>
                    <span className='code-line-number-code'>      <span>"""Parameters to calculate the area of a rectangle."""</span></span>
                </span>
                <span className='code-line-home'>
                    <span className='code-line-number'></span>
                    <span className='code-line-number-code'>    length: float = Field(description = <span style={{color:'red'}}>"The length of the rectangle."</span></span>
                </span>
                <span className='code-line-home'>
                    <span className='code-line-number'></span>
                    <span className='code-line-number-code'>    width:float = Field(description=<span style={{color:"red"}}>"The width of the rectangle."</span></span>
                </span>
               
            </code>
        </pre>
        </div>
        <h3 style={{paddingLeft:'10px'}}>Step 3: Register the Tools</h3>
        <p style={{paddingLeft:'10px'}}>Now, create a Tool object and register the function using the Pydantic model.</p>
        <div className='code-container-one-home'>
            <code>
                <span className='code-line-number-code'><span style={{color:'blue'}}>from</span> wyge.tools.base_tool <span style={{color:'blue'}}>import</span> Tool</span><br/><br/>
                <span className='code-line-number-code'>area_tool = Tool(AreaParams)</span>
            </code>
        </div>
        <div>
        <h3 style={{paddingLeft:'10px'}}>Step 4: Use the Tool with ChatOpenAI</h3>
        <p style={{paddingLeft:'10px'}}>Finally, use your custom tool wiwth the VyzeAI ChatOpenAI model.</p>
        <div className='code-container-one-home'>
            <code>
                <span className='code-line-number-code'><span style={{color:'blue'}}>from</span> wyge.models.openai <span style={{color:'blue'}}> import </span> ChatopenAI</span><br/><br/>
                <span className='code-line-number-code'></span><br/>
                <span className='code-line-number-code'>llm = ChatOpenAI(tools = [area_tool()])</span><br/>
                <span className='code-line-number-code'>response = llm.run(<span style={{color:'red'}}>'Calculate the area of a rectangle with length 10 width 5.'</span></span><br/>
                <span className='code-line-number-code'>print(response)</span><br/>
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
            onClick={this.getLLmOutput}
        >
        Show output
        </button>
        {this.getHiddenOutput()} 
        </div>
        <h3 style={{paddingLeft:'10px'}}>Step 5: Gather Context</h3>
        <div className='code-container-one-home'>
            <code>
                <span className='code-line-number-code'>topic = <span style={{color:'red'}}>"How to tackle AI"</span></span><br/>
                <span className='code-line-number-code'>url = <span style={{color:'red'}}>"https://www.digiotai.com"</span></span><br/>
                <span></span><br/>
                <span className='code-line-number-comment'># Collect content from website</span>
                <span className='code-line-number-code'>prompt1 = (</span><br/>
                <span className='code-line-number-code'>f<span style={{color:'red'}}>"Gather relevant information about the topic from the website."</span>\n</span>
                <span className='code-line-number-code'>f"Topic:{'{topic}'}\n"</span><br/>
                <span className='code-line-number-code'>f"Website:{'{url}}'}\n"</span><br/>
                <span className='code-line-number-code'>)</span>
                <span className='code-line-number-code'>context = llm.run(prompt1)</span>
            </code>
        </div>
        
        </div>
    )

    getIntegratingApIs = () =>(
        <div style={{padding:'10px' , width:'70%'}}>
            <button type='button' style={{color:'#2da4c6' , textDecoration:'underline' , border:'none',backgroundColor:'transparent',outline:'none'}} onClick={()=>{this.getHometab('home')}}>back</button>
            <h1 style={{paddingLeft:'10px'}}>Integrating with External APIs</h1>
            <p style={{paddingLeft:'10px'}}>you can extend VyzeAI to interact with external APIs, enabling dynamic tool functionality. This guide shows how to call an external weather API.</p>
            <h3 style={{paddingLeft:'10px'}}>Step 1: Create the API Function</h3>
            <p style={{paddingLeft:'10px'}}>First, define a function to fetch weather information from an API.</p>
            <div className='code-container-one-home'>
            <code>
                <span className='code-line-number-code'><span style={{color:'blue'}}>import</span> requests</span><br/><br/>
                <span className='code-line-number-code'></span><br/>
                <span className='code-line-number-code'>def get_weather(city: str) -{'>'} dict:</span><br/>
                <span className='code-line-number-code' style={{paddingLeft:'20px'}}><span style={{color:'red'}}>"""Fetch weather information for a given city."""</span></span><br/>
                <span className='code-line-number-code' style={{paddingLeft:'20px'}}>api_key = <span style={{color:'red'}}>"your-weather-api-key"</span></span><br/>
                <span className='code-line-number-code' style={{paddingLeft:'20px'}}>url = f<span style={{color:'red'}}>"http://api.weatherapi.com/v1/current.json?key={'{'}api_key{'}'}&q={'{'}city{'}'}"</span></span><br/>
                <span className='code-line-number-code' style={{paddingLeft:'20px'}}>response = requests.get(url)</span><br/>
                <span className='code-line-number-code' style={{paddingLeft:'20px'}}><span style={{color:'red'}}>return</span> response.json()</span><br/>
            </code>
            </div>
            <div className='code-container-one-home'>
            <code>
                <span className='code-line-number-code'><span style={{color:'blue'}}>from</span> pydantic<span style={{color:'blue'}}> import</span> BaseModel, Field</span><br/><br/>
                <span className='code-line-number-code'></span><br/>
                <span className='code-line-number-code'>class WeatherParams(BaseModel):</span><br/>
                <span className='code-line-number-code' style={{paddingLeft:'20px'}}><span style={{color:'red'}}>"""Parameters to get weather information."""</span></span><br/>
                <span className='code-line-number-code' style={{paddingLeft:'20px'}}>city: str = Feild(description =  <span style={{color:'red'}}>"The city to get weather for."</span>)</span><br/>
            </code>
            </div>
            <h3 style={{paddingLeft:'10px'}}>Step 2: Register the Tool</h3>
            <p style={{paddingLeft:'10px'}}>Next, register the API function as a tool.</p>
            <div className='code-container-one-home' style={{overflow:'auto' , padding:'10px'}}>
                <code>
                    <span className='code-line-number-code'><span style={{color:"red"}}>from</span> vyzeai.tools.base_tool <span style={{color:"blue"}}>import</span> Tool</span><br/>
                    <span className='code-line-number-code'>weather_tool = Tool(func=get_weather, params = WeatherParams)</span><br/>
                </code>
            </div>
            <h3 style={{paddingLeft:'10px'}}>Step 3: Use the Tool in ChatOPenAI</h3>
            <p style={{paddingLeft:'10px'}}>Finally, use the weather tool with the ChatOpenAI model.</p>
            <div className='code-container-one-home'>
            <code>
                <span className='code-line-number-code'><span style={{color:'blue'}}>from</span> vyzeai.models.openai <span style={{color:'blue'}}> import</span>ChatOpenAI</span><br/><br/>
                <span className='code-line-number-code'></span><br/>
                <span className='code-line-number-code'>llm = ChatOpenAI(tools=[weather_tool()])</span><br/>
                <span className='code-line-number-code' style={{paddingLeft:'20px'}}>response = llm.run(<span style={{color:'red'}}>'What is the weather like in New York?'</span>)</span><br/>
                <span className='code-line-number-code' style={{paddingLeft:'20px'}}>print(response)</span><br/>
            </code>
            </div>
           
        </div>
    )

    getHiddensetupOutput = () =>{
        const {showsetUpOutput} = this.state
        return (
            <div>
            {
                showsetUpOutput ? 
                <div style={{padding:'20px' , width:'95%' , overflow:'auto'}} className=' code-container-one-home'>
                    <code>
                    <span>
                            Choice(finish_reason='stop', index=0, logprobs=None, message=ChatCompletionMessage(content='**Thought**: It seems like the user is looking for guidance on how to approach their homework. I will need to consider general strategies such as time management, understanding the subject matter, breaking tasks into smaller parts, and seeking help when necessary. \n\n**PAUSE**', role='assistant', function_call=None, tool_calls=None, refusal=None))<br/>
                            **Thought**: It seems like the user is looking for guidance on how to approach their homework. I will need to consider general strategies such as time management, understanding the subject matter, breaking tasks into smaller parts, and seeking help when necessary. <br/>
                            <br/>
                            **PAUSE**<br/>
                            <br/>
                            ------------------------------------------------------------------------
                            <br/>
                            Choice(finish_reason='stop', index=0, logprobs=None, message=ChatCompletionMessage(content="**Answer**: To do your homework effectively, follow these steps: \n\n1. Create a dedicated study space that's free from distractions.\n2. Review the assigned material to understand what is required.\n3. Break the homework into smaller, manageable tasks.\n4. Set specific time limits for each task to stay focused.\n5. Use resources like textbooks, online articles, or classmates to help clarify concepts.\n6. If you get stuck, ask a teacher or fellow student for assistance.\n7. Take breaks to avoid burnout and maintain productivity.\n\nFeel free to tailor these strategies to suit your specific homework needs!", role='assistant', function_call=None, tool_calls=None, refusal=None))<br/>
                            **Answer**: To do your homework effectively, follow these steps: <br/>
                            <br/>
                            1. Create a dedicated study space that's free from distractions.<br/>
                            2. Review the assigned material to understand what is required.<br/>
                            3. Break the homework into smaller, manageable tasks.<br/>
                            4. Set specific time limits for each task to stay focused.<br/>
                            5. Use resources like textbooks, online articles, or classmates to help clarify concepts.<br/>
                            6. If you get stuck, ask a teacher or fellow student for assistance.<br/>
                            7. Take breaks to avoid burnout and maintain productivity.<br/>
                            <br/>
                            Feel free to tailor these strategies to suit your specific homework needs!<br/>
                            <br/>
                            ------------------------------------------------------------------------ <br/>
                            <br/>
                            **Answer**: To do your homework effectively, follow these steps: <br/>
                            <br/>
                            1. Create a dedicated study space that's free from distractions. <br/>
                            2. Review the assigned material to understand what is required. <br/>
                            3. Break the homework into smaller, manageable tasks.<br/>
                            4. Set specific time limits for each task to stay focused.<br/>
                            5. Use resources like textbooks, online articles, or classmates to help clarify concepts. <br/>
                            6. If you get stuck, ask a teacher or fellow student for assistance. <br/>
                            7. Take breaks to avoid burnout and maintain productivity.<br/>
                            <br/>
                            Feel free to tailor these strategies to suit your specific homework needs! <br/>
                            </span>
                            </code>
                </div>
                :null
            }
            </div>
        )
    }

    getReActAgentBasicUsage = () =>(
        <div style={{padding:'10px' , width:'70%'}}>
            <button type='button' style={{color:'#2da4c6' , textDecoration:'underline' , border:'none',backgroundColor:'transparent',outline:'none'}} onClick={()=>{this.getHometab('home')}}>back</button>
            <div>
            <h2 style={{paddingLeft:'10px'}}>ReAct Agent: Basic Usage</h2>
            <p style={{paddingLeft:'10px'}}>VyzeAI supports ReAct agents that combine reasoning and actioin. This allows agents to reason through a problem before taking action. Here's how to use a basic ReAct agent.</p>
            <h3 style={{paddingLeft:'10px'}}>Step 1: Setup reAct Agent</h3>
            <p style={{paddingLeft:'10px'}}>The ReAct agent requires an LLM that supports reasoning and memory. Let's create a simple agent that can help with questions like how to complete homework.</p> 
            <pre tabIndex='0' style={{boxSizing:'border-box'}} className='code-container-one-home'>
                <code>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'><span style={{color:'blue'}}>from </span> wyge.agents.react_agent <span style={{color:'blue'}}> import </span> Agent </span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'><span style={{color:'blue'}}>from </span> wyge.models.openai <span style={{color:'red'}}>import</span>ChatOpenAI </span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>llm = ChatOpenAI(memory = True)</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>agent = Agent(llm)</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'></span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'># Run the agent</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>response = agent(<span style={{color:'red'}}>"How do I do my homework?"</span>)</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'>print(response)</span>
                    </span>
                </code>
            </pre>
            <button 
            style={{
                fontSize:'12px' ,
                marginLeft:"12px",
                color:'grey',
                border:'none',
                ouline:'none',
                backgroundColor:'transparent'
            }}
            onClick={this.getsetupOutput}
            >
                Show output
            </button>
            {this.getHiddensetupOutput()} 
            </div>
           </div>
    )

    getHiddenReactOutput = () =>{
        const {showReactoutput} = this.state
        return (
            <div>
            {
                showReactoutput ? 
                <div style={{padding:'20px' , width:'95%' , overflow:'auto'}} className=' code-container-one-home'>
                    <code>
                        <span>
                            Choice(finish_reason='stop', index=0, logprobs=None, message=ChatCompletionMessage(content="Thought: 
                            To plan a trip from Hyderabad to Goa, I need to consider several aspects: transport options (flights, 
                            trains, or road travel), accommodation in Goa, places to visit, travel duration, and activities. I'll 
                            start by looking for transportation options and travel duration between the two cities.\n\n**PAUSE**", 
                            role='assistant', function_call=None, tool_calls=None, refusal=None)) <br/>
                            Thought: To plan a trip from Hyderabad to Goa, I need to consider several aspects: transport options 
                            (flights, trains, or road travel), accommodation in Goa, places to visit, travel duration, and activities. 
                            I'll start by looking for transportation options and travel duration between the two cities.<br/>
                            <br/>
                            **PAUSE** <br/>
                            <br/>
                            ------------------------------------------------------------------------ <br/>
                            <br/>
                            Choice(finish_reason='tool_calls', index=0, logprobs=None, message=ChatCompletionMessage(content=None, role='assistant', function_call=None, tool_calls=[ChatCompletionMessageToolCall(id='call_wgShSn9QJRRvUjf3be4spdE0', function=Function(arguments='{'{'}"query":"Hyderabad to Goa travel options","result_count":3{'}'}', name='wikipedia_search'), type='function')], refusal=None)) <br/>
                            [ChatCompletionMessageToolCall(id='call_wgShSn9QJRRvUjf3be4spdE0', function=Function(arguments='{'{'}"query":"Hyderabad to Goa travel options","result_count":3{'}'}', name='wikipedia_search'), type='function')]<br/>
                            {'[{'}'Rajiv Gandhi International Airport': "Rajiv Gandhi International Airport (IATA: HYD, ICAO: VOHS) is an international airport that serves Hyderabad, the capital of the Indian state of Telangana. It is located in Shamshabad, about 24 kilometres (15 mi) south of Hyderabad and it was opened on 23 March 2008 to replace Begumpet Airport, which was till then the sole civilian airport 
                            serving Hyderabad. It is named after Rajiv Gandhi, former Prime Minister of India. Built over an area of 5,500 acres (2,200 ha), it is the largest airport of India by area. It is owned and operated
                                 by GMR Hyderabad International Airport Limited (GHIAL), a public–private consortium. It was the first airport in India to launch domestic e-boarding facility in December 2015 and international e-boarding facility in October 2020. It has ranked in AirHelp's list of top 10 airports in the world. The fourth busiest airport in India by passengers traffic, it handled over 25 million 
                                 passengers and around 150,000 tonnes (170,000 short tons) of cargo between April 2023 and March 2024.\nThe airport is India's first greenfield airport built under a public-private partnership model. The airport has an integrated passenger terminal, a cargo terminal and two runways. There are also aviation training facilities, a fuel farm, a solar power plant and two maintenance,
                                  repair, and operations (MRO) facilities. The airport serves as a hub for Alliance Air (India), Amazon Air, Blue Dart Aviation, SpiceJet and IndiGo. It is a focus city for Air India.", 'Mental Madhilo': "Mental Madhilo (lit.\u2009'Crazy at Heart') is a 2017 Indian Telugu-language romantic comedy film written and directed by Vivek Athreya in his directorial debut, and produced by 
                                  Raj Kandukuri (known for Pelli Choopulu) for Dharmapatha Creations. The film features Sree Vishnu, Nivetha Pethuraj, and Amrutha Srinivasan in lead roles with Sivaji Raja, Madhumani, Raj Madiraju, and Anita Chowdary in supporting roles. This film marks the Telugu debuts of Nivetha and Srinivasan. The songs and background score for the movie were composed and arranged by Prashanth 
                                  R Vihari. The film was released on 24 November 2017. The film's title was taken from a song from the 2015 film OK Bangaram.", 'Future of rail transport in India': 'The Indian Government is undertaking several initiatives to upgrade its aging railway infrastructure and enhance its quality of service. The Railway Ministry has announced plans to invest ₹5,400,000 crore (equivalent to 
                                  ₹57 trillion or US$690 billion in 2023) to upgrade the railways by 2030. Upgrades include 100% electrification of railways, upgrading existing lines with more facilities and higher speeds, expansion of new lines, upgrading railway stations, introducing and eventually developing a large high-speed train network interconnecting major cities in different parts of India and development 
                                  of various dedicated freight corridors to cut down cargo costs within the country.\nThe Research Design and Standards Organisation (RDSO) is undertaking all research, designs and standardisation work for modernisation, National High Speed Rail Corporation Limited (NHSRCL) is overlooking the implementation of high-speed train programs across the country, Dedicated Freight Corridor 
                                  Corporation of India (DFCCI) is the agency undertaking development of freight corridors around the country and Indian Railway Stations Development Corporation (IRSDC) is engaged in railway stations upgrade and development programs.'{'}]'}<br/>
                            {'[{'}'Rajiv Gandhi International Airport': "Rajiv Gandhi International Airport (IATA: HYD, ICAO: VOHS) is an international airport that serves Hyderabad, the capital of the Indian state of Telangana. It is located in Shamshabad, about 24 kilometres (15 mi) south of Hyderabad and it was opened on 23 March 2008 to replace Begumpet Airport, which was till then the sole civilian airport 
                            serving Hyderabad. It is named after Rajiv Gandhi, former Prime Minister of India. Built over an area of 5,500 acres (2,200 ha), it is the largest airport of India by area. It is owned and operated by GMR Hyderabad International Airport Limited (GHIAL), a public–private consortium. It was the first airport in India to launch domestic e-boarding facility in December 2015 and international 
                            e-boarding facility in October 2020. It has ranked in AirHelp's list of top 10 airports in the world. The fourth busiest airport in India by passengers traffic, it handled over 25 million passengers and around 150,000 tonnes (170,000 short tons) of cargo between April 2023 and March 2024.\nThe airport is India's first greenfield airport built under a public-private partnership model. The 
                            airport has an integrated passenger terminal, a cargo terminal and two runways. There are also aviation training facilities, a fuel farm, a solar power plant and two maintenance, repair, and operations (MRO) facilities. The airport serves as a hub for Alliance Air (India), Amazon Air, Blue Dart Aviation, SpiceJet and IndiGo. It is a focus city for Air India.", 'Mental Madhilo': "Mental 
                            Madhilo (lit.\u2009'Crazy at Heart') is a 2017 Indian Telugu-language romantic comedy film written and directed by Vivek Athreya in his directorial debut, and produced by Raj Kandukuri (known for Pelli Choopulu) for Dharmapatha Creations. The film features Sree Vishnu, Nivetha Pethuraj, and Amrutha Srinivasan in lead roles with Sivaji Raja, Madhumani, Raj Madiraju, and Anita Chowdary in 
                            supporting roles. This film marks the Telugu debuts of Nivetha and Srinivasan. The songs and background score for the movie were composed and arranged by Prashanth R Vihari. The film was released on 24 November 2017. The film's title was taken from a song from the 2015 film OK Bangaram.", 'Future of rail transport in India': 'The Indian Government is undertaking several initiatives to 
                            upgrade its aging railway infrastructure and enhance its quality of service. The Railway Ministry has announced plans to invest ₹5,400,000 crore (equivalent to ₹57 trillion or US$690 billion in 2023) to upgrade the railways by 2030. Upgrades include 100% electrification of railways, upgrading existing lines with more facilities and higher speeds, expansion of new lines, upgrading railway 
                            stations, introducing and eventually developing a large high-speed train network interconnecting major cities in different parts of India and development of various dedicated freight corridors to cut down cargo costs within the country.\nThe Research Design and Standards Organisation (RDSO) is undertaking all research, designs and standardisation work for modernisation, National High Speed 
                            Rail Corporation Limited (NHSRCL) is overlooking the implementation of high-speed train programs across the country, Dedicated Freight Corridor Corporation of India (DFCCI) is the agency undertaking development of freight corridors around the country and Indian Railway Stations Development Corporation (IRSDC) is engaged in railway stations upgrade and development programs.'{'}]'}<br/>
                            <br/>
                            ------------------------------------------------------------------------<br/>
                            <br/>
                            Choice(finish_reason='stop', index=0, logprobs=None, message=ChatCompletionMessage(content='Observation: The information retrieved does not directly address transportation options for traveling from Hyderabad to Goa. I need to look for other sources or possibly consider alternate methods, like flights or trains. Since I require more specific details, I will adjust my approach to gather 
                            information about flights and trains from Hyderabad to Goa.\n\n**PAUSE**', role='assistant', function_call=None, tool_calls=None, refusal=None))<br/>
                            Observation: The information retrieved does not directly address transportation options for traveling from Hyderabad to Goa. I need to look for other sources or possibly consider alternate methods, like flights or trains. Since I require more specific details, I will adjust my approach to gather information about flights and trains from Hyderabad to Goa.<br/>
                            <br/>
                            **PAUSE** <br/>
                            <br/>
                            ------------------------------------------------------------------------<br/>
                            <br/>
                            Choice(finish_reason='tool_calls', index=0, logprobs=None, message=ChatCompletionMessage(content=None, role='assistant', function_call=None, tool_calls=[ChatCompletionMessageToolCall(id='call_wRdHI45QpBRz1sAyXISTBKJW', function=Function(arguments='{'{'}"query": "flights from Hyderabad to Goa", "result_count": 3{'}'}', name='wikipedia_search'), type='function'), ChatCompletionMessageToolCall(id='call_izfW4NonLGHgIL2v71RIi1VY', function=Function(arguments='{'{'}"query": "trains from Hyderabad to Goa", "result_count": 3{'}'}', name='wikipedia_search'), type='function')], refusal=None))<br/>
                            [ChatCompletionMessageToolCall(id='call_wRdHI45QpBRz1sAyXISTBKJW', function=Function(arguments='{'{'}"query": "flights from Hyderabad to Goa", "result_count": 3{'}'}', name='wikipedia_search'), type='function'), ChatCompletionMessageToolCall(id='call_izfW4NonLGHgIL2v71RIi1VY', function=Function(arguments='{'{'}"query": "trains from Hyderabad to Goa", "result_count": 3{'}'}', name='wikipedia_search'), type='function')]<br/>
                            {'[{'}'Fly91': 'Just Udo Aviation Private Limited, doing business as Fly91 (stylised as FLY91), is an Indian low-cost regional airline headquartered in Ribandar, Goa, India. It operates from its base at Manohar International Airport in Mopa, North Goa district, with a fleet of three ATR-72 aircraft, to tier-2 and 3 cities of India. It was founded in January 2023 by former aviation veterans involved in Kingfisher Airlines, 
                                Harsha Raghavan and Manoj Chacko. It began commercial operations from 18 March 2024 to Sindhudurg, Bangalore and Hyderabad from its base at Goa with flights to Lakshadweep, Jalgaon and other regional cities from April 2024 onwards.', 'Rajiv Gandhi International Airport': "Rajiv Gandhi International Airport (IATA: HYD, ICAO: VOHS) is an international airport that serves Hyderabad, the capital of the Indian state of 
                                Telangana. It is located in Shamshabad, about 24 kilometres (15 mi) south of Hyderabad and it was opened on 23 March 2008 to replace Begumpet Airport, which was till then the sole civilian airport serving Hyderabad. It is named after Rajiv Gandhi, former Prime Minister of India. Built over an area of 5,500 acres (2,200 ha), it is the largest airport of India by area. It is owned and operated by GMR Hyderabad 
                                International Airport Limited (GHIAL), a public–private consortium. It was the first airport in India to launch domestic e-boarding facility in December 2015 and international e-boarding facility in October 2020. It has ranked in AirHelp's list of top 10 airports in the world. The fourth busiest airport in India by passengers traffic, it handled over 25 million passengers and around 150,000 tonnes (170,000 short tons) 
                                of cargo between April 2023 and March 2024.\nThe airport is India's first greenfield airport built under a public-private partnership model. The airport has an integrated passenger terminal, a cargo terminal and two runways. There are also aviation training facilities, a fuel farm, a solar power plant and two maintenance, repair, and operations (MRO) facilities. The airport serves as a hub for Alliance Air (India), 
                                Amazon Air, Blue Dart Aviation, SpiceJet and IndiGo. It is a focus city for Air India.", 'Manohar International Airport': 'Manohar International Airport (IATA: GOX, ICAO: VOGA), is an international airport at Mopa in Pernem taluka, North Goa district in the state of Goa, India. It serves North Goa and the adjoining districts of Karnataka and Maharashtra, and as a second airport of Goa after Dabolim Airport in 
                                Dabolim.\nThe airport is developed by GMR Goa International Airport Limited (GGIAL), a special purpose vehicle (SPV). It is built at a cost of ₹3,000 crore (equivalent to ₹32 billion or US$380 million in 2023).\nIn financial year 2023–24, the airport handled over 4.4 million passengers, which is close to its current maximum capacity of 4.5 million passengers per year.\nOn an average, the airport handles around 
                                100 aircraft movements and about 15,000 passengers daily. It is the fifteenth busiest airport in India.\nIt is named after the former Minister of Defence and the former Chief Minister of Goa, Manohar Parrikar.\nThe airport was completed and opened on 11 December 2022, with operations starting from 5 January 2023 with the first flight operated by IndiGo. It was expected to be completed by the financial year 2019–2020, 
                                but was delayed due to a Supreme Court order that impeded work on site, and also due to the ongoing COVID-19 pandemic, which caused lockdowns, restrictions, and curfews, resulting in lack of labor and delays in construction.\nThe airport is built under the Build Operate Transfer (BOT) model in four phases, with the first phase costing a total of ₹1,500 crore (equivalent to ₹16 billion or US$190 million in 2023).\nThe 
                                airport will cater to 4.4 million passengers in the first phase and 13.1 million by the end of the fourth phase.\nThe concession period for the greenfield project is 40 years with a possible extension of another 20 years through a bid process and the revenue share payable by the concessionaire to the government is 36.9%.\nThe airport will operate on a hybrid model with 30% cross-subsidy, and the concession offers 232 
                                acres of land for commercial city-side development for a period of 60 years.'{'}'}, {'{'}'Annexation of Hyderabad': 'The princely state of Hyderabad was annexed by India in September 1948 through a military operation code-named Operation Polo, which was dubbed a "police action".\nAt the time of partition of India in 1947, the princely states of India, who in principle had self-government within their territories, were subject 
                                    to subsidiary alliances with the British, which gave control of external relations to the British. With the Indian Independence Act 1947, the British abandoned all such alliances, leaving the states with the option of opting for full independence. However, by 1948 almost all had acceded to either India or Pakistan. One major exception was that of the wealthiest and most powerful principality, Hyderabad, where the 
                                    Nizam, Mir Osman Ali Khan, Asaf Jah VII, a Muslim ruler who presided over a largely Hindu population, chose independence and hoped to maintain this with an irregular army.:\u200a224\u200a The Nizam was also beset by the Telangana rebellion, which he was unable to crush.:\u200a224\u200a\nIn November 1947, Hyderabad signed a standstill agreement with the Dominion of India, continuing all previous arrangements except 
                                    for the stationing of Indian troops in the state. India felt that the establishment of a Communist state in Hyderabad would be a threat to the country. Nizam\'s power had weakened because of the Telangana Rebellion and the rise of a radical militia known as the Razakars whom he could not put down. On 7 September, Jawaharlal Nehru gave ultimatum to Nizam, demanding ban on the Razakars and return of Indian troops to 
                                    Secunderabad. India invaded the state by 13 September 1948, following a crippling economic blockade, and multiple attempts at destabilizing the state through railway disruptions, the bombing of government buildings, and raids on border villages. After the defeat of Razakars, the Nizam signed an instrument of accession, joining India.\nThe operation led to massive violence on communal lines, at times perpetrated by 
                                    the Indian Army. The Sunderlal Committee, appointed by Indian prime minister Jawaharlal Nehru, concluded that between 30,000–40,000 people had died in total in the state, in a report which was not released until 2013. Other responsible observers estimated the number of deaths to be 200,000 or higher.', 'Devara: Part 1': "Devara: Part 1 is a 2024 Indian Telugu-language action drama film written and directed by Koratala 
                                    Siva and produced by Yuvasudha Arts and N. T. R. Arts. The film stars N. T. Rama Rao Jr in dual roles, alongside Saif Ali Khan, Janhvi Kapoor, Prakash Raj, Srikanth and Shine Tom Chacko. The film marks the Telugu cinema debut of Khan and Kapoor. The plot follows Devara (Rao), chieftain of a coastal village who is engaged in bloody feud with his counterpart Bhaira (Khan) over smuggling. The conflict, which starts as a 
                                    personal vendetta, quickly escalates into a much larger power play that threatens to disrupt the entire region.\nThe film was officially announced in April 2021 under the tentative title NTR30, as it is Rama Rao's 30th film as a lead actor, and the official title was announced in May 2023. In late-2023, the film was split into two-parts. Principal photography for this part commenced in April 2023 and wrapped in August 2024. 
                                    Filming took place in Hyderabad, Shamshabad, Visakhapatnam, Goa and Thailand. The film has music composed by Anirudh Ravichander, with cinematography handled by R. Rathnavelu and editing by A. Sreekar Prasad respectively.\nDevara: Part 1 released worldwide on 27 September 2024 in standard, IMAX, 4DX, ScreenX, D-Box, MX4D and ICE formats to mixed reviews from critics and audience."{'}]'}<br/>
                            {'[{'}'Fly91': 'Just Udo Aviation Private Limited, doing business as Fly91 (stylised as FLY91), is an Indian low-cost regional airline headquartered in Ribandar, Goa, India. It operates from its base at Manohar International Airport in Mopa, North Goa district, with a fleet of three ATR-72 aircraft, to tier-2 and 3 cities of India. It was founded in January 2023 by former aviation veterans involved in Kingfisher Airlines, Harsha 
                            Raghavan and Manoj Chacko. It began commercial operations from 18 March 2024 to Sindhudurg, Bangalore and Hyderabad from its base at Goa with flights to Lakshadweep, Jalgaon and other regional cities from April 2024 onwards.', 'Rajiv Gandhi International Airport': "Rajiv Gandhi International Airport (IATA: HYD, ICAO: VOHS) is an international airport that serves Hyderabad, the capital of the Indian state of Telangana. It is located 
                            in Shamshabad, about 24 kilometres (15 mi) south of Hyderabad and it was opened on 23 March 2008 to replace Begumpet Airport, which was till then the sole civilian airport serving Hyderabad. It is named after Rajiv Gandhi, former Prime Minister of India. Built over an area of 5,500 acres (2,200 ha), it is the largest airport of India by area. It is owned and operated by GMR Hyderabad International Airport Limited (GHIAL), a 
                            public–private consortium. It was the first airport in India to launch domestic e-boarding facility in December 2015 and international e-boarding facility in October 2020. It has ranked in AirHelp's list of top 10 airports in the world. The fourth busiest airport in India by passengers traffic, it handled over 25 million passengers and around 150,000 tonnes (170,000 short tons) of cargo between April 2023 and March 2024.\nThe 
                            airport is India's first greenfield airport built under a public-private partnership model. The airport has an integrated passenger terminal, a cargo terminal and two runways. There are also aviation training facilities, a fuel farm, a solar power plant and two maintenance, repair, and operations (MRO) facilities. The airport serves as a hub for Alliance Air (India), Amazon Air, Blue Dart Aviation, SpiceJet and IndiGo. 
                            It is a focus city for Air India.", 'Manohar International Airport': 'Manohar International Airport (IATA: GOX, ICAO: VOGA), is an international airport at Mopa in Pernem taluka, North Goa district in the state of Goa, India. It serves North Goa and the adjoining districts of Karnataka and Maharashtra, and as a second airport of Goa after Dabolim Airport in Dabolim.\nThe airport is developed by GMR Goa International Airport 
                            Limited (GGIAL), a special purpose vehicle (SPV). It is built at a cost of ₹3,000 crore (equivalent to ₹32 billion or US$380 million in 2023).\nIn financial year 2023–24, the airport handled over 4.4 million passengers, which is close to its current maximum capacity of 4.5 million passengers per year.\nOn an average, the airport handles around 100 aircraft movements and about 15,000 passengers daily. It is the fifteenth 
                            busiest airport in India.\nIt is named after the former Minister of Defence and the former Chief Minister of Goa, Manohar Parrikar.\nThe airport was completed and opened on 11 December 2022, with operations starting from 5 January 2023 with the first flight operated by IndiGo. It was expected to be completed by the financial year 2019–2020, but was delayed due to a Supreme Court order that impeded work on site, and also 
                            due to the ongoing COVID-19 pandemic, which caused lockdowns, restrictions, and curfews, resulting in lack of labor and delays in construction.\nThe airport is built under the Build Operate Transfer (BOT) model in four phases, with the first phase costing a total of ₹1,500 crore (equivalent to ₹16 billion or US$190 million in 2023).\nThe airport will cater to 4.4 million passengers in the first phase and 13.1 million by 
                            the end of the fourth phase.\nThe concession period for the greenfield project is 40 years with a possible extension of another 20 years through a bid process and the revenue share payable by the concessionaire to the government is 36.9%.\nThe airport will operate on a hybrid model with 30% cross-subsidy, and the concession offers 232 acres of land for commercial city-side development for a period of 60 years.'{'}'}, {'{'}
                            'Annexation of Hyderabad': 'The princely state of Hyderabad was annexed by India in September 1948 through a military operation code-named Operation Polo, which was dubbed a "police action".\nAt the time of partition of India in 1947, the princely states of India, who in principle had self-government within their territories, were subject to subsidiary alliances with the British, which gave control of external relations to 
                            the British. With the Indian Independence Act 1947, the British abandoned all such alliances, leaving the states with the option of opting for full independence. However, by 1948 almost all had acceded to either India or Pakistan. One major exception was that of the wealthiest and most powerful principality, Hyderabad, where the Nizam, Mir Osman Ali Khan, Asaf Jah VII, a Muslim ruler who presided over a largely Hindu population, 
                            chose independence and hoped to maintain this with an irregular army.:\u200a224\u200a The Nizam was also beset by the Telangana rebellion, which he was unable to crush.:\u200a224\u200a\nIn November 1947, Hyderabad signed a standstill agreement with the Dominion of India, continuing all previous arrangements except for the stationing of Indian troops in the state. India felt that the establishment of a Communist state in Hyderabad 
                            would be a threat to the country. Nizam\'s power had weakened because of the Telangana Rebellion and the rise of a radical militia known as the Razakars whom he could not put down. On 7 September, Jawaharlal Nehru gave ultimatum to Nizam, demanding ban on the Razakars and return of Indian troops to Secunderabad. India invaded the state by 13 September 1948, following a crippling economic blockade, and multiple attempts at destabilizing 
                            the state through railway disruptions, the bombing of government buildings, and raids on border villages. After the defeat of Razakars, the Nizam signed an instrument of accession, joining India.\nThe operation led to massive violence on communal lines, at times perpetrated by the Indian Army. The Sunderlal Committee, appointed by Indian prime minister Jawaharlal Nehru, concluded that between 30,000–40,000 people had died in total in the 
                            state, in a report which was not released until 2013. Other responsible observers estimated the number of deaths to be 200,000 or higher.', 'Devara: Part 1': "Devara: Part 1 is a 2024 Indian Telugu-language action drama film written and directed by Koratala Siva and produced by Yuvasudha Arts and N. T. R. Arts. The film stars N. T. Rama Rao Jr in dual roles, alongside Saif Ali Khan, Janhvi Kapoor, Prakash Raj, Srikanth and Shine Tom Chacko. 
                            The film marks the Telugu cinema debut of Khan and Kapoor. The plot follows Devara (Rao), chieftain of a coastal village who is engaged in bloody feud with his counterpart Bhaira (Khan) over smuggling. The conflict, which starts as a personal vendetta, quickly escalates into a much larger power play that threatens to disrupt the entire region.\nThe film was officially announced in April 2021 under the tentative title NTR30, as it is Rama 
                            Rao's 30th film as a lead actor, and the official title was announced in May 2023. In late-2023, the film was split into two-parts. Principal photography for this part commenced in April 2023 and wrapped in August 2024. Filming took place in Hyderabad, Shamshabad, Visakhapatnam, Goa and Thailand. The film has music composed by Anirudh Ravichander, with cinematography handled by R. Rathnavelu and editing by A. Sreekar Prasad respectively.\nDevara: 
                            Part 1 released worldwide on 27 September 2024 in standard, IMAX, 4DX, ScreenX, D-Box, MX4D and ICE formats to mixed reviews from critics and audience."{'}]'}}<br/>
                            <br/>
                            ------------------------------------------------------------------------ <br/>
                            <br/>
                            Choice(finish_reason='stop', index=0, logprobs=None, message=ChatCompletionMessage(content="Observation: I have now gathered information about transportation options. \n\n1. **Flights**: Rajiv Gandhi International Airport (HYD) serves Hyderabad, and you can fly to Manohar International Airport (GOX) in Goa. Several airlines operate flights between these two airports.\n  \n2. **Trains**: The specific train information wasn't retrieved in this search. However, trains do run between Hyderabad and Goa, and they typically offer a scenic and budget-friendly option.\n\nNext, I will think about planning the trip considering accommodations and activities to do in Goa.\n\n**PAUSE**", role='assistant', function_call=None, tool_calls=None, refusal=None))<br/>
                            Observation: I have now gathered information about transportation options. 
                            <br/>
                            1. **Flights**: Rajiv Gandhi International Airport (HYD) serves Hyderabad, and you can fly to Manohar International Airport (GOX) in Goa. Several airlines operate flights between these two airports.<br/>
                            <br/>
                            2. **Trains**: The specific train information wasn't retrieved in this search. However, trains do run between Hyderabad and Goa, and they typically offer a scenic and budget-friendly option.<br/>
                            <br/>
                            Next, I will think about planning the trip considering accommodations and activities to do in Goa.<br/>
                            <br/>
                            **PAUSE** <br/>
                            <br/>
                            ------------------------------------------------------------------------ <br/>
                            <br/>
                            Choice(finish_reason='tool_calls', index=0, logprobs=None, message=ChatCompletionMessage(content=None, role='assistant', function_call=None, tool_calls=[ChatCompletionMessageToolCall(id='call_j7qDOdbfMz4qMQpJ98BPRPfM', function=Function(arguments='{'{'}"query": "places to visit in Goa", "result_count": 3{'}'}', name='wikipedia_search'), type='function'), ChatCompletionMessageToolCall(id='call_zbcxVS4sTTnMkmMh0J7bcgGs', function=Function(arguments='{'{'}"query": "accommodation in Goa", "result_count": 3{'}'}', name='wikipedia_search'), type='function')], refusal=None))<br/>
                            [ChatCompletionMessageToolCall(id='call_j7qDOdbfMz4qMQpJ98BPRPfM', function=Function(arguments='{'{'}"query": "places to visit in Goa", "result_count": 3{'}'}', name='wikipedia_search'), type='function'), ChatCompletionMessageToolCall(id='call_zbcxVS4sTTnMkmMh0J7bcgGs', function=Function(arguments='{'{'}"query": "accommodation in Goa", "result_count": 3{'}'}', name='wikipedia_search'), type='function')]<br/>
                            [{'{'}'Querim Beach': 'Querim Beach is the sandy coastline of the Querim village of Pernem, Goa. It is the largest northernmost beach in Goa. The beach comprises a long stretch of sand with a few rocky outcrops, rows of trees and a river inlet of Tiracol River. It is located to the north of the Arambol beach, but in order to reach there by foot, one has to walk through the hill and jungle between the Paliem Sweet 
                                Water Lake and Querim Beach. Querim is 30 Kilometers from Mapusa. From the north side of Querim beach, one can see a restaurant and bar on a high hill on the Tiracol side of the Tiracol River. There is also a resort by the name "Hotel Hill Rock" next to it, which is known for its peaceful atmosphere and has a small but well equipped Bistro on the property. On the highest most cliff at the Tiracol side is the 
                                Fort Tiracol, which is now converted into a heritage hotel.', 
                                'Goa': 'Goa (; Konkani: [ɡõːj]; Portuguese: [ˈɡoɐ] ) is a state on the southwestern coast of India within the Konkan region, geographically separated from the Deccan highlands by the Western Ghats. It is bound by the Indian states of Maharashtra to the north, and Karnataka to the east and south, with the Arabian Sea in the west. It is India\'s smallest state by area and fourth-smallest by population. Goa has t
                                he highest GDP per capita among all Indian states, two and a half times as high as the GDP per capita of the country as a whole. The Eleventh Finance Commission of India named Goa the best-placed state because of its infrastructure, and India\'s National Commission on Population rated it as having the best quality of life in India (based on the commission\'s "12 Indicators"). It is the second-highest ranking 
                                among Indian states in the human development index.\nPanaji is the state\'s capital, while Vasco da Gama is its largest city. The historic city of Margão in Goa still exhibits the cultural influence of the Portuguese, who first voyaged to the subcontinent in the early 16th century as merchants, and conquered it soon thereafter, whereupon Goa became an overseas territory of the Portuguese Empire, part of what
                                 was then known as Portuguese India, and remained as such for about 456 years until it was annexed by India in 1961. Goa\'s official language, which is spoken by a majority of its inhabitants, is Konkani.\nGoa is visited by large numbers of international and domestic tourists each year because of its white-sand beaches, active nightlife, places of worship, and World Heritage-listed architecture. It also has 
                                 rich flora and fauna because it lies very close to the North Western Ghats rainforests, one of the rare biodiversity hotspots of the world.', 'Merces, Goa': 'Mercês is a neighborhood located in the northeastern part of the city of Panaji, capital of the Indian state of Goa. It is completely located on the island of Tiswadi, one of the talukas in the state of Goa. It is located between the Mandovi River and 
                                 the Bambolim neighborhood. The neighborhood of Mercês is well connected with various tourist destinations such as Bambolim, Panjim, Miramar and Caranzalem. It is well known among the people of Goa due to a famous wedding venue situated here known as Alua Mercês. Its school is Our Lady of Mercês High School. For accommodations there are a number of houses and villas to rent. One can also get bikes for hire 
                                 to visit nearby places.\nThe neighborhood of Mercês is politically connected with the adjoining neighborhood of Santa Cruz, which share an MLA.\n\n\n== References =='{'}'}, {'{'}'Mapusa': 'Mapusa (Goan Konkani: Mhapxem) is a city in North Goa, India. It is situated 13 km north of the state capital of Panaji. The city is the headquarters of Bardez taluka. It is located on the main highway NH-17, linking Mumbai to Kochi. 
                                 During Portuguese India, the city was known as "Mapuçá".', 'Shri Damodar Sansthaan, Goa': 'Shri Damodar Temple Zambaulim or Shri Damodara Sansthaan is a Hindu temple on the bank of the Kushawati River near the village of Zambaulim 22 km from the city of Margao on the border of Quepem region (Quepem taluk) in the south of Goa. The temple houses a celebrated murti, or image, of Shiva incarnated as Damodar.', 
                                 'Goa Institute of Management': "The Goa Institute of Management (abbreviated as GIM-Goa) is an Indian autonomous business school located North Goa district in the state of Goa. GIM Goa was founded in 1993 by Romuald D'Souza, a Jesuit priest."{'}]'}<br/>
                            [{'{'}'Querim Beach': 'Querim Beach is the sandy coastline of the Querim village of Pernem, Goa. It is the largest northernmost beach in Goa. The beach comprises a long stretch of sand with a few rocky outcrops, rows of trees and a river inlet of Tiracol River. It is located to the north of the Arambol beach, but in order to reach there by foot, one has to walk through the hill and jungle between the Paliem Sweet 
                            Water Lake and Querim Beach. Querim is 30 Kilometers from Mapusa. From the north side of Querim beach, one can see a restaurant and bar on a high hill on the Tiracol side of the Tiracol River. There is also a resort by the name "Hotel Hill Rock" next to it, which is known for its peaceful atmosphere and has a small but well equipped Bistro on the property. On the highest most cliff at the Tiracol side is the Fort 
                            Tiracol, which is now converted into a heritage hotel.', 'Goa': 'Goa (; Konkani: [ɡõːj]; Portuguese: [ˈɡoɐ] ) is a state on the southwestern coast of India within the Konkan region, geographically separated from the Deccan highlands by the Western Ghats. It is bound by the Indian states of Maharashtra to the north, and Karnataka to the east and south, with the Arabian Sea in the west. It is India\'s smallest state 
                            by area and fourth-smallest by population. Goa has the highest GDP per capita among all Indian states, two and a half times as high as the GDP per capita of the country as a whole. The Eleventh Finance Commission of India named Goa the best-placed state because of its infrastructure, and India\'s National Commission on Population rated it as having the best quality of life in India (based on the commission\'s "12 
                            Indicators"). It is the second-highest ranking among Indian states in the human development index.\nPanaji is the state\'s capital, while Vasco da Gama is its largest city. The historic city of Margão in Goa still exhibits the cultural influence of the Portuguese, who first voyaged to the subcontinent in the early 16th century as merchants, and conquered it soon thereafter, whereupon Goa became an overseas territory 
                            of the Portuguese Empire, part of what was then known as Portuguese India, and remained as such for about 456 years until it was annexed by India in 1961. Goa\'s official language, which is spoken by a majority of its inhabitants, is Konkani.\nGoa is visited by large numbers of international and domestic tourists each year because of its white-sand beaches, active nightlife, places of worship, and World Heritage-listed 
                            architecture. It also has rich flora and fauna because it lies very close to the North Western Ghats rainforests, one of the rare biodiversity hotspots of the world.', 'Merces, Goa': 'Mercês is a neighborhood located in the northeastern part of the city of Panaji, capital of the Indian state of Goa. It is completely located on the island of Tiswadi, one of the talukas in the state of Goa. It is located between the Mandovi 
                            River and the Bambolim neighborhood. The neighborhood of Mercês is well connected with various tourist destinations such as Bambolim, Panjim, Miramar and Caranzalem. It is well known among the people of Goa due to a famous wedding venue situated here known as Alua Mercês. Its school is Our Lady of Mercês High School. For accommodations there are a number of houses and villas to rent. One can also get bikes for hire to visit 
                            nearby places.\nThe neighborhood of Mercês is politically connected with the adjoining neighborhood of Santa Cruz, which share an MLA.\n\n\n== References =='{'}'}, {'{'}'Mapusa': 'Mapusa (Goan Konkani: Mhapxem) is a city in North Goa, India. It is situated 13 km north of the state capital of Panaji. The city is the headquarters of Bardez taluka. It is located on the main highway NH-17, linking Mumbai to Kochi. During Portuguese 
                            India, the city was known as "Mapuçá".', 'Shri Damodar Sansthaan, Goa': 'Shri Damodar Temple Zambaulim or Shri Damodara Sansthaan is a Hindu temple on the bank of the Kushawati River near the village of Zambaulim 22 km from the city of Margao on the border of Quepem region (Quepem taluk) in the south of Goa. The temple houses a celebrated murti, or image, of Shiva incarnated as Damodar.', 'Goa Institute of Management': "The Goa 
                            Institute of Management (abbreviated as GIM-Goa) is an Indian autonomous business school located North Goa district in the state of Goa. GIM Goa was founded in 1993 by Romuald D'Souza, a Jesuit priest."{'}]'}<br/>
                            <br/>
                            ------------------------------------------------------------------------<br/>
                            <br/>
                            Choice(finish_reason='stop', index=0, logprobs=None, message=ChatCompletionMessage(content='Observation: I have gathered information about places to visit and accommodations in Goa.\n\n1. **Places to Visit**: \n   - Querim Beach: The northernmost beach in Goa, known for its scenic beauty and quiet atmosphere. Nearby is Fort Tiracol, which now serves as a heritage hotel.\n   - Goa itself is rich in beaches, nightlife, places 
                            of worship, and unique architecture.\n\n2. **Accommodation**: \n   - There are several options, including villas and houses available for rent in neighborhoods like Merces, which is well-connected to tourist destinations like Panjim and Miramar.\n\nNow I will compile this information to finalize the plan for the trip from Hyderabad to Goa. \n\n**PAUSE**', role='assistant', function_call=None, tool_calls=None, refusal=None)) <br/>
                            Observation: I have gathered information about places to visit and accommodations in Goa.<br/>
                            <br/>
                            1. **Places to Visit**: <br/>
                            - Querim Beach: The northernmost beach in Goa, known for its scenic beauty and quiet atmosphere. Nearby is Fort Tiracol, which now serves as a heritage hotel.<br/>
                            - Goa itself is rich in beaches, nightlife, places of worship, and unique architecture.<br/>
                            <br/>
                            2. **Accommodation**: <br/>
                            - There are several options, including villas and houses available for rent in neighborhoods like Merces, which is well-connected to tourist destinations like Panjim and Miramar.<br/>
                            <br/>
                            Now I will compile this information to finalize the plan for the trip from Hyderabad to Goa. <br/>
                            <br/>
                            **PAUSE**<br/>
                            <br/>
                            ------------------------------------------------------------------------<br/>
                            <br/>
                            Choice(finish_reason='stop', index=0, logprobs=None, message=ChatCompletionMessage(content="Thought: To summarize the trip plan from Hyderabad to Goa, I will outline the following key points: transport options (flights and trains), places to visit, and accommodation choices.\n\n1. **Transportation**:\n   - **Flights**: Direct flights from Rajiv Gandhi International Airport (HYD) to Manohar International Airport (GOX) in Goa.\n   - **Trains**: Trains are also available, offering a scenic journey but with varying duration.\n\n2. **Places to Visit**:\n   - **Beaches**: Including Querim Beach and other famous beaches across Goa.\n   - **Cultural Sites**: Various historical and cultural attractions reflecting Goa's heritage.\n\n3. **Accommodation**:\n   - Options range from resorts to villas, especially in areas like Merces, providing easy access to tourist destinations.\n\nNow I will prepare to provide the overall answer summarizing the trip plan.\n\n**PAUSE**", role='assistant', function_call=None, tool_calls=None, refusal=None))<br/>
                            Thought: To summarize the trip plan from Hyderabad to Goa, I will outline the following key points: transport options (flights and trains), places to visit, and accommodation choices.<br/>
                            <br/>
                            1. **Transportation**:<br/>
                            - **Flights**: Direct flights from Rajiv Gandhi International Airport (HYD) to Manohar International Airport (GOX) in Goa.<br/>
                            - **Trains**: Trains are also available, offering a scenic journey but with varying duration.<br/>
                            <br/>
                            2. **Places to Visit**:<br/>
                            - **Beaches**: Including Querim Beach and other famous beaches across Goa.<br/>
                            - **Cultural Sites**: Various historical and cultural attractions reflecting Goa's heritage.<br/>
                            <br/>
                            3. **Accommodation**:<br/>
                            - Options range from resorts to villas, especially in areas like Merces, providing easy access to tourist destinations.<br/>
                            <br/>
                            Now I will prepare to provide the overall answer summarizing the trip plan.<br/>
                            <br/>
                            **PAUSE** <br/>
                            <br/>
                            ------------------------------------------------------------------------ <br/>
                            <br/>
                            Choice(finish_reason='stop', index=0, logprobs=None, message=ChatCompletionMessage(content="Answer: Here is the trip plan from Hyderabad to Goa:\n\n1. **Transportation**: \n   - **Flights**: Direct flights are available from Rajiv Gandhi International Airport (HYD) to Manohar International Airport (GOX) in Goa.\n   - **Trains**: Trains also run between Hyderabad and Goa, providing a scenic and economical travel option.\n\n2. **Places to Visit**:\n   - **Querim Beach**: The largest and northernmost beach in Goa, known for its peaceful atmosphere. \n   - **Fort Tiracol**: A heritage site nearby offering beautiful views.\n   - **Other Attractions**: Enjoy Goa's beaches, vibrant nightlife, and cultural landmarks.\n\n3. **Accommodation**:\n   - Various options are available,
                             including resorts and villas in neighborhoods like Merces, which is conveniently located near popular tourist spots.\n\nThis plan should help you have a well-rounded trip to Goa!", role='assistant', function_call=None, tool_calls=None, refusal=None))<br/>
                            Answer: Here is the trip plan from Hyderabad to Goa:<br/>
                            <br/>
                            1. **Transportation**: <br/>
                            - **Flights**: Direct flights are available from Rajiv Gandhi International Airport (HYD) to Manohar International Airport (GOX) in Goa. <br/>
                            - **Trains**: Trains also run between Hyderabad and Goa, providing a scenic and economical travel option.<br/>
                            <br/>
                            2. **Places to Visit**: <br/>
                            - **Querim Beach**: The largest and northernmost beach in Goa, known for its peaceful atmosphere. <br/>
                            - **Fort Tiracol**: A heritage site nearby offering beautiful views.<br/>
                            - **Other Attractions**: Enjoy Goa's beaches, vibrant nightlife, and cultural landmarks. <br/>
                            <br/>
                            3. **Accommodation**: <br/>
                            - Various options are available, including resorts and villas in neighborhoods like Merces, which is conveniently located near popular tourist spots.<br/>
                            <br/>
                            This plan should help you have a well-rounded trip to Goa! <br/>
                            <br/>
                            ------------------------------------------------------------------------ <br/>
                            <br/>
                            Answer: Here is the trip plan from Hyderabad to Goa: <br/>
                            <br/>
                            1. **Transportation**:  <br/>
                            - **Flights**: Direct flights are available from Rajiv Gandhi International Airport (HYD) to Manohar International Airport (GOX) in Goa. <br/>
                            - **Trains**: Trains also run between Hyderabad and Goa, providing a scenic and economical travel option.<br/>
                            <br/>
                            2. **Places to Visit**:<br/>
                            - **Querim Beach**: The largest and northernmost beach in Goa, known for its peaceful atmosphere. <br/>
                            - **Fort Tiracol**: A heritage site nearby offering beautiful views.<br/>
                            - **Other Attractions**: Enjoy Goa's beaches, vibrant nightlife, and cultural landmarks.<br/>
                            <br/>
                            3. **Accommodation**:<br/>
                            - Various options are available, including resorts and villas in neighborhoods like Merces, which is conveniently located near popular tourist spots.<br/>
                            <br/>
                            This plan should help you have a well-rounded trip to Goa!<br/>
                        </span>
                    </code>
                </div>
                :null
            }
            </div>
        )
    }

    getReActTools = () =>(
        <div style={{padding:'20px', width:'70%'}}>
            <button type='button' style={{color:'#2da4c6' , textDecoration:'underline' , border:'none',backgroundColor:'transparent',outline:'none'}} onClick={()=>{this.getHometab('home')}}>back</button>
            <h3>ReAct Agent with Tools</h3>
            <p>You can also enhace the ReAct agent by integrating it with various tools. This example demonstates integrating the wikipedia_search tool to provide additional information for the agent to use.</p>  
            <h3 style={{paddingLeft:'10px'}}>Step 1: Setup ReAct Agent with Tools</h3>
            <p style={{paddingLeft:'10px'}}>Here, we will use the wikipedia_search tool and integrate it with the ReAct agent to plan a trip.</p> 
            <pre tabIndex='0' style={{boxSizing:'border-box'}} className='code-container-one-home'>
                <code>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'><span style={{color:'blue'}}>from </span> vyzeai.agents.react_agent <span style={{color:'blue'}}> import </span> Agent </span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'><span style={{color:'blue'}}>from </span> vyzeai.models.openai <span style={{color:'red'}}>import</span>ChatOpenAI </span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'><span style={{color:'blue'}}>from </span> vyzeai.tools.prebuilt_tools <span style={{color:'red'}}>import</span> wikipedia_search </span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'></span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'># Initialize the wikipedia_search tool</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>wiki_tool = wikipedia_search()</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'></span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'># Create an LLM with memory and tools</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>llm = ChatOpenAI(memory = Tru, tools = [wiki_tool])</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'></span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'># Initialize the ReAct agent</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>agent = Agent(llm)</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'></span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'># Run the agent with a travel planning query</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>response = agent(<span style={{color:'red'}}>"Plan a trip from Hyderabad to Goa"</span>)</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>print(response)</span>
                    </span>
                </code>
            </pre>
            <button 
            style={{
                fontSize:'12px' ,
                marginLeft:"12px",
                color:'grey',
                border:'none',
                ouline:'none',
                backgroundColor:'transparent'
            }}
            onClick={this.getReactOutput}
            >
                Show output
            </button>
            {this.getHiddenReactOutput()} 
            </div>
           
    )

    getHomeGuides = () =>(
        <div style={{lineHeight:'1.5rem', padding:'10px',height:'100vh'}}>
            <h1 style={{paddingLeft:'20px'}}>Guides</h1>
            <div style={{padding:'10px'}}>
                <button className='tutorial-card-one' onClick={()=>{this.getHometab('customTools')}}>
                    <h3>Using Custom Tools</h3>
                    <p>VyzeAI allows you to define custom tools and integrate them with the OpenAI model. This guide will walk you through creating a custom tool and using it with VyzeAI.</p>
                </button>
                <button className='tutorial-card-one' onClick={()=>{this.getHometab('integrating')}}>
                    <h3>Integrating with External APIs</h3>
                    <p>you can extend VyzeAI to interact with external APIs, enabling dynamic tool functionality. This guide shows how to call an external weather API.</p>
                </button>
                <button className='tutorial-card-one' onClick={()=>{this.getHometab('agentBasics')}}>
                    <h3>ReAct Agent: Basic Usage</h3>
                    <p>VyzeAI supports ReAct agents that combine reasoning and actioin. This allows agents to reason through a problem before taking action. Here's how to use a basic ReAct agent.</p>                
                </button>
                <button className='tutorial-card-one' onClick={()=>{this.getHometab('Reacttools')}}>
                    <h3>ReAct Agent with Tools</h3>
                    <p>you can also enhace the ReAct agent by integrating it with various tools. This example demonstates integrating the wikipedia_search tool to provide additional information for the agent to use.</p>                
                </button>
            </div>
        </div>
    )

    renderResponsivePage = () =>{
        const {page} = this.state
        switch (page){
            case 'home':
                return this.getHomeGuides()
            case 'customTools' :
                return this.getCustomTools()
            case 'integrating' :
                return this.getIntegratingApIs()
            case 'agentBasics' :
                return this.getReActAgentBasicUsage()
            case 'Reacttools':
                return this.getReActTools()
            default :
                return this.getHomeGuides()
        }
            
    }

    render(){
        return (
            <div >
                {this.renderResponsivePage()}
            </div>
        )
    }
}

export default  Guides