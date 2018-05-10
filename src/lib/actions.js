const CREATE_NEW_CONTEST = "CREATE_NEW_CONTEST";
const TOGGLE_EDITING_CONTEST = "TOGGLE_EDITING_CONTEST";
const TOGGLE_DISPLAY_NEXT = "TOGGLE_DISPLAY_NEXT";

export let newContestAction = (contestDetails) => {
    return {
    type: CREATE_NEW_CONTEST,
    payload: contestDetails
    }
}

export let toggleEditingContestAction = () => {
    return {
        type: TOGGLE_EDITING_CONTEST
    }
}

export let toggleDisplayNextAction = () => {
    return {
        type: TOGGLE_DISPLAY_NEXT
    }
}