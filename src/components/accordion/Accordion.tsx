import "./Accordion.css"
import React, { FunctionComponent, ReactNode, useState, createContext, useContext } from "react"

interface IDataContext {
    isExpand: boolean
    setIsExpand: Function
}

const DataContext = createContext<IDataContext | null> (null)

type Props = {
    children: ReactNode
}

interface IAccordionProps {
    Header: FunctionComponent<Props>
    Content: FunctionComponent<Props>
}

const Accordion: FunctionComponent<Props> & IAccordionProps = ({ children }) => {
    const [isExpand, setIsExpand] = useState<boolean>(false)
    const contextValue: IDataContext = {
        isExpand,
        setIsExpand
    }
    return (
        <DataContext.Provider value={contextValue}>
            { children }
        </DataContext.Provider>
    )
}

const AccordionContent: FunctionComponent<Props> = ({ children }) => {
    const { isExpand } = useContext(DataContext) as IDataContext

    return (
        <div className={`accordion__item ${isExpand === true ? `active` : ''}`}>
            <div className="accordion__content">
                <p className="accordion__description">{ children }</p>
            </div>
        </div>
    )
}

const AccordionHeader: FunctionComponent<Props> = ({ children }) => {
    const { isExpand, setIsExpand } = useContext(DataContext) as IDataContext

    return (
        <div onClick={() => setIsExpand(!isExpand)}>
            
            <h3 className="accordion__title"><span className="accordion__icon">+</span> { children }</h3>
        </div>
    )
}

Accordion.Content = AccordionContent
Accordion.Header = AccordionHeader

export default Accordion