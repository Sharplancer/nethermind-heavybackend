# Heavy backend

The solution should be a working web application including a backend and a frontend that allows user to make specific calculations, potentially long in time.

It should contain two parts:

- Frontend, which displays an input and a button to send the input to the server. User can enter any 256-bit hexadecimal value and send it to the server for calculation. It should also have UI to display the calculation results.
- Backend, should find keccak256 that is lower than value entered by user and send it back along with nounce(which is an integer you need to find) for displaying. Calculation should be done in the following way:

newHash = keccak256(inputValue + nounce)

Please, take into account that calculation may take a day to come to result, depending on the input

Important questions to consider:

- How would you test the solution?
- Is it able to cover any possible requests?
- Is it stable for long run?

Example:

input
54e604787cbf194841e7b68d7cd28786f6c9a0a3ab9f8b0a0e87cb4387ab0107
output:
525feed5577ede78e3777653dd6f30f484e32eba8c4b944dda0b77039631d759 5
