
const reverse = (string) => {
    const result = string.split('').reverse().join('')
    return result
}

exports.handler = async (event) => {
    // TODO implement
    const result = reverse(event.key1)
    console.log(result)
    const response = {
        statusCode: 200,
        body: result,
    };
    return response;
};