import * as React from "react";
import Header from './isolated/header';

class FrontEndApp extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <h1>{this.props.title}</h1>
            </React.Fragment>
        );
    }
}

export default FrontEndApp;
