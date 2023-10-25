const CATEGORY = {
    CURRENTLY: 'currently',
    WORK: 'work',
    PROJECTS: 'projects',
    EDUCATION: 'education',
    INTERESTS: 'interests'
};

const CATEGORY_ENDPOINTS = {
    [CATEGORY.CURRENTLY]: "https://ravi-dev-3rp5yv6msa-uc.a.run.app/currently",
    [CATEGORY.WORK]: "https://ravi-dev-3rp5yv6msa-uc.a.run.app/work",
    [CATEGORY.PROJECTS]: "https://ravi-dev-3rp5yv6msa-uc.a.run.app/projects",
    [CATEGORY.EDUCATION]: "https://ravi-dev-3rp5yv6msa-uc.a.run.app/education",
    [CATEGORY.INTERESTS]: "https://ravi-dev-3rp5yv6msa-uc.a.run.app/interests"
};

// TODO: move this somewhere else?

const CATEGORY_THEMES = {
    [CATEGORY.CURRENTLY]: "gold",
    [CATEGORY.WORK]: "blue",
    [CATEGORY.PROJECTS]: "green",
    [CATEGORY.EDUCATION]: "red",
    [CATEGORY.INTERESTS]: "white"
};


export { CATEGORY, CATEGORY_ENDPOINTS, CATEGORY_THEMES };
