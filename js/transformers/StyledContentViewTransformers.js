import WorkItem from '../components/WorkItem';
import ProjectItem from '../components/ProjectItem';
import EducationItem from '../components/EducationItem';


function transformCurrentlyToStyledContent(data) {
    return data;
}

function transformWorkToStyledContent(data) {
    const work = JSON.parse(data);
    return work.data.map((item, i) => <WorkItem item={item} key={i} />);
}

function transformProjectsToStyledContent(data) {
    const projects = JSON.parse(data);
    return projects.data.map((item, i) => <ProjectItem item={item} key={i} />);
}

function transformEducationToStyledContent(data) {
    const education = JSON.parse(data);
    return education.data.map((item, i) => <EducationItem item={item} key={i} />);
}

function transformInterestsToStyledContent(data) {
    const interests = JSON.parse(data);
    return interests.data.join(', ');
}


export {
    transformCurrentlyToStyledContent,
    transformWorkToStyledContent,
    transformProjectsToStyledContent,
    transformEducationToStyledContent,
    transformInterestsToStyledContent
}
