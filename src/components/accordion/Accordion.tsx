import "./Accordion.css"
import React, { FunctionComponent, ReactNode } from "react"
import { Getter, Provider as JotaiProvider, Setter, atom, useAtom } from "jotai"

const expandAtom = atom<boolean>(false)
const setExpandAtom = atom(null, (get: Getter, set: Setter, state: boolean) => {
    set(expandAtom, !state)
})


type Props = {
    children: ReactNode
}

interface IAccordionProps {
    Header: FunctionComponent<Props>
    Content: FunctionComponent<Props>
}

const Accordion: FunctionComponent<Props> & IAccordionProps = ({ children }) => {
    return (
        <JotaiProvider>
            { children }
        </JotaiProvider>
    )
}

const AccordionContent: FunctionComponent<Props> = ({ children }) => {
    const [expand] = useAtom(expandAtom)

    return (
        <div className={`accordion__item ${expand === true ? `active` : ''}`}>
            <div className="accordion__content">
                <p className="accordion__description">{ children }</p>
            </div>
        </div>
    )
}

const AccordionHeader: FunctionComponent<Props> = ({ children }) => {
    const [, setExpand] = useAtom(setExpandAtom)
    const [expand] = useAtom(expandAtom)

    return (
        <div onClick={() => setExpand(expand)}>
            <h3 className="accordion__title"><span className="accordion__icon">+</span> { children }</h3>
        </div>
    )
}

Accordion.Content = AccordionContent
Accordion.Header = AccordionHeader

export default Accordion