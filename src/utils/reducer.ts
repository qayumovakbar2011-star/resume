import { configureStore, createSlice } from '@reduxjs/toolkit';
import { crudApi } from './query';

const slice = createSlice({
    name: 'loyiha',
    initialState: {
        user: { name: "", phone: "", password: "" },
        resume: {
            fullName: "",
            phone: "",
            gitHup: "",
            addres: "",
            email: "",
            portfolio: "",
            jobTitle: "",
            linkedIn: "",
            summary: "",
            experiences: [],
            experiences1: [],
            languages: [],
            project: [],
            education: [],
            skills: []
        },
        exp: {
            company: "",
            role: "",
            location: "",
            startDate: "",
            endDate: "",
            description: "",
        },
        exp1: {
            company: ""
        },
        pro: {
            projectName: "",
            liveLink: "",
            repoLink: "",
            description: "",
        },
        edu: {
            institution: "",
            degree: "",
            fieldOfStudy: "",
            startDate: "",
            endDate: "",
            description: "",
        },
        skils: {
            category: "",
            skillList: "",
        },
        lan: {
            language: "",
            level: "",
        },
    },
    reducers: {
        getName: (state: any, action: any) => {
            state.user.name = action.payload
        },

        getPhone: (state: any, action: any) => {
            state.user.phone = action.payload
        },

        getPassword: (state: any, action: any) => {
            state.user.password = action.payload
        },

        getFullName: (state: any, action: any) => {
            state.resume.fullName = action.payload
        },

        getPhone1: (state: any, action: any) => {
            state.resume.phone = action.payload
        },

        getGithup: (state: any, action: any) => {
            state.resume.gitHup = action.payload
        },

        getAdress: (state: any, action: any) => {
            state.resume.addres = action.payload
        },

        getEmail: (state: any, action: any) => {
            state.resume.email = action.payload
        },

        getPortfolio: (state: any, action: any) => {
            state.resume.portfolio = action.payload
        },

        getJobtitle: (state: any, action: any) => {
            state.resume.jobTitle = action.payload
        },

        getLinkedin: (state: any, action: any) => {
            state.resume.linkedIn = action.payload
        },

        getSummary: (state: any, action: any) => {
            state.resume.summary = action.payload
        },

        getExpCompany: (state, action) => {
            state.exp.company = action.payload;
        },

        getExpRole: (state, action) => {
            state.exp.role = action.payload;
        },

        getExpLocation: (state, action) => {
            state.exp.location = action.payload;
        },

        getExpStartDate: (state, action) => {
            state.exp.startDate = action.payload;
        },

        getExpEndDate: (state, action) => {
            state.exp.endDate = action.payload;
        },

        getExpDescription: (state, action) => {
            state.exp.description = action.payload;
        },

        addExperience: (state) => {
            state.resume.experiences.push({ ...state.exp });
        },

        addProject: (state) => {
            state.resume.project.push({ ...state.pro });
        },

        addEducation: (state) => {
            state.resume.education.push({ ...state.edu });
        },

        addSkills: (state) => {
            state.resume.skills.push({ ...state.skils });
        },

        addLanguages: (state) => {
            state.resume.languages.push({ ...state.lan });
        },

        getProjectName: (state, action) => {
            state.pro.projectName = action.payload;
        },

        getLiveLink: (state, action) => {
            state.pro.liveLink = action.payload;
        },

        getRepoLink: (state, action) => {
            state.pro.repoLink = action.payload;
        },

        getProjectDescription: (state, action) => {
            state.pro.description = action.payload;
        },
        getInstitution: (state, action) => {
            state.edu.institution = action.payload;
        },

        getDegree: (state, action) => {
            state.edu.degree = action.payload;
        },

        getFieldOfStudy: (state, action) => {
            state.edu.fieldOfStudy = action.payload;
        },

        getEduStartDate: (state, action) => {
            state.edu.startDate = action.payload;
        },

        getEduEndDate: (state, action) => {
            state.edu.endDate = action.payload;
        },

        getEduDescription: (state, action) => {
            state.edu.description = action.payload;
        },
        getCategory: (state, action) => {
            state.skils.category = action.payload;
        },

        getSkillList: (state, action) => {
            state.skils.skillList = action.payload;
        },
        getLanguage: (state, action) => {
            state.lan.language = action.payload;
        },

        getLevel: (state, action) => {
            state.lan.level = action.payload;
        },
    }
});


export const store = configureStore({
    reducer: {
        loyiha: slice.reducer,
        [crudApi.reducerPath]: crudApi.reducer
    },
    middleware: (getDefoultMiddleware) => getDefoultMiddleware().concat(crudApi.middleware)
});

export const action = { ...slice.actions }