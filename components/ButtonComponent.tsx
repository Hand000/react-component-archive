import React from 'react';

interface ButtonProps {
    defaultText: string;
    icon?: string;
    children?: JSX.Element;
    disabled?: boolean;
}

interface ButtonState {

}

/**
 * Button component template...
 */
export default class ButtonComponent extends React.Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    
    render() {
        var content: string | JSX.Element = "";

        if (this.props.children) {
            content = this.props.children;
        } else {
            content = this.props.defaultText;
        }

        return (
            <button 
                onClick={this.onClick} 
                disabled={this.props.disabled ? this.props.disabled : false }>
                    { this.props.icon ? (<img src={this.props.icon} />) : "" }
                    {content}
            </button>
        );
    }

    // Button onClick method
    onClick() {
        // Do Something
    }
}