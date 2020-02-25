function benne (state = [], action) {
    switch (action.type) {
        case 'GOT_BENNES':
            return action.benne

            default:
                return state
    }
}

export default benne