/// <reference path="../types/types.js" />

/**
 * @param {string} courseCode 
 * @returns {Array.<Project>}
 */

const getProjectsForCourse = (courseCode) => {
    throw new Error(`Don't implement me, Mock me!`)
}


/**
* @param {number} projectId
* @param {number} studentId
* @returns {ProjectResult}
*  */
const getResultsForProject = (projectId, studentId) => {
    throw new Error(`Don't implement me, Mock me!`)
}

module.exports = { getProjectsForCourse, getResultsForProject }