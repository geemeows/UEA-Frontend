import { serverHttp } from '../httpClient'

export const graduatesRegister = payload => {
    const project = new FormData();
    project.append('title', payload.title)
    project.append('category', payload.category)
    project.append('hasPrototype', payload.hasPrototype)
    project.append('prototypeDimensions', payload.prototypeDimensions)
    project.append('abstract', payload.abstract)
    project.append('projectFile', payload.projectFile)
    project.append('university', payload.university)
    project.append('faculty', payload.faculty)

    project.append(`supervisor[name]`, payload.supervisor.name)
    project.append(`supervisor[email]`, payload.supervisor.email)
    project.append(`supervisor[mobile]`, payload.supervisor.mobile)
    project.append(`supervisor[ID]`, payload.supervisor.ID)
    project.append(`supervisor[attend]`, payload.supervisor.attend)

    payload.members.forEach((item, index) => {
        project.append(`members[${index}][name]`, item.name)
        project.append(`members[${index}][email]`, item.email)
        project.append(`members[${index}][mobile]`, item.mobile)
        project.append(`members[${index}][ID]`, item.ID)
        project.append(`members[${index}][attend]`, item.attend)
    })

    project.append('teamMembers', payload.teamMembers)
    project.append('accommodation', payload.accommodation)
    project.append('meals', payload.meals)
    
    return serverHttp.post("/cometitions/graduates", project)
        .then(res => res.data)
  };
export const undergraduatesRegister = payload => {
    const project = new FormData();
    project.append('title', payload.title)
    project.append('category', payload.category)
    project.append('hasPrototype', payload.hasPrototype)
    project.append('prototypeDimensions', payload.prototypeDimensions)
    project.append('abstract', payload.abstract)
    project.append('projectFile', payload.projectFile)
    project.append('university', payload.university)
    project.append('faculty', payload.faculty)

    project.append(`supervisor[name]`, payload.supervisor.name)
    project.append(`supervisor[email]`, payload.supervisor.email)
    project.append(`supervisor[mobile]`, payload.supervisor.mobile)
    project.append(`supervisor[ID]`, payload.supervisor.ID)
    project.append(`supervisor[attend]`, payload.supervisor.attend)

    payload.members.forEach((item, index) => {
        project.append(`members[${index}][name]`, item.name)
        project.append(`members[${index}][email]`, item.email)
        project.append(`members[${index}][mobile]`, item.mobile)
        project.append(`members[${index}][ID]`, item.ID)
        project.append(`members[${index}][attend]`, item.attend)
    })

    project.append('teamMembers', payload.teamMembers)
    project.append('accommodation', payload.accommodation)
    project.append('meals', payload.meals)
    
    return serverHttp.post("/cometitions/undergraduates", project)
        .then(res => res.data)
  };
export const schoolsRegister = payload => {
    const project = new FormData();
    project.append('title', payload.title)
    project.append('category', payload.category)
    project.append('hasPrototype', payload.hasPrototype)
    project.append('prototypeDimensions', payload.prototypeDimensions)
    project.append('abstract', payload.abstract)
    project.append('projectFile', payload.projectFile)
    project.append('governorate', payload.governorate)
    project.append('schoolName', payload.schoolName)
    project.append('educationalLevel', payload.educationalLevel)

    project.append(`supervisor[name]`, payload.supervisor.name)
    project.append(`supervisor[email]`, payload.supervisor.email)
    project.append(`supervisor[mobile]`, payload.supervisor.mobile)
    project.append(`supervisor[ID]`, payload.supervisor.ID)
    project.append(`supervisor[attend]`, payload.supervisor.attend)

    payload.members.forEach((item, index) => {
        project.append(`members[${index}][name]`, item.name)
        project.append(`members[${index}][email]`, item.email)
        project.append(`members[${index}][mobile]`, item.mobile)
        project.append(`members[${index}][ID]`, item.ID)
        project.append(`members[${index}][attend]`, item.attend)
    })

    project.append('teamMembers', payload.teamMembers)
    project.append('accommodation', payload.accommodation)
    project.append('meals', payload.meals)
    
    return serverHttp.post("/cometitions/schools", project)
        .then(res => res.data)
  };
  
export const techSchoolsRegister = payload => {
    const project = new FormData();
    project.append('title', payload.title)
    project.append('category', payload.category)
    project.append('hasPrototype', payload.hasPrototype)
    project.append('prototypeDimensions', payload.prototypeDimensions)
    project.append('abstract', payload.abstract)
    project.append('projectFile', payload.projectFile)
    project.append('governorate', payload.governorate)
    project.append('schoolName', payload.schoolName)
    project.append('educationalLevel', payload.educationalLevel)

    project.append(`supervisor[name]`, payload.supervisor.name)
    project.append(`supervisor[email]`, payload.supervisor.email)
    project.append(`supervisor[mobile]`, payload.supervisor.mobile)
    project.append(`supervisor[ID]`, payload.supervisor.ID)
    project.append(`supervisor[attend]`, payload.supervisor.attend)

    payload.members.forEach((item, index) => {
        project.append(`members[${index}][name]`, item.name)
        project.append(`members[${index}][email]`, item.email)
        project.append(`members[${index}][mobile]`, item.mobile)
        project.append(`members[${index}][ID]`, item.ID)
        project.append(`members[${index}][attend]`, item.attend)
    })

    project.append('teamMembers', payload.teamMembers)
    project.append('accommodation', payload.accommodation)
    project.append('meals', payload.meals)
    
    return serverHttp.post("/cometitions/techschools", project)
        .then(res => res.data)
  };
export const microMouseRegister = payload => {
    const project = new FormData();
    project.append('teamName', payload.teamName)
    project.append('other', payload.other)
    project.append('university', payload.university)
    project.append('teamMembers', payload.teamMembers)
    project.append('projectFile', payload.projectFile)

    project.append(`leader[name]`, payload.leader.name)
    project.append(`leader[email]`, payload.leader.email)
    project.append(`leader[mobile]`, payload.leader.mobile)
    project.append(`leader[ID]`, payload.leader.ID)

    payload.members.forEach((item, index) => {
        project.append(`members[${index}][name]`, item.name)
        project.append(`members[${index}][email]`, item.email)
        project.append(`members[${index}][mobile]`, item.mobile)
        project.append(`members[${index}][ID]`, item.ID)
    })

    
    return serverHttp.post("/cometitions/micromouse", project)
        .then(res => res.data)
  };
export const arcRegister = payload => {
    const project = new FormData();
    project.append('teamName', payload.teamName)
    project.append('university', payload.university)
    project.append('teamMembers', payload.teamMembers)
    
    if (payload.projectFile !== null)
        project.append('projectFile', payload.projectFile)

    project.append(`leader[name]`, payload.leader.name)
    project.append(`leader[email]`, payload.leader.email)
    project.append(`leader[mobile]`, payload.leader.mobile)
    project.append(`leader[ID]`, payload.leader.ID)

    payload.members.forEach((item, index) => {
        project.append(`members[${index}][name]`, item.name)
        project.append(`members[${index}][email]`, item.email)
        project.append(`members[${index}][mobile]`, item.mobile)
        project.append(`members[${index}][ID]`, item.ID)
    })

    
    return serverHttp.post("/cometitions/arc6", project)
        .then(res => res.data)
  };
export const spagettiRegister = payload => {
    const project = new FormData();
    project.append('teamName', payload.teamName)
    project.append('university', payload.university)
    project.append('teamMembers', payload.teamMembers)
    
    if (payload.projectFile !== null)
        project.append('projectFile', payload.projectFile)

    project.append(`leader[name]`, payload.leader.name)
    project.append(`leader[email]`, payload.leader.email)
    project.append(`leader[mobile]`, payload.leader.mobile)
    project.append(`leader[ID]`, payload.leader.ID)

    payload.members.forEach((item, index) => {
        project.append(`members[${index}][name]`, item.name)
        project.append(`members[${index}][email]`, item.email)
        project.append(`members[${index}][mobile]`, item.mobile)
        project.append(`members[${index}][ID]`, item.ID)
    })

    
    return serverHttp.post("/cometitions/spagetti", project)
        .then(res => res.data)
  };
export const hackathonRegister = payload => {
    const project = new FormData();
    project.append('teamName', payload.teamName)
    project.append('teamMembers', payload.teamMembers)

    project.append(`leader[name]`, payload.leader.name)
    project.append(`leader[birthdate]`, payload.leader.birthdate)
    project.append(`leader[ID]`, payload.leader.ID)
    project.append(`leader[mobile]`, payload.leader.mobile)
    project.append(`leader[government]`, payload.leader.government)
    project.append(`leader[university]`, payload.leader.university)
    project.append(`leader[faculty]`, payload.leader.faculty)
    project.append(`leader[specialization]`, payload.leader.specialization)

    payload.members.forEach((item, index) => {
        project.append(`members[${index}][name]`, item.name)
        project.append(`members[${index}][birthdate]`, item.birthdate)
        project.append(`members[${index}][ID]`, item.ID)
        project.append(`members[${index}][mobile]`, item.mobile)
        project.append(`members[${index}][government]`, item.government)
        project.append(`members[${index}][university]`, item.university)
        project.append(`members[${index}][faculty]`, item.faculty)
        project.append(`members[${index}][specialization]`, item.specialization)
    })

    
    return serverHttp.post("/cometitions/hackathon", project)
        .then(res => res.data)
  };
  