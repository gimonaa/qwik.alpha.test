
export interface ModelProps {
    class? :  string,
    store: {
        imgPath? : string,
        imgPathMDA?: string,
        model: string,
        datarun: string,
        level: string,
        run: string,
        variable: string,
        varCum?: string,
        step?: string,
        domain?: string,
        lastButton?: string,
        ext?: string
    }
}
