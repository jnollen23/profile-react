import myPic from "../assets/images/myPic.jpg";

function Home() {
    return (
        <div className='app-body container py-5'>
            <h2>About Me</h2>
            <div className='row align-center'>
                <img src={myPic} className='col-lg-4 col-md-6 col-sm-5' alt='my profile pic' />
                <div className='col-ls-8 col-md-6 col-sm-7'>
                    I am a control system programmer working in the AV industry. My main programming
                    languages are C#, Simpl Windows, and Vision Tools Pro E. I am looking to change my career
                    path by attending a coding boot to become a Fullstack Web Developer. My dream job is a
                    Senior Programmer overseeing an entire programming department. I am very proud of getting my
                    Crestron Master - Silver level. I graduated from Georgia Institute of Technology in 2013 with a
                    bachelors in Computer Engineering and a minor in Computer Science. My focus was in networking and
                    network security.
                </div>
            </div>
        </div>
    )
};

export default Home;