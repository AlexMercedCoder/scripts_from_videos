import { useState } from "react";

const useSearch = (originalValue, filterFunction) => {

    const [displayedValues, setDisplayedValues] = useState(originalValue)

    const filterValues = (searchTerm) => setDisplayedValues(filterFunction(searchTerm))

    const reset = () => setDisplayedValues(originalValue)

    return [displayedValues, filterValues, reset]
}

export default useSearch