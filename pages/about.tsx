import { AboutWrapper, SectionWrapper, ListItem } from '../styles/About.styles'

const About = () => {
    return (
        <AboutWrapper>
        <h1>
            About project
        </h1>
        <SectionWrapper>
            <ul>
                <ListItem>
                    One of the (nice to have rendering) requiremets was to have Server Side rendering that is why I pick next.js
                </ListItem>
                <ListItem>
                    Input search filters when string has more than two chars
                </ListItem>
                <ListItem>
                    Project was not polished to my best as I was trying to do it in fixed time in around 5 hours
                </ListItem>
                <ListItem>
                    What could be added but was limited by time:
                    filters should work together with search
                </ListItem>
                <ListItem>
                    Further informations are in readme.md together with Project Requirements
                </ListItem>

            </ul>
        </SectionWrapper>
      </AboutWrapper>
    )
}

export default About
