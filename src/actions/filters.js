export const setTextFilter = ( text = ''
) => ({
    type: 'SET_TEXT_FILTER',
    text
});

export const sortByAmount = () =>  ({
    type: 'SET_SORT_BY_AMOUNT'
});

export const sortByDate = () =>  ({
    type: 'SET_SORT_BY_DATE'
});

export const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate: startDate
})

export const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate: endDate
})
