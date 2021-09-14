const About = ({match})=>{
    console.log(match);

    return (
        <div>
            <h1>About {match.params.text}</h1>
        </div>
        )
};

export default About;