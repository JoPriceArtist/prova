/**
 * QualificationTranscript
 * @typedef {Object} QualificationTranscript
 * @property {number} year
 * @property {number} studentId
 * @property {string} qualificationName - Diploma in Rocket Surgery
 * @property {Array.<CourseTranscript>} courseTranscripts

 */

/**
 * CourseTranscript
 * @typedef {Object} CourseTranscript
 * @property {number} year
 * @property {string} courseId - WDD03
 * @property {Array.<ProjectResult>} projectResults
 */

 /**
 * Project
 * @typedef {Object} Project
 * @property {number} id
 * @property {string} title 
 * @property {number} weightingPercent
 * @property {Array.<Credit>} [credits]
 */

 /**
* ProjectResult
* @typedef {Object} ProjectResult
* @property {number} projectId
* @property {number} gradePercent
*/


 /**
 * Credits
 * @typedef {Object} Credit
 * @property {number} LearningOutcome 
 * @property {number} title - The title
 * 
 */
 
/**
 * Course
 * @typedef {Object} Course
 * @property {string} id - WDD03
 * @property {number} name - Introduction to Guidance system Anaesthetic
 * 
 */
 

 /**
 * @module types
 */

