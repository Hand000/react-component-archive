# React Component Resource Archive 

[Back to homepage](../README.md)

---

## Button Component

### Description

> An outline for a button component including all the basic features a button may need to contain. Determines the content of the button upon rendering based on the properties passed to the component.

---

__Features__
---

__props__

+ *defaultText*: The default text displayed for the button.

+ icon?: An optional icon for the button, displayed before other content.

+ *disabled?*: Determines whether the button should be disabled or not.

+ *children?*: Any JSX elements embedded within the button, these will override the default text.

__onClick()__

The button's onclick method, performs the action contained when the button is pressed.

---
```js
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
