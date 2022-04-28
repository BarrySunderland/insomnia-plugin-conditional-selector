module.exports.templateTags = [{
    name: 'conditionalVar',
    displayName: 'conditional variable',
    description: 'use an equality check to conditionally return one of two variables',
    args: [
        {
            displayName: 'if',
            description: 'environment variable to check',
            type: 'string',
            defaultValue: ""
        },
        {
            displayName: 'equals',
            description: 'condition to equal',
            type: 'string',
            defaultValue: ""
        },
        {
            displayName: 'then',
            description: 'return this value if condition is met',
            type: 'string',
            defaultValue: ""

        },
        {
            displayName: 'else',
            description: 'otherwise return this value',
            type: 'string',
            defaultValue: ""
        }
    ],
    async run(context, input_var, condition_var, true_var, false_var) {
        if (input_var === condition_var) {
            return true_var
        } else {
            return false_var
        }
    }
}];