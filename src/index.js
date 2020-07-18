//thanks to this stack overflow answer:
//https://stackoverflow.com/a/46663081/2880184

export default variable => (
    variable instanceof Object && variable.constructor === Object
);