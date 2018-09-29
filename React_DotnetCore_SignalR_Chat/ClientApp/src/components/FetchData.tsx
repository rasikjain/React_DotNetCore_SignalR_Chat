import * as React from 'react';
import { RouteComponentProps } from 'react-router';


export class FetchData extends React.Component<RouteComponentProps<{}>, null> {

    public render() {


        return <div>
            <h1>Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
        </div>;
    }

}