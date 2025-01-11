import {Component} from 'react'
import './index.css'

const obj = [{page:'home'}]

class Tutorials extends Component{
    state = {page: obj[0].page }

    getHometab = tab =>{
        this.setState({page:tab})
    }

    componentDidMount(){
        this.renderResponsivePage()
    }

    getBlogAgent = () =>(
        <div style={{padding:'20px' , width:'70%'}}>
        <button type='button' style={{color:'#2da4c6' , textDecoration:'underline' , border:'none',backgroundColor:'transparent',outline:'none'}} onClick={()=>{this.getHometab('home')}}>back</button>
        <h2 style={{paddingLeft:'10px'}}>Blog Agent Tutorial</h2>
        <p style={{paddingLeft:'10px'}}>Here's how to build a Blog Agent that collects content from a website, generates images, and writes a blog post.</p>
        <h3 style={{paddingLeft:'10px'}}>Step 1: Set API Key</h3>
        <div style={{padding:'20px' ,overflow:'auto'}} className='code-container-one-home'>
            <code>
                <span><span style={{color:"blue"}}>import</span> os</span><br/>
                <span>os.environ[<span style={{color:'red'}}>'OPENAI_API_KEY'</span>] = <span style={{color:'red'}}>"YOUR_API_KEY"</span></span><br/>
            </code>
        </div>
        <h3 style={{paddingLeft:'10px'}}>Step 2: Import Dependencies</h3>
        <div className='code-container-one-home'>
            <code>
                <span className='code-line-number-code'><span style={{color:"blue"}}>from</span> wyge.models.openai <span style={{color:"blue"}}> import</span> ChatOpenAi</span><br/>
                <span className='code-line-number-code'><span style={{color:'blue'}}>from</span> wyge.tools.prebuilt_tools<span style={{color:'blue'}}> import</span> extract_relevant_sections_from_website, generate_images_and_add_to_blog</span><br/>
            </code>
        </div>
        <h3 style={{paddingLeft:'10px'}}>Step 3: Initialize Tools</h3>
        <div className='code-container-one-home'>
            <code>
                <span className='code-line-number-code'>web_tool = extract_relevant_sections_from_website() <span className='code-line-number-comment'># Tool to scrap a website</span></span><br/>
                <span className='code-line-number-code'>blog_tool = generate_images_and_add_to_blog() <span className='code-line-number-comment'> #Tool to generate image and add to blog</span></span>
            </code>
        </div>
        <h3 style={{paddingLeft:'10px'}}>Step 4: Initialize LLM with Tools</h3>
        <div className='code-container-one-home'>
            <code>
                <span className='code-line-number-code'>llm = ChatOpenAI(tools = [blog_tool, web_tool], return_tool_output = True, memory=True)</span>
            </code>
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
        <h2 style={{paddingLeft:'10px'}}>Step 6: Generate Blog Post</h2>
        <div className='code-container-one-home' style={{padding:'10px'}}>
            <code>
                <span className='code-line-number-code'>prompt2 = (</span>
                <span className='code-line-number-code' style={{color:'red'}}>"Write a comprehensive blog post with images for a company based on the following details:"<span style={{color:'blue'}}>\n\n</span></span><br/>
                <span className='code-line-number-code'>f<span style={{color:'red'}}>"Topic:</span>{'{topic}'}\n"</span>
                <span className='code-line-number-code'>f<span>Summarized content from company's website:{'{context}'}\n\n"</span></span><br/>
                <span className='code-line-number-code' style={{color:'red'}}>"The blog should include an engaging introduction to the topic,followed by detailed sections about how the company addresses the topic, "</span><br/>
                <span className='code-line-number-code' style={{color:'red'}}>"and a conclusion summarizing the key points. Generate '{'<image>'} image prompt here {'</image>'}' where necessary."</span><br/>
                <span className='code-line-number-code'>)</span><br/>
                <span className='code-line-number-code'> blog_content = llm.run(prompt2)</span>
            </code>
        </div>
        </div>
    )

    getLinkedin = () =>(
        <div style={{padding:'10px' , width:'70%'}}>
            <button type='button' style={{color:'#2da4c6' , textDecoration:'underline' , border:'none',backgroundColor:'transparent',outline:'none'}} onClick={()=>{this.getHometab('home')}}>back</button>
            <h1 style={{paddingLeft:'10px'}}>LinkedIn Agent Tutorial</h1>
            <p style={{paddingLeft:'10px'}}>Create a LinkedIn agent that extracts key takeaways from a YouTube video and posts them on LinkedIn.</p>
            <h3 style={{paddingLeft:'10px'}}>Step 1: Set API Key</h3>
            <div className='code-container-one-home' style={{overflow:'auto' , padding:'10px'}}>
                <code>
                    <span className='code-line-number-code'><span style={{color:"red"}}>import</span> os</span><br/>
                    <span className='code-line-number-code'>os.environ[<span style={{color:'red'}}>'OPENAI_API_KEY'</span>] = <span style={{color:'red'}}>"YOUR_API_KEY"</span></span><br/>
                </code>
            </div>
            <h3 style={{paddingLeft:'10px'}}>Step 2: Import Dependencies</h3>
            <div className='code-container-one-home' style={{overflow:'auto' , padding:'10px'}}>
                <code>
                    <span className='code-line-number-code'><span style={{color:"red"}}>from</span> wyge.models.openai <span style={{color:"red"}}>import</span> ChatOpenAi</span><br/>
                    <span className='code-line-number-code'><span style={{color:'red'}}>from</span> wyge.tools.prebuilt_tools<span style={{color:'red'}}>import</span> extract_relevant_sections_from_website, generate_images_and_add_to_blog</span><br/>
                </code>
            </div>
            <h3 style={{paddingLeft:'10px'}}>Step 3: Initialize Tools</h3>
            <div className='code-container-one-home' style={{overflow:'auto' , padding:'10px'}}>
                <code>
                    <span className='code-line-number-code'>web_tool = extract_relevant_sections_from_website() <span># Tool to scrap a website</span></span><br/>
                    <span className='code-line-number-code'>blog_tool = generate_images_and_add_to_blog() <span> #Tool to generate image and add to blog</span></span>
                </code>
            </div>
            <h3 style={{paddingLeft:'10px'}}>Step 4: Initialize LLM with Tools</h3>
            <div className='code-container-one-home' style={{overflow:'auto' , padding:'10px'}}>
                <code>
                    <span className='code-line-number-code'>llm = ChatOpenAI(tools = [blog_tool, web_tool], return_tool_output = True, memory=True)</span>
                </code>
            </div>
            <h3 style={{paddingLeft:'10px'}}>Step 5: Gather Context</h3>
            <div className='code-container-one-home' style={{overflow:'auto' , padding:'10px'}}>
                <code>
                    <span className='code-line-number-code'>topic = <span>"How to tackle AI"</span></span><br/>
                    <span className='code-line-number-code'>url = <span style={{color:'red'}}>""https://www.digiotai.com""</span></span><br/>
                    <span></span><br/>
                    <span className='code-line-number-code'># Collect content from website</span>
                    <span className='code-line-number-code'>prompt1 = (</span><br/>
                    <span className='code-line-number-code'>f<span style={{color:'red'}}>"Gather relevant information about the topic from the website."</span>\n</span>
                    <span className='code-line-number-code'>f"Topic:{'{topic}'}\n"</span><br/>
                    <span className='code-line-number-code'>f"Website:{'{url}}'}\n"</span><br/>
                    <span className='code-line-number-code'>)</span>
                    <span className='code-line-number-code'>context = llm.run(prompt1)</span>
                </code>
            </div>
            <h2 style={{paddingLeft:'10px'}}>Step 6: Generate Blog Post</h2>
            <div className='code-container-one-home' style={{overflow:'auto' , padding:'10px'}}>
                <code>
                    <span className='code-line-number-code'>prompt2 = (</span>
                    <span className='code-line-number-code' style={{color:'red'}}>"Write a comprehensive blog post with images for a company based on the following details:"<span style={{color:'blue'}}>\n\n</span></span><br/>
                    <span className='code-line-number-code'>f<span style={{color:'red'}}>"Topic:</span>{'{topic}'}\n"</span><br/>
                    <span className='code-line-number-code'>f<span>Summarized content from company's website:{'{context}'}\n\n"</span></span><br/>
                    <span className='code-line-number-code' style={{color:'red'}}>"The blog should include an engaging introduction to the topic,followed by detailed sections about how the company addresses the topic, "</span><br/>
                    <span className='code-line-number-code' style={{color:'red'}}>"and a conclusion summarizing the key points. Generate '{'<image>'} image prompt here {'</image>'}' where necessary."</span>
                    <span className='code-line-number-code'>)</span><br/>
                    <span className='code-line-number-code'>blog_content = llm.run(prompt2)</span>
                </code>
            </div>
        </div>
    )

    getSyntheticDataGenerator = () =>(
        <div style={{padding:'10px' , width:'70%'}}>
            <button type='button' style={{color:'#2da4c6' , textDecoration:'underline' , border:'none',backgroundColor:'transparent',outline:'none'}} onClick={()=>{this.getHometab('home')}}>back</button>
            <h2 style={{paddingLeft:'10px'}}>Synthetic Data Generator</h2>
            <p style={{paddingLeft:'10px'}}>In this tutorial, you will learn how to generate synthetic data using wyge's OpenAi integration. We will take a dataset from an Excel file, generate additional synthetic rows that follow the same structure, and append them to the original data.</p>
            <h3 style={{paddingLeft:'10px'}}>Step 1: Setup Dependencies</h3>
            <p style={{paddingLeft:'10px'}}>Make sure you have the following dependencies installed:</p> 
            <div className='code-container-one-home' style={{overflow:'auto' , padding:'10px' , width:'100%'}}>
            <code >
                <span className='code-line-number-code'>pip install pandas openai wyge</span>
            </code>
            </div>
            <h3 style={{paddingLeft:'10px'}}>Step 2: Load the Data and Initialize the Model</h3>
            <p style={{paddingLeft:'10px'}}>First, load the Excel data and initialize the ChatOpenAi model:</p>
            <pre tabIndex='0' className='coding-element-home code-container-one-home'>
                <code>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'><span style={{color:'blue'}}>import </span> pandas <span style={{color:'red'}}>as </span>pd</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'><span style={{color:'blue'}}>from </span> wyge.models.openai <span style={{color:'red'}}>import</span>ChatOpenAI </span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'></span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'># File path to the Excel file</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>file_path = <span  style={{color:'red'}}>"sample_data.xlsx"</span></span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'># Load the dataset</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>data = pd.read_excel(file_path)</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'># Take a sample of the last 50 rows</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>sample_data = data.tail(50)</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'></span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'># Convert the sample data into a CSV-like string format</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>sample_str = sample_data.to_csv(index=false, header=False)</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'></span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'># Initialize the OpenAI model</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>llm = ChatOpenAI(memory=True, api_key = <span style={{color:'red'}}>"your-api-key-here"</span>)</span>
                    </span>
                </code>
            </pre>
            <h3 style={{paddingLeft:'10px'}}>Step 3: Generate Synthetic Data</h3>
            <p style={{paddingLeft:'10px'}}>Now, we will generate synthetic data by prompting the model to create rows based on the structure of the existing data set. The code generates data in chunks to ensure the model can process the request efficiently.</p>
            <pre tabIndex='0' className='coding-element-home code-container-one-home'>
                <code>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'># Number of rows to generate in each chunk</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>chunk_size = 50</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'># Total number of rows to generate</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>num_rows = 50</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'># System message to instruct the odel to behave as a synthetic data generator</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>system_message = <span style={{color:'red'}}>"You are a synthetic data generator. Provide output in the specified format without extra text."</span></span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'></span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'># Store the generated data</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>generated_rows = []</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>rows_generated = 0</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'>#Main loop to generate synthetic data until the desired number of rows is reached </span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'><span style={{color:'red'}}>while</span>rows_generated {'<'} num_rows:</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'># Use previously generated rows or the original smaple for generation</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>current_smaple_str = "\n".join([",".join(row) <span style={{color:'red'}}>for </span> row <span style={{color:'red'}}>in</span>generated_rows[-50]]) <span style={{color:'red'}}>if </span>generated_rows <span style={{color:'red'}}> else</span> smaple_Str</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'></span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'># Calculate how many rows to generate in this batch</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>rows_to_generate = min(chunck_size, num_rows - rows_generated)</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'></span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'>#Construct the prompt for the model</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>prompt = (f<span style={{color:'red'}}>Generate <span className='code-line-number-code'>{'{rows_to_generate}'}</span> rows of synthetic data based on this sample:\n\n<span className='code-line-number-code'>{'{current_sample_str}'}</span>\n"</span></span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code' style={{color:'red'}}>"Output as pipe-separated values ('|') without column headers.")</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'># Get the generated data from the model</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>generated_Data = llm.run(prompt, system_message = system_messsage, return_tool_output=True)</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'></span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'># Parse the generated data into rows</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>rows = [row.split <span style={{color:'red'}}>('|') for</span> row in generated_data.strip().split("\n") <span style={{color:'red'}}> if</span> row</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'>#Append the new rows to the generated rows</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>generated_rows.extend(rows)</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>rows_generated += len(rows)</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'></span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'># Create a DataFrame from the generated rows</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>generated_df = pd.DataFrame(generated_rows, columns = data.columns)</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'></span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'># Combine the original and synthetic data</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-code'>combined_Df = pd.concat([data, generated_Df], ignore_index = True)</span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'></span>
                    </span>
                    <span className='code-line-home'>
                        <span className='code-line-number'></span>
                        <span className='code-line-number-comment'><span style={{color:'red'}}>print</span>(generated_df.head())</span>
                    </span>
                </code>
            </pre>
        </div>
    )

    getHometutorials = () =>(
        <div style={{lineHeight:'1.5rem', padding:'10px' ,height:'100vh'}}>
            <h1 style={{paddingLeft:'20px'}}>Tutorials</h1>
            <div style={{padding:'10px'}}>
                <button className='tutorial-card-one' onClick={()=>{this.getHometab('blog')}}>
                    <h3>Blog Agent Tutorial</h3>
                    <p>Here's how to build a Blog Agent that collects content from a website, generates images, and writes a blog post.</p>
                </button>
                <button className='tutorial-card-one' onClick={()=>{this.getHometab('linkedin')}}>
                    <h3>LinkedIn Agent Tutorial</h3>
                    <p>Create a LinkedIn agent that extracts key takeaways from a YouTube video and posts them on LinkedIn.</p>
                </button>
                <button className='tutorial-card-one' onClick={()=>{this.getHometab('syntheticData')}}>
                    <h3>Synthetic Data Generator</h3>
                    <p>In this tutorial, you will learn how to generate synthetic data using wyge's OpenAi integration.</p>                
                </button>
            </div>
        </div>
    )

    renderResponsivePage = () =>{
        const {page} = this.state
        switch (page){
            case 'home':
                return this.getHometutorials()
            case 'blog' :
                return this.getBlogAgent()
            case 'linkedin' :
                return this.getLinkedin()
            case 'syntheticData' :
                return this.getSyntheticDataGenerator()
            default :
                return this.getHometutorials()
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

export default  Tutorials