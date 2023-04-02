

function Resume() {
    return (
        <div className='app-body container py-5'>
            <a href='./assets/images/jacob_nollen_resume.pdf' download className='navlink'>
                <h4 className='navlink'>This is my resume</h4>
            </a>
            <h4>Proficiencies</h4>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Node</li>
                <li>Javascript</li>
                <li>C#</li>
                <li>MySQL</li>
                <li>Mongo</li>
                <li>GraphQL</li>
                <li>TCP/UDP Communication</li>
                <li>RESTful APIs</li>
                <li>MVC</li>
            </ul>
        </div>
    );
};

export default Resume;