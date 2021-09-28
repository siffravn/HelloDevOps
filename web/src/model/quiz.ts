import Question from "./question";

export default interface Quiz {
    id:             number,
    title?:         string,
    category?:      string,
    description?:   string,
    createdBy:      number,  // user ID
    questions:      Question[]
}