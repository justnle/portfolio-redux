import './style.css';
import { Container } from 'react-bootstrap';
import Intro from '../Intro';
import Info from '../Info';
import ProjectPreview from '../ProjectPreview';
import React from 'react';

function Content() {
    const about = {
        heading: 'about',
        id: 'about',
        body: `Born and raised in Seattle, WA, I have always had a penchant for building and creating things. Endlessly curious about how things functioned, disassembling and reconstructing everything I could get my hands on was more than just a phase. That later evolved into a hobby centered around computers/technology and becoming a developer was the next logical transition. I really enjoy designing/creating things that look great and function well from the ground up. When I am not on the computer, I like taking photos, playing sports or working on cars.`
    };

    const contact = {
        heading: (
            <a
                href="mailto:info@justinle.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
            >
                contact
            </a>
        ),
        id: 'contact',
        body: `Let's collaborate! Get in touch with me via e-mail by clicking 'contact,' or tap in up top to see my GitHub, LinkedIn, and digital resume.`
    };

    const technologies = {
        heading: 'technologies',
        id: 'technologies',
        body: (
            <>
                <span class="badge badge-light">JavaScript</span>{' '}
                <span class="badge badge-light">HTML5</span>{' '}
                <span class="badge badge-light">CSS3</span>{' '}
                <span class="badge badge-light">MongoDB</span>{' '}
                <span class="badge badge-light">MySQL</span>{' '}
                <span class="badge badge-light">Express.js</span>{' '}
                <span class="badge badge-light">React.js</span>{' '}
                <span class="badge badge-light">Node.js</span>{' '}
                <span class="badge badge-light">Bootstrap</span>{' '}
                <span class="badge badge-light">MySQL</span>{' '}
                <span class="badge badge-light">Next.js</span>{' '}
            </>
        )
    };

    return (
        <Container fluid className="pt-5 pt-md-0">
            <Intro />
            <ProjectPreview />
            <Info {...about} />
            <Info {...technologies} />
            <Info {...contact} />
        </Container>
    );
}

export default Content;
