import React from 'react';

interface ListProps {
    items: any[];
    children?: JSX.Element;
}

interface ListState {

}

/**
 * List component template...
 */
export default class ListComponent extends React.Component<ListProps, ListState> {
    constructor(props: ListProps){
        super(props);
    }
    
    render() {
        var content: string | JSX.Element = "";
        
        for(var i = 0; i < this.props.items.length; i++) {

        }

        return (
            <div>
                {
                    this.props.items.map((item: any) => {
                        return <div> {item} </div>
                    })
                }
                {
                    this.props.children ? this.props.children : ""
                }
            </div>
        );
    }

}