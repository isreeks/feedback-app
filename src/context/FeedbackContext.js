import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'



const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 10
        },
        {
            id: 2,
            text: 'This item is from context',
            rating: 10
        },
        {
            id: 3,
            text: 'This item is from context',
            rating: 10
        }
    ])
    const [feedbackEdit, setfeedbackEdit] = useState({
        item: {},
        edit: false
    })
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are You Sure You Want to Delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const editFeedback = (item) => {
        setfeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {
            ...item, ...updItem
        } : item
        ))
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext